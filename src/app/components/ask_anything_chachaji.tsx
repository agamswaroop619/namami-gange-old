import askanthing from "../components/askimage.jpg";
import Image from "next/image";

export default function ask_anything_chachaji() {
  return (
    <Image
      src={askanthing}
      alt=""
      className="moverflow-hidden absolute top-0 mix-blend-multiply"
    />
  );
}
