import Head from "next/head";
import data from "../data/portfolio.json";

export default function Home() {
  return (
    <div className="container mx-auto mb-20 mt-10 px-5 bg-white">
      <Head>
        <title>Daniele Raineri Studio</title>
      </Head>

      <div className="max-w-4xl">
        <h1 className="text-sm font-mono mt-5 uppercase tracking-[0.3em] font-bold text-black">
          DANIELE RAINERI STUDIO
        </h1>
        
        <div className="mt-12 font-mono text-[13px] leading-relaxed max-w-xl text-gray-800">
          <p className="mb-4">{data.headerTaglineTwo}</p>
          <p className="mb-4">{data.headerTaglineThree}</p>
          <p className="mb-10">{data.headerTaglineFour}</p>
        </div>

        <div className="mt-20">
          <h2 className="font-mono text-[11px] uppercase tracking-widest border-b pb-2 text-gray-400">Premi</h2>
          <div className="mt-5 font-mono">
            <p className="text-lg uppercase font-bold tracking-widest text-black">
              PREMI: COLLECTIVE EXIBITION
            </p>
            <p className="text-[13px] text-gray-700 mt-2">
              Venice pavilion - Biennale The milk of dreams - Vincitore primo premio artefici del nostro tempo
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-mono text-[11px] uppercase tracking-widest border-b pb-2 text-gray-400">Solo Shows</h2>
          <div className="mt-5 font-mono text-[12px] text-gray-600">
            <p>Afnakafna gallery 2019 - Moongloow - Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 - Taranto</p>
          </div>
        </div>

        <div className="mt-24 border-t pt-10">
          <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-4">Contact</h2>
          <div className="font-mono text-[13px] text-black">
            <p>Email: danieleraineri1990@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

