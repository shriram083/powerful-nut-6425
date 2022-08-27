import React, { useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import {  useSearchParams } from "react-router-dom";

const HomePage = () => {
const [searchParams,setSearchParams]=useSearchParams();
const forToken=()=>{
const code=searchParams.get("code");
localStorage.setItem("token",code);
// console.log(code);

}

useEffect(()=>{
forToken();
},[])

  return (
    <Box width={"500px"} height={"500px"} m={"auto"}>
      HomePage
    </Box>
  );
};

export default HomePage;
