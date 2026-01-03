"use client"

import { usePathname } from "next/navigation"
import Link from "next/link";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "./ui/button";

function Header() {
    const pathName = usePathname();
    const isDashboard = pathName.startsWith("/dashboard");


    return(
        <header className="flex items-center justify-between p-4">
            <Link href="/dashboard" className="font-medium uppercase tracking-widest">ToConnect</Link>


            <div className="flex items-center gap-2">
                <Authenticated>
                    {!isDashboard && (
                        <Link href="/dashboard">
                            <Button variant="outline">Dashboard</Button>
                        </Link>
                    )}
                    <UserButton />
                </Authenticated>

                <Unauthenticated>
                    <SignInButton
                    mode="modal"
                    forceRedirectUrl="/dashboard"
                    signUpForceRedirectUrl="/dashboard"
                    >
                        <Button variant="outline">Sign in</Button>
                    </SignInButton>
                </Unauthenticated>
            </div>
        </header>
    )
}

export default Header