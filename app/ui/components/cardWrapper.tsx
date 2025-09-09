import { auth } from "@/auth";
import CardPost from "./cardPost";
import { Post } from "@/app/lib/types";

async function getPosts():Promise<Post[]>{
    const session = await auth();
    console.log('session : ', session)
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/v1/blog/posts', {next:{revalidate: 5}});
    const data = await res.json();
    return data.posts;
}

export default async function CardWrapper(){
    const posts = await getPosts()
    return(
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-10">
            {posts?.map((post) => (<CardPost key={post.id} desc={post.content} title={post.title}/>))}
        </div>
    )
}