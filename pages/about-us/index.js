import React from "react";
import { motion } from "framer-motion";
import { FaCoffee, FaLeaf, FaRecycle } from "react-icons/fa";
import Navbar from "@/components/Navbar";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const teamMembers = [
    {
      name: "Vera Apeakorang",
      role: "CEO",
      image: "/photo (1).jpeg",
    },
    {
      name: "Ahorsu Elikem",
      role: "COO",
      image: "/photo (2).jpeg",
    },
    {
      name: "Dennis Kotey",
      role: "Finance Officer",
      image: "/photo (3).jpeg",
    },
  ];

  return (
    <section>
      <Navbar />
      <div className="bg-gradient-to-b font-space from-orange-50 to-white min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-extrabold mt-20 text-orange-600 sm:text-5xl"
              variants={itemVariants}
            >
              About DiMi
            </motion.h2>
            <motion.p
              className="mt-4 text-2xl text-gray-700 font-light"
              variants={itemVariants}
            >
              "Eat Me" in Twi - Your Breakfast Haven in Accra's Traffic
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              className="text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
              variants={itemVariants}
            >
              DiMi is your go-to breakfast spot, bringing delicious and
              nutritious meals to Accra's busiest streets. We believe in
              starting your day right, even when you're on the move.
            </motion.p>

            <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
              <VisionCard
                icon={<FaCoffee className="h-12 w-12 text-orange-500" />}
                title="Wake Up & Go"
                description="Energizing breakfasts for busy commuters, designed to kickstart your day."
                itemVariants={itemVariants}
              />
              <VisionCard
                icon={<FaLeaf className="h-12 w-12 text-green-500" />}
                title="Fresh & Healthy"
                description="Nutritious ingredients sourced locally, packed with flavor and goodness."
                itemVariants={itemVariants}
              />
              <VisionCard
                icon={<FaRecycle className="h-12 w-12 text-blue-500" />}
                title="Eco-Friendly"
                description="Committed to sustainable practices and eco-conscious packaging."
                itemVariants={itemVariants}
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-32"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3
              className="text-3xl font-bold text-orange-600 text-center mb-12"
              variants={itemVariants}
            >
              Meet Our Team
            </motion.h3>
            <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  {...member}
                  itemVariants={itemVariants}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisionCard = ({ icon, title, description, itemVariants }) => (
  <motion.div
    className="flex flex-col items-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="mb-6"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    >
      {icon}
    </motion.div>
    <h3 className="mb-4 text-2xl font-bold text-orange-600">{title}</h3>
    <p className="text-lg text-gray-600 text-center">{description}</p>
  </motion.div>
);

const TeamMember = ({ name, role, image, itemVariants }) => (
  <motion.div
    className="flex flex-col items-center"
    variants={itemVariants}
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <motion.div
      className="w-[200px] h-[260px] mb-6  overflow-hidden"
      whileHover={{ scale: 1.1 }}
    >
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full  object-cover"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
    <motion.h4
      className="text-2xl font-semibold text-orange-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {name}
    </motion.h4>
    <motion.p
      className="text-xl text-gray-600"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      {role}
    </motion.p>
  </motion.div>
);

export default AboutUs;
