"use server";
import { supabase } from "@/utils/supabase";

export async function getMyInterview(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data, error } = await supabase
    .from("interviews")
    .select()
    .eq("userid", userId);

  return data;
}
