import React from "react";
import Link from "next/link";

export default function ButtonCom({
  btnName,
  btnLink = "",
  BtnOnClick = () => {},
}) {
  return (
    <Link
      href={btnLink}
      onClick={BtnOnClick}
      className="bg-button-colour text-white font-bold py-0.5 px-5 rounded-lg"
    >
      {btnName}
    </Link>
    // </button>
  );
}
