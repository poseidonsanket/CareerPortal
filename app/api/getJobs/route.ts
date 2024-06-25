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
  console.log(data);
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
