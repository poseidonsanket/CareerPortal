"use client";
import { saveInternship } from "@/app/actions/saveInternship";
import { saveJob } from "@/app/actions/saveJob";
import { unsaveInternship } from "@/app/actions/unsaveInternship";
import { unsaveJob } from "@/app/actions/unsaveJob";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa";

interface CardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  batchEligible: string;
  jobLink: string;
  text: string;
  id: number;
  onUnsave: (id: number) => void;
}

const Card: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  location,
  batchEligible,
  jobLink,
  text,
  id,
  onUnsave,
}) => {
  const userId = localStorage.getItem("userid");
  const [isSaved, setIsSaved] = useState(true);

  const handleSaveClick = async (id: number, userId: string | null) => {
    if (text === "job") {
      const data = await unsaveJob(id);
      if (data) {
        toast.success(`${text} Unsaved`);
        onUnsave(id);
      }
    }
    if (text === "internship") {
      const data = await unsaveInternship(id);
      if (data) {
        toast.success(`${text} Unsaved`);
        onUnsave(id);
      }
    }
  };
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg lg:mx-auto mt-8 lg:max-w-80 mx-10">
      <div className="flex justify-between">
        <div> </div>
        <div
          className="flex flex-end"
          onClick={() => handleSaveClick(id, userId)}
        >
          {isSaved ? (
            <FaBookmark className="text-white-400 text-xl" />
          ) : (
            <FaRegBookmark className="text-gray-400 text-xl" />
          )}
        </div>
      </div>

      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        <FaBuilding className="mr-2 text-blue-400" />
        {companyName}
      </h2>
      <p className="text-xl font-semibold mb-3">{jobTitle}</p>
      <div className="text-md mb-3 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-green-400" />
        <span>Location: {location}</span>
      </div>
      <div className="text-md mb-3 flex">
        <FaGraduationCap className="mr-2 text-yellow-400 h-6 w-6" />
        <span>Batch Eligible: {batchEligible}</span>
      </div>
      <div className="text-right mt-4">
        <a
          href={jobLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default Card;
