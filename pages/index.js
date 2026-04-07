import Head from "next/head";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400"] });

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
    <div className={`${inter.className} min-h-screen bg-white text-black p-10`}>
      <Head>
        <title>DANIELE RAINERI STUDIO</title>
      </Head>
      <div className="max-w-4xl mx-auto">

        <>
          <h1
            ref={titleRef}
            className="sticky top-0 z-50 py-4 text-sm uppercase tracking-[0.25em] font-light bg-transparent pointer-events-none mix-blend-difference text-white whitespace-nowrap -ml-8 md:-ml-10"
          >
            <span className="pointer-events-auto">DANIELE RAINERI STUDIO</span>
          </h1>

          <div className="fixed bottom-10 right-5 md:right-10 z-50 uppercase text-xs tracking-[0.25em] font-light mix-blend-difference text-white pointer-events-none">
            <span className="pointer-events-auto">SERIES: INTRECCI</span>
          </div>
        </>

        <div className="mt-20 mb-40">
          <img src="/images/1.JPG" alt="INTRECCIO NO.3" className="w-full h-auto" />
          <div className="mt-6">
            <p className="text-[12px] tracking-[0.15em] font-light text-black uppercase">
              INTRECCIO NO.3 — Oil on canvas 150x200x4 — 2026
            </p>
          </div>
        </div>

        <div className="mt-40 mb-40">
          <img src="/images/2.JPG" alt="INTRECCIO NO.8" className="w-full h-auto" />
          <div className="mt-6">
            <p className="text-[12px] tracking-[0.15em] font-light text-black uppercase">
              INTRECCIO NO.8 — Oil on linen 100x150 — 2026
            </p>
          </div>
        </div>

        <div className="mt-12 text-[13px] leading-relaxed max-w-xl font-light tracking-wide">
          <p className="mb-4">Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p className="mb-4">Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

        <div className="mt-20">
          <h2 className="text-[10px] uppercase tracking-[0.3em] border-b pb-2 text-gray-400 font-light">Premi</h2>
          <div className="mt-5">
            <p className="text-[12px] uppercase tracking-[0.2em] font-light">COLLECTIVE EXHIBITION</p>
            <p className="text-[12px] text-gray-500 mt-2 font-light tracking-wide">Venice pavilion – Biennale The milk of dreams – Vincitore primo premio artefici del nostro tempo</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[10px] uppercase tracking-[0.3em] border-b pb-2 text-gray-400 font-light">Solo Shows</h2>
          <div className="mt-5 text-[12px] text-gray-500 font-light tracking-wide">
            <p>Afnakafna gallery 2019 – Moongloow – Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 – Taranto</p>
          </div>
        </div>

        <div className="mt-24 border-t pt-10 text-[12px] font-light tracking-wide">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-4 font-light">Contact</h2>
          <p>Email: danieleraineri1990@gmail.com</p>
          <p className="mt-1">Instagram: @danieleraineristudio</p>
        </div>

      </div>

