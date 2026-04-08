import Head from "next/head";
import Link from "next/link";

export default function Disegni() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-10">
      <Head>
        <title>DISEGNI | DANIELE RAINERI STUDIO</title>
      </Head>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        {/* HEADER COMPATTO */}
        <header className="py-4 flex items-center justify-between">
          <h1 className="text-sm md:text-xl uppercase tracking-widest font-light text-black">
            <Link href="/">DANIELE-RAINERI-STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-[10px] tracking-widest hover:text-black transition-colors">
            BACK
          </Link>
        </header>

        <main className="mt-16 md:mt-24">
          {/* TITOLO E SOTTOTITOLO STATICI (ELEGANTI) */}
          <div className="mb-16 md:mb-24 animate-fade">
            <h2 className="text-3xl md:text-5xl uppercase tracking-tighter font-light text-black">
              Disegni
            </h2>
            <p className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-extralight text-gray-400">
              produzione 2026
            </p>
          </div>
          
          {/* GRIGLIA DISEGNI - TUTTI E 7 PRESENTI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24 mb-32">
            
            <div className="group">
              <img src="/images/1D.JPG" alt="Daniele Raineri" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            <div className="group">
              <img src="/images/2D.JPG" alt="Daniele Raineri" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[9px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            <div className="group">
              <img src="/images/
