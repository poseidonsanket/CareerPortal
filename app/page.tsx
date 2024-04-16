import { createClient } from "@/utils/supabase/server";
import LandingPage from "@/components/LandingPage";

export default async function Index() {
  const canInitSupabaseClient = () => {
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div>
      <LandingPage />
    </div>
  );
}
