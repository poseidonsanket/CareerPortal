import { supabase } from "../utils/supabase";

interface jobprops {
  companyName: string | undefined;
  jobTitle: string | undefined;
  location: string | undefined;
  batchEligible: string | undefined;
  jobLink: string | undefined;
  userId: string;
}

export const useInsertJob = async ({
  companyName,
  jobLink,
  jobTitle,
  location,
  userId,
  batchEligible,
}: jobprops) => {
  const { error } = await supabase.from("jobs").insert({
    companyname: companyName,
    jobtitle: jobTitle,
    location: location,
    batcheligible: batchEligible,
    joblink: jobLink,
    userid: userId,
  });

  if (error) return false;
  return true;
};
