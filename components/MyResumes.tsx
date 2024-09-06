"use client";
import React, { useEffect, useState } from "react";
import { Trash2, Download, Eye } from "lucide-react";
import downloadResume from "@/app/actions/downloadResume";
import deleteResume from "@/app/actions/deleteResume";
import toast from "react-hot-toast";
import { fetchResume } from "@/app/actions/fetchResume";
import { handleMarkAsDefault } from "@/app/actions/handleMarkAsDefault";
import { Header } from "./Header";
import Footer from "./Footer";

const MyResumes = () => {
  const [resumes, setResumes] = useState<any[]>([]);
  const [loading, setLoading] = useState<true | false>(true);

  const handleDownload = async (filename: string) => {
    // Implement download functionality
    console.log(filename);
    const data = await downloadResume(filename);
    console.log(data);
    const blobUrl = URL.createObjectURL(data!);
    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename.split("_").slice(2).join("_"); // You can also clean up the filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(blobUrl);
  };

  const handleDelete = async (filename: string) => {
    // Implement delete functionality
    // You might want to show a confirmation dialog before deleting
    const res = await deleteResume(filename);
    if (res) {
      toast.success("Resume deleted successfully");
      setResumes((prevResumes) =>
        prevResumes.filter((file) => file.file_name !== filename)
      );
    } else {
      toast.success("Resume not deleted");
    }
    console.log(`Delete file with ID:`);
  };

  const handleButtonClick = async (file: any) => {
    const data = await handleMarkAsDefault(file.id);
    if (data) {
      toast.success(
        `${file.file_name.split("_").slice(2).join("_")} marked as default`
      );
      const updatedResumes = resumes.map((resume) => ({
        ...resume,
        is_default: resume.id === file.id ? true : false,
      }));

      updatedResumes.sort((a, b) => (b.is_default ? 1 : -1));

      setResumes(updatedResumes);

      console.log(updatedResumes);
    } else {
      toast.error("Mark as default error");
    }
  };
  useEffect(() => {
    const getResumes = async () => {
      const data = await fetchResume();
      console.log(data);
      data.sort((a, b) => (b.is_default ? 1 : -1));
      setLoading(false);
      setResumes(data!);
    };
    getResumes();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center w-full min-h-[70vh]">
      <div className="loader"></div>
    </div>
  ) : (
    <div className="lg:grid lg:gap-10 lg:mx-5 mb-5 lg:grid-cols-4">
      {resumes!.map((file) => (
        <div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-lg lg:mx-auto mt-8 mx-10 lg:max-w-80 text-md"
          key={file.id}
        >
          <h2 className=" font-extrabold mb-4 flex items-center break-words">
            <span className="mr-2 text-blue-400 break-words">📄</span>
            <span className="truncate w-full">
              {file.file_name.split("_").slice(2).join("_")}
            </span>
          </h2>
          <div className="flex justify-between items-center">
            <div className="flex space-x-2 items-center justify-center">
              <a
                href={
                  "https://ncjcgoqotqemmffuhdec.supabase.co/storage/v1/object/public/resume/" +
                  file.file_name
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-blue-400 hover:text-blue-300">
                  <Eye className="h-6 w-6 mt-2" />
                </button>
              </a>

              <button
                className="text-blue-400 hover:text-blue-300"
                onClick={() => handleDownload(file.file_name)}
              >
                <Download className="h-6 w-6" />
              </button>

              <button
                onClick={() => handleDelete(file.file_name)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="h-6 w-6" />
              </button>
            </div>
            <button
              onClick={() => handleButtonClick(file)}
              className={`text-green-400 hover:text-green-300 ${
                file.is_default ? "font-bold" : ""
              }`}
            >
              {file.is_default ? "Default Resume" : "Mark as Default"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyResumes;
