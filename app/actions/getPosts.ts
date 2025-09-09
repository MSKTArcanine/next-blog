import { auth } from "@/auth";

export default async function getPost(){
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