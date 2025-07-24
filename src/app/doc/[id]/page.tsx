import Document from "../../../components/Document";

async function NewDocumentPage({params}:{params:Promise<{id:string}>}) {;
    const {id} = await params;
    
    return (
        <div className="flex flex-col flex-1 min-h-screen">
            <Document id={id}/>
        </div>
    )
}
export default NewDocumentPage