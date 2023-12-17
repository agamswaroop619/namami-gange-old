import Navbar from "./components/navbar";
import Ask from "./components/ask_anything_chachaji";
import Chachajifull from "./components/chachaji_image";
import Navbtn from "./components/navbtn";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between min-w-full bg-[#B6D3FE] absolute">
      <Navbar />
      <Ask />
      <Chachajifull />
    </main>
  );
}
