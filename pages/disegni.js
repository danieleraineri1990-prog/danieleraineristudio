import Head from "next/head";
import Link from "next/link";

export default function Disegni() {
  return (
    <div className="min-h-screen bg-white text-black p-6 md:p-10 overflow-x-hidden">
      <Head>
        <title>DISEGNI | DANIELE RAINERI STUDIO</title>
      </Head>

      {/* STILI ANIMAZIONI */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          0% { opacity: 0; transform: translateX(0); }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; transform: translateX(100vw); }
        }
        .animate-title {
          animation: fadeIn 1.2s ease-out forwards;
        }
        .animate-subtitle {
          display: inline-block;
          white-space: nowrap;
          animation: slideRight 6s linear forwards;
          animation-delay: 1s;
          opacity: 0;
        }
      `}</style>

      <div className="max-w-4xl mx-auto relative">
        {/* HEADER: SOLO IL NOME STUDIO - NESSUN ALTRO ELEMENTO */}
        <header className="py-4">
          <h1 className="text-sm md:text-xl uppercase tracking-widest font-light text-black leading-tight">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
        </header>

        <main className="mt-20">
          {/* TITOLO E FRASE ANIMATA */}
          <div className="mb-20 overflow-hidden relative">
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter font-light text-black animate-title">
              Disegni
            </h2>
            <div className="relative w-full h-6">
              <p className="absolute left-0 mt-2 text-[10px] uppercase tracking-[0.3em] font-extralight text-gray-400 animate-subtitle">
                produzione 2026
              </p>
            </div>
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
