import React from "react";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

const OurMenu = () => {
  return (
    <section className="bg-white font-space  py-20 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Exciting flavors are on their way. Stay tuned for our delicious
            offerings!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 max-w-md"
          >
            <h3 className="text-3xl md:text-left text-center font-semibold text-gray-800 mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We're cooking up something special! Our new menu will feature a
              variety of mouth-watering dishes crafted with the finest
              ingredients.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <FaUtensils className="text-3xl text-orange-500" />
              <span className="text-xl font-medium text-gray-700">
                Culinary excellence awaits
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2 max-w-sm"
          >
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                <div className="bg-gradient-to-b from-orange-300 to-orange-500 h-full w-full flex flex-col items-center justify-center p-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="text-4xl font-bold text-white mb-4"
                  >
                    Coming Soon
                  </motion.div>
                  <motion.img
                    src="/logo.png" // Replace with an actual food image
                    alt="Delicious Food"
                    className="w-32 h-32 object-cover rounded-full mb-4"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <p className="text-white text-center">
                    Get ready for a culinary adventure!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurMenu;
