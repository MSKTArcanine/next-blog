import getPost from "../actions/getPosts";
import EditorPostWrapper from "../ui/components/editorPostWrapper";
import NewPost from "../ui/components/newPost";


export default async function EditorPage(){
    const posts = await getPost();
    return (
    <main className="flex flex-col flex-1 p-2">
        <EditorPostWrapper posts={posts}/>
        <NewPost/>
    </main>)
}