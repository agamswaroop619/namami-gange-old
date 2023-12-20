import Image from "next/image";
import Chachaji from "./components/chacha-removebg-preview.jpg";
import Boat from "./components/boat.png";
import Waves1 from "./components/Vector.png";
import Waves2 from "./components/image 8.jpg";
import Shore from "./components/Ellipse 2.jpg";
import Logo from "./components/SARV GANGE VANI.jpg";

export default function Home() {
  return (
    <main className="min-h-screen items-center justify-between min-w-full bg-gradient-to-b from-[#FFFFFF] to-[#39B5E9] absolute">
      <div className="absolute inset-0 m-auto flex flex-col items-center justify-center">
        <div className="z-10">
          <h1 className="text-5xl font-bold text-black font-mono absolute top-0 p-4 left-0 w-1/3">
            SARV GANGE VANI
          </h1>
        </div>
        <div className="z-10 flex space-x-4 absolute top-0 px-4 py-6 right-0">
          <a
            href="/games"
            className="text-black text-lg relative underline-hover"
          >
            Games
          </a>
          <a
            href="/quiz"
            className="text-black text-lg relative underline-hover"
          >
            Quiz
          </a>
          <a
            href="/news"
            className="text-black text-lg relative underline-hover"
          >
            News
          </a>
          <a
            href="/about"
            className="text-black text-lg relative underline-hover"
          >
            About Us
          </a>
        </div>
        <img
          src="https://nmcg.nic.in/logo/GIF.gif"
          alt=""
          className="z-0 opacity-50 mix-blend-multiply"
        />
        <div className="z-10 absolute flex flex-col justify-center items-center">
          <p className="font-mono text-3xl py-2 font-bold text-white">
            Chachaji se Baatein kare!
          </p>
          <a href="/chat">
            <button className="bg-white text-blue-700 px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
              Chat Now <span>→</span>
            </button>
          </a>
        </div>
        <div className="absolute bottom-0 left-0 w-1/3">
          <Image
            src={Chachaji}
            alt="Illustration of Chachaji in traditional attire dancing"
            width={400}
            height={400}
            className="bottom-[6vh] absolute "
          />
        </div>
        <Image
          src={Waves1}
          alt=""
          width={800}
          height={700}
          className="absolute bottom-0 right-0 animate-moveRightToLeft"
        />
        <Image
          src={Waves1}
          alt=""
          width={800}
          height={700}
          className="absolute bottom-0 right-[20vw] animate-moveRightToLeft"
        />
        <Image
          src={Waves2}
          alt=""
          width={800}
          height={800}
          className="absolute bottom-0 right-[10vw] mix-blend-multiply z-10 animate-moveRightToLeft"
        />
        <Image
          src={Waves2}
          alt=""
          width={800}
          height={700}
          className="absolute bottom-0 right-[-10vw] mix-blend-multiply z-10 animate-moveLeftToRight"
        />
        <Image
          src={Waves2}
          alt=""
          width={800}
          height={700}
          className="absolute bottom-0 right-[23vw] mix-blend-multiply z-10 animate-moveLeftToRight"
        />
        <Image
          src={Shore}
          alt=""
          width={800}
          height={700}
          className="absolute bottom-[-65vh] left-[-10vw] mix-blend-multiply z-10 scale-[0.90]"
        />
        <div className="absolute bottom-0 right-0 w-1/3">
          <Image
            src={Boat}
            alt="Illustration of children in a boat with balloons and a flag"
            width={800}
            height={800}
            className="animate-rotateToAndFro"
          />
        </div>
      </div>
    </main>
  );
}
