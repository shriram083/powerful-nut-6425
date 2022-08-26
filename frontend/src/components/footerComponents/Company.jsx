import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Company = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} alignItems={"flex-start"}>
      <Text cursor={"pointer"} color={"gray"}>
        Company
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        About Us
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Contact
      </Text>
    </Flex>
  );
};

export default Company;
