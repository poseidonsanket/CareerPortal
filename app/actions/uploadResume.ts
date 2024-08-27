"use client";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_SECRET!;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function uploadResume(file: File) {
  const userId = localStorage.getItem("userid");
  const fileName = `${userId}_${Date.now()}_${file.name}`;
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
  return true;
}
