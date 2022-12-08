import NavBar from "../components/NavBar";
import Link from "next/link";
import ButtonCom from "../components/ButtonCom";
import Image from "next/image";
import HeadComp from "../components/HeadComp";

export default function Resource() {
  return (
    <>
      <HeadComp title={"IET Resources"} />
      <NavBar />
      <main>
        <div className="flex justify-center mt-5 relative ">
          <div>
            <Image
              className="max-w-md h-full rounded-lg"
              src="/IET/iceberg.png"
              alt="image of icerberg"
              height={300}
              width={600}
            />

            <div className="ml-6  text-dim-grey leading-8 absolute top-0 text-sm">
              <h2 className="text-2xl font-bold mt-10">
                Additional Resources Links
              </h2>
              <ol className="text-black mt-10 text-s leading-10 underline ">
                <li className="hover:text-light-orange bg-white px-4 rounded-lg mb-2">
                  {" "}
                  <Link href="https://rb.gy/uc0jnw">
                    Stop & search rate by ethnicity April 2020 to March 2021
                  </Link>
                </li>
                <li className="hover:text-light-orange  bg-white px-4 rounded-lg mb-2">
                  <Link href="https://rb.gy/nsijfo">
                    Timeline: Race and the Metropolitan police
                  </Link>
                </li>
                <li className="hover:text-light-orange  bg-white px-4 rounded-lg mb-2">
                  <Link href="https://rb.gy/m5dikr">
                    How to Reduce Unconscious Bias in the Workplace
                  </Link>
                </li>
                <li className="hover:text-light-orange  bg-white px-4 rounded-lg mb-2">
                  <Link href="https://rb.gy/okgtoi">
                    What Are the Benefits of Understanding Different Cultures?
                  </Link>
                </li>
                <li className="hover:text-light-orange  bg-white px-4 rounded-lg mb-2">
                  <Link href="https://rb.gy/4zvwle">
                    How Do You Reduce Prejudice?
                  </Link>
                </li>
                <li className="hover:text-light-orange  bg-white px-4 rounded-lg ">
                  <Link href="/iceberg">Perception Iceberg</Link>
                </li>
              </ol>
            </div>
          </div>

          <iframe
            className="rounded-lg"
            src="https://airtable.com/embed/shrkiPRE11Zoj3rc5?backgroundColor=green"
            height={535}
            width={550}
          ></iframe>
        </div>

        <span className="flex justify-center mt-2.5">
          <ButtonCom btnName={"Home"} btnLink="/" />
        </span>
      </main>
    </>
  );
}
