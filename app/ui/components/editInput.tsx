'use client'

import React from "react";

export default function EditInput(props:{
    text:string,
    id:string,
    onHandleChange:(e:React.ChangeEvent<HTMLInputElement>) => void,
}){
    return(
        <input type="text" name={props.id} id={props.id} defaultValue={props.text} onChange={e => props.onHandleChange(e)}/>
    )
}