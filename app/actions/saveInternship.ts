"use server";
import { supabase } from "@/utils/supabase";

export async function saveInternship(userId: string, id: number) {
  const { error } = await supabase.from("savedinternships").insert({
    internshipid: id,
    userid: userId,
  });

  if (error) {
    return false;
  }

  return true;
}
