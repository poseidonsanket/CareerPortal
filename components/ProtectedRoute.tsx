"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const ProtectedRoute = ({ children }: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useLayoutEffect(() => {
    const userId = localStorage.getItem("userid");
    if (!userId) {
      router.push("/");
      setIsLogin(true);
      alert("Please Log In")
    }
  }, []);

  return !isLogin ? <>{children}</> : null;
};

export default ProtectedRoute;
