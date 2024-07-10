"use server";
import { supabase } from "@/utils/supabase";

export async function deleteJob(id: string | string[]) {
  if (!id) {
    return null;
  }
  const n_id = Number(id);

  const response = await supabase.from("jobs").delete().eq("id", n_id);

  return response;
}
