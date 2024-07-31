"use server";
import { supabase } from "@/utils/supabase";

export async function getMySavedInternship(userId: string | null) {
  if (!userId) {
    return null;
  }
  const { data: savedInts, error: savedIntsError } = await supabase
    .from("savedinternships")
    .select("internshipid")
    .eq("userid", userId);

  console.log(savedInts);

  const intIds = savedInts?.map((savedint) => savedint.internshipid);

  console.log(intIds);

  // Fetch jobs using the saved job IDs
  const { data: ints, error: IntsError } = await supabase
    .from("internships")
    .select("*")
    //@ts-ignore
    .in("id", intIds);

  console.log(ints);
  // console.log(error);

  return ints;
}
