export default async function deletePost(id:number){
    const res = await fetch(`https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net//api/v1/edit/post/${id}`,
        {
            method:"DELETE"
        }
    )
    if(res.ok){
        console.log('OK')
    }
    console.log('Mouai')
}