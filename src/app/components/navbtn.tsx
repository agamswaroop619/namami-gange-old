import React from "react";
import Image from "next/image";
import next from "../components/icon-next.jpg";

interface NavbtnProps extends React.HTMLAttributes<HTMLDivElement> {}

const Navbtn: React.FC<NavbtnProps> = ({ className, ...props }) => {
  return (
    <Image
      src={next}
      alt=""
      className={`mix-blend-multiply w-12 ${className}`}
      {...props}
    />
  );
};

export default Navbtn;
