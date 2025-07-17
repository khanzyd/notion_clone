import { MenuIcon } from "lucide-react"
import NewDocument_Button from "./NewDocument_Button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


function Sidebar() {
    const menuOptions = (
        <>
            <NewDocument_Button/>

            {/* My Documents */}
            {/* List....  */}

            {/* Shared with me */}
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