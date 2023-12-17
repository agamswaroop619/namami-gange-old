import Image from "next/image";
import next from "../components/icon-next.jpg";

export default function Navbtn() {
  return <Image src={next} alt="" className="mix-blend-multiply w-32 h-32" />;
}
