import React from "react";

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

const InterviewDescription = ({interview,rounds}: {interview: interview, rounds: rounds[]}) => {
  return (
    <div className="flex flex-col bg-gray-900 text-white p-12 mt-20">
      <div className="max-w-full">
        <div className="flex items-center mb-8">
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold mb-4">{interview.companyname}</h1>
            <p className="text-xl font-semibold text-gray-300">
              Job Title: {interview.jobtitle}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Rounds:</h2>
          {rounds.map((round, index) => (
            <div key={index} className="border-b border-gray-600 mb-4 pb-4">
              <h3 className="text-xl font-semibold">{round.title}</h3>
              <p className="text-lg text-gray-300">{round.description}</p>
            </div>
          ))}
        </div>

        <p className="text-lg font-semibold text-gray-300 mb-4">Verdict:</p>
        <p className="text-xl">{interview.verdict}</p>
      </div>
    </div>
  );
};

export default InterviewDescription;
