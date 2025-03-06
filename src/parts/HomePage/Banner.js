import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  const [swiper, setSwiper] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div className="container mx-auto py-8">
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
          className="mb-8"
        >
          <SwiperSlide>
            <img src="images/content/banner.png" alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/content/banner.png" alt="" className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="images/content/banner.png" alt="" className="w-full" />
          </SwiperSlide>
        </Swiper>

        <div className="flex items-center justify-start gap-4">
          <button 
            onClick={handlePrev}
            className="flex items-center justify-center"
          >
            <img src="images/content/banner-prev.png" alt="Previous" />
          </button>

          <div className="flex gap-3">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => swiper.slideTo(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-green-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="flex items-center justify-center"
          >
            <img src="images/content/banner-next.png" alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;