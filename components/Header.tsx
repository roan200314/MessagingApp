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
        <header className="">
            <Link href="/dashboard" className="font-medium uppercase tracking-widest">ToConnect</Link>


            <div>
                <Authenticated>
                    <UserButton />
                </Authenticated>

                <Unauthenticated>
                    <SignInButton>
                        <Button variant="outline">Sign in</Button>
                    </SignInButton>
                </Unauthenticated>
            </div>
        </header>
    )
}

export default Header