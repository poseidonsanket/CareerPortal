"use client";
import axios from "axios";
import React, { useState, useRef, FormEvent } from "react";
import toast from "react-hot-toast";

interface Round {
  title: string;
  description: string;
}

const InterviewForm = () => {
  const [numRounds, setNumRounds] = useState<number>(1);
  const [showLinkInput, setShowLinkInput] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const companyNameRef = useRef<HTMLInputElement>(null);
  const jobTitleRef = useRef<HTMLInputElement>(null);
  const roundTitleRefs = useRef<HTMLInputElement[]>([]);
  const roundDescriptionRefs = useRef<HTMLTextAreaElement[]>([]);
  const verdictRef = useRef<HTMLSelectElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData: any = {
      companyName: companyNameRef.current?.value || "",
      jobTitle: jobTitleRef.current?.value || "",
      verdict: verdictRef.current?.value || "",
      rounds: [],
      link: "",
    };

    if (showLinkInput) {
      formData.link = linkRef.current?.value || "";
    } else {
      formData.rounds = roundTitleRefs.current.map((_, index) => ({
        title: roundTitleRefs.current[index]?.value || "",
        description: roundDescriptionRefs.current[index]?.value || "",
      }));
    }

    const data = await axios.post("http://localhost:3000/api/getInterviews", formData);

    if (data.data.msg === true) {
      toast.success("Data inserted successfully");
      if (formRef.current) {
        formRef.current.reset();
      }
    } else {
      toast.error("Cannot Insert Data");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  const addRound = () => {
    setNumRounds((prevNumRounds) => prevNumRounds + 1);
  };

  const removeRound = () => {
    setNumRounds((prevNumRounds) => (prevNumRounds > 1 ? prevNumRounds - 1 : prevNumRounds));
  };

  const toggleLinkInput = () => {
    setShowLinkInput((prevShowLinkInput) => !prevShowLinkInput);
  };

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
                Position
              </label>
              <input
                ref={jobTitleRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-title"
                type="text"
                placeholder="Enter job title"
                required
              />
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <button
              type="button"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={toggleLinkInput}
            >
              {showLinkInput ? "Add Rounds" : "Add Link"}
            </button>
          </div>

          {showLinkInput ? (
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Link
                </label>
                <input
                  ref={linkRef}
                  className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                  type="text"
                  placeholder="Enter link"
                  required
                />
              </div>
            </div>
          ) : (
            <>
              {Array.from({ length: numRounds }).map((_, index) => (
                <div key={index} className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                      Round {index + 1} Title
                    </label>
                    <input
                      ref={(el) => {
                        if (el) roundTitleRefs.current[index] = el;
                      }}
                      className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                      type="text"
                      placeholder={`Enter round ${index + 1} title`}
                      required
                    />
                    <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                      Round {index + 1} Description
                    </label>
                    <textarea
                      ref={(el) => {
                        if (el) roundDescriptionRefs.current[index] = el;
                      }}
                      className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                      placeholder={`Enter round ${index + 1} description`}
                      required
                    />
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center mb-6">
                <button
                  type="button"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={addRound}
                >
                  Add Round
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={removeRound}
                >
                  Remove Round
                </button>
              </div>
            </>
          )}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Verdict
              </label>
              <select
                ref={verdictRef}
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="verdict"
                required
              >
                <option value="">Select verdict</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
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

export default InterviewForm;
