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

/** Risken: Billingehus före omvandlingen. */
export function S11B() {
  return <Slide tone="ink">
    <Photo src={img.billingehusBefore} alt="First Hotel Billingehus 2019, före omvandlingen" position="center 55%" zoom={false} />
    <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(4,26,24,.94) 0%, rgba(4,26,24,.80) 42%, rgba(4,26,24,.35) 75%, rgba(4,26,24,.30) 100%)" }} />
    <ActTag act="Akt 3" name="Risken" />
    <div className="absolute top-1/2 left-24 w-[1000px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Billingehus 2019</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">Här kunde resan<br />ha stannat.</h2>
      <p className="slide-body-lg anim-fade d4 mt-14 opacity-85">Ett slitet hotell. En osäker framtid.</p>
      <p className="slide-body-lg anim-fade d6 mt-4 opacity-85">Destinationens viktigaste svaga länk.</p>
    </div>
    <p className="slide-source absolute right-20 bottom-14 opacity-45">Foto: I99pema, Wikimedia Commons, CC BY-SA 4.0 (2019)</p>
  </Slide>;
}

/** Förvandlingen: kongress, spa och outdoor på samma berg. */
export function S11C({ step = 0 }: { step?: number }) {
  const facts = [
    { v: "Upp till 750", l: "kongressgäster i Bergasalen" },
    { v: "235", l: "hotellrum" },
    { v: "2 min", l: "till leder och konstsnöspår" },
  ];
  const years = [
    { y: "2021–2022", t: "Lotus tar över" },
    { y: "2023", t: "Billingehus återöppnar" },
    { y: "2024–2025", t: "Spa och kongress färdigställs" },
  ];
  return <Slide tone="sand">
    <div className="absolute inset-y-0 left-0 w-[64%] overflow-hidden">
      <Photo src={img.bergasalenNight} alt="Bergasalen på Billingehus i kvällsljus" position="center 55%" zoom={false} />
    </div>
    <div
      className="absolute right-0 bottom-0 w-[36%] overflow-hidden transition-all duration-700"
      style={{ top: 0, opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "none" : "translateX(28px)" }}
    >
      <Photo src={img.elevationSpa} alt="Utomhuspool med utsikt, Elevation Spa" position="center 50%" zoom={false} />
    </div>
    <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,26,24,.72) 0%, rgba(4,26,24,.22) 46%, rgba(4,26,24,.10) 100%)" }} />
    <ActTag act="Akt 3" name="Förvandlingen" />
    <div className="absolute top-[190px] left-24 w-[1180px] text-white">
      <h2 className="slide-title-lg anim-rise d1">Kongress. Spa. Outdoor.</h2>
      <p className="slide-title anim-rise d3 mt-4 text-bill-yellow">På samma berg.</p>
    </div>
    <div className="absolute bottom-[190px] left-24 flex w-[1180px] items-end gap-20">
      {facts.map((f, i) => (
        <div key={f.v} className="transition-all duration-700" style={{ opacity: step >= i + 2 ? 1 : 0.08, transform: step >= i + 2 ? "none" : "translateY(16px)" }}>
          <p className="slide-title text-white" style={{ whiteSpace: "nowrap" }}>{f.v}</p>
          <p className="slide-body mt-3 max-w-[300px] text-white opacity-80">{f.l}</p>
        </div>
      ))}
    </div>
    <div className="absolute bottom-14 left-24 flex w-[1180px] items-baseline gap-14 border-t border-white/25 pt-6">
      {years.map((x) => (
        <div key={x.y} className="flex items-baseline gap-4">
          <span className="slide-caption text-bill-teal">{x.y}</span>
          <span className="slide-caption text-white opacity-70">{x.t}</span>
        </div>
      ))}
    </div>
  </Slide>;
}



export function S13() {
  const actors = ["Politiken", "Skövde kommun", "Föreningslivet", "Näringslivet", "Billingehus", "Turistrådet", "Next Skövde", "Invånarna"];
  const R = 300;
  const C = 420;
  const pos = actors.map((t, i) => {
    const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
    return { t, x: C + Math.cos(a) * R, y: C + Math.sin(a) * R };
  });
  return <Slide tone="deep">
    <ActTag act="Akt 3" name="Människorna" />
    <h2 className="slide-title anim-rise d1 absolute top-[120px] right-24 left-24 text-center">Ingen enskild aktör äger framgången</h2>
    <div className="absolute top-[575px] left-1/2 h-[840px] w-[840px] -translate-x-1/2 -translate-y-1/2">
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
          className={`anim-fade d${Math.min(8, i + 1)} absolute flex h-[130px] w-[290px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-green-deep px-6 text-center ring-2 ring-white/25`}
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
    <div className="absolute top-[290px] right-24 bottom-[150px] left-24 grid grid-cols-3 gap-12">
      <Tile src={ev[0]!.src} alt={ev[0]!.alt} label={ev[0]!.t} className="anim-rise d2" />
      {/* Ingen rättighetsklar bild från Enduro-VM (motorcykelenduro) – typografisk yta i stället. */}
      <div className="anim-rise d3 flex flex-col">
        <div className="relative flex flex-1 flex-col justify-end bg-bill-green-deep p-10">
          <span className="absolute top-8 right-8 h-4 w-24 bg-bill-yellow" />
          <p className="slide-kicker text-bill-teal">FIM EnduroGP</p>
          <p className="slide-title mt-4 leading-none whitespace-nowrap">Enduro-VM</p>
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
