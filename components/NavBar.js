import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="list-none flex flex-wrap items-center justify-between mx-auto w-full bg-dim-black">
      <h3>
        <Link href="/">
          <Image
            className="p-1.5 invert hover:p-1"
            src="/IET/IET-logo.png"
            height={68}
            width={68}
            alt="IET logo"
          />
        </Link>
      </h3>

      <div className="flex">
        <li className="mr-6 hover:text-light-orange text-white hover:font-medium">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6 hover:text-light-orange  text-white hover:font-medium">
          <Link href="/about">About</Link>
        </li>
      </div>
    </header>
  );
}
