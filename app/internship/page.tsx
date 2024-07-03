"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
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
}

const page = () => {
  const [loading, setLoading] = useState(true);
  const [ints, setInts] = useState<internships[]>([]);

  useEffect(() => {
    async function getInternships() {
      const response = await axios.get(
        "http://localhost:3000/api/getInternships"
      );
      setLoading(false);
      setInts(response.data.Jobs);
    }
    getInternships();
  }, []);
  const dummyData = {
    companyName: "Example Inc.",
    jobTitle: "Software Engineer",
    location: "New York, NY",
    batchEligible: "2024 Graduates",
    jobLink: "https://example.com/job",
  };
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
          {ints.map((int) => (
            <Card
              key={int.id}
              companyName={int.companyname}
              jobTitle={int.inttitle}
              location={int.location}
              batchEligible={int.batcheligible}
              jobLink={int.intlink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
