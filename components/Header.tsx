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
import { useState } from "react";
import MobileNav from "./MobileNav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface ButtonOutlineProps {
  value: string;
  href: string;
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

export const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const handleMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className="text-2xl h-fit  text-white bg-[#1F2937] rounded-lg fixed w-screen">
      <div className="flex justify-between items-center py-5">
        <div>
          <h1 className="md:pl-10 pl-4">
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
          </ul>
        </div>
      )}
    </div>
  );
};
