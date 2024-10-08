import { supabase } from "@/utils/supabase";

export default async function downloadResume(fileName: string) {
  const { data, error } = await supabase.storage
    .from("resume")
    .download(fileName);

  if (error) {
    console.error("Error downloading file");
  }

  return data;
}
