import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Choose from "@/components/Choose";
import Menu from "@/components/Menu";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Choose />
      <Menu />
    </div>
  );
};

export default index;
