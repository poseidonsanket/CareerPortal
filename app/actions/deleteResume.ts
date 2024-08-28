import { supabase } from "@/utils/supabase";

export default async function deleteResume(fileName: string) {
  const { data, error } = await supabase.storage
    .from("resume")
    .remove([fileName]);

  if (error) {
    console.error("Error deleting file");
    return false;
  }

  return true;
}
