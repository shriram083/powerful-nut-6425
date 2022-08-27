import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "../components/homepageComponents/Slider";
import HomeTop from "../components/homepageComponents/HomeTop";
import rating from "../assets/rating.png";
import timeTracking from "../assets/timeTracking.png";
import HomeBody from "../components/homepageComponents/HomeBody";
import Popular from "../components/homepageComponents/Popular";
import poster from "../assets/HomePoster.png";

const HomePage = () => {
  return (
    <Box>
      <HomeTop rating={rating} />
      <HomeBody timeTracking={timeTracking} />
      <Popular />
      <Slider />
      <Image src={poster} mt={"100px"} mb={"100px"} />
    </Box>
  );
};

export default HomePage;
