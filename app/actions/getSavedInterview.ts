"use server";
import { supabase } from "@/utils/supabase";

export async function getMySavedInterviews(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data: savedInterviews, error: savedInterviewsError } = await supabase
    .from("savedinterviews")
    .select("interviewid")
    .eq("userid", userId);



  const interviewIds = savedInterviews?.map((savedInterview) => savedInterview.interviewid);



  // Fetch jobs using the saved job IDs
  const { data: interviews, error: InterviewsError } = await supabase
    .from("interviews")
    .select("*")
    //@ts-ignore
    .in("id", interviewIds);



  return interviews;
}
