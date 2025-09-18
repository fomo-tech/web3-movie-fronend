import { api } from "@/lib/api"
import { cookies } from "next/headers"


export const googleLoginCallback = async()=>{
    await  api.post('/auth/google-login',{
        idToken: '' // gửi idToken nhận được từ Google
    })
   // cookies().set('token', 'your-jwt-token')
}