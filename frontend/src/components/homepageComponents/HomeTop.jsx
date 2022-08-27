import { Box, Flex, Heading, Image, Input, Text } from "@chakra-ui/react";
import React from "react";

const HomeTop = ({ rating }) => {
  return (
    <Flex
      mt={"150px"}
      flexDirection={"column"}
      alignItems={"center"}
      mb={"50px"}
      p={"10px"}
    >
      <Image src={rating} width={"500px"} />

      <Heading fontSize={"45px"} fontWeight={"500"} width={"800px"}>
        Powerful time tracking software with hassle-free integrations
      </Heading>

      <Text fontSize={"20px"} margin={"25px"} width={"700px"} color={"gray"}>
        Accurate time tracker for budgeting, client invoicing and painless
        payroll. Works with the apps your team already use
      </Text>

      <Flex gap={"20px"} mt={"20px"}>
        <Input placeholder="Work Email..." height={"50px"} width={"400px"} />
        <Box
          backgroundColor={"#57bb71"}
          color={"white"}
          width={"150px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={"5px"}
          cursor={"pointer"}
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
