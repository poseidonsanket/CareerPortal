import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Resume from "@/components/Resume";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1">
        <Resume></Resume>
      </div>

      <Footer />
    </div>
  );
};

export default page;
