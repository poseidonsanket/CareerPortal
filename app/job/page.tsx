"use client"
import React from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import { useGetJobs } from "@/hooks/useGetJobs";

const index = () => {
  const { jobs, isJobs } = useGetJobs();
  console.log(jobs[0]);
  console.log(isJobs);
  return !isJobs ? (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-1 mt-20">Loading</div>
      <Footer />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 mb-20">
        <div className="grid grid-cols-4">
          {jobs.map((job) => (
            <Card
              key={job.id}
              companyName={job.companyname}
              jobTitle={job.jobtitle}
              location={job.location}
              batchEligible={job.batcheligible}
              jobLink={job.joblink}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
