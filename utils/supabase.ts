import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_SUPABASE_SECRET!;
export const supabase = createClient(supabaseUrl, supabaseKey);
