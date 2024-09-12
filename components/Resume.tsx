"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-label";
import uploadResume from "@/app/actions/uploadResume";
import toast from "react-hot-toast";
import Link from "next/link";

const Resume = () => {
  const [file, setFile] = useState<File>();
  const [loading, setLoading] = useState(false);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const handleResumeUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file) {
      setLoading(true);
      try {
        const data = await uploadResume(file);
        if (data === "Cannot Upload more than 3 resumes") {
          toast.error("Cannot Upload more than 3 resumes");
        }
        if (data == true) {
          toast.success("Resume Uploaded Successfully");
        }
        else if(data == false){
          toast.error("Cannot Upload File");
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    } else {
      console.log("No file selected.");
      toast.error("No file selected");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-background max-w-200 lg:mt-0 mt-20">
      {loading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="loader"></div>
        </div>
      )}
      <div className="max-w-md w-full space-y-4 p-6 rounded-lg shadow-lg bg-card">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Upload Your Resume</h1>
        </div>
        <form className="space-y-4" onSubmit={handleResumeUpload}>
          <div className="space-y-2">
            <Label htmlFor="resume">Resume</Label>
            <div className="flex justify-between items-center border border-gray-300 rounded-lg p-1 text-gray-400">
              <label className="pl-1">
                {file ? file.name : "Upload Resume"}
              </label>
              <div className="ml-4">
                <input
                  id="resume"
                  type="file"
                  onChange={handleFileChange}
                  className="w-[109px] text-md text-gray-900 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 hover:file:bg-gray-100"
                />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full">
            Upload Resume
          </Button>
        </form>
        <div className="mt-1">
          <Link href="myresumes">
            <Button className="w-full">My Resumes</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resume;
