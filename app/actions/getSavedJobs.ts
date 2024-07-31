"use server";
import { supabase } from "@/utils/supabase";

export async function getMySavedJob(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data: savedJobs, error: savedJobsError } = await supabase
    .from("savedjobs")
    .select("jobid")
    .eq("userid", userId);



  const jobIds = savedJobs?.map((savedJob) => savedJob.jobid);



  // Fetch jobs using the saved job IDs
  const { data: jobs, error: jobsError } = await supabase
    .from("jobs")
    .select("*")
    //@ts-ignore
    .in("id", jobIds);



  return jobs;
}
