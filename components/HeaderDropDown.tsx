import React from "react";

function HeaderDropDown({ handleLogout }: any) {
  return (
    <div className="bg-[#1F2937] h-max rounded-lg text-xl text-white p-4 flex flex-col gap-2 items-center justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
        My Added Content
      </button>
      {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2 text-sm">
        My Saved Content
      </button> */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default HeaderDropDown;
