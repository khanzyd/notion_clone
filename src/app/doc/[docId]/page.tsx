
async function NewDocumentPage({params} : {params:Promise<{docId:string}>}) {
    const {docId} = await params;
    return (
        <div>NewDocumentPage {docId}</div>
    )
}
export default NewDocumentPage