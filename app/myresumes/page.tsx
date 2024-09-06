import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import MyResumes from "@/components/MyResumes";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 max-w-full max-h-full">
        <MyResumes/>
      </div>

      <Footer />
    </div>
  );
};

export default page;