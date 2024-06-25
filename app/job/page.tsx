"use client";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import axios from "axios";

interface jobs {
  companyname: string;
  jobtitle: string;
  location: string;
  batcheligible: string;
  joblink: string;
  userid: string;
  id: number;
}

const index = () => {
  const [loading, setLoading] = useState(true);
  const [jobs,setJobs] = useState<jobs[]>([])

  useEffect(() => {
    async function getJobs() {
      const response = await axios.get("http://localhost:3000/api/getJobs");
      console.log(response.data.Jobs);
      setLoading(false);
      setJobs(response.data.Jobs);
    }
    getJobs();
  }, []);

  return loading ? (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />
      <div className="flex-1 mt-20">Loading</div>
      <Footer />
    </div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1 mt-20 mb-20">
        <div className="lg:grid lg:grid-cols-4">
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
