"use client";
import React, { useEffect, useState } from "react";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";

const page = () => {
  const [isAutheticated, setIsAuthenticated] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const authenticated = localStorage.getItem("userid");
    setIsAuthenticated(authenticated);
    if (!authenticated) {
      alert("please Log In")
      router.push("/");
    }
  }, []);

  return !isAutheticated ? (
    <div>Redirecting... Please Wait</div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1">
        <Form text={"Job"} />
      </div>

      <Footer />
    </div>
  );
};

export default page;
