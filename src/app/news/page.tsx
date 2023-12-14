import Image from "next/image";
import Navbar from "../components/navbar";
function getNews() {
  return fetch("/api/news", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => json.messageT);
}
export default function Home() {
  return (
    <main className="flex min-h-[100vh] flex-col items-center justify-between min-w-[100vw] bg-[#B6D3FE]">
      <Navbar />
    </main>
  );
}
