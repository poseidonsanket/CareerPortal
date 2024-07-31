"use server";
import { supabase } from "@/utils/supabase";

export async function saveInterview(userId: string, id: number) {
  const { error } = await supabase.from("savedinterviews").insert({
    interviewid: id,
    userid: userId,
  });

  if (error) {
    return false;
  }

  return true;
}
