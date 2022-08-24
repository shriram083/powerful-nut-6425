import React from "react";
import { FcGoogle } from "react-icons/fc";
import "./css/login.css";
import {
  Center,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Tooltip,
  useColorModeValue,
  Stack,
  Link,
  Divider,
  HStack,
  VStack,
} from "@chakra-ui/react";
// import { Link as chakraLink } from "@chakra-ui/react";
const Login = () => {
  return (
    <Box>
      <Stack align={"center"}>
        <Heading fontSize={"4xl"}>Log in to Everhour</Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          Using the "
          <Tooltip
            noOfLines={3}
            label="Everhour 2 was launched in September 2016. If you signed up earlier, you should log in v1."
            aria-label="A tooltip"
          >
            former version
          </Tooltip>
          " of Everhour? Please <Link color={"blue.400"}>Login here</Link>
        </Text>
      </Stack>

      <Box
        boxShadow={"xl"}
        w="65%"
        margin={"auto"}
        height="500px"
        rounded="lg"
        marginTop="30px"
        marginBottom={"30px"}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Flex direction={["column", "row"]}>
          <Box
            w="50%"
            p="2% 7% 20% 7%"
            // border="1px solid red"
            h="400px"
          >
            <Stack spacing={6}>
              <Center p={"30px 20px 0px 20px"}>
                <Button
                  w={"full"}
                  maxW={"md"}
                  variant={"outline"}
                  leftIcon={<FcGoogle />}
                >
                  <Center>
                    <Text>Sign in with Google</Text>
                  </Center>
                </Button>
              </Center>
              <Text
              //  p={"0 0 10px 0"}
              >
                or
              </Text>
              {/* <FormControl id="email"> */}
                <Input type="email" color={"black"} placeholder="ENTER YOUR EMAIL..." p={6} />
              {/* </FormControl> */}
              {/* <FormControl id="password"> */}
                <Input type="password" placeholder="Password..."  p={6} />
              {/* </FormControl> */}
              <Stack spacing={2}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                ></Stack>
               <Box margin={"auto"} >
               <Button
                p={6}
                w="70%"
                margin={"auto"}
                  bg={"green.400"}
                  color={"white"}
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Log in
                </Button>
               </Box>
                <Link>Login with SSO</Link>
                <Link>Reset password</Link>
              </Stack>
            </Stack>
          </Box>
          {/* <Divider borderColor="gray.200" /> */}
          <Center height="400px">
            <Divider orientation="vertical" borderColor="gray.400" />
          </Center>
          <Box
            //  border="1px solid red"
            h={"400px"}
            p="5% 0 0 5%"
            lineHeight={"35px"}
          >
            <Text
              textAlign={"left"}
              // border="1px solid red"
              fontSize={"sm"}
              color="red"
            >
              NEWS
            </Text>
            <Heading textAlign={"left"} fontSize={"xl"}>
              Integration with Todoist
              
            </Heading>
            <Text color="#848484" textAlign={"left"}>
              Everhour now integrates with Todoist! 
              <Link href="https://everhour.com/blog/everhour-now-integrates-with-todoist/" color={"blue"} > Learn more</Link>
            </Text>
            <Heading textAlign={"left"} fontSize={"xl"}>
              Integration with Notion
            </Heading>
            <Text color="#848484" textAlign={"left"}>Everhour now integrates with Notion!
            <Link href="https://everhour.com/blog/everhour-now-integrates-with-todoist/" color={"blue"} > Learn more</Link>
            </Text>
            <Heading textAlign={"left"} fontSize={"xl"}>
              Single Sign-On
            </Heading>
            <Text textAlign={"left"} color="#848484">
              Use single sign-on (SSO) to access Everhour for your projects and
              timesheets
              <Link href="https://everhour.com/blog/everhour-now-integrates-with-todoist/" color={"blue"} > Learn more</Link>
            </Text>
          </Box>
        </Flex>
      </Box>
      
        <VStack spacing={8} w="50%" margin={"auto"} >
        <Heading>New to Everhour?</Heading>
        <Text>Try Everhour for free and see if it works for your business</Text>
        <Flex w="70%" margin={"auto"}  >
          <Input marginRight={4} p={6} placeholder="Work email..."></Input>
          <Button p={6} bg={"green.400"} color="white">
            Try this free
          </Button>
        </Flex>
        
        </VStack>
        <Center p={8}>
          <Button
            w={"full"}
            maxW={"md"}
            variant={"outline"}
            leftIcon={<FcGoogle />}
          >
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </Center>
      </Box>
  );
};

export default Login;
