import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Product = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} alignItems={"flex-start"}>
      <Text cursor={"pointer"} color={"gray"}>
        Product
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Tour
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Pricing
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Request a demo
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Customers
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >{`API & Docs`}</Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Status
      </Text>
    </Flex>
  );
};

export default Product;
