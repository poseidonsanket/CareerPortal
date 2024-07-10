"use server";
import { supabase } from "@/utils/supabase";

export async function deleteInternship(id: string | string[]) {
  if (!id) {
    return null;
  }
  const n_id = Number(id);

  const response = await supabase.from("internships").delete().eq("id", n_id);

  return response;
}
