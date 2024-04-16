import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ButtonOutlineProps {
  value: string;
  href: string;
}

export function ButtonOutline(props: ButtonOutlineProps) {
  const { value, href } = props;
  return (
    <Button
      variant="outline"
      className="bg-[#1F2937] text-white m-0 block w-full text-lg border border-white"
    >
      <Link href={href}>{value}</Link>
    </Button>
  );
}

export const Header = () => {
  return (
    <div className="text-2xl h-fit w-screen text-white bg-[#1F2937] rounded-lg">
      <div className="flex justify-between items-center py-5">
        <div>
          <h1 className="pl-10">
            <span>Career</span>
            {" "}
            <span className="text-blue-500">Portal</span>
          </h1>
        </div>
        <div>
          <ul className="flex items-center gap-10 pr-10">
            <li>
              <Link href="/">Home</Link>
            </li>
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
    </div>
  );
};