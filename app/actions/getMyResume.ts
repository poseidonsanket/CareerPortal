import { supabase } from "@/utils/supabase";

export default async function getMyResume() {
  const userId = localStorage.getItem("userid");

  const { data, error } = await supabase.storage
    .from("resume")
    .list("");

  if (error) {
    console.error("Error listing files:", error.message);
    return null;
  }

  const specificFile = data.filter((file) => file.name.startsWith(`${userId}_`));

  if (!specificFile) {
    console.error("No file found for this user");
    return null;
  }

  return specificFile;
}
