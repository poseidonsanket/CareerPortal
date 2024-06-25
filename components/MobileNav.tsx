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
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
import { ButtonOutline, ButtonWithIcon } from "./Header";

const MobileNav = ({handleMenu,signIn,handleSignOut,isLogin}: any) => {
  return (
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
        <li onClick={handleSignOut}>
          <ButtonWithIcon data="LogOut" />
        </li>
      )}
      {isLogin && (
        <li onClick={handleSignOut}>
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
    </ul>
  </div>
  )
}

export default MobileNav