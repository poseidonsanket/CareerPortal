import Link from "next/link";
import React from "react";

function HeaderDropDown({
  handleLogout,
  handleMyPosts,
  handleMySavedPosts,
}: any) {
  return (
    <div className="bg-[#2d3748] h-max rounded-lg text-xl text-white p-4 flex flex-col gap-2 items-center justify-center">
      <Link href={`${process.env.NEXT_PUBLIC_URL}/myposts`}>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm"
          onClick={handleMyPosts}
        >
          My Added Content
        </button>
      </Link>
      <Link href={`${process.env.NEXT_PUBLIC_URL}/mysavedposts`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
          My Saved Content
        </button>
      </Link>
      <Link href={`${process.env.NEXT_PUBLIC_URL}/uploadresume`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
          Upload Resume
        </button>
      </Link>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default HeaderDropDown;
