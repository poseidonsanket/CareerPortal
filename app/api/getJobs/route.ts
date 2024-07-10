import { supabase } from "@/utils/supabase";
import { NextRequest } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("jobs").select();

  return Response.json({
    Jobs: data,
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
