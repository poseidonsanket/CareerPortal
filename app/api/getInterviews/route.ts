import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { companyName, jobTitle, rounds, verdict, link, userId } = data;

  try {
    const { data, error } = await supabase
      .from("interviews")
      .insert({
        companyname: companyName,
        jobtitle: jobTitle,
        verdict: verdict,
        link: link,
        userid: userId,
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

export async function GET(req: NextRequest) {
  const userId = req.nextUrl.searchParams.get("userId");
  const { data, error } = await supabase.from("interviews").select();

  const { data: savedInterviews, error: savedJobsError } = await supabase
    .from("savedinterviews")
    .select("interviewid")
    .eq("userid", userId);

  const savedInterviewIds = new Set(
    savedInterviews?.map((inter) => inter.interviewid)
  );


  const InterviewsWithSavedFlag = data?.map((inter) => ({
    ...inter,
    isSaved: savedInterviewIds.has(inter.id),
  }));

  return Response.json({
    Interviews: InterviewsWithSavedFlag,
  });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();
  const { companyName, jobTitle, rounds, verdict, link, userId, id } = data;

  const n_id = Number(id);

  try {
    const { data, error } = await supabase
      .from("interviews")
      .update({
        companyname: companyName,
        jobtitle: jobTitle,
        verdict: verdict,
        link: link,
        userid: userId,
      })
      .eq("id", n_id);

    const { error: deleteError } = await supabase
      .from("rounds")
      .delete()
      .eq("interviewid", n_id);

    for (let i: number = 0; i < rounds.length; i++) {
      const { error } = await supabase.from("rounds").insert({
        //@ts-ignore
        interviewid: rounds[i].interviewid,
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
