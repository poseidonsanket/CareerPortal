import { supabase } from "@/utils/supabase";

export default async function deleteResume(fileName: string) {
  const userId = localStorage.getItem("userid");
  const { data, error } = await supabase.storage
    .from("resume")
    .remove([fileName]);

  const { error: tableError } = await supabase
    .from("user_resumes")
    .delete()
    .eq("user_id", userId)
    .eq("file_name", fileName);

  if (error) {
    console.error("Error deleting file");
    return false;
  }

  return true;
}
