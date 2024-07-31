"use server";
import { supabase } from "@/utils/supabase";

export async function unsaveInterview(id: number) {
  const response = await supabase.from("savedinterviews").delete().eq("interviewid", id);

  return response;
}
