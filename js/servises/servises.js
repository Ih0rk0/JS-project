const postData= async (url,data)=>{
    const res = await fetch(url,{
        method:'POST',
        body:data,
        headers:{
            'Content-type': 'application/json'
        },
        
        
    })
    if(!res.ok){
        throw new Error(` Gould not fetch ${url} status:${res.status}`)
    }
    return await res.json()
}
const getData= async (url)=>{
    const res = await fetch(url)

    if(!res.ok){
        throw new Error(` Gould not fetch ${url} status:${res.status}`)
    }

    return await res.json() 
}
export{postData}
export{getData}