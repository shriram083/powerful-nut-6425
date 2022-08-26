import {  LOGGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./type";
   
const t=localStorage.getItem("token");
const init={
    isAuth:false,
    token: t || "",
    isError:false,
    isLoading:false
}

export const authReducer=(state=init,{type,payload})=>{
    switch(type)
    {
        case LOGIN_REQUEST:{
            return {...state,isLoading:true,isAuth:false};
        }
        case LOGIN_SUCCESS:{
            localStorage.setItem("token",payload);
            return {...state,isLoading:false,token:payload,isAuth:true};
        }
        case LOGGIN_FAILURE:{
            return {...state,isLoading:false,isError:true,isAuth:false,token:""};
        }
        default:{
            return state
        }
    }
}