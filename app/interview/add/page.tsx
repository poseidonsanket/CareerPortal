"use client";
import React from "react";
import InterviewForm from "@/components/interviewForm";
import Footer from "@/components/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

const page = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col min-h-screen min-w-screen">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
          Go back to Home page
        </button>

        <div className="flex-1 -mt-20">
          <InterviewForm />
        </div>

        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default page;
