"use client"

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { useState } from "react";

function UserSyncWrapper( {children}: {children: React.ReactNode}) {

    const { user, isLoaded: isUserLoaded } = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const createOrUpdateUser = useMutation(api.users.upsertUser)


    return(
        <div>{children}</div>
    )
}

export default UserSyncWrapper;