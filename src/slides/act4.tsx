import { img } from "@/lib/images";
import { Slide, Photo, ActTag } from "@/components/deck/ui";

export function S16() {
  const p=["Minsta möjliga onödiga miljöpåverkan","Bra för boende och besökare","Fler besökare när det finns plats","Robustare verksamheter och fler heltidsjobb"];
  return <Slide tone="sand">
    <ActTag act="Akt 4" name="Hållbarhetsklivet" />
    <div className="absolute inset-y-0 right-0 w-[39%]"><Photo src={img.bergetgruppen} alt="Bergetgruppen arbetar på Billingen" position="center 50%" /></div>
    <div className="absolute top-[170px] left-24 w-[1050px]">
      <p className="slide-kicker text-bill-green">Skaraborgs kandidat 2026</p>
      <h2 className="slide-title anim-rise d1 mt-8">Hållbarhet måste<br />märkas i vardagen</h2>
      <div className="mt-12 space-y-6">{p.map((x,i)=><div key={x} className={`anim-rise d${i+3} flex items-center gap-7 border-t border-bill-ink/15 pt-5`}><span className="slide-subtitle text-bill-green">0{i+1}</span><p className="slide-body-lg">{x}</p></div>)}</div>
    </div>
  </Slide>;
}

export function S17({step=0}:{step?:number}) {
  const years=[{y:"2023",v:"203 000"},{y:"2024",v:"229 209"},{y:"2025",v:"245 885"}];
  return <Slide tone="ink">
    <ActTag act="Akt 4" name="Resultatet" />
    <div className="absolute top-[270px] right-24 left-24">
      <p className="slide-kicker text-bill-yellow">Kommersiella gästnätter i Skövde</p>
      <div className="mt-16 flex items-end justify-between gap-12">{years.map((x,i)=><div key={x.y} className="transition-all duration-700" style={{opacity:step>=i?1:.1}}><p className="slide-mega" style={{fontSize:108,whiteSpace:"nowrap"}}>{x.v}</p><p className="slide-subtitle mt-4 opacity-55">{x.y}</p></div>)}</div>
      <div className="mt-20 border-t border-white/20 pt-12 transition-all duration-700" style={{opacity:step>=3?1:0}}><p className="slide-title-lg text-bill-teal">≈ +20 % på två år</p><p className="slide-body mt-5 opacity-55">Billingen är en av flera motorer i Skövdes utveckling.</p></div>
    </div>
  </Slide>;
}

export function S18() {
  return <Slide tone="green">
    <ActTag act="Akt 4" name="Värdet" />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
      <p className="slide-kicker text-white/65">Turismkonsumtion i Skövde</p>
      <div className="mt-10 flex items-baseline gap-14"><p className="slide-mega anim-rise d1" style={{fontSize:145}}>1,351</p><span className="text-8xl text-bill-yellow">→</span><p className="slide-mega anim-rise d3 text-bill-yellow" style={{fontSize:145}}>1,484</p><p className="slide-subtitle">mdr kr</p></div>
      <p className="slide-body-lg anim-rise d5 mt-16 max-w-[1450px]">Och värdet är större än kronor: folkhälsa, föreningsliv, stolthet och en starkare plats att bo och verka på.</p>
    </div>
  </Slide>;
}

export function S19() {
  return <Slide tone="bare">
    <Photo src={img.hotelroom} alt="Hotellrum i Skövde" />
    <div className="absolute inset-0 bg-gradient-to-r from-bill-ink/95 via-bill-ink/75 to-bill-ink/30" />
    <ActTag act="Akt 4" name="Nästa nivå" />
    <div className="absolute top-1/2 left-24 w-[1100px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Framgång skapar nästa flaskhals</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">Efterfrågan börjar ibland<br />växa ur kapaciteten</h2>
      <p className="slide-body-lg anim-rise d4 mt-12 max-w-[850px] opacity-75">Särskilt tisdag–torsdag räcker hotellkapaciteten återkommande inte till.</p>
    </div>
    <p className="slide-subtitle absolute bottom-14 left-24 text-bill-teal">Destinationer blir aldrig färdiga.</p>
  </Slide>;
}

export function S20({step=0}:{step?:number}) {
  return <Slide tone="bare">
    <Photo src={img.winterAerial} alt="Billingen från luften" position="center 55%" />
    <div className="absolute inset-0 bg-bill-ink/70" />
    <img src={img.logo} alt="Billingen Skövde" className="absolute top-20 left-20 h-20 w-auto" />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Det vi tar med oss</p>
      <p className="slide-title-lg anim-rise mt-9">Riktning · mod · system · tillsammans · uthållighet</p>
      <div className="mt-16 border-t border-white/20 pt-14 transition-all duration-1000" style={{opacity:step>=1?1:0,transform:step>=1?"none":"translateY(24px)"}}>
        <p className="slide-title text-bill-teal">Det började som en gåva.</p>
        <p className="slide-title mt-4">Vårt ansvar är att lämna över något ännu bättre.</p>
      </div>
    </div>
  </Slide>;
}
