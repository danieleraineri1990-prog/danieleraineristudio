import Head from "next/head";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head><title>DANIELE RAINERI STUDIO</title></Head>
      <div className="max-w-4xl mx-auto">

<>
  <h1 
    ref={titleRef} 
    className="sticky top-0 z-50 py-4 text-xl md:text-2xl uppercase tracking-[0.1em] [word-spacing:-0.2em] font-light bg-transparent pointer-events-none mix-blend-difference text-white whitespace-nowrap -ml-8 md:-ml-10"
  >
    <span className="pointer-events-auto">DANIELE RAINERI STUDIO</span>
  </h1>

  <div className="fixed bottom-4 right-0 z-50 uppercase text-base md:text-xl tracking-[0.2em] font-light mix-blend-difference text-white pointer-events-none">
    <span className="pointer-events-auto">SERIES: INTRECCI</span>
  </div>
</>

<div className="mt-20 mb-40">
  <img 
    src="/images/1.JPG" 
    alt="INTRECCIO NO.3" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-500 font-light">
      INTRECCIO NO.3 — Oil 150x200
    </p>
  </div>
</div>

        <div className="mt-40 mb-40">
          <img 
            src="/images/2.JPG" 
            alt="INTRECCIO NO.8" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-500 font-light">
              INTRECCIO NO.8 — Oil 100x150
            </p>
          </div>
        </div>

        <div className="mt-12 text-[11px] leading-relaxed max-w-xl text-gray-500 font-light tracking-wide">
          <p className="mb-4">Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p className="mb-4">Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

        <div className="mt-20">
          <h2 className="text-[10px] uppercase tracking-widest border-b pb-2 text-gray-500 font-light">Premi</h2>
          <div className="mt-5">
            <p className="text-[11px] uppercase​​​​​​​​​​​​​​​​

