import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import auth from '../services/authServices'
import Axios from "../utils/axiosConfig";

const initialState={
    isLoggedIn:false,
    user: localStorage.getItem("user") || null,
}

// export const postLoginUser = createAsyncThunk(
//     "auth/postLoginUser",
//     async ({ registerData }, { rejectWithValue }) => {
//       console.log(registerData, "apidata");
//       debugger;
//       try {
//         const apiRes = await axios.post(`http://localhost:5000/api/login`,{loginData})
//         console.log(apiRes.data);
//         return apiRes.data;
//       } catch (error) {
//         return rejectWithValue(error);
//       }
//     }
//   );

export const postLoginUser=createAsyncThunk(
    "auth/postLoginUser",
    async({loginData} , {rejectWithValue})=>{
        try {
            debugger
            const apiRes = await auth.login(loginData)
            console.log(apiRes.data,"apiRes.data");
            return apiRes.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state,action)=>{
            state.user=null
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(postLoginUser.fulfilled,(state,{payload}) =>{
            console.log(payload, "pauload of loggedIn user");
            state.isLoggedIn = true;
            localStorage.setItem("accessToken", payload.accessToken)
            state.user = payload;
        })
    }
})




export const {logout} =authSlice.actions;
export default authSlice.reducer;