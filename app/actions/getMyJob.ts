"use server";
import { supabase } from "@/utils/supabase";

export async function getMyJob(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data, error } = await supabase
    .from("jobs")
    .select()
    .eq("userid", userId);

  return data;
}
