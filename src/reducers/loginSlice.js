import { createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../utill/cookieUtill";


export const postLoginThunk =
    createAsyncThunk('postLoginThunk', (params) => {
        return postLogin(params)
    })

const loadCookie = () => {
    const loginObj = getCookie("login")

    console.log("login............obj............")
    console.log(loginObj)

    if (!loginObj) {
        return initState
    }
    return loginObj
}

// const initState = {
//     email:'',
//     signed:false
// }

const initState = {
    email: '',
    nickname: '',
    admin: false,
    loading: false,
    errorMsg: null
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        //     requestLogin: (state, param) =>{
        //         const payload = param.payload
        //         console.log("requsetLogin", payload)
        //         const loginObj = {email: payload.email, signed:true}

        //         setCookie("login", JSON.stringify(loginObj), 1)

        //         return loginObj
        //     }

        logout: (state) => {
            removeCookie('login')


            return initState
        }
    },// extraReducer는 Return을 하지않아도 다음상태를 잡아준다.
    extraReducers: (builder) => {
        builder.addCase(postLoginThunk.fulfilled, (state, action) => {

            console.log("fulfilled", action.payload)
            const { email, nickname, admin, errorMsg } = action.payload

            if (errorMsg) {
                state.errorMsg = errorMsg
                state.loading = false
                return
            }

            state.loading = false
            state.email = email
            state.nickname = nickname
            state.admin = admin

            setCookie("login", JSON.stringify(action.payload), 1)
        })
            .addCase(postLoginThunk.pending, (state, action) => {

                console.log("pending")
                state.loading = true
            })
            .addCase(postLoginThunk.rejected, (state, action) => {

                console.log("rejected")
            })

    }


})

export const { requestLogin } = loginSlice.actions

export default loginSlice.reducer