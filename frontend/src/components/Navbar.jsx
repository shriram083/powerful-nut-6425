import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import Integration from "./navbarComponents/Integration";

const Navbar = () => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"30px"}
      padding={"20px 30px"}
      borderBottom="1px solid gray"
    >
      <Flex gap={"30px"} alignItems="center">
        <Link to={"/"}>
          <Image src={logo} />
        </Link>
        <Integration />
        <Link to={"/price"}>Price</Link>
        <Link to={"/demo"}>Demo</Link>
      </Flex>
      <Flex gap={"30px"} alignItems="center">
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>
          <Box
            backgroundColor={"#57bb71"}
            color={"white"}
            padding={"8px 15px"}
            borderRadius={"6px"}
          >
            Sign Up
          </Box>
        </Link>
      </Flex>{" "}
    </Flex>
  );
};

export default Navbar;
