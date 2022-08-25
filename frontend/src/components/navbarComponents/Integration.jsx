import {
  Box,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Integration = () => {
  return (
    <div>
      <Popover trigger={"hover"}>
        <PopoverTrigger>
          <Flex alignItems={"center"}>
            <Text cursor={"pointer"}>Integration</Text>
            <Box
              backgroundColor={"#57bb71"}
              p="3px 10px"
              color={"white"}
              borderRadius="5px"
              ml={"10px"}
              fontSize="12px"
            >
              New
            </Box>
          </Flex>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverBody>
              <Box display={"flex"} justifyContent="space-evenly">
                {/* /
                 left side 
                 / */}

                <Flex
                  flexDirection={"column"}
                  gap="20px"
                  fontSize={"20px"}
                  color="gray"
                >
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
                    <Box
                      height="16px"
                      width="16px"
                      backgroundImage={
                        "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
                      }
                      backgroundPosition="0px -272px"
                      backgroundRepeat={"no-repeat"}
                      backgroundSize="16px"
                    />
                    <Box pl={"10px"}>Todoist</Box>
                  </Flex>
                  <Flex alignItems={"center"} gap="10px">
                    <Box
                      height="16px"
                      width="16px"
                      backgroundImage={
                        "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
                      }
                      backgroundPosition="0px -192px"
                      backgroundRepeat={"no-repeat"}
                      backgroundSize="16px"
                    />
                    <Box pl={"10px"}>Xero</Box>
                  </Flex>
                </Flex>

                {/* /
                    right side
                    / */}

                <Flex
                  flexDirection={"column"}
                  gap="20px"
                  fontSize={"20px"}
                  color="gray"
                >
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
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
                  <Flex alignItems={"center"} gap="10px">
                    <Box
                      height="16px"
                      width="16px"
                      backgroundImage={
                        "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/sprite-social-icons-v3.svg"
                      }
                      backgroundPosition="0px -176px"
                      backgroundRepeat={"no-repeat"}
                      backgroundSize="16px"
                    />
                    <Box pl={"10px"}>Quickbooks</Box>
                  </Flex>
                </Flex>
              </Box>
            </PopoverBody>
            <PopoverFooter>
              Everhour offers real integration with your favorite tools. All
              integrations
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
};

export default Integration;
