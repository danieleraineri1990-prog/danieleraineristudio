import Head from "next/head";
import Link from "next/link";

export default function Poetry() {
  return (
    <div className="min-h-screen bg-white text-black p-10 font-light">
      <Head>
        <title>POETRY | DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="py-4 flex items-center justify-between -ml-8 md:-ml-10">
          <h1 className="text-xl md:text-2xl uppercase tracking-[0.1em] font-light text-black">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-[10px] tracking-widest hover:text-black transition-colors">
            Back to Home
          </Link>
        </header>

        <main className="mt-32">
          <h2 className="text-5xl md:text-7xl uppercase tracking-tighter font-light text-gray-700 mb-24">
            POETRY
          </h2>
          
          <div className="max-w-xl">
            <p className="text-xl md:text-2xl tracking-[0.15em] leading-relaxed text-gray-800 font-light italic">
              E forse pioggia, vento, <br />
              silenzio della sera.
            </p>
          </div>

          <div className="mt-64 border-t pt-10 text-[11px] text-gray-400 uppercase tracking-widest">
            Daniele Raineri — 
          </div>
        </main>
      </div>
    </div>
  );
}
