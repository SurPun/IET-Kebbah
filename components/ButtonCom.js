import React from "react";
import Link from "next/link";

export default function ButtonCom({
  btnName,
  btnLink = "",
  BtnOnClick = () => { },
}) {
  return (
    <Link
      href={btnLink}
      onClick={BtnOnClick}
      className="bg-dim-black text-white font-bold py-2 px-4 rounded-lg  hover:text-light-orange"
    >
      {btnName}
    </Link>
    // </button>
  );
}
