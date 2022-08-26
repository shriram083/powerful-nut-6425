// https://obscure-reef-85874.herokuapp.com/

import axios from "axios"
import {  LOGIN_REQUEST, LOGIN_SUCCESS } from "./type"


export const signupreq=(payload)=>(dispatch)=>{
axios.post("https://obscure-reef-85874.herokuapp.com/user/signup",payload).then(res=>alert(res.data)).catch(err=>alert("something went wrong"))
}

export const loginreq=(payload)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    axios.post("https://obscure-reef-85874.herokuapp.com/user/login",payload).then(res=>{if(res.data.token)
{
    alert("login successfull");
    dispatch({type:LOGIN_SUCCESS,payload:res.data.token}); 
    
}else{
    alert("wrong credentail");
}
}).catch(err=>{if(err) alert("wrong credential")})
}