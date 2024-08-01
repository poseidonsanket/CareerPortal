"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const Form = ({ formdata, text, id }: any) => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState<string>(formdata.companyname);
  const [jobTitle, setJobTitle] = useState<string>(formdata.inttitle);
  const [location, setLocation] = useState<string>(formdata.location);
  const [batchEligible, setBatchEligible] = useState<string>(formdata.batcheligible);
  const [jobLink, setJobLink] = useState<string>(formdata.intlink);

  const handleIntSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = await localStorage.getItem("userid");

    if (!userId) {
      console.error("User ID not found in localStorage.");
      return;
    }

    const formData = {
      ...formdata,
      companyName: companyName,
      jobTitle: jobTitle,
      location: location,
      batchEligible: batchEligible,
      jobLink: jobLink,
      userId: userId,
    };

    const data = await axios.put(
      "https://career-portal-eight.vercel.app/api/getInternships",
      formData
    );

    if (data.data.msg === true) {
      toast.success("Data inserted successfully");
      router.push("/myposts");
    } else {
      toast.error("Cannot Insert Data");
    }
  };

  return (
    <div className="bg-gray-900 text-white mx-4 mt-40 md:mt-40 mb-10">
      <div className="flex justify-center items-center mt-20">
        <form
          className="w-full max-w-lg"
          onSubmit={handleIntSubmit}
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                id="company-name"
                type="text"
                placeholder="Enter company name"
                value={companyName}
                onChange={(e: any) => setCompanyName(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                {text + " Position"}
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-title"
                type="text"
                placeholder={"Enter " + text + " title"}
                value={jobTitle}
                onChange={(e: any) => setJobTitle(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Location
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="location"
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e: any) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Batch Eligible
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="batch-eligible"
                type="text"
                placeholder="Enter batch eligibility"
                value={batchEligible}
                onChange={(e: any) => setBatchEligible(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                {text + " Link"}
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-link"
                type="url"
                placeholder={"Enter" + " " + text + " link"}
                value={jobLink}
                onChange={(e: any) => setJobLink(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3 text-right">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
