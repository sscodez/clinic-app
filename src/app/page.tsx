import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Section from "../components/Section/Section";
const page = () => {
  return (
    <div className="flex flex-col items-center w-[100%] justify-between h-[100vh] ">
      <Header />
      <Section />
      <Footer />
    </div>
  );
};

export default page;
