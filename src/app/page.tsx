import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Navbar />
      <div className="h-[100vh] w-[100vw] bg-[#B6D3FE]"></div>
    </main>
  );
}
