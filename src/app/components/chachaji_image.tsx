import Image from "next/image";
import chachaji from "../components/chacha-removebg-preview.jpg";

export default function Chachajifull() {
  return (
    <Image
      src={chachaji}
      alt="vfda"
      className="min-w-[90%] overflow-hidden mix-blend-multiply absolute bottom-0"
    />
  );
}
