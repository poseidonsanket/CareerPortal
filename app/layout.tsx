import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Career Portal",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <main className="">
          <Toaster
            position="top-center"
            toastOptions={{
              error: {
                duration: 1600,
              },
            }}
          />
          <NextTopLoader />
          {children}
        </main>
      </body>
    </html>
  );
}
