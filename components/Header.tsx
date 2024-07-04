"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import app from "../utils/firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import HeaderDropDown from "./HeaderDropDown";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";

interface ButtonOutlineProps {
  value: string;
  href: string;
}

interface LoginButtonProps {
  data: string;
}

export function ButtonOutline(props: ButtonOutlineProps) {
  const { value, href } = props;
  return (
    <Button
      variant="outline"
      className="bg-[#1F2937] text-white m-0 block w-full text-lg"
    >
      <Link href={href}>{value}</Link>
    </Button>
  );
}

export function ButtonWithIcon({ data }: LoginButtonProps) {
  return (
    <Button>
      <Mail className="mr-2 h-4 w-4" /> {data}
    </Button>
  );
}

export const Header = () => {
  const router = useRouter();
  const [isMenu, setIsMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [photoUrl, setphotoUrl] = useState<string>("");
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const handleMenu = () => {
    setIsMenu((isMenu) => !isMenu);
  };
  const closeMenu = () => {
    setIsMenu(false);
  };

  const handleMouseEnter = () => {
    setIsComponentVisible(true);
  };

  const handleMouseLeave = () => {
    setIsComponentVisible(false);
  };

  const handleMyPosts = () => {
    router.push("/myposts");
  };

  const signIn = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const email = result.user.email;
        const photo = result.user.photoURL;
        const uid = result.user.uid;
        localStorage.setItem("userid", uid);

        if (photo) {
          setphotoUrl(photo);
          localStorage.setItem("photo", photo);
        }

        setIsLogin(true);
        setIsMenu(false);
        toast.success("Login Successfull");
      })
      .catch((error) => {
        alert("Error logging in");
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  async function handleSignOut() {
    const auth = getAuth(app);
    try {
      await signOut(auth);
      localStorage.removeItem("userid");
      localStorage.removeItem("photo");
      setIsLogin(false);
      router.push("/");
      setIsComponentVisible(false);
      toast.success("Signout Successfull");
      setIsMenu(false);
    } catch (error: any) {
      toast.error("Error");
    }
  }

  useEffect(() => {
    async function getData() {
      const userId = localStorage.getItem("userid");
      const photo = localStorage.getItem("photo");

      if (photo) {
        setphotoUrl(photo);
      }

      if (userId) {
        setIsLogin(true);
      }
    }

    getData();
  }, []);

  return (
    <div className="text-2xl h-fit  text-white bg-[#1F2937] rounded-lg fixed w-screen">
      <div className="flex justify-between items-center py-5">
        <div>
          <h1 className="md:pl-10 pl-4" onClick={closeMenu}>
            <Link href="/">
              <span>Career</span> <span className="text-blue-500">Portal</span>
            </Link>
          </h1>
        </div>
        <div onClick={handleMenu}>
          {!isMenu ? (
            <GiHamburgerMenu className="text-white md:hidden block mr-8 text-3xl" />
          ) : (
            <MdOutlineClose className="text-white md:hidden block mr-8 text-4xl" />
          )}
        </div>
        <div className="md:block hidden">
          <ul className="flex items-center gap-10 pr-10">
            <li>
              <Link href="/internship">Internships</Link>
            </li>
            <li>
              <Link href="/job">Jobs</Link>
            </li>
            <li>
              <Link href="/interview">Interviews</Link>
            </li>
            <li>
              <Popover>
                <PopoverTrigger>Add Content</PopoverTrigger>
                <PopoverContent className="bg-[#1F2937] text-white border border-white w-56 p-0 mt-4">
                  <ButtonOutline value={"Add Jobs"} href={"/job/add"} />
                  <ButtonOutline
                    value={"Add Internships"}
                    href={"/internship/add"}
                  />
                  <ButtonOutline
                    value={"Add Experience"}
                    href={"/interview/add"}
                  />
                </PopoverContent>
              </Popover>
            </li>
            {isLogin ? (
              <button
                onMouseEnter={handleMouseEnter}
                onMouseDownCapture={handleMouseLeave}
              >
                <Avatar
                  className="mb-1"
                  onMouseEnter={handleMouseEnter}
                  onMouseDownCapture={handleMouseLeave}
                >
                  <AvatarImage src={photoUrl} />
                  <AvatarFallback>
                    <img src="https://imgs.search.brave.com/yf85zFfWTRq2HlnErMApopfO32Hpc5a6aK0haacPzPk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnNz/dGF0aWMubmV0L2Zy/bElmLnBuZw" />
                  </AvatarFallback>
                </Avatar>
              </button>
            ) : (
              <li onClick={signIn}>
                <ButtonWithIcon data="Login with Gmail" />
              </li>
            )}
            {isComponentVisible && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  right: 0,
                  marginTop: "5px",
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <HeaderDropDown
                  handleLogout={handleSignOut}
                  handleMyPosts={handleMyPosts}
                />
              </div>
            )}
          </ul>
        </div>
      </div>
      {isMenu && (
        <div className="md:hidden fixed w-screen h-screen bg-[#1F2937]">
          <ul className="flex flex-col justify-center items-center gap-10 pt-10">
            <li onClick={handleMenu}>
              <Link href="/internship">Internships</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/job">Jobs</Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/interview">Interviews</Link>
            </li>
            <li>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xl">
                      Add Content
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-[167px] flex-col">
                      <div className="bg-inherit">
                        <NavigationMenuLink className="" onClick={handleMenu}>
                          <ButtonOutline value={"Add Jobs"} href={"/job/add"} />
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <NavigationMenuLink className="" onClick={handleMenu}>
                          <ButtonOutline
                            value={"Add Internships"}
                            href={"/internship/add"}
                          />
                        </NavigationMenuLink>
                      </div>
                      <div>
                        <NavigationMenuLink className="" onClick={handleMenu}>
                          <ButtonOutline
                            value={"Add Experience"}
                            href={"/interview/add"}
                          />
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            {!isLogin && (
              <li onClick={signIn}>
                <ButtonWithIcon data="Login with Gmail" />
              </li>
            )}
            {isLogin && (
              <li onClick={handleMyPosts}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
                  My Added Content
                </button>
              </li>
            )}
            {isLogin && (
              <li onClick={handleSignOut}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
                  My Saved Content
                </button>
              </li>
            )}
            {isLogin && (
              <li onClick={handleSignOut}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
