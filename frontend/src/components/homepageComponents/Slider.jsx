import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Box, Image, useBreakpointValue } from "@chakra-ui/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/notion-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
  "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp",
];

const Slider = () => {
  const widthV = useBreakpointValue({
    base: "100vh",
    md: "1000px",
  });

  return (
    <Box maxWidth={widthV}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((el, i) => {
          return (
            <SwiperSlide key={i} maxWidth={widthV}>
              <Image src={`${el}`} margin={"auto"} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Slider;
