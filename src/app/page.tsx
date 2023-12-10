import Image from "next/image";
import Navbar from "./components/navbar";
import Ask from "./components/ask_anything_chachaji";
export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE] relative">
      <Navbar />
      <section className="min-h-screen w-2/6 absolute inset-y-0 left-0"></section>
      <section className="min-h-screen w-4/6 absolute inset-y-0 right-0 bg-black">
        <Ask />
      </section>
    </main>
  );
}
