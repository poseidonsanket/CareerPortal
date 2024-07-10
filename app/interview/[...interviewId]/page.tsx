"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import InterviewDescription from "@/components/InterviewDescription";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

interface interview {
  id: number;
  companyname: string;
  jobtitle: string;
  verdict: string;
}

interface rounds {
  id: number;
  interviewid: number;
  title: string;
  description: string;
}

const page = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [interview, setInterview] = useState<interview>({
    id: 0,
    companyname: "",
    jobtitle: "",
    verdict: "",
  });
  const [rounds, setRounds] = useState<rounds[]>([]);
  const interviewId = Number(params.interviewId[0]);

  useEffect(() => {
    const getDescription = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/getInterviews/${interviewId}`
      );
      setLoading(false);
      setInterview(response.data.interview[0]);
      setRounds(response.data.rounds);
    };
    getDescription();
  }, [interviewId]);
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
      <div className="flex-1">
        <InterviewDescription interview={interview} rounds={rounds} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
