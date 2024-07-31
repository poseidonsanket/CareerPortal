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

  console.log(savedInterviews);

  const interviewIds = savedInterviews?.map((savedInterview) => savedInterview.interviewid);

  console.log(interviewIds);

  // Fetch jobs using the saved job IDs
  const { data: interviews, error: InterviewsError } = await supabase
    .from("interviews")
    .select("*")
    //@ts-ignore
    .in("id", interviewIds);

  console.log(interviews);
  // console.log(error);

  return interviews;
}
