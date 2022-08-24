import { AUTHENTICATION_FAILURE, AUTHENTICATION_REQUEST, AUTHENTICATION_SUCCESS } from "./type";

const init={
    isAuth:false,
    token:"",
    isError:false,
    isLoading:false
}

export const authReducer=(state=init,{type,payload})=>{
    switch(type)
    {
        case AUTHENTICATION_REQUEST:{
            return {...state,isLoading:true,isAuth:false};
        }
        case AUTHENTICATION_SUCCESS:{
            return {...state,isLoading:false,token:payload,isAuth:true};
        }
        case AUTHENTICATION_FAILURE:{
            return {...state,isLoading:false,isError:true,isAuth:false,token:""};
        }
        default:{
            return state
        }
    }
}