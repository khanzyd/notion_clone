"use client"

import { MenuIcon } from "lucide-react"
import { useCollection } from "react-firebase-hooks/firestore"
import NewDocument_Button from "./NewDocument_Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useUser } from "@clerk/nextjs"
import { collectionGroup, DocumentData, query, where } from "firebase/firestore"
import { db } from "../../firebase"
import { useEffect, useState } from "react"
import SidebarOption from "./SidebarOption"
import { log } from "node:console"

interface RoomDocument extends DocumentData{
    createdAt: string;
    role: 'owner' | 'editor';
    roomId: string;
    userId: string;
}

function Sidebar() {
    const {user} = useUser();

    const [groupedData, setGroupedData] = useState<{
        owner: RoomDocument[],
        editor: RoomDocument[]
    }>({
        owner: [],
        editor: []
    })

    const [data, loading, error] = useCollection(
        user && (
            query(
                collectionGroup(db,'rooms'), 
                where('userId', '==', user.emailAddresses[0].toString())
            )
        )
    );

    useEffect(()=>{
        if(!data) return;

        const groupedData = data.docs.reduce<{
            owner: RoomDocument[],
            editor: RoomDocument[]
        }>(
            (acc,curr) => {
                
                const roomData = curr.data() as RoomDocument;
                if(roomData.role == 'owner'){
                    acc.owner.push({
                        id:curr.id,
                        ...roomData,
                    });
                } else {
                    acc.editor.push({
                        id:curr.id,
                        ...roomData,
                    });
                }
                return acc;
            }, {
                owner: [],
                editor: [],
            }
        )

        setGroupedData(groupedData);
    },[data])
    
    const menuOptions = (
        <>
            <NewDocument_Button/>
            
            <div className="flex flex-col space-y-4 py-4 md:max-w-36">
            {/* My Documents */}
            {
                groupedData.owner.length === 0 ? (
                    <h2 className="text-gray-500 font-semibold text-sm">
                        No documents found
                    </h2>
                ) : (
                    <>
                        <h2 className="text-gray-500 font-semibold text-sm">My Documents</h2>
                        {
                            groupedData.owner.map((doc)=> (
                                <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
                            ))
                        }
                    </>
                )
            }
            {/* List....  */}
            </div>

            {/* Shared with me */}
            {groupedData.editor.length > 0 && (
                <>
                    <h2 className="text-gray-500 font-semibold text-sm capitalize">shared with me</h2>
                    {
                        groupedData.editor.map((doc)=> (
                            <SidebarOption key={doc.id} id={doc.id} href={`/doc/${doc.id}`}/>
                        ))
                    }
                </>
            )}
            {/* List.... */}
        </>
    )
  return (
    <div className="px-1 py-3 md:px-2 md:py-5 bg-gray-200 relative">
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger><MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40}/></SheetTrigger>
                <SheetContent side="left">
                    <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <div className="">
                        {menuOptions}
                    </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
        <div className="hidden md:inline">
            {menuOptions}
        </div>
    </div>
  )
}
export default Sidebar