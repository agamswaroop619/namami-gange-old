"use client";
import { useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute p-4">
      <div className="flex flex-grow gap-4">
        <a
          href="/g1"
          className="flex-grow bg-white p-4 rounded-md shadow-md h-full"
        >
          <div>Box 1</div>
        </a>
        <a
          href="/g2"
          className="flex-grow bg-white p-4 rounded-md shadow-md h-full"
        >
          <div>Box 2</div>
        </a>
        <a
          href="/g3"
          className="flex-grow bg-white p-4 rounded-md shadow-md h-full"
        >
          <div>Box 3</div>
        </a>
      </div>
    </main>
  );
}
