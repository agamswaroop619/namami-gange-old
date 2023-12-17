import Image from "next/image";
import chachaji from "../components/chacha-removebg-preview.jpg";
import Navbtn from "./navbtn";
export default function Chachajifull() {
  return (
    <div className="grid grid-cols-5 gap-4 w-[100vw] absolute bottom-0 justify-items-center align-items-center">
      <a href="/extra" className="w-32 h-32">
        <Navbtn />
      </a>
      <Image src={chachaji} alt="" className="overflow-hidden col-span-3" />
      <a href="/chat" className="w-32 h-32">
        <Navbtn />
      </a>
    </div>
  );
}
