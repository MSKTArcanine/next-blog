'use server'

import { auth, signIn } from "@/auth"
import { AuthError } from "next-auth"
import { redirect } from "next/navigation";

export async function authenticate(prevState:string | undefined, formData: FormData){
    const {username, password} = Object.fromEntries(formData.entries())
    try{
        await signIn('credentials', {username, password, redirectTo:'/'});
        console.log('redirection...');
        redirect('/')
    }catch(e){
        if(e instanceof AuthError){
            if(e.type === 'CredentialsSignin')
                return 'Invalid creds';
            return 'Something went wrong';
        }
        throw e;
    }
}