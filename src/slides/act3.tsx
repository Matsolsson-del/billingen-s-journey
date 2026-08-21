import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Tile } from "@/components/deck/ui";

export function S11() {
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Produkten" />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[56%]"><Photo src={img.skiRace} alt="Längdskidåkning på Billingen" position="center 48%" /><div className="fade-r-ink absolute inset-0" /></div>
    <div className="absolute top-1/2 left-24 w-[900px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Officiellt Vasaloppscenter</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">Sälj inte elva<br />kilometer spår.</h2>
      <p className="slide-title anim-rise d4 mt-12 text-bill-teal">Sälj målet.</p>
      <p className="slide-body anim-fade d6 mt-8 opacity-65">Längdskidor · cykel · löpning · Resan till Vasaloppet</p>
    </div>
  </Slide>;
}

/** Billingehus: risken → vändpunkten → resultatet i en enda sekvens. */
export function S11B() {
  const beats = [
    { y: "Före", t: "Ett slitet hotell", d: "Destinationens svagaste länk." },
    { y: "2022", t: "Lotus Group tar över", d: "Såg potential där andra såg risk." },
    { y: "2023–2025", t: "Hotell, spa och kongress", d: "Efter en omfattande omvandling." },
  ];
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Vändningen" />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[42%]"><Photo src={img.modernBuilding} alt="Billingehus efter omvandlingen" position="center 50%" /><div className="fade-r-ink absolute inset-0" /></div>
    <div className="absolute top-[210px] left-24 w-[1020px]">
      <p className="slide-kicker text-bill-yellow">Mitt i investeringsbeslutet</p>
      <h2 className="slide-title anim-rise d1 mt-8">Lotus såg potential<br />där andra såg risk</h2>
      <div className="mt-12 space-y-6">
        {beats.map((b, i) => (
          <div key={b.y} className={`anim-rise d${i + 2} flex items-baseline gap-10 border-t border-white/15 pt-5`}>
            <span className="slide-subtitle w-[230px] shrink-0 text-bill-teal">{b.y}</span>
            <div>
              <p className="slide-body-lg">{b.t}</p>
              <p className="slide-body opacity-60">{b.d}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="slide-body-lg anim-fade d6 mt-10">Offentligt och privat började dra åt samma håll.</p>
    </div>
  </Slide>;
}


export function S13() {
  const actors = ["Politiken", "Skövde kommun", "Föreningslivet", "Näringslivet", "Billingehus", "Turistrådet", "Next Skövde", "Invånarna"];
  const R = 330;
  const C = 420;
  const pos = actors.map((t, i) => {
    const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
    return { t, x: C + Math.cos(a) * R, y: C + Math.sin(a) * R };
  });
  return <Slide tone="deep">
    <ActTag act="Akt 3" name="Människorna" />
    <h2 className="slide-title anim-rise d1 absolute top-[120px] right-24 left-24 text-center">Ingen enskild aktör äger framgången</h2>
    <div className="absolute top-[620px] left-1/2 h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2">
      <svg viewBox="0 0 840 840" className="anim-fade absolute inset-0 h-full w-full" aria-hidden="true">
        {pos.map((p, i) => (
          <g key={p.t}>
            <line x1={p.x} y1={p.y} x2={C} y2={C} stroke="white" strokeOpacity="0.28" strokeWidth="2" />
            <line x1={p.x} y1={p.y} x2={pos[(i + 1) % pos.length]!.x} y2={pos[(i + 1) % pos.length]!.y} stroke="white" strokeOpacity="0.14" strokeWidth="2" />
          </g>
        ))}
      </svg>
      {pos.map((p, i) => (
        <div
          key={p.t}
          className={`anim-fade d${Math.min(8, i + 1)} absolute flex h-[150px] w-[300px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-green-deep px-6 text-center ring-2 ring-white/25`}
          style={{ left: p.x, top: p.y }}
        >
          <span className="slide-body-lg leading-tight">{p.t}</span>
        </div>
      ))}
      <div className="anim-rise absolute top-1/2 left-1/2 flex h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-yellow text-bill-ink">
        <p className="slide-subtitle">Billingen</p>
      </div>
    </div>
    <p className="slide-body absolute bottom-14 left-24 opacity-65">Någon måste hålla ihop helheten. Alla måste kunna bidra.</p>
  </Slide>;
}

export function S14() {
  return <Slide tone="green">
    <ActTag act="Akt 3" name="Connect" />
    <div className="absolute top-1/2 left-24 w-[1380px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Till er i rummet</p>
      <h2 className="slide-title-lg anim-rise d1 mt-8">Tillsammans når<br />vi längre</h2>
      <p className="slide-subtitle anim-rise d3 mt-14 text-bill-teal">Produktutveckling · kampanjer · pressresor · marknadsbearbetning</p>
      <p className="slide-body-lg anim-fade d5 mt-12 max-w-[1150px] opacity-80">Samarbetet med Turistrådet Västsverige har gett Billingen kompetens och räckvidd som vi inte hade byggt lika starkt på egen hand.</p>
    </div>
  </Slide>;
}

export function S15() {
  const ev = [
    { t: "SM-veckan 2023", src: img.eventCrowd, alt: "Publik under SM-veckan i Skövde" },
    { t: "SM-veckan 2027", src: img.skiersTwo, alt: "Skidåkare på Billingen" },
  ];
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Evenemangen" />
    <h2 className="slide-title anim-rise d1 absolute top-[140px] left-24">Evenemang är en utvecklingsmotor</h2>
    <div className="absolute top-[300px] right-24 bottom-24 left-24 grid grid-cols-3 gap-12">
      <Tile src={ev[0]!.src} alt={ev[0]!.alt} label={ev[0]!.t} className="anim-rise d2" />
      {/* Ingen rättighetsklar bild från Enduro-VM (motorcykelenduro) – typografisk yta i stället. */}
      <div className="anim-rise d3 flex flex-col">
        <div className="relative flex flex-1 flex-col justify-end bg-bill-green-deep p-10">
          <span className="absolute top-8 right-8 h-4 w-24 bg-bill-yellow" />
          <p className="slide-kicker text-bill-teal">FIM EnduroGP</p>
          <p className="slide-title mt-4 leading-none">Enduro-<br />VM</p>
          <p className="slide-body mt-4 opacity-70">Motorcykelenduro i Skövde, 23–25 maj 2025</p>
        </div>
        <p className="slide-subtitle mt-6">Enduro-VM 2025</p>
      </div>
      <Tile src={ev[1]!.src} alt={ev[1]!.alt} label={ev[1]!.t} className="anim-rise d4" />
    </div>
    <p className="slide-body absolute bottom-14 left-24 text-bill-yellow">Deadline → stresstest → räckvidd → stolthet → nästa nivå</p>
  </Slide>;
}

export function S15B() {
  return <Slide tone="ink">
    <ActTag act="Akt 3" name="Berättelsen" />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[52%]"><Photo src={img.billingetrollet} alt="Billingetrollet i Billingetrollets skog" position="center 40%" /><div className="fade-r-ink absolute inset-0" /></div>
    <div className="absolute top-1/2 left-24 w-[880px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Billingetrollet</p>
      <h2 className="slide-title anim-rise d1 mt-10">En plats behöver också<br />en egen saga</h2>
      <p className="slide-body anim-fade d3 mt-10 opacity-70">Billingetrollets skog · skogsteater · skogsbio</p>
      <div className="anim-rise d5 mt-14 flex items-end gap-8">
        <span className="slide-title-lg text-bill-teal" style={{fontSize:"132px",lineHeight:1,whiteSpace:"nowrap"}}>2 500</span>
        <span className="slide-body mb-3 max-w-[380px] opacity-75">besökare på skogsteaterns premiärsäsong 2025</span>
      </div>
      <p className="slide-source mt-8">Källa: Next Skövde, pressmeddelande 25 augusti 2025.</p>
    </div>
  </Slide>;
}
