"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import axios from "axios";
import SearchBox from "@/components/SearchBox";

interface jobs {
  companyname: string;
  jobtitle: string;
  location: string;
  batcheligible: string;
  joblink: string;
  userid: string;
  id: number;
  isSaved: boolean;
}

const index = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState<jobs[]>([]);
  const [searchContext, setSearchContext] = useState<string>("companyname");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function getJobs() {
      const userId = localStorage.getItem("userid");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL!}/api/getJobs`,
        //@ts-ignore
        {
          params: { userId },
        }
      );
      setLoading(false);
      setJobs(response.data.Jobs);
    }
    getJobs();
  }, []);

  return loading ? (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 flex justify-center items-center">
        <div className="loader"></div>
      </div>

      <Footer />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 mb-20">
        <SearchBox
          searchQuery={searchQuery}
          searchContext={searchContext}
          setSearchQuery={setSearchQuery}
          setSearchContext={setSearchContext}
          text={"job"}
        />
        <div className="lg:grid lg:grid-cols-4">
          {jobs.length > 0 && jobs ? (
            jobs.map((job) => (
              <Card
                key={job.id}
                id={job.id}
                companyName={job.companyname}
                jobTitle={job.jobtitle}
                location={job.location}
                batchEligible={job.batcheligible}
                jobLink={job.joblink}
                text={"job"}
                isSavedForMe={job.isSaved}
              />
            ))
          ) : (
            <h1 className="col-span-4 text-center py-8">No jobs</h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
