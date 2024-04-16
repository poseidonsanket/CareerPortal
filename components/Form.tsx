"use client"

import React from "react";
import { useRef } from "react";

interface formProps {
  text: string;
}

const Form = (props: formProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const jobTitleRef = useRef<HTMLInputElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);
  const batchEligibleRef = useRef<HTMLInputElement>(null);
  const jobLinkRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      companyName: companyNameRef.current?.value || "",
      jobTitle: jobTitleRef.current?.value || "",
      location: locationRef.current?.value || "",
      batchEligible: batchEligibleRef.current?.value || "",
      jobLink: jobLinkRef.current?.value || "",
    };

    console.log("Form data:", formData);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  const { text } = props;
  return (
    <div className="bg-gray-900 text-white mx-4 mt-40 md:mt-40 mb-10">
      <div className="flex justify-center items-center mt-20">
        <form className="w-full max-w-lg" onSubmit={handleSubmit} ref={formRef}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Company Name
              </label>
              <input
                ref={companyNameRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                id="company-name"
                type="text"
                placeholder="Enter company name"
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
                ref={jobTitleRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-title"
                type="text"
                placeholder={"Enter " + text + " title"}
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
                ref={locationRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="location"
                type="text"
                placeholder="Enter location"
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
                ref={batchEligibleRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="batch-eligible"
                type="text"
                placeholder="Enter batch eligibility"
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
                ref={jobLinkRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-link"
                type="url"
                placeholder={"Enter" + " " + text + " link"}
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
