"use server";
import { supabase } from "@/utils/supabase";

export async function saveJob(userId: string, id: number) {
  const { error } = await supabase.from("savedjobs").insert({
    jobid: id,
    userid: userId,
  });

  if (error) {
    return false;
  }

  return true;
}
