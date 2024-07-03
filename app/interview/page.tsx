"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import InterviewCard from "@/components/InterviewCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface interviews {
  companyname: string;
  jobtitle: string;
  verdict: string;
  id: number;
}

const page = () => {
  const [loading, setLoading] = useState(true);
  const [interviews, setInterviews] = useState<interviews[]>([]);

  useEffect(() => {
    async function getInterviews() {
      const response = await axios.get(
        "http://localhost:3000/api/getInterviews"
      );
      setLoading(false);
      setInterviews(response.data.Interviews);
    }
    getInterviews();
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
        <div className="lg:grid lg:grid-cols-4">
          {interviews?.map((inter) => (
            <InterviewCard
              key={inter.id}
              companyName={inter.companyname}
              position={inter.jobtitle}
              verdict={inter.verdict}
              id={inter.id}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
