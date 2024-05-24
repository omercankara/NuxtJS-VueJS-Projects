import axios from "axios"

export const  appAxios  = axios.create({ //const ile dışarı aç
        baseURL:" http://localhost:3000",
        withCredentials:false,
        headers:{
                "tokenX":"myToken",
                "Content-type":"application/json"
        }
})