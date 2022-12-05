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
      className="bg-dim-black text-white font-bold py-1.5 px-8 rounded-lg"
    >
      {btnName}
    </Link>
    // </button>
  );
}
