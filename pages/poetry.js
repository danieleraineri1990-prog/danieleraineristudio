import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
  const titleRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    gsap.fromTo(titleRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-10 font-light">
      <Head>
        <title>DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="sticky top-0 z-50 py-4 flex items-center justify-between -ml-8 md:-ml-10 bg-white/80 backdrop-blur-sm">
          <h1 ref={titleRef} className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-black pointer-events-auto">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <div className="relative">
            <button onClick={toggleMenu} className="flex flex-col gap-1.5 p-4 outline-none group cursor-pointer">
              <div className={`w-6 h-[1px] bg-gray-400 transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
              <div className={`w-6 h-[1px] bg-gray-400 transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[1px] bg-gray-400 transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </button>
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col items-end space-y-2 pt-4 bg-white p-4">
                <Link href="/disegni" className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 hover:text-black">DISEGNI</Link>
                <Link href="/poetry" className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 hover:text-black">POETRY</Link>
              </div>
            )}
          </div>
        </header>

        {/* Qui sotto incolla di nuovo tutte le tue immagini (1.JPG, 2.JPG ecc.) che avevi prima */}
        <div className="mt-20 mb-40">
          <img src="/images/1.JPG" className="w-full h-auto" />
          <p className="text-[11px] text-gray-400 mt-4">INTRECCIO NO.3 — Oil 150x200</p>
        </div>
        {/* ... e così via per tutte le altre opere ... */}
        
      </div>
    </div>
  );
}
