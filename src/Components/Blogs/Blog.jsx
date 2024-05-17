import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper/modules";
import blogsData from "./BlogsData";

function Blog() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#0D9488",
        }}
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 14,
          },
          768: {
            // slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        // navigation={true}
        // modules={[Navigation]}
        className="mySwiper"
      >
        {blogsData.map((item) => {
          const { id, title, img,desc} = item;
          return (
              <SwiperSlide key={id}>
                  <div className="  dark:text-white bg-white dark:bg-[#242A38] rounded-2xl shadow-lg mb-5 mt-6 md:mt-12  p-2 md:p-5">
                    <div className="relative ">
                      <img src={img} alt="p1" className=" mx-auto w-fuwll " />
                    </div>

                    {/*<---  section course info  ----> */}
                    <div className="mt-2 md:mt-5">
                      <h4 className=" text-sm/[28px] md:text-xl  mb-1.5 mb:mb-2.5  font-danaMedium dark:text-white text-zinc-700 line-clamp-2 ">
                        {title}
                      </h4>
                      <p className="text-sm mt-2">{desc}</p>

                      <div className="flex gap-2 md:gap-2.5  justify-between">
                        {/*<---  section price  ----> */}
                        <div className="flex">
                          <svg className="w-6 h-6 text-teal-600">
                            <use href="#user"></use>
                          </svg>
                          <span className="text-teal-600 dark:text-emerald-500 text-base md:text-base font-danaBold">
                            {"علی شریفی"}
                          </span>
                        </div>

                        {/*<---  section offer token  ----> */}
                        <div className=" flex text-teal-600   ">
                          <svg className="w-5 h-5 ml-1 ">
                            <use href="#calendar"></use>
                          </svg>
                          <span className=" text-xs md:text-base font-danaMedium">
                            {"1403/01/18"}
                          </span>
                       
                        </div>
                      </div>
                    </div>

                    {/*<---  section footer  ----> */}
                    <footer className="mt-2.5 md:mt-4 flex justify-between items-center w-full ">
                      {/*<---  section content  ----> */}
                      <div className="flex items-center ">
                        <div className="hidden w-[26px] md:w-[36px] h-[26px] md:h-[36px] bg-gray-100 hover:bg-teal-600 text-gray-400 hover:text-white dark:hover:bg-emerald-500 dark:bg-zinc-900 rounded-full ml-2.5 md:ml-3   items-center justify-center transition-all">
                          <svg className="w-4 md:w-[22px] h-4 md:h-[22px] ">
                            <use href="#shopping-cart"></use>
                          </svg>
                        </div>
                        <svg className=" w-4 h-4 md:w-6 md:h-6 hover:text-teal-600 text-gray-400 transition-all">
                          <use href="#arrows-left-right"></use>
                        </svg>
                      </div>

                      {/*<---  section scors  ----> */}
                      <div className="flex items-center text-gray-400">
                        <svg className="w-4 h-4 md:w-6 md:h-6">
                          <use href="#star"></use>
                        </svg>
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                          <use href="#star"></use>
                        </svg>
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                          <use href="#star"></use>
                        </svg>
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                          <use href="#star"></use>
                        </svg>
                        <svg className="w-4 h-4 md:w-6 md:h-6 text-yellow-400">
                          <use href="#star"></use>
                        </svg>
                      </div>
                    </footer>
                  </div>
              </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}

export default Blog;
