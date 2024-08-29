import { supabase } from "@/utils/supabase";

export const handleMarkAsDefault = async (resumeId: string) => {
  const userId = localStorage.getItem("userid");

  // Unset the previous default resume
  await supabase
    .from("user_resumes")
    .update({ is_default: false })
    .eq("user_id", userId)
    .eq("is_default", true);

  // Set the selected resume as default
  const { error } = await supabase
    .from("user_resumes")
    .update({ is_default: true })
    .eq("id", resumeId);

  if (error) {
    console.error("Error marking resume as default:", error.message);
    return false;
  }

  return true;

};
