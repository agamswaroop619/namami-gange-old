import React from "react";
import Image from "next/image";
import logowritten from "../components/output_image.jpeg";
export default function Navbar() {
  return (
    <div
      id="NavBarRoot"
      className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full h-[7vh] items-start z-10 fixed top-0"
    >
      <div className="bg-[linear-gradient(180deg,_#ffffff_0%,#ffffff_93%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full items-start px-1">
        <div className="flex flex-row mt-px gap-4 w-1/2 items-start">
          <img
            src="https://file.rendit.io/n/JjGgghQKDnMUWmpzEZNO.png"
            alt="Vector"
            className="w-16"
          />
          <Image src={logowritten} alt="" className="h-16 w-80" />
        </div>
        <img
          src="https://file.rendit.io/n/9k7msNM2ENT1jEOy9aU9.png"
          alt="Image1"
          id="Image1"
          className="w-16"
        />
      </div>
    </div>
  );
}
