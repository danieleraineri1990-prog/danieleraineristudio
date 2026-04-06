import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>DANIELE RAINERI STUDIO</title>
      </Head>

      <main className="container mx-auto mb-20 mt-10 px-5">
        <div className="max-w-4xl">
          {/* TITOLO */}
          <h1 className="text-sm font-mono mt-5 uppercase tracking-[0.3em] font-bold text-black">
            DANIELE RAINERI STUDIO
          </h1>
          
          {/* RICERCA */}
          <div className="mt-12 font-mono text-[13px] leading-relaxed max-w-xl text-gray-800 italic">
            <p className="mb-4">Avanza una ricerca in pittura che indaga cos’è un corpo quando la sua identita ha smesso di reggere.</p>
            <p className="mb-4">Dal vegetale, con innesti e ramificazioni, si identifica un senso del ricrescere.</p>
            <p className="mb-10">A volte la sua pittura ricorda degli abbracci.</p>
          </div>

          {/* PREMI */}
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

          {/* MOSTRE */}
          <div className="mt-20">
            <h2 className="font-mono text-[11px] uppercase tracking-widest border-b pb-2 text-gray-400">Solo Shows</h2>
            <div className="mt-5 font-mono text-[12px] text-gray-600">
              <p>Afnakafna gallery 2019 - Moongloow - Roma</p>
              <p className="mt-2 border-b pb-2">Le nicchie gallery 2021 - Taranto</p>
            </div>
          </div>

          {/* CONTATTI */}
          <div className="mt-24 border-t pt-10">
            <h2 className="font-mono text-[11px] uppercase tracking-widest text-gray-400 mb-4">Contact</h2>
            <div className="font-mono text-[13px] text-black">
              <p>Email: danieleraineri1990@gmail.com</p>
              <p className="mt-1">Instagram: @danieleraineristudio</p>
            </div>
          </div>

          {/* CHIUSURA */}
          <div className="mt-32">
             <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-gray-300">SERIES: INTRECCI</p>
          </div>
        </div>
      </main>
    </div>
  );
}
