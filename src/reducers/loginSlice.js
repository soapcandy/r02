import { createSlice } from "@reduxjs/toolkit";


const initState = {
    email:'',
    signed:false
}

const loginSlice = createSlice ({
    name:'loginSlice',
    initialState: initState,
    reducers: {
        requestLogin: (state, param) =>{
            const payload = param.payload
            console.log("requsetLogin", payload)
        }
    }

})

export const {requestLogin} = loginSlice.actions

export default loginSlice.reducer