import LandingPage from "@/components/LandingPage";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export default async function Index() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1">
        <LandingPage />
      </div>

      <Footer />
    </div>
  );
}
