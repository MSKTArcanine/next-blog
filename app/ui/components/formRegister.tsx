"use client";

import { useActionState } from "react";
import { checkPass } from "@/app/actions/registerAction";
import InputLogin from "./inputLogin";
import { FormState } from "@/app/type";

const initialFormState:FormState = {username:'', error:false}

export default function FormRegister() {

    const [formState, formAction, isPending] = useActionState(checkPass, initialFormState)

    return (
        <form action={formAction} className="m-auto flex flex-col items-start gap-4 bg-primary border border-primary rounded-xl p-6">
        <InputLogin label="Username" id="username" input="text" />
        <InputLogin label="Password" id="password" input="password" error={formState.error} defaultValue=""/>
        <InputLogin label="Repeat password" id="vPassword" input="password" error={formState.error} />
        {formState.error && <p className="text-red-500 text-sm">Passwords do not match</p>}
        <button type="submit" className="btn-secondary text-white btn rounded px-4 py-2">
        Yes
        </button>
        </form>
    );
}