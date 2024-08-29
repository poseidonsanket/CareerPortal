"use client";
import { supabase } from "@/utils/supabase";

export const fetchResume = async () => {
  const userId = localStorage.getItem("userid");
  const { data: resumeData, error: fetchError } = await supabase
    .from("user_resumes")
    .select("*")
    .eq("user_id", userId);

  if (fetchError) {
    console.error("Error fetching resumes:", fetchError.message);
    return [];
  }

  return resumeData;
};
