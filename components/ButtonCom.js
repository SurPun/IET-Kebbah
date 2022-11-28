import React from "react";
import Link from "next/link";

export default function ButtonCom({ btnName, btnLink = "", BtnOnClick = "" }) {
  return (
    <button
      onClick={BtnOnClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      <Link href={btnLink}>{btnName}</Link>
    </button>
  );
}
