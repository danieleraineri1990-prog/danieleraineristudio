import Head from "next/head";
import data from "../data/portfolio.json";

export default function Home() {
  return (
    <div className="container mx-auto mb-10 mt-10 px-5">
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="max-w-4xl">
        <h1 className="text-3xl font-mono mt-5 uppercase font-bold">
          {data.name}
        </h1>
        
        <div className="mt-10 font-mono text-xl leading-relaxed">
          <p className="mb-6">{data.headerTaglineTwo}</p>
          <p className="mb-6">{data.headerTaglineThree}</p>
          <p className="mb-10">{data.headerTaglineFour}</p>
        </div>

        <div className="mt-20">
          <h2 className="font-mono font-bold text-lg border-b pb-2">Solo Shows</h2>
          <div className="mt-5 font-mono">
            <p>Afnakafna gallery 2019 - Moongloow - Roma</p>
            <p className="mt-2">Le nicchie gallery 2021 - Taranto</p>
          </div>
        </div>

        <div className="mt-20 flex justify-between items-end border-t pt-10">
           <p className="font-mono font-bold text-xl">SERIES: INTRECCI</p>
        </div>
      </div>
    </div>
  );
}
