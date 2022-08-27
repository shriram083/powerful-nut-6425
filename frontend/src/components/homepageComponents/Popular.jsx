import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const Popular = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mb={"50px"}
    >
      <Heading
        fontSize={"40px"}
        fontWeight={"500"}
        width={"700px"}
        m="auto"
        mb={"50px"}
      >
        Track time and watch progress inside the most popular apps
      </Heading>
      <Flex margin={"auto"} gap={"20px"} fontSize={"25px"} fontWeight={"500"}>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -96px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Asana</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -48px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Basecamp</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -144px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Jira</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -128px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Github</Box>
        </Flex>

        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -112px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Clickup</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -208px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Trello</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -240px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Monday</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -256px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Gitlab</Box>
        </Flex>
        <Flex
          alignItems={"center"}
          _hover={{ color: "#57bb71" }}
          transitionDuration={"0.5s"}
          cursor={"pointer"}
        >
          <Box
            height="16px"
            width="16px"
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
            }
            backgroundPosition="0px -288px"
            backgroundRepeat={"no-repeat"}
            backgroundSize="16px"
          />
          <Box pl={"10px"}>Notion</Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Popular;
