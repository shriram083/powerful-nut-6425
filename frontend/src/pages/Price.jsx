import React from "react";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Image, Input  } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { CheckIcon, TriangleDownIcon } from '@chakra-ui/icons'
import "./price.css"



const Price = () => {
  return <>
  <Box class="mainbox">

    <Box className="heading-top"
    marginTop="80px">
       <Heading as='h2'
        size='2xl'
         noOfLines={1} 
         fontFamily="sans-serif"
         fontWeight="normal"
         
         >Simple pricing with no extra fees</Heading>
       <Heading as="h4" 
       size="md"
        fontFamily="sans-serif"
         marginTop="20px"
         fontWeight="lighter"
         color="#7C7C7C"
         fontSize="22px"
         >Start with no commitment. Try everything. Subscribe if you love it.</Heading>
    </Box>

    <Box className="courese-box">
     <Box className="course-box-detail">
      <Heading as='h5'
        size='xl'
         noOfLines={1} 
         fontFamily="sans-serif"
         fontWeight="light"
         paddingTop="45px"
        marginLeft="-100px"
         >
          Team plan
      </Heading>
      <Heading
      as="h5" 
      size="sm"
       fontFamily="sans-serif"
        marginTop="15px"
        fontWeight="lighter"
        color="#7C7C7C"
        fontSize="18px"
        marginLeft="-19px">
      All features, plus best-in-class <br marginLeft="-50%"/> integrations
      </Heading>
      <Heading color="#57BB71"
      paddingTop="30px"
      marginLeft="-120px"
      fontFamily="sans-serif"
      ><b>₹</b>677.<b>93</b></Heading>

      <Heading as='h6' size='xs'
      color="#7C7C7C"
      fontWeight="thin"
      fontFamily="sans-serif">
      / user / month, starting at 5 users......
      </Heading>

      <Flex marginLeft="35px" marginTop="30px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Unlimited users</Heading>
      </Flex> 

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Unlimited projects and clients</Heading>
      </Flex> 

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Track time inside most popular tools →</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Optional screenshots</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Schedule reports by email</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Lock time entries at certain rules</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Time tracking reminders</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Time approval</Heading>
      </Flex>
      

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Customizable reports</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Single sign-on (SSO)</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Budget & estimates</Heading>
      </Flex>
      

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Manage billable rates and labor costs</Heading>
      </Flex>

      
      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Expenses</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Scheduling</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Invoicing</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Time off</Heading>
      </Flex>

      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">Fast and responsive support</Heading>
      </Flex>


      <Flex marginLeft="35px" marginTop="8px">
      <CheckIcon color="green" height="9px" width="8px" color="#57BB71" marginTop="5px"/>
      <Heading as='h6' size='xs' color="#333333" fontWeight="" fontSize="15px" marginLeft="10px">API</Heading>
      </Flex>


     </Box>
    </Box>

    <Box className="currency">
      <Flex>
      <Heading  as="h5" 
      size="sm"
      marginLeft="45%"
       fontFamily="sans-serif"
        marginTop="35px"
        fontWeight="lighter"
        color="#7C7C7C"
        fontSize="16px">Currency </Heading>
        <Image height="18px" marginTop="35px" marginLeft="8px" src="https://everhour.com/assets/images/flags/inr.png" />
        <Heading as="h5" 
      size="sm"
      marginTop="35px"
      marginLeft="5px"
      color="#7C7C7C"
      fontWeight="normal"
      fontSize="16px"
      >INR</Heading>
      <TriangleDownIcon  marginTop="40px"
      marginLeft="-1px"
      color="#7C7C7C"
      height="10px" />
      </Flex>
    </Box>


    <Box className="question-sec">
    <div className="faqDiv">
        <div className="leftFaqDiv">
          <h1>Your questions. Answered!</h1>
          <p>
            Here is a list of the most frequently asked questions. Got others or
            some ideas? — Contact us!
          </p>
          <img 
            src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/faq.webp"
            alt="img"
          />
        </div>
        <div className="rightFaqDiv">
          <Accordion allowToggle>
            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    What's the trial period purpose?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              When you sign up, you get a fully-functional account for 2 weeks, which gives
               you access to everything Everhour has to offer. After 14 days, you will need to 
               pick a plan and enter your credit card details. We’ll email you a couple of days 
               before your trial expires to remind you. 
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    What means 'Starting at 5 users'?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              This is kind of a basic usage fee. You can subscribe even if you have fewer than 5 users,
               however, in this case, the minimum usage fee will apply. So it's either $50/month on a month-to-month basis or $42.5/month billed in advance on a yearly basis.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Can I change my plan later?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              Yes, you can upgrade/downgrade your plan at any time. You will be credited for the remainder of your current plan and charged for your new plan when you upgrade. 
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                    Can I add or remove members at any time?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              Absolutely! Everhour is pay-as-you-go, and you can easily add or remove members from your account with a couple of clicks.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                  What if I want to cancel my service?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              No problem. If you decide Everhour isn’t for you (or you just need to pause), simply cancel before your next billing period. This date is listed on your billing page. Unfortunately, we can’t refund you for partial use or the amount of time left in your subscription.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                   What kind of payment methods do you accept?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              We currently accept any credit or debit card with a MasterCard, Visa, Discover Network, American Express, Diners Club International or JCB logo.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h1>
                <AccordionButton>
                  <Box
                    flex="1"
                    textAlign="left"
                    fontSize={20}
                    fontWeight={500}
                    color="#333333"
                    marginTop={5}
                    marginBottom={5}
                  >
                   Which currency will I be charged in?
                  </Box>
                  <AccordionIcon boxSize={7} />
                </AccordionButton>
              </h1>
              <AccordionPanel pb={4} fontSize={16} color="#333333">
              We charge you in US dollars. However, the debit currency depends on your card and your bank.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </Box>





    <div className="signupDiv">
        <div className="leftSignupDiv">
          <h1>Take control of your time with Everhour</h1>
          <p>Beautiful integrations. Intuitive interface. No unexpected fees</p>
          <div className="signupInputDiv">
            <Input type="text" placeholder="Work email..." />
            <div>
              <p>Try it free</p>
            </div>
          </div>
          <div >
            <img   src="data:image/png;base64,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" alt="google.svg" />
            <p>Or sign up with Google Account</p>
          </div>
        </div>
        <div className="rightSignupDiv">
          <ul>
            <li className="first">Track time from the apps you already use</li>
            <li className="second">Know where your team’s time is going</li>
            <li className="third">Keep projects on budget</li>
            <li className="fourth">Increase transparency</li>
            <li className="fifth">Make your workflow more efficient</li>
            <li className="sixth">Spot burnout before it happens</li>
          </ul>
        </div>
      </div>

  </Box>
  </>
  
};

export default Price;
