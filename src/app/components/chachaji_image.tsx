import Image from "next/image";
import chachaji from "../components/chacha-removebg-preview.jpg";
import Navbtn from "./navbtn";
export default function Chachajifull() {
  return (
    <div className="grid grid-cols-5 gap-4 w-[100vw] absolute bottom-0 justify-items-center align-items-center justify-center px-8">
      <a href="/extra" className="flex items-center justify-center">
        <Navbtn className="transform rotate-180" />
        <p className="text-3xl text-black relative group">
          Extras here
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black origin-right transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </p>
      </a>
      <Image src={chachaji} alt="" className="overflow-hidden col-span-3" />
      <a href="/chat" className="flex items-center justify-center">
        <p className="text-3xl text-black relative group">
          Ask to Chachaji
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black origin-left transform scale-x-0 transition-transform duration-500 group-hover:scale-x-100"></span>
        </p>
        <Navbtn />
      </a>
    </div>
  );
}
