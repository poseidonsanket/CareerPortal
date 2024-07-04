"use server";
import { supabase } from "@/utils/supabase";

export async function getMyInternship(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data, error } = await supabase
    .from("internships")
    .select()
    .eq("userid", userId);
    

  return data;
}
