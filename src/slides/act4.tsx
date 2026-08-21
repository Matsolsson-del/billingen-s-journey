import { img } from "@/lib/images";
import { Slide, Photo, ActTag } from "@/components/deck/ui";

export function S16() {
  const p=["Minsta möjliga onödiga miljöpåverkan","Bra för boende och besökare","Fler besökare när det finns plats","Robustare verksamheter och fler heltidsjobb"];
  return <Slide tone="sand">
    <ActTag act="Akt 4" name="Hållbarhetsklivet" />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[39%]"><Photo src={img.bergetgruppen} alt="Bergetgruppen arbetar på Billingen" position="center 50%" className="photo-lift-sm" /></div>
    <div className="absolute top-[170px] left-24 w-[1050px]">
      <p className="slide-kicker text-bill-green">Skaraborgs kandidat 2026</p>
      <h2 className="slide-title anim-rise d1 mt-8">Hållbarhet måste<br />märkas i vardagen</h2>
      <div className="mt-12 space-y-6">{p.map((x,i)=><div key={x} className={`anim-rise d${i+3} flex items-center gap-7 border-t border-bill-ink/15 pt-5`}><span className="slide-subtitle text-bill-green">0{i+1}</span><p className="slide-body-lg">{x}</p></div>)}</div>
    </div>
  </Slide>;
}

export function S17({step=0}:{step?:number}) {
  const years=[{y:"2023",v:"203 000"},{y:"2024",v:"229 209"},{y:"2025 (prel.)",v:"245 885"}];
  return <Slide tone="ink">
    <ActTag act="Akt 4" name="Resultatet" />
    <div className="absolute top-[250px] right-24 left-24">
      <p className="slide-kicker text-bill-yellow">Kommersiella gästnätter i Skövde</p>
      <div className="mt-14 flex items-end justify-between gap-12">{years.map((x,i)=><div key={x.y} className="transition-all duration-700" style={{opacity:step>=i?1:.1}}><p className="slide-mega" style={{fontSize:108,whiteSpace:"nowrap"}}>{x.v}</p><p className="slide-subtitle mt-4 opacity-80">{x.y}</p></div>)}</div>
      <div className="mt-16 border-t border-white/20 pt-10 transition-all duration-700" style={{opacity:step>=3?1:0}}><p className="slide-title-lg text-bill-teal">≈ +20 % på två år</p><p className="slide-body mt-5 opacity-85">Billingen är en av flera motorer i Skövdes utveckling.</p></div>
      <p className="slide-source mt-10" style={{opacity:.85}}>Källa: SCB/Tillväxtverkets inkvarteringsstatistik, kommersiella gästnätter i Skövde kommun. 2025 är preliminära siffror.</p>
    </div>
  </Slide>;
}

export function S18() {
  return <Slide tone="green">
    <ActTag act="Akt 4" name="Värdet" />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
      <p className="slide-kicker text-white/65">Turismkonsumtion i Skövde</p>
      <div className="mt-10 flex items-end gap-12">
        <div className="anim-rise d1"><p className="slide-mega" style={{fontSize:145,lineHeight:1}}>1,351</p><p className="slide-subtitle mt-3 opacity-85">2023</p></div>
        <span className="mb-24 text-8xl text-bill-yellow">→</span>
        <div className="anim-rise d3"><p className="slide-mega text-bill-yellow" style={{fontSize:145,lineHeight:1}}>1,484</p><p className="slide-subtitle mt-3 opacity-85">2025</p></div>
        <p className="slide-subtitle mb-24">miljarder kronor</p>
      </div>
      <p className="slide-body-lg anim-rise d5 mt-14 max-w-[1450px]">Och värdet är större än kronor: folkhälsa, föreningsliv, stolthet och en starkare plats att bo och verka på.</p>
      <p className="slide-source mt-10" style={{opacity:.85}}>Källa: Tillväxtverkets turismräkenskaper/TEM för Skövde kommun, löpande priser.</p>
    </div>
  </Slide>;
}

export function S19() {
  return <Slide tone="bare">
    <Photo src={img.hotelroom} alt="Hotellrum i Skövde" className="photo-lift" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,30,31,0.92) 0%, rgba(14,30,31,0.72) 30%, rgba(14,30,31,0.22) 58%, rgba(14,30,31,0.04) 80%, rgba(14,30,31,0) 100%)" }} />
    <ActTag act="Akt 4" name="Nästa nivå" />
    <div className="absolute top-1/2 left-24 w-[1100px] -translate-y-1/2">
      <p className="slide-kicker text-bill-yellow">Framgång skapar nästa flaskhals</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">Skövdes nästa<br />kapacitetsfråga</h2>
      <p className="slide-body-lg anim-rise d4 mt-12 max-w-[900px] opacity-80">Särskilt tisdag–torsdag räcker hotellkapaciteten återkommande inte till.</p>
    </div>
    <p className="slide-subtitle absolute bottom-14 left-24 text-bill-teal">Destinationer blir aldrig färdiga.</p>
  </Slide>;
}

export function S20({step=0}:{step?:number}) {
  return <Slide tone="bare">
    <Photo src={img.winterAerial} alt="Billingen från luften" position="center 55%" className="photo-lift" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(14,30,31,0.86) 0%, rgba(14,30,31,0.70) 42%, rgba(14,30,31,0.38) 72%, rgba(14,30,31,0.22) 100%)" }} />
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

export function S21() {
  return <Slide tone="bare">
    <Photo src={img.heroSunset} alt="Solnedgång från Billingen" position="center 42%" className="photo-lift" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,30,31,0.86) 0%, rgba(14,30,31,0.55) 40%, rgba(14,30,31,0.22) 75%, rgba(14,30,31,0.10) 100%)" }} />
    <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-20 w-auto" />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2 text-center">
      <p className="slide-kicker anim-fade text-bill-yellow">Följ med på resan</p>
      <h2 className="slide-title-lg anim-rise d2 mt-8">Håll kontakt med Billingen</h2>
      <div className="anim-rise d4 mt-16 flex items-center justify-center gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6 rounded-full bg-white/10 px-10 py-5 backdrop-blur">
            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073C24 5.403 18.627 0 12 0S0 5.403 0 12.073C0 18.098 4.388 23.03 10.125 23.927v-7.54H7.078v-3.314h3.047V9.794c0-3.037 1.791-4.746 4.533-4.746 1.313 0 2.686.236 2.686.236v3.012h-1.513c-1.491 0-1.956.938-1.956 1.9v2.463h3.336l-.533 3.314h-2.803v7.54C19.612 23.03 24 18.098 24 12.073z"/></svg>
            <span className="slide-subtitle">@Billingenskovde</span>
          </div>
          <div className="flex items-center gap-6 rounded-full bg-white/10 px-10 py-5 backdrop-blur">
            <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.059-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            <span className="slide-subtitle">@Billingenskovde</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <img src="/qr-billingen.png" alt="QR-kod till billingen.se" className="h-[280px] w-[280px] rounded-2xl bg-white p-4" />
          <p className="slide-body text-bill-yellow">billingen.se</p>
        </div>
      </div>
    </div>
  </Slide>;
}
