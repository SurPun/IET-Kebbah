import React from "react";
import Image from "next/image";
import ButtonCom from "../../components/ButtonCom";

export default function ShaneFamily() {
  return (
    <div className="text-center">
      {/* you don't need to put public in the directory*/}
      <audio hidden autoPlay controls src="/audio/shaneTalking.mp3" />
      <h2>Hello, I am Shane</h2>
      <div className="flex list-none justify-center">
        <Image src="/portraits/shane.jpg" alt="" height={200} width={200} />
      </div>
      <p>This is my family</p>
      <ul className="flex list-none text-center justify-around">
        <li>
          <Image src="/portraits/dad.jpg" alt="" height={300} width={300} />
          <p>Dad</p>
        </li>
        <li>
          <Image src="/portraits/mum.jpg" alt="" height={300} width={300} />
          <p>Mum</p>
        </li>
        <li>
          <Image src="/portraits/shanice.jpg" alt="" height={300} width={300} />
          <p>Shanice</p>
        </li>
      </ul>
      <p>You willl see what it is like to be me...</p>
      <ButtonCom btnName={"Become me..."} btnLink={"shane-life"} />
    </div>
  );
}

// - [ ] Hide Audio & AutoPlay on load
// - [x] Play audio
// - [X] Show Shane's family pics
// - [X] Btn to become Shane takes you to new route
