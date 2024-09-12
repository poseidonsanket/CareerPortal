"use client";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function uploadResume(file: File) {
  const userId = localStorage.getItem("userid");
  const fileName = `${userId}_${Date.now()}_${file.name}`;

  const { data: resumeData, error: fetchError } = await supabase
    .from("user_resumes")
    .select("*")
    .eq("user_id", userId);

  if (fetchError) {
    console.error("Error fetching resumes:", fetchError.message);
    return false;
  }

  if (resumeData.length === 3) {
    return "Cannot Upload more than 3 resumes";
  }

  const { data, error } = await supabase.storage
    .from("resume")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading file:", error.message);
    return false;
  }
  console.log("File uploaded successfully:", data);
  const { error: insertError } = await supabase.from("user_resumes").insert([
    {
      user_id: userId,
      file_name: fileName,
      is_default: resumeData.length === 0 ? true : false,
    },
  ]);

  if (insertError) {
    console.error("Error inserting resume into database:", insertError.message);
    return false;
  }
  return true;
}
