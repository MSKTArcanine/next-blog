'use client'

import Image from "next/image"
import React, { useState } from "react"
import EditInput from "@/app/ui/components/editInput"

export default function EditorPost(props:{post:string, p:string}){
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [post, setPost] = useState<string>(props.post)
    const [p, setP] = useState<string>(props.p)
    const onHandleEditClick = () => setIsEdit(prev => !prev)
    const onPostChange = (e:React.ChangeEvent<HTMLInputElement>) => setPost(e.currentTarget.value);
    const onPChange = (e:React.ChangeEvent<HTMLInputElement>) => setP(e.currentTarget.value);
    return (
        <article className="p-2 flex flex-col gap-[2rem] border-2 border-accent-content rounded-2xl">
            <div className="flex flex-col gap-4">
                {isEdit ? <EditInput onHandleChange={onPostChange} text={post} id="post"/> : <h1 className="font-bold text-2xl">{post}</h1>}
                {isEdit ? <EditInput onHandleChange={onPChange} text={p} id="p"/>: <p className="font-semibold">{p}</p>}
            </div>
            <div className="buttonGroup flex flex-row flex-start">
                <div className="groupe1 flex flex-row gap-2">
                    <button type="button" className="btn btn-primary p-3 rounded-[8px]" onClick={onHandleEditClick}>{isEdit ? 'Save' : 'Edit'} <Image src={isEdit ? '/assets/icons8-check.svg' : '/assets/icons8-plus.svg'} alt='plus' width={12} height={12} className="dark:invert"></Image></button>
                    <button type="button" className="btn btn-secondary p-3 rounded-[8px]">Delete <Image src={'/assets/minus-svgrepo-com.svg'} alt='plus' width={12} height={12} className="dark:invert"></Image></button>
                </div>
                <div className="groupe2 flex-1 flex justify-end">
                    <label className=" text-white btn btn-secondary p-3 rounded-[8px] has-checked:btn-accent">Published<input type="checkbox" name="edit" id="edit" className={`toggle`} defaultChecked={true}/></label>
                </div>
            </div>
        </article>
    )
}