import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Learns = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} alignItems={"flex-start"}>
      <Text cursor={"pointer"} color={"gray"}>
        Learn
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Resourses
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Help centre
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Blog
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Product Updates
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Timesheet App
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Time clock app
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Attendance tracker
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Work Hours Tracker
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Employee time tracking
      </Text>
    </Flex>
  );
};

export default Learns;
