import { Box } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Box
      backgroundImage={
        "https://blog-cdn.everhour.com/assets/images/new-design/icons/svg/main-sprite-icons-v10.svg"
      }
      height={"32px"}
      width={"32px"}
      backgroundPosition={"-32px -94px"}
    ></Box>
  );
};

export default Logo;
