
import { supabase } from "@/utils/supabase";

export default async function downloadResume(fileName: string) {

  const { data, error } = await supabase.storage
    .from("resume")
    .download(fileName);

    return data;
}
