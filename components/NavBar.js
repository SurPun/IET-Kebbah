import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="flex list-none  justify-between">
      <h3>
        <Link href="/">
          <Image
            src="/IET/IET-logo.png"
            height={108}
            width={108}
            alt="IET logo"
          />
        </Link>
      </h3>

      <div className="flex">
        <li className="mr-6">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-6">
          <Link href="/about">About</Link>
        </li>
      </div>
    </header>
  );
}
