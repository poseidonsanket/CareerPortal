"use server";
import { supabase } from "@/utils/supabase";

export async function getEditJob(id: string | string[]) {
  if (!id) {
    return null;
  }
  const n_id = Number(id);
  const { data, error } = await supabase.from("jobs").select().eq("id", n_id);

  return data;
}
