import Head from "next/head";
import Link from "next/link";

export default function Disegni() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>DISEGNI | DANIELE RAINERI STUDIO</title>
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
          <h2 className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 mb-20">DISEGNI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 mb-40">
            
            {/* --- DISEGNO 1 --- */}
            <div className="group">
              <img 
                src="/images/1d.jpg" 
                alt="Daniele Raineri Studio" 
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700" 
              />
              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-light">
                CARTA 21x29
              </p>
            </div>
            {/* --- FINE DISEGNO 1 --- */}

          </div>
        </main>
      </div>
    </div>
  );
}
