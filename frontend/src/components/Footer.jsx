import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./footerComponents/Logo";
import Company from "./footerComponents/Company";
import Product from "./footerComponents/Product";
import Solutions from "./footerComponents/Solutions";
import Integrations from "./footerComponents/Integrations";
import Learns from "./footerComponents/Learns";
import Download from "./footerComponents/Download";

const Footer = () => {
  return (
    <Box
      backgroundColor={"black"}
      color={"white"}
      padding={"60px 40px"}
      mt={"50px"}
      gap={"50px"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        gap={"40px"}
        alignItems={"flex-start"}
      >
        <Logo />
        <Company />
        <Product />
        <Solutions />
        <Integrations />
        <Learns />
        <Download />
      </Box>
      <Flex cursor={"pointer"} mt={"50px"} pl={"50px"}>
        © 2022 Everhour Terms | Privacy | Cookies | Sitemap
      </Flex>
      <Flex gap={"15px"} justifyContent={"flex-end"}>
        <Box
          cursor={"pointer"}
          height={"24px"}
          width={"24px"}
          backgroundImage={
            "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/main-sprite-icons-v10.svg"
          }
          backgroundPosition={"0px -22px"}
          backgroundRepeat={"no-repeat"}
        />
        <Box
          cursor={"pointer"}
          height={"24px"}
          width={"24px"}
          backgroundImage={
            "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/main-sprite-icons-v10.svg"
          }
          backgroundPosition={"-48px -22px"}
          backgroundRepeat={"no-repeat"}
        />
        <Box
          cursor={"pointer"}
          height={"24px"}
          width={"24px"}
          backgroundImage={
            "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/main-sprite-icons-v10.svg"
          }
          backgroundPosition={"-24px -22px"}
          backgroundRepeat={"no-repeat"}
        />
        <Box
          cursor={"pointer"}
          height={"24px"}
          width={"24px"}
          backgroundImage={
            "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/main-sprite-icons-v10.svg"
          }
          backgroundPosition={"0px -538px"}
          backgroundRepeat={"no-repeat"}
        />
      </Flex>
    </Box>
  );
};

export default Footer;
