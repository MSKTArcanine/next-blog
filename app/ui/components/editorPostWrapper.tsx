'use client'
import { Post } from "@/app/lib/types";
import { auth } from "@/auth"
import EditorPost from "./editorPost";
import getPost from "@/app/actions/getPosts";
import { useState } from "react";

export default function EditorPostWrapper(props:{posts:[Post]}){
    const [posts, setPosts] = useState<Post[]>(props.posts)
    const onClickDelete = (id:number) => {
        const newPosts = posts.filter(p => p.id !== id);
        setPosts(newPosts);
    }
    console.log('posts : ', posts)
    return (
        <>
            {posts.map(p => <EditorPost key={p.id} post={p.title} p={p.content} id={p.id} onHandleDeleteClick={onClickDelete}/>)}
        </>
    )
}