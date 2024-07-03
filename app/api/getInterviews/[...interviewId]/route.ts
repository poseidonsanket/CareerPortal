import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabase";

export async function GET(req: NextRequest, { params }: any) {
  const interviewId = params.interviewId[0];

  try {
    const { data: interviewData, error: interviewError } = await supabase
      .from("interviews")
      .select()
      .eq("id", interviewId);

    if (interviewError) {
      throw interviewError;
    }

    const { data: roundsData, error: roundsError } = await supabase
      .from("rounds")
      .select()
      .eq("interviewid", interviewId);

    if (roundsError) {
      throw roundsError;
    }

    return NextResponse.json({
      interview: interviewData,
      rounds: roundsData,
    });
  } catch (error) {
    console.error("Error fetching data");
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
