import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

interface intData {
  id: Number
}
export async function POST(req: NextRequest) {
  const data = await req.json();
  const { companyName, jobTitle, rounds, verdict } = data;

  try {
    const { data , error } = await supabase
      .from("interviews")
      .insert({
        companyname: companyName,
        jobtitle: jobTitle,
        verdict: verdict,
      })
      .select("id");

    for (let i: number = 0; i < rounds.length; i++) {
      const { error } = await supabase.from("rounds").insert({
        //@ts-ignore
        interviewid: data[0].id,
        title: rounds[i].title,
        description: rounds[i].description,
      });
    }
    return NextResponse.json({
      msg: true,
    });
  } catch (e) {
    return NextResponse.json({
      msg: false,
    });
  }
}
