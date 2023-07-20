import axios from "axios";
import { getCookie } from "./cookieUtil";

const jwtAxios = axios.create()

const beforeReq = (config) => {
    
    console.log("beforeRequest...............")

    const {accessToken} = getCookie("login")

    if(!accessToken) {
        throw new Error("NO ACCESS TOKEN")
    }

    config.headers.Authorization = `Bearer ${accessToken}`

    return config
}

const requestFail = (err) => {

    console.log("request fail...............")

    return Promise.reject(err)
}

const beforeRes = (res) => {

    console.log("2xx Response............")

    return res
}

const responseFail = (err) => {

    console.log("response fail........")

    return Promise.reject(err)
}

jwtAxios.interceptors.request.use(beforeReq, requestFail)
jwtAxios.interceptors.response.use(beforeRes, responseFail)

export default jwtAxios