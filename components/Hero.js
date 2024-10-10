import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const images = ["/burger.png", "/por.png", "/drink.png"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimating(false);
      }, 500); // Half a second for fade out
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
                className="bg-didiYellow text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                href="/order"
              >
                Make Order
              </Link>
              <Link
                className="border-2 border-didiYellow text-didiYellow py-3 px-8 rounded-full text-lg font-semibold flex items-center justify-center space-x-2 hover:bg-yellow-50 transition duration-300 ease-in-out transform hover:scale-105"
                href="/process"
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
            <div className="absolute inset-0 overflow-x-hidden overflow-y-hidden">
              <div
                className={`transition-all duration-500 ease-in-out 
                  ${
                    isAnimating
                      ? "opacity-0 lg:translate-y-full translate-x-full"
                      : "opacity-100 translate-y-0 translate-x-0"
                  }`}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt="Delicious Food"
                  width={1000}
                  height={1500}
                />
              </div>
            </div>
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
