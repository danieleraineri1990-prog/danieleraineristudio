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
     <Head>
  <title>DANIELE RAINERI STUDIO</title>
  <meta name="google-site-verification" content="m6HHKQMhVsaU59B2WftQbjoKLC3qFuhA0cJGvdL7j2w" />
</Head>

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
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
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
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.8 — Oil 100x150
            </p>
          </div>
        </div>
               <div className="mb-40">
          <img 
            src="/images/33.JPG" 
            alt="INTRECCIO NO.30" 
            className="w-full h-auto" 
          />
          <div className="mt-6">
           <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.30 — Oil 210x220
            </p>
          </div>
        </div>
              <div className="mb-40">
  <img 
    src="/images/4.JPG" 
    alt="INTRECCIO NO.5" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.5 — Oil/Acrylic 70x140
    </p>
  </div>
</div>
       <div className="mt-40 mb-40">
          <img 
            src="/images/5.JPG" 
            alt="INTRECCIO NO.1" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.1 — Oil on linen 150x200
            </p>
          </div>
        </div>
               <div className="mt-40 mb-40">
          <img 
            src="/images/7.JPG" 
            alt="INTRECCIO NO.11" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.11 — Acrylic 100x170
            </p>
          </div>
        </div>
               <div className="mt-40 mb-40">
          <img 
            src="/images/14.jpg" 
            alt="INTRECCIO NO.14" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.14 — Acrylic 70x100
            </p>
          </div>
        </div>
               <div className="mt-40 mb-40">
          <img 
            src="/images/66.JPG" 
            alt="INTRECCIO NO.4" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.4 — Charcoal on linen 150x200
            </p>
          </div>
        </div>
               <div className="mt-40 mb-40">
          <img 
            src="/images/9.jpg" 
            alt="INTRECCIO NO.7" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.7 — Oil 100x170
            </p>
          </div>
        </div>
              <div className="mt-40 mb-40">
          <img 
            src="/images/8.jpg" 
            alt="RAMIFICAZIONE NO.1" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              RAMIFICAZIONE NO.1 — Oil 50X150
            </p>
          </div>
        </div>
              <div className="mt-40 mb-40">
          <img 
            src="/images/11.jpg" 
            alt="INTRECCIO NO.9" 
            className="w-full h-auto" 
          />
          <div className="mt-4">
            <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
              INTRECCIO NO.9 — Oil 60x120
            </p>
          </div>
        </div>
              <div className="mt-20 mb-40">
  <img 
    src="/images/12.jpg" 
    alt="INTRECCIO NO.8" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.8 — Oil on linen 150x150
    </p>
  </div>
</div>
      
<div className="mt-20 mb-40">
  <img 
    src="/images/17.JPG" 
    alt="INTRECCIO NO.6" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.6 — Oil on linen 50x70
    </p>
  </div>
</div>
      <div className="mt-20 mb-40">
  <img 
    src="/images/25.JPG" 
    alt="INTRECCIO NO.15" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.15 — Acrylic 120x160
    </p>
  </div>
</div>
        <div className="mt-20 mb-40">
  <img 
    src="/images/20.JPG" 
    alt="INTRECCIO NO.15" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.13 — Oil 80x120
    </p>
  </div>
</div>
       <div className="mt-20 mb-40">
  <img 
    src="/images/24.JPG" 
    alt="INTRECCIO NO.34" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.34 — Oil 100x170
    </p>
  </div>
</div>
      <div className="mt-20 mb-40">
  <img 
    src="/images/21.JPG" 
    alt="INTRECCIO NO.17" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.17 — Oil 80x120
    </p>
  </div>
</div>
      <div className="mt-20 mb-40">
  <img 
    src="/images/22.jpg" 
    alt="INTRECCIO NO.16" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.16 — Acrylic 120x160
    </p>
  </div>
</div>
       <div className="mt-20 mb-40">
  <img 
    src="/images/10.jpg" 
    alt="INTRECCIO NO.18" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      INTRECCIO NO.18 — Oil 40x50
    </p>
  </div>
</div>
      <div className="mt-20 mb-40">
  <img 
    src="/images/18.jpg" 
    alt="RAMIFICAZIONE NO.2" 
    className="w-full h-auto" 
  />
  <div className="mt-4">
    <p className="text-[11px] tracking-[0.1em] text-gray-400 font-light">
      RAMIFICAZIONE NO.2 — Oil 50X70
    </p>
  </div>
</div>
    

      


        <div className="mt-12 text-[11px] leading-relaxed max-w-xl text-gray-700 font-light tracking-wide">
          <p className="mb-4">Avanza una ricerca in pittura che indaga cos&apos;è un corpo quando la sua identità ha smesso di reggere.</p>
          <p className="mb-4">Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
          <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
        </div>

        <div className="mt-20">
          <h2 className="text-[10px] uppercase tracking-widest border-b pb-2 text-gray-700 font-light">Premi</h2>
          <div className="mt-5">
            <p className="text-[11px] uppercase tracking-widest text-gray-800 font-light">COLLECTIVE EXHIBITION</p>
            <p className="text-[11px] text-gray-800 mt-2 font-light">Venice pavilion – Biennale The milk of dreams – Vincitore primo premio artefici del nostro tempo</p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-[10px] uppercase tracking-widest border-b pb-2 text-gray-700 font-light">Solo Shows</h2>
          <div className="mt-5 text-[11px] text-gray-700 font-light">
            <p>Afnakafna gallery 2019 – Moongloow – Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 – Taranto</p>
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
