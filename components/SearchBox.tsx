"use client";
import React, { useState } from "react";

const SearchBox = ({
  searchQuery,
  searchContext,
  setSearchContext,
  setSearchQuery,
  text,
}: {
  searchQuery: string;
  searchContext: string;
  setSearchQuery: (arg: string) => void;
  setSearchContext: (arg: string) => void;
  text: string;
}) => {
  function handleSearch() {
    console.log(searchQuery);
    console.log(searchContext);
    setSearchQuery("");
  }
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg lg:mx-8 mt-8 mx-10 lg:max-w-full">
      <div className="flex justify-between items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          className="bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition-shadow w-full"
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition-shadow"
          value={searchContext}
          onChange={(e) => setSearchContext(e.target.value)}
        >
          <option value="companyname">Company Name</option>
          {(text === "job" || text === "interview   ") && <option value="jobtitle">Job Title</option>}
          {text === "internship" && <option value="inttitle">Internship Title</option>}
          {text != "interview" && <option value="location">Location</option>}
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hidden lg:block"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="lg:hidden flex justify-center items-center mt-5 max-w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
