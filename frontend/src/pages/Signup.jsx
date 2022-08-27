import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaGithub } from 'react-icons/fa';
import React, { useEffect, useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux"
import { signupreq } from "../reducer/authReducer/action";
const Signup = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [url,setUrl]=useState("");
  const dispatch=useDispatch();
  useEffect(()=>{
    axios.get("https://obscure-reef-85874.herokuapp.com/auth/github/req").then(res=>setUrl(res.data)).catch(err=>console.log("hello"));
  },[])




const handleSignup=()=>{
const payload={
  email:email,
  password:password
}
dispatch(signupreq(payload));
}


  return (
    <Box>
      <Stack align={"center"} w={"60%"} margin="auto" marginBottom={8}>
        <Heading fontSize={"5xl"}>
          Make your team more productive with Everhour
        </Heading>
        <Text fontSize={"lg"} color={"gray.600"}>
          Join 3,500+ customers who use Everhour to track time and plan their
          future projects more
        </Text>
      </Stack>
      <VStack marginBottom={"100px"} spacing={6}>
        <VStack w="20%" margin={"auto"} spacing={4}>
          <Center>
            <Button
              bg={"white"}
              border="1px solid #bcaa9c"
              p="12% 90% 12% 90%"
              leftIcon={<FaGithub />}
            >
              <Center>
                <Text><a href={url}>Sign up with Github</a></Text>
              </Center>
            </Button>
          </Center>
          <Text>or</Text>
          <Input value={email} onChange={(e)=>setEmail(e.target.value)} marginRight={4} p={6} placeholder="Work email..."></Input>
          <Input value={password} onChange={(e)=>setPassword(e.target.value)} marginRight={4} p={6} placeholder="password..."  />
          <Button onClick={handleSignup} p={6} bg={"green.400"} color="white">
            Sign up
          </Button>
        </VStack>
        <Text color={"#bcaa9c"}>
          Free to try • No credit card required • 1-minute signup
        </Text>
      </VStack>
      <HStack w="80%" margin={"auto"}>
        <Box margin={"auto"} w={"33%"}>
          <Flex direction={"column"}>
            <Box margin={6} p={8} boxShadow="xl">
              “I am the owner of the company,{" "}
              <mark>
                and I use Everhour for timekeeping of myself and my
                subcontractors
              </mark>
              . All team members use the system - from web developers to tech
              support to project management to design.”
              <br />
              <br />
              <Text>— Ivan M. (Source: <span >G2Crowd</span>)</Text>
            </Box>
            <Box margin={6} p={8} boxShadow="xl">
              "<mark>We are using Everhour as a core business software</mark>,
              because our business is to sell our time. When you use such
              software, what you care about the most is speed, flexibility,
              ability to integrate with all major project management software.
              And Everhour is exactly that kind of software”
              <br />
              <br />
              <Text>— Daniel Y. (Source: TrustRadius)</Text>
            </Box>
            <Box margin={6} p={8} boxShadow="xl">
              “
              <mark>
                Everhour’s integration with Asana is wonderful for a remote team
              </mark>
              . We track all activities in Asana, but before Everhour I often
              wondered how long it was taking to do a task, now I know exactly.
              I can see who is working right now and a summary each day”.
              <br />
              <br />
              <Text>— Doug H. (Source: G2Crowd)</Text>
            </Box>
          </Flex>
        </Box>
        <Box margin={"auto"} w={"33%"}>
          <Flex direction={"column"}>
            <Box margin={6} p={8} boxShadow="xl">
              “Everhour is being used by my department now, but it’s planned to
              be used across the whole company. We were having problems tracking
              the times of every project and{" "}
              <mark>
                {" "}
                Everhour ended up being the best solution to the issue.
              </mark>{" "}
              We’re tracking our tasks involved in every project, in every level
              (software development, meetings, project management, etc.)”
              <br />
              <br />
              <Text>— Daniel Y. (Source: TrustRadius)</Text>
            </Box>
            <Box margin={6} p={8} boxShadow="xl">
              “We are a 15 people team working remotely from different cities of
              Latin America and Europe, and time tracking for each client,
              project, and task has always been a major issue.
              <mark>
                {" "}
                We’ve been using Everhour for the past year or so, and it has
                become an essential tool for our team.
              </mark>{" "}
              It does not only give us the ability to track how much time we
              have dedicated to a project but also to estimate how much time a
              particular task will need in order to be completed next time and
              by who. Easily create and save reports with just a few clicks”
              <br />
              <br />
              <Text>— Dimitris R. (Source: Capterra)</Text>
            </Box>
          </Flex>
        </Box>
        <Box margin={"auto"} w={"33%"}>
          <Flex direction={"column"}>
            <Box margin={6} p={8} boxShadow="xl">
              “
              <mark>
                Everhour helps me manage/plan my weekly activities a lot more
                effectively
              </mark>
              , since I know how much time I have to work on things each day,
              and can quickly update estimated times to reallocate tasks as
              needed.”
              <br />
              <br />
              <Text>— Dan S. (Source: Capterra)</Text>
            </Box>
            <Box margin={6} p={8} boxShadow="xl">
              “The most important gain from using Everhour is that{" "}
              <mark>
                we can track our tasks in real-time without having to leave the
                browser
              </mark>
              . The Chrome add-on helps us initiate the time for a specific
              task. If we are already on Asana, a simple click does the job.”
              <br />
              <br />
              <Text>— Dimitris R. (Source: Capterra)</Text>
            </Box>
            <Box margin={6} p={8} boxShadow="xl">
              “<mark >Everhour has already paid for itself for the year</mark> by
              helping me track time I was missing in client projects. It is easy
              to use, has friendly customer service people, and the reports make
              it easy to invoice clients and track projects.”
              <br />
              <br />
              <Text>— Dimitris R. (Source: Capterra)</Text>
            </Box>
          </Flex>
        </Box>
      </HStack>
    </Box>
  );
};

export default Signup;
