import Head from "next/head";
import Link from "next/link";

export default function Disegni() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>DISEGNI | DANIELE RAINERI STUDIO</title>
      </Head>

      {/* STILI PER LE ANIMAZIONI */}
      <style jsx global>{`
        @keyframes titleFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes subtitleFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-title {
          animation: titleFadeIn 1.2s ease-out forwards;
        }
        .animate-subtitle {
          opacity: 0; /* Parte invisibile */
          animation: subtitleFadeIn 1.5s ease-out forwards;
          animation-delay: 0.8s; /* Inizia dopo il titolo */
        }
      `}</style>

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
          {/* AREA TITOLO RIDOTTO E SOTTOTITOLO ANIMATO */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter font-light text-black animate-title">
              Disegni
            </h2>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] font-extralight text-gray-500 animate-subtitle">
              produzione 2026
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-40">
            
            {/* 1D */}
            <div className="group">
              <img src="/images/1D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 2D */}
            <div className="group">
              <img src="/images/2D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 3D */}
            <div className="group">
              <img src="/images/3D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 4D */}
            <div className="group">
              <img src="/images/4D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 5D */}
            <div className="group">
              <img src="/images/5D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 6D */}
            <div className="group">
              <img src="/images/6D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 21x29</p>
            </div>

            {/* 7D */}
            <div className="group">
              <img src="/images/7D.JPG" alt="Daniele Raineri Studio" className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">CARTA 13X18</p>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
