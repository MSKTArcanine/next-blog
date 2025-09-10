import { auth } from "@/auth";

export async function POST(req : Request){
    const body = await req.json();
    const session = await auth();
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/v1/edit/post/',
        {
            method:"POST",
            headers:{
                "Authorization": `bearer ${session?.accessToken}`,
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                title:body.title,
                content:body.content,
                desc:body.desc,
                is_published:body.is_published,
            }),
        }
    );
    if(!res.ok)
        return Response.json({message:"Failed to create"}, {status:res.status});
    return new Response(null, {status:201});
}

export async function GET(){
    const session = await auth();
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net//api/v1/edit/posts',
        {
            method:"GET",
            headers:{ Authorization: `bearer ${session?.accessToken}`}
        }
    )
    const data = await res.json();
    console.log('DATA : ', data)
    return data.posts;
}