"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { use, useEffect, useState } from "react";
import { getMyJob } from "../actions/getMyJob";
import Card from "@/components/Card";
import { getMyInternship } from "../actions/getMyInternship";
import { getMyInterview } from "../actions/getMyInterview";
import InterviewCard from "@/components/InterviewCard";


const Page = () => {
  const [activeSection, setActiveSection] = useState("jobs");
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<any[] | null | undefined>([]);
  const [interviews, setInterviews] = useState<any[] | null | undefined>([]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };
  console.log(activeSection);

  useEffect(() => {
    const userId = localStorage.getItem("userid");
    const getMyPost = async () => {
      if (activeSection === "jobs") {
        const data = await getMyJob(userId);
        setLoading(false);
        setJobs(data);
        console.log(data);
      }
      if (activeSection === "internships") {
        const data = await getMyInternship(userId);
        setLoading(false);
        setJobs(data);
        console.log(data);
      }
      if (activeSection === "internships") {
        const data = await getMyInterview(userId);
        setLoading(false);
        setInterviews(data);
        console.log(data);
      }
    };
    getMyPost();
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-1 mt-20 mb-20">
        <div className="flex justify-center space-x-4">
          <SectionButton
            section="jobs"
            active={activeSection === "jobs"}
            onClick={() => handleSectionClick("jobs")}
          >
            Jobs
          </SectionButton>
          <SectionButton
            section="internships"
            active={activeSection === "internships"}
            onClick={() => handleSectionClick("internships")}
          >
            Internships
          </SectionButton>
          <SectionButton
            section="interview"
            active={activeSection === "interview"}
            onClick={() => handleSectionClick("interview")}
          >
            Interview
          </SectionButton>
        </div>
        {loading ? (
          <div className="flex-1 flex justify-center items-center min-h-screen">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-4">
            {activeSection !== "interview" ? (
               jobs ? (
                jobs.map((job) => (
                  <Card
                    key={job.id}
                    companyName={job.companyname}
                    jobTitle={job.jobtitle}
                    location={job.location}
                    batchEligible={job.batcheligible}
                    jobLink={job.joblink}
                  />
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-600 py-8">
                  No jobs/internships data available
                </div>
              )
            ) : (

              interviews ? (
                interviews.map((inter) => (
                  <InterviewCard
                    key={inter.id}
                    companyName={inter.companyname}
                    position={inter.jobtitle}
                    verdict={inter.verdict}
                    id={inter.id}
                    link={inter.link}
                  />
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-400 py-8">
                  No interview data available
                </div>
              )
            )}

          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

const SectionButton = ({ children, active, onClick }: any) => {
  return (
    <button
      className={`text-lg px-4 py-2 rounded mt-5 ${
        active ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Page;
