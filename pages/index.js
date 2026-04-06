import Head from "next/head";
import data from "../data/portfolio.json";

export default function Home() {
  return (
    <div className="container mx-auto mb-10 mt-10 px-5">
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="max-w-4xl">
        {/* Titolo più piccolo e meno pesante */}
        <h1 className="text-xl font-mono mt-5 uppercase tracking-widest">
          {data.name}
        </h1>
        
        {/* Testo descrittivo rimpicciolito (text-base) */}
        <div className="mt-10 font-mono text-base leading-relaxed max-w-2xl text-gray-800">
          <p className="mb-4">{data.headerTaglineTwo}</p>
          <p className="mb-4">{data.headerTaglineThree}</p>
          <p className="mb-10">{data.headerTaglineFour}</p>
        </div>

        <div className="mt-20">
          <h2 className="font-mono text-sm uppercase tracking-widest border-b pb-2 text-gray-500">Solo Shows</h2>
          <div className="mt-5 font-mono text-sm text-gray-700">
            <p>Afnakafna gallery 2019 - Moongloow - Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 - Taranto</p>
          </div>
        </div>

        <div className="mt-24 border-t pt-10">
           <p className="font-mono text-sm uppercase tracking-widest text-gray-400">SERIES: INTRECCI</p>
        </div>
      </div>
    </div>
  );
}
