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
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { deleteInterview } from "@/app/actions/deleteInterview";

interface InterviewCardProps {
  companyName: string;
  position: string;
  verdict: string;
  id: number;
  link: string;
  onDelete: (id: number) => void;
}

const MyPostInterviewCard: React.FC<InterviewCardProps> = ({
  companyName,
  position,
  verdict,
  id,
  link,
  onDelete,
}) => {
  const router = useRouter();

  let verdictIcon;
  let verdictText;
  let verdictColorClass;

  switch (verdict) {
    case "selected":
      verdictIcon = <FaCheckCircle className="text-green-500 mr-2" />;
      verdictText = "Selected";
      verdictColorClass = "text-green-500";
      break;
    case "rejected":
      verdictIcon = <FaTimesCircle className="text-red-500 mr-2" />;
      verdictText = "Rejected";
      verdictColorClass = "text-red-500";
      break;
    case "pending":
    default:
      verdictIcon = <FaClock className="text-yellow-400 mr-2" />;
      verdictText = "Pending";
      verdictColorClass = "text-yellow-400";
      break;
  }
  function handleEditClick() {
    router.push(`/interview-edit/${id}`);
  }

  async function handleDeleteClick() {
    const id1 = id.toString();
    const res = await deleteInterview(id1);
    if (res) {
      toast.success("Data deleted Successfully");
      onDelete(id);
    }

  }
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mt-8 min-w-80 lg:mx-auto mx-10">
      <div className="flex justify-between">
        <div> </div>
        <div className="flex flex-end gap-4">
          <FaEdit
            className="text-blue-400 text-xl cursor-pointer"
            onClick={handleEditClick}
          />
          <FaTrash
            className="text-red-400 text-xl cursor-pointer"
            onClick={handleDeleteClick}
          />
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
        {link ? (
          <a
            className="flex items-center justify-center max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="mr-2" />
            View Details
          </a>
        ) : (
          <button
            className="flex items-center justify-center max-w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push(`/interview/${id}`)}
          >
            <FaExternalLinkAlt className="mr-2" />
            View Details
          </button>
        )}
      </div>
    </div>
  );
};

export default MyPostInterviewCard;
