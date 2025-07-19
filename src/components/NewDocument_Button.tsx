"use client"

import { useTransition } from "react"
import { Button } from "./ui/button"
import { createNewDocument } from "../../actions/actions";
import { useRouter } from "next/navigation";

function NewDocument_Button() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const handleCreatNewDocument = () => {
    startTransition(
      async () => {
        const { docId } = await createNewDocument();
        router.push(`/doc/${docId}`);
      }
    );
  };
  return (
    <Button onClick={handleCreatNewDocument} disabled={isPending}>
      {isPending? "Creating..." : "New Document"}
    </Button>
  )
}
export default NewDocument_Button