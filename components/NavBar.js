import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <header>
      <h3>
        <Link href="/">
          <Image src="/IET/IET-logo.png" height={108} width={108} alt="" />
        </Link>
      </h3>

      <div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </div>
    </header>
  );
}
