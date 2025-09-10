import { auth } from "@/auth";

export async function refreshAction(){
    const session = await auth()
    const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/auth/refresh',
        {
            method:"POST",
        }
    )
    const data = await res.json();
    console.log(data);
}