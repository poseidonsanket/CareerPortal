"use client";
import { getEditInterview } from "@/app/actions/getEditInterview";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "./Form";

const page = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any[] | null>();
  const [roundsData, setRoundsData] = useState<any[] | null>([]);
  const id = params.id;
  useEffect(() => {
    const getData = async () => {
      const data = await getEditInterview(id);
      
      
      //@ts-ignore
      setFormData(data.data[0]);
      //@ts-ignore
      setRoundsData(data.rounds);
      setLoading(false);
    };
    getData();
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

      <div className="flex-1">
        <Form formdata={formData} roundData={roundsData} id={id} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
