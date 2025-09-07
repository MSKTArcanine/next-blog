'use server'

import { addUser } from "../data/db"
import { FormState } from "../type"

export async function checkPass(prevState: FormState, formData:FormData) : Promise<FormState> {
    "use server"
    const {username, password, vPassword} = Object.fromEntries(formData.entries()) as Record<string, string>
    console.log(password, vPassword)
    if(password !== vPassword)
        return {error:true, username:username}
    addUser({username, password})
    return {error:false, username:username}
}