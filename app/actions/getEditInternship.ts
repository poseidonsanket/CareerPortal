"use server";
import { supabase } from "@/utils/supabase";

export async function getEditInternship(id: string | string[]) {
  if (!id) {
    return null;
  }
  const n_id = Number(id);
  const { data, error } = await supabase.from("internships").select().eq("id", n_id);

  return data;
}
