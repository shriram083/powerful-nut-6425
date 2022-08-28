import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Slider from "../components/homepageComponents/Slider";
import HomeTop from "../components/homepageComponents/HomeTop";
import rating from "../assets/rating.png";
import timeTracking from "../assets/timeTracking.png";
import HomeBody from "../components/homepageComponents/HomeBody";
import Popular from "../components/homepageComponents/Popular";
import poster from "../assets/HomePoster.png";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const forToken = () => {
    const code = searchParams.get("code");
    localStorage.setItem("token", code);
  };

  useEffect(() => {
    forToken();
  }, []);

  return (
    <Box
      m={"auto"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <HomeTop rating={rating} />
      <HomeBody timeTracking={timeTracking} />
      <Popular />
      <Slider />
      <Image src={poster} mt={"100px"} mb={"100px"} />
    </Box>
  );
};

export default HomePage;
