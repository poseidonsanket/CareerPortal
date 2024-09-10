"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import axios from "axios";
import React, { useEffect, useState } from "react";

interface internships {
  companyname: string;
  inttitle: string;
  location: string;
  batcheligible: string;
  intlink: string;
  userid: string;
  id: number;
  isSaved: boolean;
}

const page = () => {
  const [loading, setLoading] = useState(true);
  const [ints, setInts] = useState<internships[]>([]);
  const [searchContext, setSearchContext] = useState<string>("companyname");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function getInternships() {
      const userId = localStorage.getItem("userid");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_URL!}/api/getInternships`,
        {
          params: { userId },
        }
      );
      setLoading(false);
      setInts(response.data.Internships);
      console.log(response.data.Internships);
    }
    getInternships();
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
          text={"internship"}
        />
        <div className="lg:grid lg:grid-cols-4">
          {ints.length > 0 && ints ? (
            ints?.map((int) => (
              <Card
                key={int.id}
                id={int.id}
                companyName={int.companyname}
                jobTitle={int.inttitle}
                location={int.location}
                batchEligible={int.batcheligible}
                jobLink={int.intlink}
                text={"internship"}
                isSavedForMe={int.isSaved}
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
