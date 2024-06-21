import React from "react";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

interface CardProps {
  companyName: string;
  jobTitle: string;
  location: string;
  batchEligible: string;
  jobLink: string;
}

const Card: React.FC<CardProps> = ({
  companyName,
  jobTitle,
  location,
  batchEligible,
  jobLink,
}) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-extrabold mb-4 flex items-center">
        <FaBuilding className="mr-2 text-blue-400" />
        {companyName}
      </h2>
      <p className="text-xl font-semibold mb-3">{jobTitle}</p>
      <div className="text-md mb-3 flex items-center">
        <FaMapMarkerAlt className="mr-2 text-green-400" />
        <span>Location: {location}</span>
      </div>
      <div className="text-md mb-3 flex items-center">
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
