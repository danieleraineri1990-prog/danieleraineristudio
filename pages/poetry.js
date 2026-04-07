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

        <main className="mt-40">
          <div className="max-w-md">
            <p className="text-[13px] md:text-[15px] tracking-[0.25em] leading-[2.8] text-gray-700 uppercase">
              Scriverò una poesia <br />
              ma non oggi forse domani <br />
              buttando giù alcune righe <br />
              mi ricorderò di te.
            </p>
          </div>

          <div className="mt-32">
            <p className="text-[10px] uppercase tracking-[0.2em] font-extralight text-gray-700">
              7 aprile 26 - di sera
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
