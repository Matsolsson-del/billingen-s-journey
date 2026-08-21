import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Tile } from "@/components/deck/ui";

export function S11() {
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Produkten" />
    <div className="absolute inset-y-0 right-0 w-1/2"><Photo src={img.skiRace} alt="Längdskidåkning på Billingen" position="center 48%" /><div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/20 to-transparent" /></div>
    <div className="absolute top-1/2 left-24 w-[900px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Officiellt Vasaloppscenter</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">Sälj inte elva<br />kilometer spår.</h2>
      <p className="slide-title anim-rise d4 mt-12 text-bill-teal">Sälj målet.</p>
      <p className="slide-body anim-fade d6 mt-8 opacity-65">Längdskidor · cykel · löpning · Resan till Vasaloppet</p>
    </div>
  </Slide>;
}

export function S12() {
  return <Slide tone="sand">
    <ActTag act="Akt 3" name="Följdinvesteringen" />
    <h2 className="slide-title anim-rise d1 absolute top-[140px] left-24">När platsen stärks vågar fler investera</h2>
    <div className="absolute top-[300px] right-24 left-24 grid h-[450px] grid-cols-2 gap-14">
      <Tile src={img.modernBuilding} alt="Billingehus" label="2022 · Lotus tar över" className="anim-rise d2" />
      <Tile src={img.hotelroom} alt="Nya Billingehus" label="2023–2025 · hotell, två spa och kongress" className="anim-rise d3" />
    </div>
    <div className="absolute right-24 bottom-24 left-24 flex justify-between"><p className="slide-subtitle text-bill-green">Platsen stärker hotellet.</p><p className="slide-subtitle text-bill-green">Hotellet stärker platsen.</p></div>
  </Slide>;
}

export function S13() {
  const actors = ["Politiken", "Skövde kommun", "Föreningslivet", "Näringslivet", "Billingehus", "Turistrådet", "Next Skövde", "Invånarna"];
  return <Slide tone="deep">
    <ActTag act="Akt 3" name="Människorna" />
    <h2 className="slide-title anim-rise d1 absolute top-[130px] right-24 left-24 text-center">Ingen enskild aktör äger framgången</h2>
    <div className="absolute top-[590px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2">
      {actors.map((t, i) => { const a=(i/actors.length)*Math.PI*2-Math.PI/2; return <div key={t} className={`anim-fade d${Math.min(8,i+1)} absolute w-[300px] text-center`} style={{left:380+Math.cos(a)*310-150,top:380+Math.sin(a)*310-20}}><span className="slide-body">{t}</span></div>; })}
      <div className="anim-rise absolute top-1/2 left-1/2 flex h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-yellow text-bill-ink"><p className="slide-subtitle">Billingen</p></div>
    </div>
    <p className="slide-body absolute bottom-14 left-24 opacity-60">Någon måste hålla ihop helheten. Alla måste kunna bidra.</p>
  </Slide>;
}

export function S14() {
  return <Slide tone="bare">
    <Photo src={img.vandring} alt="Vandring på Billingen" position="center 46%" zoom={false} />
    <div className="absolute inset-0 bg-gradient-to-r from-bill-ink/95 via-bill-ink/70 to-bill-ink/20" />
    <ActTag act="Akt 3" name="Connect" />
    <div className="absolute top-1/2 left-24 w-[980px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Till er i rummet</p>
      <h2 className="slide-title-lg anim-rise d1 mt-8">Tillsammans når<br />vi längre</h2>
      <p className="slide-subtitle anim-rise d3 mt-12 text-bill-teal">Produktutveckling · kampanjer · pressresor · PR</p>
      <p className="slide-body anim-fade d5 mt-10 max-w-[850px] opacity-70">Samarbetet med Turistrådet Västsverige har gjort Billingen starkare än vi hade kunnat göra platsen själva.</p>
    </div>
  </Slide>;
}

export function S15() {
  const ev=[{t:"SM-veckan 2023",src:img.skiRace},{t:"Enduro-VM 2025",src:img.mtb},{t:"SM-veckan 2027",src:img.eventCrowd}];
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Evenemangen" />
    <h2 className="slide-title anim-rise d1 absolute top-[140px] left-24">Evenemang är en utvecklingsmotor</h2>
    <div className="absolute top-[300px] right-24 bottom-24 left-24 grid grid-cols-3 gap-12">
      {ev.map((e,i)=><Tile key={e.t} src={e.src} alt={e.t} label={e.t} className={`anim-rise d${i+2}`} />)}
    </div>
    <p className="slide-body absolute bottom-14 left-24 text-bill-yellow">Deadline → stresstest → räckvidd → stolthet → nästa nivå</p>
  </Slide>;
}

export function S15B() {
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Berättelsen" />
    <div className="absolute inset-y-0 right-0 w-[52%]"><Photo src={img.billingetrollet} alt="Billingetrollet" position="center 40%" /><div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/25 to-transparent" /></div>
    <div className="absolute top-1/2 left-24 w-[860px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Billingetrollet</p>
      <h2 className="slide-title anim-rise d1 mt-10">En plats behöver också<br />en egen saga</h2>
      <p className="slide-body anim-fade d3 mt-10 opacity-70">Billingetrollets skog · skogsteater · skogsbio</p>
      <div className="anim-rise d5 mt-14 flex items-end gap-8">
        <span className="slide-stat text-bill-teal">2 700</span>
        <span className="slide-body mb-4 opacity-75">barn såg årets skogsteater</span>
      </div>
    </div>
  </Slide>;
}
