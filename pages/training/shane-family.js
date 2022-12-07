import React from "react";
import Image from "next/image";
import ButtonCom from "../../components/ButtonCom";
import HeadComp from "../../components/HeadComp";
import { useEffect } from "react";

export default function ShaneFamily() {
  // Disable Back Button
  useEffect(() => {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }, []);

  return (
    <>
      <HeadComp title={"Shane Family"} />
      <main>
        <div className="text-center">
          {/* you don't need to put public in the directory*/}
          <audio hidden autoPlay controls src="/audio/shaneTalking.mp3" />
          <h2 className="text-2xl mt-6 mb-2 text-white">Hello, I am Shane</h2>
          <div className="flex list-none justify-center">
            <Image
              className="rounded-md"
              src="/portraits/shane.jpg"
              alt="image of Shane"
              height={230}
              width={230}
            />
          </div>

          <p className="text-xl my-1 text-white">
            You will see what it is like to be me...
          </p>
          <div className="py-8">
            <ButtonCom btnName={"Become me..."} btnLink={"shane-life"} />
          </div>

          <p className="text-xl my-1 text-white">This is my family</p>

          <ul className="flex list-none text-center justify-around">
            <li>
              <Image
                className="rounded-md"
                src="/portraits/dad.jpg"
                alt="image of Shane's dad"
                height={230}
                width={230}
              />
              <p className="text-xl my-1 text-white">Dad</p>
            </li>
            <li>
              <Image
                className="rounded-md"
                src="/portraits/mum.jpg"
                alt="image of Shane's mom"
                height={230}
                width={230}
              />
              <p className="text-xl my-1 text-white">Mum</p>
            </li>
            <li>
              <Image
                className="rounded-md"
                src="/portraits/shanice.jpg"
                alt="image of Shane's sister"
                height={230}
                width={230}
              />
              <p className="text-xl my-1 text-white">Shanice (sister) </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

// - [x] Hide Audio & AutoPlay on load
// - [x] Play audio
// - [X] Show Shane's family pics
// - [X] Btn to become Shane takes you to new route
