"use client";

import { useActionState } from "react";
import InputLogin from "./inputLogin";
import { authenticate } from "@/app/actions/signAction";

export default function FormSign() {
    const [loginState, formAction, isPending] = useActionState(authenticate, undefined)
    console.log(loginState)

    return (
        <form action={formAction} className="m-auto flex flex-col items-start gap-4 bg-blue-400 border border-primary rounded-xl p-6">
        <InputLogin label="Username" id="username" input="text" />
        <InputLogin label="Password" id="password" input="password"/>
        <button type="submit" className="btn-secondary text-white btn rounded px-4 py-2">
        Yes
        </button>
        {isPending && (<h1>Loading...</h1>)}
        </form>
    );
}