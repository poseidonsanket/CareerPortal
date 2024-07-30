"use server";
import { supabase } from "@/utils/supabase";

export async function unsaveJob(id: number) {
  const response = await supabase.from("savedjobs").delete().eq("jobid", id);

  return response;
}
