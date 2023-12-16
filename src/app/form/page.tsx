import React from "react";
import Header from "../../components/Form/CheckInHeader";
import Footer from "../../components/Form/CheckInFooter";
import Section from "../../components/Form/CheckInForm";
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
