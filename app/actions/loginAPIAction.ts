import { User } from "../lib/types";

export async function loginAPI(props:User){
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/auth/login/post',
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                username:props.username,
                password:props.password,
            })
        }
    );
    const data = await res.json()
    console.log(data)
    return data
}