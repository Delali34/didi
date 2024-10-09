import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { x: "100%", opacity: 0 },
    open: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const textVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const navLinkClasses =
    "relative group text-gray-800 transition-all duration-300 hover:text-didiYellow";

  return (
    <nav className="bg-white p-4 fixed w-full z-50 shadow-md">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/" className="">
            <Image src="/logo.png" width={70} height={70} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-semibold">
          {["Home", "Menu", "About Us", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className={navLinkClasses}
            >
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-didiYellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </Link>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="bg-didiYellow text-white py-2 px-6 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden p-2 rounded-md focus:outline-none hover:bg-gray-100 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-4/5 h-full bg-white z-50 md:hidden shadow-2xl"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-800 hover:text-didiYellow transition-colors duration-300"
              >
                X
              </button>
            </div>
            <div className="flex flex-col items-start justify-center h-full space-y-8 pl-12 text-2xl font-bold text-gray-800">
              {["Home", "Menu", "About Us", "Contact"].map((item, index) => (
                <motion.div key={item} variants={textVariants} custom={index}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    onClick={() => setIsOpen(false)}
                    className="relative group"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-didiYellow scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-12 left-0 w-full flex justify-center">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-didiYellow text-white py-3 px-8 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
