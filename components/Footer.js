import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FFF9E5] font-space text-gray-800 py-8 px-4 md:px-8">
      <div className="max-w-[1320px] px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">DIMI</h2>
          <p className="mb-4 max-w-md">
            Food is more than just sustenance—it's an experience that brings
            people together, evoking memories and emotions with every bite. From
            the comforting warmth of a home-cooked meal.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-600">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Special Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Regular food
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Why choose us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Help</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms and condition
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Why choose us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>+88013973839</li>
            <li>food@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} DIME — All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
