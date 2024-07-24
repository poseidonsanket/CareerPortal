"use server";
import { supabase } from "@/utils/supabase";

export async function getEditInterview(id: string | string[]) {
  if (!id) {
    return null;
  }
  const n_id = Number(id);
  const { data: interviewData, error: interviewError } = await supabase
    .from("interviews")
    .select()
    .eq("id", n_id);

  const { data: roundsData, error: roundsError } = await supabase
    .from("rounds")
    .select()
    .eq("interviewid", n_id);

  return {
    data: interviewData,
    rounds: roundsData,
  };
}
