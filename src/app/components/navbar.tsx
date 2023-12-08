import React from "react";
export default function Navbar() {
  return (
    <div
      id="NavBarRoot"
      className="shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] flex flex-row w-full items-start"
    >
      <div className="bg-[linear-gradient(180deg,_#ffffff_0%,#ffffff_93%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full items-start px-1">
        <div className="flex flex-row mt-px gap-4 w-1/3 items-start">
          <img
            src="https://file.rendit.io/n/JjGgghQKDnMUWmpzEZNO.png"
            alt="Vector"
            className="w-16"
          />
          <img
            src="https://file.rendit.io/n/hX7FxvoMl3lZr8c3TSVa.svg"
            alt="ClipPathGroup"
          />
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
