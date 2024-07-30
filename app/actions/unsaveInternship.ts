"use server";
import { supabase } from "@/utils/supabase";

export async function unsaveInternship(id: number) {
  const response = await supabase
    .from("savedinternships")
    .delete()
    .eq("internshipid", id);

  return response;
}
