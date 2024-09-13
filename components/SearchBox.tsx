"use client";
import React, { useState } from "react";

const SearchBox = ({
  searchQuery,
  searchContext,
  setSearchContext,
  setSearchQuery,
  text,
  data,
  originalData,
  setFilteredResults,
}: {
  searchQuery: string;
  searchContext: string;
  setSearchQuery: (arg: string) => void;
  setSearchContext: (arg: string) => void;
  text: string;
  data: Array<any>;
  originalData: Array<any>;
  setFilteredResults: (arg: Array<any>) => void;
}) => {
  function handleSearch() {
    const filteredData = data.filter((item) => {
      if (searchContext === "companyname") {
        return item.companyname
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      } else if (searchContext === "jobtitle") {
        return item.jobtitle?.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchContext === "inttitle") {
        return item.inttitle?.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchContext === "location") {
        return item.location?.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (searchContext === "verdict") {
        return item.verdict?.toLowerCase().includes(searchQuery.toLowerCase());
      }

      return false;
    });

    setFilteredResults(filteredData);
    setSearchQuery("");
  }

  function resetData() {
    console.log(originalData);
    setFilteredResults(originalData);
    setSearchQuery("");
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleSearch();
    }
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
          onKeyDown={handleKeyDown}
        />

        <select
          className="bg-gray-700 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition-shadow"
          value={searchContext}
          onChange={(e) => setSearchContext(e.target.value)}
        >
          <option value="companyname">Company Name</option>
          {(text === "job" || text === "interview") && (
            <option value="jobtitle">Job Title</option>
          )}
          {text === "internship" && (
            <option value="inttitle">Internship Title</option>
          )}
          {text != "interview" && <option value="location">Location</option>}
          {text === "interview" && <option value="verdict">Verdict</option>}
        </select>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hidden lg:block"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg hidden lg:block"
          onClick={resetData}
        >
          Reset
        </button>
      </div>
      <div className="lg:hidden flex justify-center items-center mt-5 max-w-full gap-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
          onClick={resetData}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
