import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const HomeTop = ({ rating }) => {
  const direction = useBreakpointValue({
    base: "column",
    md: "row",
  });

  const widthV = useBreakpointValue({
    base: "100vh",
    md: "none",
  });
  return (
    <Flex
      margin={"auto"}
      mt={"150px"}
      flexDirection={"column"}
      alignItems={"center"}
      mb={"50px"}
      p={"10px"}
      maxWidth={"100vh"}
    >
      <Image src={rating} width={"500px"} />

      <Heading
        fontSize={"45px"}
        fontWeight={"500"}
        width={"800px"}
        maxWidth={widthV}
      >
        Powerful time tracking software with hassle-free integrations
      </Heading>

      <Text
        fontSize={"20px"}
        margin={"25px"}
        width={"700px"}
        color={"gray"}
        maxWidth={"90vh"}
        padding={"10px"}
      >
        Accurate time tracker for budgeting, client invoicing and painless
        payroll. Works with the apps your team already use
      </Text>

      <Flex
        gap={"20px"}
        mt={"20px"}
        flexWrap={"wrap"}
        flexDirection={direction}
        alignItems={"center"}
      >
        <Input
          placeholder="Work Email..."
          height={"50px"}
          width={"400px"}
          maxWidth={"90vh"}
        />
        <Box
          backgroundColor={"#57bb71"}
          color={"white"}
          width={"150px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"5px"}
          cursor={"pointer"}
          padding={"10px"}
        >
          Try Free
        </Box>
      </Flex>
      <Flex mt={"20px"} mb={"30px"} alignItems={"center"} gap={"10px"}>
        <Box
          height={"16px"}
          width={"16px"}
          backgroundImage={
            "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
          }
          backgroundPosition={"0px 0px"}
          backgroundSize={"16px"}
        />
        <Text
          cursor={"pointer"}
          color={"gray"}
          _hover={{ textDecoration: "underline" }}
        >
          Or sign up with Google Account
        </Text>
      </Flex>
    </Flex>
  );
};

export default HomeTop;
