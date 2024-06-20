"use client";
import React, { useEffect } from "react";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { usegetUserId } from "@/lib/hook";
import { useRouter } from "next/navigation";

const page = () => {
  const authenticated = usegetUserId();
  const router = useRouter();
  console.log(authenticated);

  useEffect(() => {
    if (!authenticated) {
      router.push("/");
    }
  }, []);

  return !authenticated ? (
    <div>Redirecting... Please Log In</div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go back to Home page
      </button>

      <div className="flex-1 -mt-20">
        <Form text={"Job"} />;
      </div>

      <Footer />
    </div>
  );
};

export default page;
