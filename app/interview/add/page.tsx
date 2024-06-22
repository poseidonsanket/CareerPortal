"use client";
import React, { useEffect, useState } from "react";
import InterviewForm from "@/components/interviewForm";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { toast } from 'react-hot-toast';

const page = () => {
  const [isAutheticated, setIsAuthenticated] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const authenticated = localStorage.getItem("userid");
    setIsAuthenticated(authenticated);
    if (!authenticated) {
      toast.error('Please Log In');
      router.push("/");
    }
  }, []);
  return !isAutheticated ? (
    <div>Redirecting... Please Wait</div>
  ) : (
    <div className="flex flex-col min-h-screen min-w-screen">
      <Header />

      <div className="flex-1">
        <InterviewForm />
      </div>

      <Footer />
    </div>
  );
};

export default page;
