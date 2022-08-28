import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

const HomeBody = ({ timeTracking }) => {
  const widthV = useBreakpointValue({
    base: "100vh",
    md: "900px",
  });

  return (
    <Flex
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      mt={"50px"}
      mb={"100px"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"right"}
        alignItems={"flex-end"}
        p={"30px"}
        width={"600px"}
        gap={"30px"}
      >
        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px 0px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Time Tracking
            </Heading>
            <Text>
              Easy-to-use time tracker. Know the time spent on tasks, hours of
              work, and breaks for each employee
            </Text>
          </Box>
        </Flex>

        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px -432px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Billing and budgeting
            </Heading>
          </Box>
        </Flex>

        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px -120px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Task Management
            </Heading>
          </Box>
        </Flex>

        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px -528px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Visual Planning
            </Heading>
          </Box>
        </Flex>
        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px -144px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Expenses
            </Heading>
          </Box>
        </Flex>
        <Flex
          gap={"10px"}
          height={"fit-content"}
          _hover={{ backgroundColor: "#f0faf5", color: "#57bb71" }}
          p={"10px"}
        >
          <Box
            height={"24px"}
            width={"24px"}
            backgroundImage={
              "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-features-v3.svg"
            }
            backgroundSize={"24px"}
            backgroundPosition={"0px -480px"}
          />
          <Box width={"300px"} textAlign={"left"}>
            <Heading fontSize={"20px"} fontWeight={"500"}>
              Invoicing
            </Heading>
          </Box>
        </Flex>
      </Box>
      <Image src={timeTracking} maxWidth={widthV} />
    </Flex>
  );
};

export default HomeBody;
