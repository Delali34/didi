import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaUtensils, FaInfoCircle, FaEnvelope, FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const menuItems = [
    { name: "Home", path: "/", icon: <IoHomeSharp /> },
    { name: "Menu", path: "/", icon: <FaUtensils /> },
    { name: "About", path: "/about-us", icon: <FaInfoCircle /> },
  ];

  return (
    <nav className="bg-white py-3 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="Logo"
                className="mr-2"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center text-gray-700 hover:text-didiYellow transition-colors duration-200"
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex">
            {" "}
            <button className="bg-didiYellow text-white px-4 py-2 rounded-full hover:bg-didiYellow/60 transition-colors duration-200 flex items-center">
              Contact us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="text-gray-700 hover:text-didiYellow transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <Image
                    src="/logo.png"
                    width={40}
                    height={40}
                    alt="Logo"
                    className="mr-2"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 hover:text-didiYellow transition-colors duration-200"
                >
                  <IoMdClose size={24} />
                </button>
              </div>
              <div className="flex-grow overflow-y-auto py-4">
                {menuItems.map((item) => (
                  <motion.div key={item.name} variants={itemVariants}>
                    <Link
                      href={item.path}
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-didiYellow transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="mr-4 text-xl">{item.icon}</span>
                      <span className="text-lg">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="p-4 border-t border-gray-200">
                <button className="w-full bg-didiYellow text-white px-4 py-3 rounded-full hover:bg-green-700 transition-colors duration-200 flex items-center justify-center">
                  <FaSearch className="mr-2" />
                  Contact
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
