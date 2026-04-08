import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
  const titleRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // Funzione per invertire lo stato (apri/chiudi)
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>DANIELE RAINERI STUDIO</title>
        <meta name="google-site-verification" content="m6HHKQMhVsaU59B2WftQbjoKLC3qFuhA0cJGvdL7j2w" />
      </Head>

      <div className="max-w-4xl mx-auto">
        
        {/* HEADER FISSO IN ALTO */}
        <header className="sticky top-0 z-50 py-4 flex items-center justify-between pointer-events-none -ml-8 md:-ml-10">
          
          {/* Titolo NERO */}
          <h1 
            ref={titleRef} 
            className="text-xl md:text-2xl uppercase tracking-[0.1em] [word-spacing:-0.2em] font-light bg-transparent mix-blend-difference text-black whitespace-nowrap pointer-events-auto"
          >
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>

          {/* Menu Hamburger Grigio - CLICCABILE */}
          <div className="pointer-events-auto relative">
            {/* Le 3 Linee Grigie - Ora attivano il toggle al click */}
            <button 
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 py-4 pl-10 outline-none group cursor-pointer"
            >
              <div className={`w-6 h-[1px] bg-gray-400 group-hover:bg-black transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></div>
              <div className={`w-6 h-[1px] bg-gray-400 group-hover:bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[1px] bg-gray-400 group-hover:bg-black transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></div>
            </button>
            
            {/* Voci Menu - Spariscono se clicchi di nuovo */}
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 flex flex-col items-end space-y-2 pt-4 animate-in fade-in slide-in-from-top-1 duration-300">
                <Link 
                  href="/disegni" 
                  className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  DISEGNI
                </Link>
                <Link 
                  href="/poetry" 
                  className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  POETRY
                </Link>
              </div>
            )}
          </div>
        </header>

 {/* Info fissa - Totalmente a destra e più in basso */}
<div className="fixed bottom-4 right-0 z-50 pointer-events-none pr-0 text-right w-full">
  <span className="pointer-events-auto block w-full uppercase text-[16px] md:text-[20px] tracking-[0.2em] font-medium text-black">
    SERIES: INTRECCI
  </span>
</div>

        {/* --- CORPO DEL SITO (OPERE) --- */}
      {/* INTRECCIO NO.3 - Ingrandito a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/1.JPG" 
    alt="INTRECCIO NO.3" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.3 — Oil 150x200
    </p>
  </div>
</div>
         
          {/* TRACCIA NO.1 - Ingrandita a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/3.jpg" 
    alt="TRACCIA NO.1" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      TRACCIA NO.1 — Carta 13x18
    </p>
  </div>
</div>
        
        
        {/* INTRECCIO NO.1 - Ingrandito a tutto schermo su mobile */}
<div className="mt-40 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/5.JPG" 
    alt="INTRECCIO NO.1" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.1 — Oil on linen 150x200
    </p>
  </div>
</div>
          
         {/* TRACCIA NO.2 - Ingrandita a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/222.jpg" 
    alt="TRACCIA NO.2" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      TRACCIA NO.2 — Carta 13x22
    </p>
  </div>
</div>

        <div className="mt-40 mb-40">
          <img src="/images/2.JPG" alt="INTRECCIO NO.2" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.2 — Oil on linen  100x150</p>
          </div>
        </div>

          <div className="mt-20 mb-40">
          <img src="/images/333.jpg" alt="TRACCIA NO.3" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">TRACCIA NO.3 — Carta 25x40</p>
          </div>
        </div>

{/* INTRECCIO NO.30 - Poco più piccolo con bordi bianchi visibili su mobile */}
<div className="mb-40 -mx-4 md:mx-0">
  <img 
    src="/images/33.JPG" 
    alt="INTRECCIO NO.30" 
    className="w-full h-auto" 
  />
  <div className="mt-6 px-4 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.30 — Oil 210x220
    </p>
  </div>
</div>
          <div className="mt-20 mb-40">
          <img src="/images/444.jpg" alt="TRACCIA NO.4" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">TRACCIA NO.4 — Policarbonato/Carta 21x29</p>
          </div>
        </div>

        {/* INTRECCIO NO.5 - Dimensione Massima su Mobile */}
<div className="mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/4.JPG" 
    alt="INTRECCIO NO.5" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.5 — Oil/Acrylic 70x140
    </p>
  </div>
</div>

          <div className="mt-20 mb-40">
          <img src="/images/666.jpg" alt="TRACCIA NO.5" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">TRACCIA NO.5 —Carta 21x27</p>
          </div>
        </div>

{/* INTRECCIO NO.11 - Tutto schermo su mobile, senza suggerimenti */}
<div className="mt-40 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/7.JPG" 
    alt="INTRECCIO NO.11" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.11 — Acrylic 100x170
    </p>
  </div>
</div>
      
        <div className="mt-40 mb-40">
          <img src="/images/14.jpg" alt="INTRECCIO NO.14" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.14 — Acrylic 70x100</p>
          </div>
        </div>

        <div className="mt-40 mb-40">
          <img src="/images/66.JPG" alt="INTRECCIO NO.4" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.4 — Charcoal on linen 150x200</p>
          </div>
        </div>

        <div className="mt-40 mb-40">
          <img src="/images/9.jpg" alt="INTRECCIO NO.7" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.7 — Oil 100x170</p>
          </div>
        </div>

       {/* RAMIFICAZIONE NO.1 - Ingrandito a tutto schermo su mobile */}
<div className="mt-40 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/8.jpg" 
    alt="RAMIFICAZIONE NO.1" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      RAMIFICAZIONE NO.1 — Oil 50X150
    </p>
  </div>
</div>

        {/* INTRECCIO NO.9 - Ingrandito a tutto schermo su mobile */}
<div className="mt-40 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/11.jpg" 
    alt="INTRECCIO NO.9" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.9 — Oil 60x120
    </p>
  </div>
</div>

      {/* INTRECCIO NO.8 (150x150) - Ingrandito a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/12.jpg" 
    alt="INTRECCIO NO.8" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.8 — Oil on linen 150x150
    </p>
  </div>
</div>
      
        <div className="mt-20 mb-40">
          <img src="/images/17.JPG" alt="INTRECCIO NO.6" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.6 — Oil on linen 50x70</p>
          </div>
        </div>
    
{/* INTRECCIO NO.17 - Ingrandito a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/21.JPG" 
    alt="INTRECCIO NO.17" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.17 — Acrylic 100x150
    </p>
  </div>
</div>


        <div className="mt-20 mb-40">
          <img src="/images/25.JPG" alt="INTRECCIO NO.15" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.15 — Acrylic 120x160</p>
          </div>
        </div>

        <div className="mt-20 mb-40">
          <img src="/images/20.JPG" alt="INTRECCIO NO.13" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.13 — Oil 80x120</p>
          </div>
        </div>

        <div className="mt-20 mb-40">
          <img src="/images/24.JPG" alt="INTRECCIO NO.34" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.34 — Oil 100x170</p>
          </div>
        </div>

       {/* INTRECCIO NO.13 - Ingrandito a tutto schermo su mobile */}
<div className="mt-20 mb-40 -mx-10 md:mx-0">
  <img 
    src="/images/15.jpg" 
    alt="INTRECCIO NO.13" 
    className="w-full h-auto" 
  />
  <div className="mt-4 px-10 md:px-0">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light uppercase">
      INTRECCIO NO.17 — Acrylic 100x170
    </p>
  </div>
</div>

        <div className="mt-20 mb-40">
          <img src="/images/22.jpg" alt="INTRECCIO NO.16" className="w-full h-auto" />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">INTRECCIO NO.16 — Acrylic 120x160</p>
          </div>
        </div>

        {/* --- BIO E CONTATTI --- */}
        <div className="mt-12 text-[11px] leading-relaxed max-w-xl text-gray-700 font-light tracking-wide">
          <p className="mb-4">Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p className="mb-4">Dal vegetale, la carne ha smesso di essere forma ed è diventata territorio; con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

       <div className="mt-20">
  <h2 className="text-[10px] uppercase tracking-widest border-b pb-2 text-gray-700 font-light">Premi</h2>
  <div className="mt-5">
    <p className="text-[11px] uppercase tracking-widest text-gray-800 font-light">COLLECTIVE EXHIBITION</p>
    <p className="text-[11px] text-gray-800 mt-2 font-light">Venice pavilion – Biennale The milk of dreams – Vincitore primo premio artefici del nostro tempo</p>
    <p className="text-[11px] text-gray-800 mt-2 font-light">2024 Slow afternoon collective – Roma</p>
  </div>
</div>

        <div className="mt-20">
  <h2 className="text-[10px] uppercase tracking-widest border-b pb-2 text-gray-700 font-light">Solo Shows</h2>
  <div className="mt-5 text-[11px] text-gray-700 font-light">
    <p>Afnakafna gallery 2019 – Moongloow – Roma</p>
    <p className="mt-2">Le nicchie gallery 2021 – Taranto</p>
    <p className="mt-2">Artra Gallery 2025 – Temporary collaboration – Milano</p>
  </div>
</div>

        <div className="mt-24 border-t pt-10 text-[11px] text-gray-700 font-light">
          <h2 className="text-[10px] uppercase tracking-widest text-gray-700 mb-4 font-light">Contact</h2>
          <p>Email: danieleraineri1990@gmail.com</p>
          <p className="mt-1">Instagram: @danieleraineristudio</p>
        </div>
      </div>
    </div>
  );
}
