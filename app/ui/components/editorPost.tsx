'use client'

import Image from "next/image"
import React, { useState } from "react"
import EditInput from "@/app/ui/components/editInput"

export default function EditorPost(props:{post:string, p:string, id:number, desc:string, isPublished:boolean, onHandleDeleteClick:CallableFunction, onHandleEdit:CallableFunction}){
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [post, setPost] = useState<string>(props.post);
    const [p, setP] = useState<string>(props.p);
    const [isPublished, setIsPublished] = useState<boolean>(props.isPublished);
    const [desc, setDesc] = useState<string>(props.desc);
    const onHandleEditClick = () => setIsEdit(prev => !prev);
    const onPostChange = (e:React.ChangeEvent<HTMLInputElement>) => setPost(e.currentTarget.value);
    const onPChange = (e:React.ChangeEvent<HTMLInputElement>) => setP(e.currentTarget.value);
    const onHandleToggle = () => setIsPublished(prev => !prev);
    const deletePost = async () => await fetch(`/api/proxy/edit/${props.id}`, {method:"DELETE"});
    const updatePost = async () => {
        await fetch(`/api/proxy/edit/${props.id}`, {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            title:post,
            content:p,
            desc:desc,
            is_published:isPublished,
        })
    });
    
}
    return (
        <article className="p-2 flex flex-col gap-[2rem] border-2 border-accent-content rounded-2xl">
            <div className="flex flex-col gap-4">
                {isEdit ? <EditInput onHandleChange={onPostChange} text={post} id="post"/> : <h1 className="font-bold text-2xl">{post}</h1>}
                {isEdit ? <EditInput onHandleChange={onPChange} text={p} id="p"/>: <p className="font-semibold">{p}</p>}
                {isEdit ? <EditInput onHandleChange={(e) => setDesc(e.currentTarget.value)} text={desc} id="desc"/>: <p className="font-semibold">{p}</p>}
            </div>
            <div className="buttonGroup flex flex-row flex-start">
                <div className="groupe1 flex flex-row gap-2">
                    <button type="button" className="btn btn-primary p-3 rounded-[8px]" onClick={async () => {if(isEdit) {await updatePost(); props.onHandleEdit(props.id, {title:post, content:p, desc:desc, is_published:isPublished})}; onHandleEditClick()}}>{isEdit ? 'Save' : 'Edit'} <Image src={isEdit ? '/assets/icons8-check.svg' : '/assets/icons8-plus.svg'} alt='plus' width={12} height={12} className="dark:invert"></Image></button>
                    <button type="submit" className="btn btn-secondary p-3 rounded-[8px]" onClick={() => {deletePost(); props.onHandleDeleteClick(props.id)}}>Delete <Image src={'/assets/minus-svgrepo-com.svg'} alt='plus' width={12} height={12} className="dark:invert"></Image></button>
                </div>
                <div className="groupe2 flex-1 flex justify-end">
                    <label className=" text-white btn btn-secondary p-3 rounded-[8px] has-checked:btn-accent">Published<input type="checkbox" name="edit" id="edit" className={`toggle`} defaultChecked={isPublished} onChange={onHandleToggle}/></label>
                </div>
            </div>
        </article>
    )
}