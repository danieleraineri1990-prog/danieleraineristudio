import Head from "next/head";
import Link from "next/link";

export default function Poetry() {
  return (
    <div className="min-h-screen bg-white text-black p-10 font-extralight">
      <Head>
        <title>POETRY | DANIELE RAINERI STUDIO</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="py-4 flex items-center justify-between -ml-8 md:-ml-10">
          <h1 className="text-[14px] md:text-[16px] uppercase tracking-[0.2em] font-extralight text-gray-800">
            <Link href="/">DANIELE RAINERI STUDIO</Link>
          </h1>
          <Link href="/" className="text-gray-400 uppercase text-[9px] tracking-[0.2em] hover:text-black transition-colors">
            Back
          </Link>
        </header>

        <main className="mt-40 mb-60">
          
          {/* PRIMA POESIA */}
          <div className="max-w-md">
            <p className="text-[13px] md:text-[15px] tracking-[0.25em] leading-[2.8] text-gray-700 uppercase">
              Scriverò una poesia <br />
              ma non oggi forse domani <br />
              buttando giù alcune righe <br />
              mi ricorderò di te.
            </p>
            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] font-extralight text-gray-700">
              7 aprile 26 - di sera
            </p>
          </div>

          {/* LINEA DIVISORIA */}
          <hr className="my-32 border-0 h-[1px] bg-gray-200 w-20" />

          {/* SECONDA POESIA */}
          <div className="max-w-md">
            <p className="text-[13px] md:text-[15px] tracking-[0.25em] leading-[2.8] text-gray-700 uppercase">
              Io non so chi sei <br />
              e tu non conosci me <br />
              ma vorrei darti gli occhi miei <br />
              per farti vedere ciò che vedo io <br />
              <br />
              non tutto è colorato e, <br />
              qualche volta, <br />
              di buio io mi nutro. <br />
              <br />
              ma se tu andassi via, <br />
              io lo capirei <br />
              perché altro non so fare, <br />
              - che vivere così.
            </p>
            
            {/* DATA SECONDA POESIA */}
            <p className="mt-12 text-[10px] uppercase tracking-[0.2em] font-extralight text-gray-700">
              scritta in estate, 2025
            </p>
          </div>

        </main>
      </div>
    </div>
  );
}
