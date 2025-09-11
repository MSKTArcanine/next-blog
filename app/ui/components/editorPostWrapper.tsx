'use client'
import { Post } from "@/app/lib/types";
import EditorPost from "./editorPost";
import { useEffect, useState } from "react";

export default function EditorPostWrapper(props:{posts:[Post]}){
    const [posts, setPosts] = useState<Post[]>(props.posts)
    useEffect(() => {setPosts(props.posts)}, [props.posts]);
    const onClickDelete = (id:number) => {
        const newPosts = posts.filter(p => p.id !== id);
        setPosts(newPosts);
    }
    const onClickEdit = (id:number, postInfo:{title:string, content:string, desc:string, is_published:boolean}) => {
        console.log('ALLO ???')
        const updatedPost = postInfo;
        const updatedPosts = posts.map((post) => {
            if(post.id === id){
                return {id ,...updatedPost}
            }else{
                return post
            }
        });
        console.log(updatedPosts);
        setPosts(updatedPosts);
    }
    console.log('posts : ', posts)
    return (
        <>
            {posts.map(p => <EditorPost key={p.id} post={p.title} p={p.content} id={p.id} desc={p.desc} isPublished={p.is_published} onHandleDeleteClick={onClickDelete} onHandleEdit={onClickEdit}/>)}
        </>
    )
}