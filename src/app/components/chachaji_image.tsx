import Image from "next/image";
import chachaji from "../components/chacha-removebg-preview.jpg";

export default function Chachajifull() {
  return (
    <Image
      src={chachaji}
      alt=""
      className="min-w-[90%] overflow-hidden absolute bottom-0"
    />
  );
}
