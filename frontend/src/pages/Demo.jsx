import { Box, Flex, Heading, Image, Input } from "@chakra-ui/react";
import React from "react";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import "./demo.css";

const Demo = () => {
  return (
    <>
      <Box className="demo-detail" mt={"150px"}>
        <Flex margin="auto">
          <Heading
            as="h2"
            size="2xl"
            noOfLines={1}
            marginTop="90px"
            marginLeft="28%"
            fontFamily="sans-serif"
            fontWeight="normal"
          >
            Book a 30-min live demo
          </Heading>
          <Image
            height="50px"
            width="50px"
            marginTop="6%"
            marginLeft="1%"
            src="http://sch53rnd.ru/images/1f680.png"
          />
        </Flex>

        <Heading
          as="h4"
          size="md"
          fontFamily="sans-serif"
          marginTop="20px"
          fontWeight="light"
          color="#7C7C7C"
          marginLeft="-4%"
          fontSize="23px"
        >
          10+ users? Let one of our customer success experts show you how
          Everhour
        </Heading>
        <Heading
          as="h4"
          size="md"
          fontFamily="sans-serif"
          marginTop="4px"
          fontWeight="light"
          color="#7C7C7C"
          marginLeft="-4%"
          fontSize="23px"
        >
          works, with plenty of time set aside for questions
        </Heading>

        <Flex marginLeft="37%" gap="4%" marginTop="3%">
          <Button
            backgroundColor="#57BB71"
            size="md"
            color="white"
            height="47px"
            width="200px"
            fontWeight="light"
            fontSize="18px"
          >
            Schedule time
          </Button>
          <Button
            backgroundColor="white"
            height="47px"
            width="140px"
            fontWeight="light"
            fontSize="17px"
            size="md"
            border="1px solid #57BB71"
            color="#57BB71"
            marginLeft="-1%"
          >
            Watch videos
          </Button>
        </Flex>

        <Box className="detail-data">
          <Heading
            as="h4"
            size="md"
            fontFamily="sans-serif"
            fontWeight="light"
            fontSize="18px"
            paddingTop="60px"
            paddingRight="40%"
          >
            What you???ll learn
          </Heading>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2%"
            >
              We???ll briefly explain what???s so special about Everhour.
            </Heading>
          </Flex>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              We???ll teach you the basics of using the app, with plenty
            </Heading>
          </Flex>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            color="#7C7C7C"
            marginTop="1.25%"
            marginLeft="-37%"
          >
            of time for questions.
          </Heading>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              We???ll answer all questions about setting up Everhour,
            </Heading>
          </Flex>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            color="#7C7C7C"
            marginTop="1%"
            marginLeft="4%"
          >
            using it with your team, or anything else you???d like to
          </Heading>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            marginLeft="-57%"
            marginTop="1%"
            color="#7C7C7C"
          >
            ask.
          </Heading>

          <Heading
            as="h4"
            size="md"
            fontFamily="sans-serif"
            fontWeight="light"
            fontSize="18px"
            paddingTop="70px"
            paddingRight="40%"
          >
            Other information
          </Heading>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              Screenshare is done in the browser by means of
            </Heading>
          </Flex>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            color="#7C7C7C"
            marginTop="1%"
            marginLeft="4%"
          >
            Whereby software using this link. Please ensure that
          </Heading>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            marginLeft="-10%"
            marginTop="1%"
            color="#7C7C7C"
          >
            your mic and speakers work in advance!
          </Heading>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              Demos typically last 30 minutes, but we will adjust the
            </Heading>
          </Flex>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            color="#7C7C7C"
            marginTop="1%"
            marginLeft="-29%"
          >
            time based on your needs.
          </Heading>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              Feel free to invite other team members to join this call.
            </Heading>
          </Flex>

          <Flex>
            <Icon
              viewBox="0 0 200 200"
              color="#57BB71"
              height="12px"
              width="12px"
              marginLeft="12%"
              marginTop="3.5%"
            >
              <path
                fill="currentColor"
                d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
              />
            </Icon>
            <Heading
              as="h5"
              size="sm"
              fontFamily="sans-serif"
              fontWeight="light"
              color="#7C7C7C"
              marginLeft="4%"
              marginTop="2.5%"
            >
              No available time slots? Contact us and we'll surely
            </Heading>
          </Flex>
          <Heading
            as="h5"
            size="sm"
            fontFamily="sans-serif"
            fontWeight="light"
            color="#7C7C7C"
            marginTop="1%"
            marginLeft="-37%"
          >
            work something out.
          </Heading>
        </Box>

        <div className="signupDiv">
          <div className="leftSignupDiv">
            <h1>Skip the demo and try for yourself?</h1>
            <p>Try Everhour for free to see if it works for your business.</p>
            <p className="Chokan">No credit card required. No obligations.</p>
            <div className="signupInputDiv">
              <Input type="text" placeholder="Work email..." />
              <div>
                <p>Try it free</p>
              </div>
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
                alt="google.svg"
              />
              <p>Or sign up with Google Account</p>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Demo;
