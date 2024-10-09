import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaLeaf, FaAward, FaTruck } from "react-icons/fa";

const FeatureCard = ({ icon, title, description, delay }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay }}
      className="bg-white shadow-lg p-8 rounded-lg flex justify-center flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
    >
      <div className="mb-6 text-4xl  text-yellow-600">{icon}</div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="bg-yellow-50 font-space py-20 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 30 },
          }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, health,
            and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 place-content-center md:grid-cols-3 gap-10">
          <FeatureCard
            icon={<FaLeaf />}
            title="Serve Healthy Food"
            description="We prioritize your well-being by serving nutritious and delicious meals made from fresh, high-quality ingredients."
            delay={0.2}
          />
          <FeatureCard
            icon={<FaAward />}
            title="Best Quality"
            description="Our commitment to excellence ensures that every dish meets the highest standards of taste and presentation."
            delay={0.4}
          />
          <FeatureCard
            icon={<FaTruck />}
            title="Fast Delivery"
            description="Enjoy prompt and reliable delivery service, bringing your favorite meals right to your doorstep in no time."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
