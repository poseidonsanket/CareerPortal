"use client";
import { deleteInternship } from "@/app/actions/deleteInternship";
import { deleteJob } from "@/app/actions/deleteJob";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

interface CardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  batchEligible: string;
  jobLink: string;
  text: string;
  id: string;
  intLink: string;
  intTitle: string;
  onDelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  location,
  batchEligible,
  jobLink,
  text,
  id,
  intLink,
  intTitle,
  onDelete,
}) => {
  const handleDeleteClick = async () => {
    if (text === "job") {
      const res = await deleteJob(id);
      if (res) {
        toast.success("Data deleted Successfully");
        onDelete(id);
      }
    }

    if (text === "internship") {
      const res = await deleteInternship(id);
      if (res) {
        toast.success("Data deleted Successfully");
        onDelete(id);
      }
    }
    // Add delete functionality here
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg lg:mx-auto mt-8 lg:max-w-80 mx-10">
      <div className="flex justify-between">
        <div> </div>
        <div className="flex space-x-4">
          {text === "job" ? (
            <Link href={"/job/edit/" + id}>
              <FaEdit className="text-blue-400 text-xl cursor-pointer" />
            </Link>
          ) : (
            <Link href={"/internship/edit/" + id}>
              <FaEdit className="text-blue-400 text-xl cursor-pointer" />
            </Link>
          )}
          <FaTrash
            className="text-red-400 text-xl cursor-pointer"
            onClick={handleDeleteClick}
          />
        </div>
      </div>

      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        <FaBuilding className="mr-2 text-blue-400" />
        {companyName}
      </h2>
      <p className="text-xl font-semibold mb-3">
        {jobTitle ? jobTitle : intTitle}
      </p>
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
          href={jobLink ? jobLink : intLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:scale-105 cursor-pointer"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default Card;
