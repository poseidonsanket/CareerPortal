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
  isSavedForMe: boolean;
}

const Card: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  location,
  batchEligible,
  jobLink,
  text,
  id,
  isSavedForMe,
}) => {
  const userId = localStorage.getItem("userid");
  const [isSaved, setIsSaved] = useState(isSavedForMe);

  const handleSaveClick = async (id: number, userId: string | null) => {
    if (text === "job") {
      if (!isSaved) {
        const data = await saveJob(
          //@ts-ignore
          userId,
          id
        );
        if (data) {
          toast.success(`${text} Saved`);
          setIsSaved(true);
        } else {
          toast.error(`${text} Not Saved`);
        }
      } else {
        const data = await unsaveJob(id);
        if (data) {
          setIsSaved(false);
          toast.success(`${text} Unsaved`);
        }
      }
    }
    if (text === "internship") {
      if (!isSaved) {
        const data = await saveInternship(
          //@ts-ignore
          userId,
          id
        );
        if (data) {
          toast.success(`${text} Saved`);
          setIsSaved(true);
        } else {
          toast.error(`${text} Not Saved`);
        }
      } else {
        const data = await unsaveInternship(id);
        if (data) {
          setIsSaved(false);
          toast.success(`${text} Unsaved`);
        }
      }
    }
  };
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg lg:mx-auto mt-8 mx-10 min-w-80">
      <div className="flex justify-between">
        <div> </div>
        {userId && (
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
        )}
      </div>

      <h2 className="text-2xl font-extrabold mb-4 flex items-center break-words">
        <FaBuilding className="mr-2 text-blue-400" />
        {companyName}
      </h2>
      <p className="text-xl font-semibold mb-3 break-words">{jobTitle}</p>
      <div className="text-md mb-3 flex items-center break-words">
        <FaMapMarkerAlt className="mr-2 text-green-400" />
        <span>Location: {location}</span>
      </div>
      <div className="text-md mb-3 flex items-center break-words">
        <FaGraduationCap className="mr-2 text-yellow-400" />
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
