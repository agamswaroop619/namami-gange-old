import askanthing from "../components/askimage.jpg";
import Image from "next/image";

export default function ask_anything_chachaji() {
  return (
    <Image
      src={askanthing}
      alt=""
      className="min-w-[90%] overflow-hidden absolute bottom-0"
    />
  );
}
