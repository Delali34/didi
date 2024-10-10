import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Import the correct styles for autoplay

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="max-w-[1320px] font-space mx-auto px-4 mt-20 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Text Section */}
          <div className="text-center lg:text-left space-y-8 max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight">
              Good <span className="text-didiYellow">Food </span>
              Good <span className="text-didiYellow">Mood</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Experience life's richness through every delicious bite and sip,
              relishing the flavors that make each moment truly memorable.
            </p>
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                className="bg-didiYellow text-white py-3 px-8 rounded-full text-[16px] font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                href="/"
              >
                Make Order
              </Link>
              <Link
                className="border-2 border-didiYellow text-didiYellow py-3 px-8 rounded-full text-[16px] font-semibold flex items-center justify-center space-x-2 hover:bg-yellow-50 transition duration-300 ease-in-out transform hover:scale-105"
                href="/"
              >
                <span>Order Process</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-[500px]">
            <Swiper
              modules={[Autoplay, Navigation]}
              autoplay={{
                delay: 4000, // Adjust delay for autoplay
                disableOnInteraction: false,
              }}
              loop={true}
              spaceBetween={30} // Add space between slides
              slidesPerView={1} // Set slides per view to 1
              className="w-full h-full"
            >
              <SwiperSlide>
                <div className="w-full h-full relative">
                  <Image
                    src="/burger.png"
                    alt="Burger Image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full relative">
                  <Image
                    src="/drink.png" // Change to a different image if needed
                    alt="Pizza Image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full h-full relative">
                  <Image
                    src="/por.png" // Another different image
                    alt="Pasta Image"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-8 right-4 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 -right-4 w-20 h-20 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
