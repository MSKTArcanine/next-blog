export default async function(id:number){
    const res = await fetch(`https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net//api/v1/edit/post/${id}`,
        {
            method:"DELETE"
        }
    )
    if(!res.ok)
        return false;
    return true;
}