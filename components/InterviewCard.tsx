"use client";
import React, { useState } from "react";
import {
  FaBuilding,
  FaCheckCircle,
  FaTimesCircle,
  FaExternalLinkAlt,
  FaClock,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

interface InterviewCardProps {
  companyName: string;
  position: string;
  verdict: string;
  id: number,
}

const InterviewCard: React.FC<InterviewCardProps> = ({
  companyName,
  position,
  verdict,
  id,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };
  let verdictIcon;
  let verdictText;
  let verdictColorClass;

  switch (verdict) {
    case "Selected":
      verdictIcon = <FaCheckCircle className="text-green-500 mr-2" />;
      verdictText = "Selected";
      verdictColorClass = "text-green-500";
      break;
    case "Rejected":
      verdictIcon = <FaTimesCircle className="text-red-500 mr-2" />;
      verdictText = "Rejected";
      verdictColorClass = "text-red-500";
      break;
    case "Pending":
    default:
      verdictIcon = <FaClock className="text-yellow-400 mr-2" />;
      verdictText = "Pending";
      verdictColorClass = "text-yellow-400";
      break;
  }

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8 min-w-80 lg:mx-auto mx-10">
      <div className="flex justify-between">
        <div> </div>
        <div className="flex flex-end" onClick={handleSaveClick}>
          {isSaved ? (
            <FaBookmark className="text-white-400 text-xl" />
          ) : (
            <FaRegBookmark className="text-gray-400 text-xl" />
          )}
        </div>
      </div>
      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        <FaBuilding className="mr-2" />
        {companyName}
      </h2>
      <p className="text-xl font-semibold mb-3">{position}</p>
      <div className={`text-md mb-3 flex items-center ${verdictColorClass}`}>
        {verdictIcon}
        Verdict: {verdictText}
      </div>
      <div className="text-left mt-4 -z-100">
        <button
          className="flex items-center justify-center max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <FaExternalLinkAlt className="mr-2" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
