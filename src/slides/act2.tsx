import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Tile } from "@/components/deck/ui";

const A2 = { act: "Akt 2", name: "Modet" };

export function S06() {
  return <Slide tone="sand">
    <ActTag {...A2} />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[46%]"><Photo src={img.pumptrack} alt="Pumptrack på Billingen" /><div className="fade-r-sand absolute inset-0" /></div>
    <div className="absolute top-[210px] left-24 w-[1030px]">
      <p className="slide-kicker text-bill-green">Beslutad total investeringsbudget</p>
      <p className="slide-mega anim-rise d1 mt-8 text-bill-green" style={{ fontSize: 172, whiteSpace: "nowrap" }}>288 mkr</p>
      <h2 className="slide-title anim-rise d3 mt-10">Mod är att besluta<br />innan effekten syns</h2>
      <p className="slide-body anim-fade d6 mt-10 opacity-60">Utveckling av Billingen · över mandatperioder och majoriteter</p>
    </div>
  </Slide>;
}

export function S07() {
  const moves = [
    { src: img.skiClassic, from: "Väderberoende", to: "Mer snösäkert" },
    { src: img.billingecenter, from: "Enskilda delar", to: "Sammanhängande plats" },
    { src: img.vindskydd, from: "Vintersäsong", to: "Året runt" },
  ];
  return <Slide tone="ink">
    <ActTag {...A2} />
    <h2 className="slide-title anim-rise d1 absolute top-[145px] left-24">Pengarna byggde tre förflyttningar</h2>
    <div className="absolute top-[300px] right-24 bottom-[150px] left-24 grid grid-cols-3 gap-12">
      {moves.map((m, i) => <div key={m.from} className={`anim-rise d${i + 2} relative overflow-hidden`}>
        <img src={m.src} alt={`${m.from} blir ${m.to}`} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-bill-ink via-transparent to-transparent" />
        <div className="absolute right-10 bottom-10 left-10"><p className="slide-body opacity-60">{m.from}</p><p className="slide-subtitle mt-2 text-bill-yellow">→ {m.to}</p></div>
      </div>)}
    </div>
    <p className="slide-body-lg anim-fade d6 absolute bottom-[60px] left-24 opacity-75">Planerna förändrades. Ägare byttes. Förutsättningarna hann skifta. <span className="text-bill-teal">Men riktningen låg fast.</span></p>
  </Slide>;
}


export function S09() {
  return <Slide tone="green">
    <ActTag act="Akt 2" name="Dubbla nyttan" />
    <div className="absolute top-[300px] left-1/2 flex -translate-x-1/2 items-center">
      <div className="anim-rise d2 flex h-[470px] w-[470px] items-center justify-center rounded-full bg-white/15"><p className="slide-title -translate-x-16 text-center">Bra att<br />besöka</p></div>
      <div className="anim-rise d3 -ml-[150px] flex h-[470px] w-[470px] items-center justify-center rounded-full bg-bill-yellow text-bill-ink"><p className="slide-title translate-x-16 text-center">Bra att<br />leva på</p></div>

    </div>
    <p className="slide-subtitle anim-fade d6 absolute right-24 bottom-16 left-24 text-center">Samma plats. Dubbelt värde.</p>
  </Slide>;
}

export function S10() {
  const seasons = [
    { s: "Vinter", src: img.xcFamily, alt: "Familj på längdskidor i Billingens spår" },
    { s: "Vår", src: img.trailRun, alt: "Löpning på Billingens stigar" },
    { s: "Sommar", src: img.mtb, alt: "Mountainbike i sommargrön skog på Billingen" },
    { s: "Höst", src: img.mtbForest, alt: "Cyklist i höstskog på Billingen" },
  ];
  return <Slide tone="sand">
    <ActTag act="Akt 2" name="Året runt" />
    <h2 className="slide-title anim-rise d1 absolute top-[145px] left-24">Året runt är en affärsmodell</h2>
    <div className="absolute top-[300px] right-24 bottom-24 left-24 grid grid-cols-4 gap-8">
      {seasons.map((x, i) => <Tile key={x.s} src={x.src} alt={x.alt} label={x.s} className={`anim-rise d${i + 2}`} />)}
    </div>
    <p className="slide-body absolute bottom-14 left-24 opacity-60">Jämnare efterfrågan · robustare verksamheter · bättre nyttjande</p>
  </Slide>;
}
