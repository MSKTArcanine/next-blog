import getPost from "../actions/getPosts";
import EditorPost from "../ui/components/editorPost";
import EditorPostWrapper from "../ui/components/editorPostWrapper";

export default async function EditorPage(){
    const posts = await getPost()
    return (
    <main className="flex flex-col flex-1 p-2">
        <EditorPostWrapper posts={posts}/>
    </main>)
}