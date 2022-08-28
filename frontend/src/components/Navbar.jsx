import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import Integration from "./navbarComponents/Integration";
import { FiMenu } from "react-icons/fi";
import { useBreakpointValue } from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const menu = useBreakpointValue({
    base: "block",
    md: "none",
  });

  const buttons = useBreakpointValue({
    base: "none",
    md: "block",
  });

  return (
    <Flex
      position={"fixed"}
      top={"0px"}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      gap={"30px"}
      padding={"20px 30px"}
      borderBottom="1px solid gray"
      backgroundColor={"white"}
      mb={"50px"}
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
        <Link to={"/login"}>
          <Box display={buttons}>Login</Box>
        </Link>
        <Link to={"/signup"}>
          <Box
            backgroundColor={"#57bb71"}
            color={"white"}
            padding={"8px 15px"}
            borderRadius={"6px"}
            display={buttons}
          >
            Sign Up
          </Box>
        </Link>
        <Box display={menu} width={"100%"}>
          <Box
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            fontSize={"40px"}
          >
            <FiMenu />
          </Box>

          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Link to={"/login"}>
                  <Box m={"20px"} textAlign={"center"}>
                    Login
                  </Box>
                </Link>
                <Link to={"/signup"}>
                  <Box
                    backgroundColor={"#57bb71"}
                    color={"white"}
                    padding={"8px 15px"}
                    borderRadius={"6px"}
                    m={"20px"}
                    textAlign={"center"}
                  >
                    Sign Up
                  </Box>
                </Link>
              </DrawerBody>

              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
