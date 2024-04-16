import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

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

const MobileNav = () => {
  return (
    <div>
      <div className="md:hidden fixed w-screen h-screen bg-[#1F2937]">
        <ul className="flex flex-col justify-center items-center gap-10 pt-10">
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-xl">
                    Add Content
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="w-[167px] flex-col">
                    <div className="bg-inherit">
                      <NavigationMenuLink className="">
                        <ButtonOutline value={"Add Jobs"} href={"/job/add"} />
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink className="">
                        <ButtonOutline
                          value={"Add Internships"}
                          href={"/internship/add"}
                        />
                      </NavigationMenuLink>
                    </div>
                    <div>
                      <NavigationMenuLink className="">
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
    </div>
  );
};

export default MobileNav;
