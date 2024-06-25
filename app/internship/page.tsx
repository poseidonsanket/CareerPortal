import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import React from "react";

const page = () => {
  const dummyData = {
    companyName: "Example Inc.",
    jobTitle: "Software Engineer",
    location: "New York, NY",
    batchEligible: "2024 Graduates",
    jobLink: "https://example.com/job",
  };
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 mb-20">
        <div className="lg:grid lg:grid-cols-4">
          <Card
            companyName={dummyData.companyName}
            jobTitle={dummyData.jobTitle}
            location={dummyData.location}
            batchEligible={dummyData.batchEligible}
            jobLink={dummyData.jobLink}
          />
          <Card
            companyName={dummyData.companyName}
            jobTitle={dummyData.jobTitle}
            location={dummyData.location}
            batchEligible={dummyData.batchEligible}
            jobLink={dummyData.jobLink}
          />
          <Card
            companyName={dummyData.companyName}
            jobTitle={dummyData.jobTitle}
            location={dummyData.location}
            batchEligible={dummyData.batchEligible}
            jobLink={dummyData.jobLink}
          />
          <Card
            companyName={dummyData.companyName}
            jobTitle={dummyData.jobTitle}
            location={dummyData.location}
            batchEligible={dummyData.batchEligible}
            jobLink={dummyData.jobLink}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
