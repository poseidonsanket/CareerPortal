// "use client"
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

interface jobs {
  companyname: string;
  jobtitle: string;
  location: string;
  batcheligible: string;
  joblink: string;
  userid: string;
  id: number;
}

export const useGetJobs = () => {
  const [jobs, setJobs] = useState<jobs[]>([]);
  const [isJobs, setIsjobs] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("jobs").select();

      if (data) {
        setJobs(data);
        setIsjobs(true);
      }
    };

    getData();
  }, []);

  return { jobs, isJobs };
};
