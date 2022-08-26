import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Integrations = () => {
  return (
    <Flex flexDirection={"column"} gap={"20px"} alignItems={"flex-start"}>
      <Text cursor={"pointer"} color={"gray"}>
        Integrations
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Asana
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Basecamp
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Trello
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Jira
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Github
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Clickup
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Monday
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Notion
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Todoist
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        Gitlab
      </Text>
      <Text
        cursor={"pointer"}
        _hover={{ color: "gray" }}
        transitionDuration={"0.3s"}
      >
        All
      </Text>
    </Flex>
  );
};

export default Integrations;
