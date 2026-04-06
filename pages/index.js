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
  {/* TITOLO IN ALTO A SINISTRA - Allineato a sinistra, Font Serif, Nero */}
  <h1 
    ref={titleRef} 
    className="sticky top-0 z-50 py-8 text-xl md:text-2xl uppercase tracking-widest font-serif bg-white/90 text-black text-left w-full pl-5 md:pl-10"
    style={{ fontFamily: 'serif' }}
  >
    <span className="pointer-events-auto">DANIELE RAINERI STUDIO</span>
  </h1>

  {/* SERIE IN BASSO A DESTRA - Font Serif, Nero */}
  <div 
    className="fixed bottom-8 right-8 md:right-12 z-50 uppercase text-xs md:text-sm tracking-[0.2em] font-serif text-black pointer-events-none"
    style={{ fontFamily: 'serif' }}
  >
    <span className="pointer-events-auto">SERIES: INTRECCI</span>
  </div>
</>





            {/* --- SEZIONE IMMAGINI --- */}
<div className="mt-20 mb-40">
  <img 
    src="/images/1.JPG" 
    alt="INTRECCIO NO.3" 
    className="w-full h-auto" 
  />
  <div className="mt-6">
    <p className="font-mono text-[13px] leading-relaxed italic text-black">
      INTRECCIO NO.3 — Oil on canvas 150x200x4 — 2026
    </p>
  </div>
</div>

       {/* --- SECONDA OPERA (INTRECCIO NO.8) --- */}
        <div className="mt-40 mb-40">
          <img 
            src="/images/2.JPG" 
            alt="INTRECCIO NO.8" 
            className="w-full h-auto" 
          />
          <div className="mt-6">
            <p className="font-mono text-[13px] leading-relaxed italic text-black">
              INTRECCIO NO.8 — Oil on linen 100x150 — 2026
            </p>
          </div>
        </div>


        <div className="mt-12 text-[13px] leading-relaxed max-w-xl italic">
          <p className="mb-4">Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p className="mb-4">Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

        <div className="mt-20">
          <h2 className="text-[11px] uppercase tracking-widest border-b pb-2 text-gray-400 font-normal">Premi</h2>
          <div className="mt-5">
            <p className="text-lg uppercase font-bold tracking-widest">PREMI: COLLECTIVE EXIBITION</p>
            <p className="text-[13px] text-gray-700 mt-2">Venice pavilion – Biennale The milk of dreams – Vincitore primo premio artefici del nostro tempo</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[11px] uppercase tracking-widest border-b pb-2 text-gray-400 font-normal">Solo Shows</h2>
          <div className="mt-5 text-[12px] text-gray-600">
            <p>Afnakafna gallery 2019 – Moongloow – Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 – Taranto</p>
          </div>
        </div>

        <div className="mt-24 border-t pt-10 text-[13px]">
          <h2 className="text-[11px] uppercase tracking-widest text-gray-400 mb-4 font-normal">Contact</h2>
          <p>Email: danieleraineri1990@gmail.com</p>
          <p className="mt-1">Instagram: @danieleraineristudio</p>
        </div>
      </div>
    </div>
  );
}

