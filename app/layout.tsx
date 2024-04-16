import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Career Portal",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <main className="">
          <div className="flex flex-col min-h-screen min-w-screen">
            <Header />

            <div className="flex-1">{children}</div>

            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
