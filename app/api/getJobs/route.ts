import { supabase } from "@/utils/supabase";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  console.log(userId);

  const { data, error } = await supabase.from("jobs").select();

  const { data: savedJobs, error: savedJobsError } = await supabase
    .from("savedjobs")
    .select("jobid")
    .eq("userid", userId);

  //@ts-ignore
  const savedJobIds = new Set(savedJobs?.map((job) => job.jobid));

  console.log(savedJobIds);

  const jobsWithSavedFlag = data?.map((job) => ({
    ...job,
    isSaved: savedJobIds.has(job.id),
  }));

  return Response.json({
    Jobs: jobsWithSavedFlag,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { companyName, jobLink, jobTitle, location, userId, batchEligible } =
    data;

  const { error } = await supabase.from("jobs").insert({
    companyname: companyName,
    jobtitle: jobTitle,
    location: location,
    batcheligible: batchEligible,
    joblink: jobLink,
    userid: userId,
  });

  if (error) {
    return Response.json({
      msg: false,
    });
  }
  return Response.json({
    msg: true,
  });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const {
    companyName,
    jobLink,
    jobTitle,
    location,
    userId,
    batchEligible,
    id,
  } = data;

  const n_id = Number(id);

  const { error } = await supabase
    .from("jobs")
    .update({
      companyname: companyName,
      jobtitle: jobTitle,
      location: location,
      batcheligible: batchEligible,
      joblink: jobLink,
      userid: userId,
    })
    .eq("id", n_id);

  if (error) {
    return Response.json({
      msg: false,
    });
  }
  return Response.json({
    msg: true,
  });
}
