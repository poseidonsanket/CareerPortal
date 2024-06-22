import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ncjcgoqotqemmffuhdec.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5jamNnb3FvdHFlbW1mZnVoZGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMyNzU1MTMsImV4cCI6MjAyODg1MTUxM30.x612eXZExqwpZ8PvWlN1AC_qEGMxuIboblE_5_sBmKw";
export const supabase = createClient(supabaseUrl, supabaseKey);
