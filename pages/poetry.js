import Head from "next/head";
import Link from "next/link";

export default function Poetry() {
  return (
    <div className="min-h-screen bg-white text-black p-10">
      <Head>
        <title>POETRY | DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Header minimale */}
        <header className="py-4 flex items-center justify-between -ml-8 md:-ml-10">
          <h1 className="text-[14px] md:text-[16px] uppercase tracking-[0.2em] font-extralight text-gray-800">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-[9px] tracking-[0.2em] font-extralight hover:text-black transition-colors">
            Back
          </Link>
        </header>

        <main className="mt-40 flex flex-col items-start">
          {/* Il verso: più piccolo, grigio scuro e sottilissimo */}
          <div className="max-w-md">
            <p className="text-[13px] md:text-[15px] tracking-[0.25em] leading-[2.5] text-gray-700 font-extralight uppercase">
              E forse pioggia, <br />
              silenzio della sera.
            </p>
          </div>

          {/* Sottile linea di chiusura o dettaglio dopo molto spazio */}
          <div className="mt-80 opacity-30">
            <p className="text-[9px] uppercase tracking-[0.3em] font-extralight text-gray-500">
              — raccolta
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
