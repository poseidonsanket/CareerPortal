import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import InterviewCard from "@/components/InterviewCard";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 mb-20">
        <div className="grid grid-cols-5">
          <InterviewCard
            companyName="XYZ Company"
            position="Senior Developer"
            verdict="Rejected"
            readMoreLink="https://example.com/interview-details"
          />
          <InterviewCard
            companyName="XYZ Company"
            position="Senior Developer"
            verdict="Pending"
            readMoreLink="https://example.com/interview-details"
          />
          <InterviewCard
            companyName="XYZ Company"
            position="Senior Developer"
            verdict="Selected"
            readMoreLink="https://example.com/interview-details"
          />
          <InterviewCard
            companyName="XYZ Company"
            position="Senior Developer"
            verdict="Selected"
            readMoreLink="https://example.com/interview-details"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
