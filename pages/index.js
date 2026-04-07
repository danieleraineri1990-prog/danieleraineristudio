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
    <div className="min-h-screen bg-white text-black p-10 font-sans selection:bg-gray-200">
      <Head>
        <title>Daniele Raineri Studio | Pittura Contemporanea</title>
        <meta name="google-site-verification" content="google98bc1faa719f75b0" />
        <meta name="description" content="Sito ufficiale di Daniele Raineri Studio. Esplora la ricerca pittorica e le opere della serie Intrecci." />
        <link rel="canonical" href="https://www.danieleraineristudio.com" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <div className="py-10 mb-10">
          <h1 
            ref={titleRef} 
            className="text-xl md:text-2xl uppercase tracking-[0.15em] font-normal text-black whitespace-nowrap"
          >
            DANIELE RAINERI STUDIO
          </h1>
        </div>

        <div className="fixed bottom-6 right-10 z-50 uppercase text-[11px] md:text-xs tracking-[0.25em] font-medium text-black pointer-events-none">
          <span className="pointer-events-auto">SERIES: INTRECCI</span>
        </div>

        <div className="mb-40">
          <img src="/images/1.JPG" alt="INTRECCIO NO.3" className="w-full h-auto" />
          <div className="mt-6">
            <p className="text-[12px] tracking-[0.1em] text-gray-800 font-normal italic">
              INTRECCIO NO.3 — Oil on canvas 150x200x4 — 2026
            </p>
          </div>
        </div>

        <div className="mb-40">
          <img src="/images/2.JPG" alt="INTRECCIO NO.8" className="w-full h-auto" />
          <div className="mt-6">
            <p className="text-[12px] tracking-[0.1em] text-gray-800 font-normal italic">
              INTRECCIO NO.8 — Oil 100x150
            </p>
          </div>
        </div>

        <div className="mt-20 text-[14px] leading-relaxed max-w-xl text-gray-800 font-normal tracking-wide space-y-6">
          <p>Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p>Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="pb-20">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

        <div className="space-y-24 pb-40">
          <section>
            <h2 className="text-[11px] uppercase tracking-widest border-b border-gray-300 pb-3 text-gray-500 mb-8">Premi</h2>
            <div>
              <p className="text-[13px] text-gray-900 uppercase tracking-wider font-medium">Collective Exhibition</p>
              <p className="text-[13px] text-gray-700 mt-1">Venice pavilion – Biennale The milk of dreams – Vincitore primo premio artefici del nostro tempo</p>
            </div>
          </section>

          <section>
            <h2 className="text-[11px] uppercase tracking-widest border-b border-gray-300 pb-3 text-gray-500 mb-8">Solo Shows</h2>
            <div className="space-y-3 text-[13px] text-gray-800">
              <p>Afnakafna gallery 2019 – Moongloow – Roma</p>
              <p>Le nicchie gallery 2021 – Taranto</p>
            </div>
          </section>

          <section>
            <h2 className="text-[11px] uppercase tracking-widest border-b border-gray-300 pb-3 text-gray-500 mb-8">Contact</h2>
            <div className="space-y-2 text-[13px] text-gray-800">
              <p>Email: danieleraineri1990@gmail.com</p>
              <p>Instagram: @danieleraineristudio</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
