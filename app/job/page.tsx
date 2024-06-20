import React from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const index = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20">page</div>

      <Footer />
    </div>
  );
};

export default index;
