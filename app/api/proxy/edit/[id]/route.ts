import { auth } from "@/auth";

export async function DELETE(req: Request, { params }:{params: Promise<{id:string}>}){
    const {id} = await params
    const session = await auth();
    console.log('token : ', session?.accessToken)
    const res = await fetch(`https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/v1/edit/post/${id}`,
        {
            method:"DELETE",
            headers:{Authorization: `bearer ${session?.accessToken}`}
        }
    )
    if(!res.ok)
        return Response.json({message: "Failed to delete"}, {status:res.status});
    return new Response(null, {status:204});
}

export async function PUT(req: Request, {params}:{params:Promise<{id:string}>}){
    const {id} = await params;
    const session = await auth();
    const b = await req.json();
    console.log('PUT : ', b)
    const res = await fetch(`https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/v1/edit/post/${id}`,
        {
            method:'PUT',
            headers:{'Authorization':`bearer ${session?.accessToken}`,
        'Content-Type':'application/json'},
            body:JSON.stringify(b),
        }
    )
    if(!res.ok)
        return Response.json({message:"Failed to UPDATE"}, {status:res.status});
    return new Response(null, {status:201});
}