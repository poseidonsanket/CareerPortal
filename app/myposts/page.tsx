"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import React, { use, useEffect, useState } from "react";
import { getMyJob } from "../actions/getMyJob";
import Card from "@/components/MyPostCard";
import { getMyInternship } from "../actions/getMyInternship";
import { getMyInterview } from "../actions/getMyInterview";
import MyPostInterviewCard from "@/components/MyPostInterviewCard";

const Page = () => {
  const [activeSection, setActiveSection] = useState("job");

  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<any[] | null | undefined>([]);
  const [interviews, setInterviews] = useState<any[] | null | undefined>([]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const userId = localStorage.getItem("userid");
    const getMyPost = async () => {
      if (activeSection === "job") {
        const data = await getMyJob(userId);
        setLoading(false);
        setJobs(data);
      }
      if (activeSection === "internship") {
        const data = await getMyInternship(userId);
        setLoading(false);
        setJobs(data);
      }
      if (activeSection === "interview") {
        const data = await getMyInterview(userId);
        setLoading(false);
        setInterviews(data);
      }
    };
    getMyPost();
    console.log(jobs);
    console.log(interviews);
  }, [activeSection]);

  console.log(jobs);
  console.log(interviews);

  const handleDeleteCard = (id: string) => {
    setJobs((prevJobs) => prevJobs?.filter((job) => job.id !== id));
  };

  const handleDeleteInterviewCard = (id: number) => {
    setInterviews((prevInterviews) =>
      prevInterviews?.filter((inter) => inter.id !== id)
    );
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
          <div className="flex-1 flex justify-center items-center h-[60vh]">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-4">
            {activeSection !== "interview" ? (
              jobs && jobs.length > 0 ? (
                jobs.map((job) => (
                  <Card
                    text={activeSection}
                    key={job.id}
                    companyName={job.companyname}
                    jobTitle={job.jobtitle}
                    location={job.location}
                    batchEligible={job.batcheligible}
                    jobLink={job.joblink}
                    id={job.id}
                    intTitle={job.inttitle}
                    intLink={job.intlink}
                    onDelete={handleDeleteCard}
                  />
                ))
              ) : (
                <div className="col-span-4 text-center text-gray-400 py-8">
                  {"No Added " + activeSection}
                </div>
              )
            ) : interviews && interviews.length > 0 ? (
              interviews.map((inter) => (
                <MyPostInterviewCard
                  key={inter.id}
                  companyName={inter.companyname}
                  position={inter.jobtitle}
                  verdict={inter.verdict}
                  id={inter.id}
                  link={inter.link}
                  onDelete={handleDeleteInterviewCard}
                />
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-400 py-8">
                {"No Added " + activeSection}
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
