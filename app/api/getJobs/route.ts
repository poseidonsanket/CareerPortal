import { supabase } from "@/utils/supabase";

export async function GET() {
  const { data, error } = await supabase.from("jobs").select();

  return Response.json({
    Jobs: data,
  });
}
