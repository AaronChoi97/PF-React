export const consultarProd = async ()=>{
    const resp=await fetch('./json/data.json')
    const prod=await resp.json()
    
    return prod       
}