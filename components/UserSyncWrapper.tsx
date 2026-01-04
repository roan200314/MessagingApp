"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";
import streamClient from "@/lib/stream";
import { createToken } from "../actions/createToken";

function UserSyncWrapper({ children }: { children: React.ReactNode }) {
  const { user, isLoaded: isUserLoaded } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createOrUpdateUser = useMutation(api.users.upsertUser);

  // Prevent state updates after unmount
  const mountedRef = useRef(true);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const disconnectUser = useCallback(async () => {
    try {
      await streamClient.disconnectUser();
    } catch (err) {
      console.error("Failed to disconnect user:", err);
    }
  }, []);

  const syncUser = useCallback(async () => {
    if (!user?.id) return;

    setIsLoading(true);
    setError(null);

    try {
      const primaryEmail = user.emailAddresses?.[0]?.emailAddress ?? "";

      // 1) Upsert user in Convex
      await createOrUpdateUser({
        userId: user.id,
        name: user.fullName ?? user.firstName ?? "",
        email: primaryEmail || "Unknown user",
        imageUrl: user.imageUrl ?? "",
      });

      // 2) Connect user to Stream with a token provider
      const tokenProvider = async () => {
        if (!user?.id) throw new Error("User isn't authenticated");
        return await createToken(user.id);
      };

      await streamClient.connectUser(
        {
          id: user.id,
          name: user.fullName ?? user.firstName ?? primaryEmail ?? "Unknown user",
          image: user.imageUrl ?? "",
        },
        tokenProvider
      );
    } catch (err) {
      console.error("Failed to sync user:", err);
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : "Failed to sync user");
      }
    } finally {
      if (mountedRef.current) {
        setIsLoading(false);
      }
    }
  }, [user, createOrUpdateUser]);

  useEffect(() => {
    if (!isUserLoaded) return;

    if (user) {
      void syncUser();
    } else {
      // user logged out
      void disconnectUser();
      setError(null);
      setIsLoading(false);
    }

    return () => {
      // cleanup: disconnect stream on unmount or when user changes
      void disconnectUser();
    };
  }, [user, isUserLoaded, syncUser, disconnectUser]);

  // Correct loading condition
  if (!isUserLoaded || isLoading) {
    return (
      <LoadingSpinner
        size="lg"
        message={!isUserLoaded ? "Loading..." : "Syncing user data..."}
        className="min-h-screen"
      />
    );
  }

  // Correct error return
  if (error) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <p className="mb-2 text-lg font-semibold text-red-600">
          Something went wrong
        </p>

        <p className="mb-4 text-sm text-gray-600">{error}</p>

        <p className="text-sm text-gray-500">
          Try refreshing the page. If the problem continues, please contact
          support.
        </p>
      </div>
    );
  }

  return <>{children}</>;
}

export default UserSyncWrapper;
