import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Solutions = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} alignItems={"flex-start"}>
      <Text cursor={"pointer"} color={"gray"}>
        Solutions
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Time Tracking
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Project Budgeting
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Visual Planning
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Expenses
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Reporting
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Invoicing
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Time card calculator
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Weekly timesheet template
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Invoice generator
      </Text>
    </Flex>
  );
};

export default Solutions;
