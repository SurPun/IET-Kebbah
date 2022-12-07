import NavBar from "../components/NavBar";
import Link from "next/link";
import ButtonCom from "../components/ButtonCom";
import Image from "next/image";
import HeadComp from "../components/HeadComp";

export default function Iceberg() {
  return (
    <>
      <HeadComp title={"Perception Iceburg"} />
      <NavBar />
      <main>
        <div class="flex items-center justify-center h-screen">
          <Image
            className="rounded-lg"
            src="/IET/perception Iceburg.jpg"
            alt="perception icerberg"
            height={900}
            width={1000}
          />
        </div>
      </main>
    </>
  );
}
