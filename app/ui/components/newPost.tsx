'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function NewPost(){

    const router = useRouter();

    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [isPublished, setIsPublished] = useState<boolean>(true);

    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    const onChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => setContent(e.currentTarget.value);
    const onChangeDesc = (e:React.ChangeEvent<HTMLInputElement>) => setDesc(e.currentTarget.value);
    const onChangePublished = () => setIsPublished(prev => !prev);
    const addPost = async () => {await fetch('/api/proxy/edit',{
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                title:title,
                content:content,
                desc:desc,
                is_published:isPublished,
            }),
        });

        router.refresh();
    }
    return (
        <article className="p-2 flex flex-col gap-[2rem] border-2 border-accent-content rounded-2xl">
                    <div className="flex flex-col gap-4">
                        <label>Title :
                            <input type="text" name="title" value={title} onChange={onChangeTitle} placeholder="Title here..."/>
                        </label>
                        <label>Content :
                            <input type="text" name="content" value={content} onChange={onChangeContent} placeholder="Content here..."/>
                        </label>
                        <label>Description :
                            <input type="text" name="desc" value={desc} onChange={onChangeDesc} placeholder="Description here..."/>
                        </label>
                    </div>
                    <div className="buttonGroup flex flex-row flex-start">
                        <div className="groupe1 flex flex-row gap-2">
                            <button type="button" className="btn btn-primary p-3 rounded-[8px]" onClick={async () => addPost()}>Add <Image src={'/assets/icons8-plus.svg'} alt='plus' width={12} height={12} className="dark:invert"></Image></button>
                        </div>
                        <div className="groupe2 flex-1 flex justify-end">
                            <label className=" text-white btn btn-secondary p-3 rounded-[8px] has-checked:btn-accent">Published<input onChange={onChangePublished} type="checkbox" name="edit" id="edit" className={`toggle`} defaultChecked={true}/></label>
                        </div>
                    </div>
                </article>
    )
}