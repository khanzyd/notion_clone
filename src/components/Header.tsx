"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs"

function Header() {
  let { isLoaded,user } = useUser();

  // if(!isLoaded){
  //   return(
  //     <div className="bg-zinc-800 text-white p-2">
  //       <h1>NOTION !!</h1>
  //     </div>
  //   )
  // }

  return (
    <div className="flex items-center justify-between p-4">
      {user && 
        <h2 className="2xl:">{user?.username}{` 's Space`}</h2>
      }

      {/* {Breadcrums} */}

      <div className="">
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton/>
        </SignedIn>
      </div>
    </div>
    // <div className="bg-zinc-900 p-2 text-white">Header</div>
  )
}

export default Header