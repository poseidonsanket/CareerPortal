"use client";
import React from "react";
import Form from "@/components/Form";
import ProtectedRoute from "@/components/ProtectedRoute";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen min-w-screen">
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go back to Home page
        </button>

        <div className="flex-1 -mt-20">
          <Form text={"Job"} />;
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default page;
