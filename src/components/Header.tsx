"use client"

import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"
import Breadcrumbs from "./Breadcrumbs";

function Header() {
  let { isLoaded,user } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      {user && 
        <h2 className="2xl:">{user?.username || user?.firstName}{` 's Space`}</h2>
      }

      <Breadcrumbs/>

      <div className="">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <SignOutButton/>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
    // <div className="bg-zinc-900 p-2 text-white">Header</div>
  )
}

export default Header