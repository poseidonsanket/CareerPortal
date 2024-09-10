"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import InterviewCard from "@/components/InterviewCard";
import SearchBox from "@/components/SearchBox";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface interviews {
  companyname: string;
  jobtitle: string;
  verdict: string;
  id: number;
  link: string;
  isSaved: boolean;
}

const page = () => {
  const [loading, setLoading] = useState(true);
  const [interviews, setInterviews] = useState<interviews[]>([]);
  const [searchContext, setSearchContext] = useState<string>("companyname");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function getInterviews() {
      const userId = localStorage.getItem("userid");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL!}/api/getInterviews`,
        {
          params: { userId },
        }
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
        <SearchBox
          searchQuery={searchQuery}
          searchContext={searchContext}
          setSearchQuery={setSearchQuery}
          setSearchContext={setSearchContext}
          text={"interview"}
        />
        <div className="lg:grid lg:grid-cols-4">
          {interviews.length > 0 && interviews ? (
            interviews?.map((inter) => (
              <InterviewCard
                key={inter.id}
                companyName={inter.companyname}
                position={inter.jobtitle}
                verdict={inter.verdict}
                id={inter.id}
                link={inter.link}
                isSavedForMe={inter.isSaved}
              />
            ))
          ) : (
            <h1 className="col-span-4 text-center py-8">No Interviews</h1>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
