"use client";
import { getEditJob } from "@/app/actions/getEditJob";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Form from "./Form";

const page = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState<any[] | null>();
  const id = params.id;
  useEffect(() => {
    const getData = async () => {
      const data = await getEditJob(id);
      setLoading(false);
      //@ts-ignore
      setFormData(data[0]);
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
        <Form formdata={formData} text={"Job"} id={id} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
