import Head from "next/head";
import Link from "next/link";

export default function Poetry() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>POETRY | DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="py-4 flex items-center justify-between -ml-8 md:-ml-10">
          <h1 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-black">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-xs tracking-widest hover:text-black transition-colors">
            Torna alla Home
          </Link>
        </header>

        <main className="mt-20">
          <h2 className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 mb-20">POETRY</h2>
          
          {/* Qui scriverai i tuoi testi */}
          <div className="max-w-xl text-lg leading-relaxed font-light text-gray-800">
            <p className="mb-8">Le parole seguono il segno...</p>
          </div>
        </main>
      </div>
    </div>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Poetry() {
  const textRef = useRef(null);

  useEffect(() => {
    // Una piccola animazione fluida per far apparire il testo
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <div className="min-h-screen bg-white text-black p-10 font-light">
      <Head>
        <title>POETRY | DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header coerente con la Home */}
        <header className="py-4 flex items-center justify-between -ml-8 md:-ml-10">
          <h1 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-black">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-[10px] tracking-widest hover:text-black transition-colors">
            Back to Home
          </Link>
        </header>

        <main className="mt-32">
          {/* Titolo della sezione */}
          <h2 className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 mb-24">
            POETRY
          </h2>
          
          {/* Il tuo verso */}
          <div 
            ref={textRef}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl tracking-[0.15em] leading-relaxed text-gray-800 font-light">
              pioggia, vento, <br />
              silenzio della sera.
            </p>
          </div>

          {/* Footer minimale */}
          <div className="mt-64 border-t pt-10 text-[11px] text-gray-400 uppercase tracking-widest">
            
          </div>
        </main>
      </div>
    </div>
  );
}
