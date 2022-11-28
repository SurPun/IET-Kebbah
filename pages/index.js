import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
NavBar;

export default function Home() {
  return (
    <>
      <NavBar />

      <div className="text-3xl font-bold"> Hi</div>
    </>
  );
}
