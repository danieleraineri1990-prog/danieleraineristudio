import Head from "next/head";
import Link from "next/link";

export default function Disegni() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>DISEGNI | DANIELE RAINERI STUDIO</title>
      </Head>

      {/* STILI ANIMAZIONI SICURE */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-title {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <header className="py-4 flex items-center justify-between">
          {/* NOME UNITO - TUTTO SULLO STESSO RIGO */}
          <h1 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-black">
            <Link href="/">DANIELE-RAINERI-STUDIO</Link>
          </h1>
          {/* LINK CAMBIATO IN BACK */}
          <Link href="/" className="text-gray-400 uppercase text-xs tracking-widest hover:text-black transition-colors">
            BACK
          </Link>
        </header>

        <main className="mt-20">
          {/* TITOLO E SOTTOTITOLO CON ANIMAZIONE SOLO VERTICALE */}
          <div className="mb-20 animate-title">
            <h2 className="text-4xl md:text-5xl uppercase tracking-tighter font-light text-black">
              Disegni
            </h2>
            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] font-extralight text-gray-400">
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
