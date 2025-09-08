'use server'

import { redirect } from "next/navigation"
import { addUser } from "../data/db"
import { FormState, User } from "@/app/lib/types"

const signupAPI = async (user:User) => {
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/auth/signup/post', {
        method: "POST",
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify({
            username:user.username,
            password:user.password,
        }),
    })
    if(!res.ok){
        console.log('Failed to signup : Res not ok')
        throw new Error('Res not ok')
    }
    const data = res.json();
    console.log(data)

}

export async function checkPass(prevState: FormState, formData:FormData) : Promise<FormState> {
    "use server"
    const {username, password, vPassword} = Object.fromEntries(formData.entries()) as Record<string, string>
    console.log(password, vPassword)
    if(password !== vPassword)
        return {error:true, username:username}
    try{
    await addUser({username, password});}
    catch(e: unknown){
        if(e instanceof Error)
        throw new Error(e.message)
    }
    try{await signupAPI({username, password});}
    catch(e: unknown){
        if(e instanceof Error)
            throw new Error(`'Fail to signup to the API ' ${e.message}`)}
    redirect('/')
}
