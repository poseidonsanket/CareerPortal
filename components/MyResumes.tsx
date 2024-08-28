"use client";
import getMyResume from "@/app/actions/getMyResume";
import React, { useEffect, useState } from "react";
import { Trash2, Download, Eye } from "lucide-react";
import downloadResume from "@/app/actions/downloadResume";
import deleteResume from "@/app/actions/deleteResume";
import toast from "react-hot-toast";

const MyResumes = () => {
  const [resumes, setResumes] = useState<any[]>([]);

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
    } else {
      toast.success("Resume not deleted");
    }
    console.log(`Delete file with ID:`);
  };
  useEffect(() => {
    const getResumes = async () => {
      const data = await getMyResume();
      console.log(data);
      setResumes(data!);
    };
    getResumes();
  }, [handleDelete]);
  return (
    <div className="lg:grid lg:gap-10 lg:mx-5 mb-5 lg:grid-cols-4">
      {resumes.map((file) => (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg max-w-lg lg:mx-auto mt-8 mx-10 min-w-80 text-sm">
          <h2 className=" font-extrabold mb-4 flex items-center break-words">
            <span className="mr-2 text-blue-400 break-words">📄</span>
            <span className="truncate w-full">
              {file.name.split("_").slice(2).join("_")}
            </span>
          </h2>
          <p className=" font-semibold mb-3 break-words">
            <strong>Type:</strong> {file.metadata.mimetype}
          </p>
          <p className=" mb-3 break-words">
            <strong>Size:</strong> {(file.metadata.size / 1024).toFixed(2)} KB
          </p>
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex space-x-2 items-center justify-center">
              <a
                href={
                  "https://ncjcgoqotqemmffuhdec.supabase.co/storage/v1/object/public/resume/" +
                  file.name
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
                onClick={() => handleDownload(file.name)}
              >
                <Download className="h-6 w-6" />
              </button>

              <button
                onClick={() => handleDelete(file.name)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyResumes;
