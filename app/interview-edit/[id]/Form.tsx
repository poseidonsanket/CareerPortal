"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState, useRef, FormEvent } from "react";
import toast from "react-hot-toast";

interface Round {
  title: string;
  description: string;
}

const Form = ({ formdata, roundData, id }: any) => {
  const router = useRouter();
  const [companyName, setCompanyName] = useState<string>(formdata?.companyname);
  const [jobTitle, setJobTitle] = useState<string>(formdata?.jobtitle);
  const [roundsData, setRoundsData] = useState<any[]>(roundData);
  const [verdict, setVerdict] = useState<string>(formdata?.verdict);
  const [link, setLink] = useState<string>(formdata?.link);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const userId = await localStorage.getItem("userid");

    const formData: any = {
      companyName: companyName || "",
      jobTitle: jobTitle || "",
      verdict: verdict || "",
      rounds: [],
      link: "",
      userId: userId,
      id: id,
    };

    if (link != "") {
      formData.link = link || "";
    } else {
      formData.rounds = roundData;
    }


    const data = await axios.put(
      "http://localhost:3000/api/getInterviews",
      formData
    );

    if (data.data.msg === true) {
      toast.success("Data Updated successfully");
      router.push("/myposts");
    } else {
      toast.error("Cannot Update Data");
    }
  };

  const handleRoundTitleChange = (index: number, value: string) => {
    const updatedRounds = [...roundsData];
    updatedRounds[index].title = value;
    setRoundsData(updatedRounds);
  };

  const handleRoundDescriptionChange = (index: number, value: string) => {
    const updatedRounds = [...roundsData];
    updatedRounds[index].description = value;
    setRoundsData(updatedRounds);
  };

  return (
    <div className="bg-gray-900 text-white mx-4 mt-40 md:mt-40 mb-10">
      <div className="flex justify-center items-center mt-20">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Company Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700"
                id="company-name"
                type="text"
                value={companyName}
                placeholder="Enter company name"
                required
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Position
              </label>
              <input
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="job-title"
                type="text"
                value={jobTitle}
                placeholder="Enter job title"
                required
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </div>
          </div>

          {formdata?.link != "" ? (
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                  Link
                </label>
                <input
                  className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                  type="url"
                  value={link}
                  placeholder="Enter link"
                  required
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
            </div>
          ) : (
            <>
              {roundsData.map((round: any, index: any) => (
                <div key={index} className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                      Round {index + 1} Title
                    </label>
                    <input
                      value={round.title}
                      onChange={(e) => {
                        handleRoundTitleChange(index, e.target.value);
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
                      value={round.description}
                      onChange={(e) => {
                        handleRoundDescriptionChange(index, e.target.value);
                      }}
                      className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                      placeholder={`Enter round ${index + 1} description`}
                      required
                    />
                  </div>
                </div>
              ))}
            </>
          )}

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-300 text-xs font-bold mb-2">
                Verdict
              </label>
              <select
                className="appearance-none block w-full bg-gray-800 text-white border border-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                id="verdict"
                value={verdict}
                required
                onChange={(e) => setVerdict(e.target.value)}
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

export default Form;
