"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { useEffect, useState } from "react";
import InterviewCard from "@/components/InterviewCard";
import axios from "axios";
import Card from "@/components/MySavedPostCard";
import { getMySavedJob } from "../actions/getSavedJobs";
import { getMySavedInternship } from "../actions/getSavedInternship";
import { getMySavedInterviews } from "../actions/getSavedInterview";
import SavedInterviewCard from "@/components/MySavedInterviewCard";

const Page = () => {
  const [activeSection, setActiveSection] = useState("job");
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<any[] | null | undefined>([]);
  const [interviews, setInterviews] = useState<any[] | null | undefined>([]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };
  console.log(activeSection);

  useEffect(() => {
    const getMyPost = async () => {
      if (activeSection === "job") {
        const userId = localStorage.getItem("userid");
        const response = await getMySavedJob(userId);
        setLoading(false);
        setJobs(response);
        console.log(response);
      }
      if (activeSection === "internship") {
        const userId = localStorage.getItem("userid");
        const response = await getMySavedInternship(userId);
        setLoading(false);
        setJobs(response);
      }
      if (activeSection === "interview") {
        const userId = localStorage.getItem("userid");
        const response = await getMySavedInterviews(userId);
        setLoading(false);
        setInterviews(response);
      }
    };
    getMyPost();
  }, [activeSection]);

  const handleUnsaveCard = (id: number) => {
    setJobs((prevJobs) => prevJobs?.filter((job) => job.id !== id));
  };

  const handleUnsaveInterviewCard = (id: number) => {
    setInterviews((prevInterviews) =>
      prevInterviews?.filter((inter) => inter.id !== id)
    );
    console.log(interviews);
  };

  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-1 mt-20 mb-20">
        <div className="flex justify-center space-x-4">
          <SectionButton
            section="job"
            active={activeSection === "job"}
            onClick={() => handleSectionClick("job")}
          >
            Job
          </SectionButton>
          <SectionButton
            section="internship"
            active={activeSection === "internship"}
            onClick={() => handleSectionClick("internship")}
          >
            Internship
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
              //@ts-ignore
              jobs && jobs.length > 0 ? (
                //@ts-ignore
                jobs.map((job) => (
                  <Card
                    key={job.id}
                    id={job.id}
                    companyName={job.companyname}
                    jobTitle={job.jobtitle}
                    location={job.location}
                    batchEligible={job.batcheligible}
                    jobLink={job.joblink}
                    text={activeSection}
                    onUnsave={handleUnsaveCard}
                  />
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-600 py-8">
                  No jobs/internships data available
                </div>
              )
            ) : interviews && interviews.length > 0 ? (
              interviews.map((inter) => (
                <SavedInterviewCard
                  key={inter.id}
                  companyName={inter.companyname}
                  position={inter.jobtitle}
                  verdict={inter.verdict}
                  id={inter.id}
                  link={inter.link}
                  onUnsave={handleUnsaveInterviewCard}
                />
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-400 py-8">
                No interview data available
              </div>
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
