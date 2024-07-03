import { supabase } from "@/utils/supabase";
import { NextRequest } from "next/server";

export async function GET() {
  const { data, error } = await supabase.from("internships").select();

  return Response.json({
    Internships: data,
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { companyName, intLink, intTitle, location, userId, batchEligible } =
    data;

  const { error } = await supabase.from("internships").insert({
    companyname: companyName,
    inttitle: intTitle,
    location: location,
    batcheligible: batchEligible,
    intlink: intLink,
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
