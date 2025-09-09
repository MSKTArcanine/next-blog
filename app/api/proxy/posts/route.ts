import { auth } from "@/auth";
import { NextResponse } from "next/server";

export async function GET(){
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/v1/blog/posts');
    const data = await res.json();
    return NextResponse.json(data);
}