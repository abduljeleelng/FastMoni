
const API_BASE:string = 'https://reqres.in';

interface rSuccessRsp {
    id:number,
    token: string
    error?: string
}

interface errorRsp {
    error: string
}

interface lSuccessRsp {
    id:number,
    token: string
}


export const user_registration = async (payload:{email:string,password:string}) :Promise<rSuccessRsp> =>{
    const controller = new AbortController();
    try {
        const response = await fetch(`${API_BASE}/api/register`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                'accept':'application/json',
            },
            body:typeof payload === "object" ? JSON.stringify(payload) : undefined
        })
        return await response.json();
    } catch (error) {
        return {"error":"",id:0,token:""};
    } finally{
        controller.abort(); 
    }
}

export const user_login = async (payload:{email:string,password:string}) :Promise<rSuccessRsp> =>{
    const controller = new AbortController();
    try {
        const response = await fetch(`${API_BASE}/api/login`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json; charset=UTF-8',
                'accept':'application/json',
            },
            body:typeof payload === "object" ? JSON.stringify(payload) : undefined
        })
        return await response.json();
    } catch (error) {
        return {"error":"",id:0,token:""};
    } finally{
        controller.abort(); 
    }
}