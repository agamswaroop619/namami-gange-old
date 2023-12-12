import Image from "next/image";
import chachaji from "../components/chacha-removebg-preview.jpg";

export default function Chachajifull() {
  return (
    <Image
      src={chachaji}
      alt=""
      className="overflow-hidden absolute bottom-0"
    />
  );
}
