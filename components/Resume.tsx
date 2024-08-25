import React from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";

const Resume = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] bg-background">
      <div className="max-w-md w-full space-y-4 p-6 rounded-lg shadow-lg bg-card">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload Your Resume</h1>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="resume">Resume</Label>
            <div className="relative">
              <input
                id="resume"
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <div className="border border-gray-300 rounded-lg p-2 text-gray-500 flex justify-between items-center">
                <span className="mr-2 text-lg font-bold">Upload Resume</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Choose File
                </button>
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Upload Resume
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Resume;
