import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex justifyContent={"center"} gap={"30px"} padding={"30px"}>
      <Link to={"/"}>Home</Link>
      <Link to={"/signup"}>Sign Up</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/price"}>Price</Link>
      <Link to={"/demo"}>Demo</Link>
    </Flex>
  );
};

export default Navbar;
