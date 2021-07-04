import "./Slider.css";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/core";
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

function Slider() {
  return (
    <>
      <Swiper
        loop={true}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner_center">
            <h1>hello world,</h1>
            <h2>
              i am <span>graphic & web designer</span>
            </h2>
            <h2>from morocco</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_center">
            <h1>hello world,</h1>
            <h2>
              i am <span>graphic & web designer</span>
            </h2>
            <h2>from morocco</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner_center">
            <h1>hello world,</h1>
            <h2>
              i am <span>graphic & web designer</span>
            </h2>
            <h2>from morocco</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
