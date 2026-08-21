import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule } from "@/components/deck/ui";

const A1 = { act: "Akt 1", name: "Förtroendet" };

export function S01() {
  return <Slide tone="bare">
    <Photo src={img.heroSunset} alt="Solnedgång från Billingen" position="center 42%" className="photo-lift" />
    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(14,30,31,0.90) 0%, rgba(14,30,31,0.62) 26%, rgba(14,30,31,0.18) 52%, rgba(14,30,31,0.04) 75%, rgba(14,30,31,0) 100%)" }} />
    <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-24 w-auto drop-shadow-[0_2px_18px_rgba(6,20,20,0.7)]" />
    <div className="absolute right-24 bottom-28 left-24">
      <h1 className="slide-mega anim-rise d1 text-scrim" style={{ fontSize: 184 }}>Hur bygger man<br />en destination?</h1>
      <div className="anim-rise d4 mt-14 flex items-end justify-between">
        <p className="slide-subtitle text-scrim text-bill-yellow">Billingen · en utvecklingsresa</p>
        <p className="slide-body text-scrim text-right opacity-85">Mats Olsson<br />Next Skövde</p>
      </div>
    </div>
  </Slide>;
}

export function S02() {
  return <Slide tone="deep">
    <ActTag {...A1} />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[52%]">
      <Photo src={img.arneMaja} alt="Arne och Maja Sandberg" position="center 28%" className="photo-lift" />
      <div className="fade-r-deep-soft absolute inset-0" />
    </div>
    <div className="absolute top-1/2 left-24 w-[900px] -translate-y-1/2">
      <p className="slide-mega anim-rise d1 text-bill-yellow" style={{ fontSize: 176 }}>1967</p>
      <p className="slide-title-lg anim-rise d3 mt-10">”Vi gör något roligt<br />i stället.”</p>
      <p className="slide-body anim-fade d5 mt-10 max-w-[740px] opacity-70">Arne och Maja Sandberg valde att investera i en idé för hela Skövde.</p>
    </div>
  </Slide>;
}


export function S03() {
  return <Slide tone="sand">
    <ActTag {...A1} />
    <div className="absolute top-[180px] left-24 w-[760px]">
      <p className="slide-kicker text-bill-green">1970 · ett friluftsparadis står färdigt</p>
      <h2 className="slide-title-lg anim-rise d1 mt-10">En gåva till<br />nästa generation</h2>
      <Rule className="mt-12" />
      <p className="slide-body-lg anim-rise d4 mt-10 max-w-[730px] opacity-70">Hotell · bad · skidbacke · tennis · fotboll · motionsspår</p>
    </div>
    <div className="absolute top-[170px] right-20 bottom-20 w-[700px] overflow-hidden">
      <img src={img.arneMaja} alt="Arne och Maja Sandberg" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 bg-bill-ink/90 px-12 py-10 text-white">
        <p className="slide-kicker text-bill-yellow">Priset till kommunen</p>
        <p className="slide-mega mt-3" style={{ fontSize: 118 }}>1 krona</p>
      </div>
    </div>
  </Slide>;
}

export function S04() {
  return <Slide tone="bare">
    <Photo src={img.winterAerial} alt="Billingen från luften" position="center 46%" className="photo-lift" />
    <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 62% 55% at 50% 46%, rgba(14,30,31,0.66) 0%, rgba(14,30,31,0.44) 52%, rgba(14,30,31,0.16) 80%, rgba(14,30,31,0) 100%)" }} />
    <ActTag {...A1} />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2 text-center">
      <p className="slide-kicker anim-fade text-bill-yellow text-scrim">Femtio år senare</p>
      <h2 className="slide-title-lg anim-rise d2 mt-10 text-scrim">Förvalta minnet<br /><span className="text-bill-teal">eller utveckla idén?</span></h2>
    </div>
  </Slide>;
}

export function S04B() {
  const steps = ["Föreningarna samlades", "En gemensam vision", "Kommunen kunde fatta beslut"];
  return <Slide tone="sand">
    <ActTag act="Akt 1" name="Grunden" />
    <div className="absolute inset-y-0 right-0 overflow-hidden w-[42%]">
      <Photo src={img.lotta} alt="Lotta Stigsdotter" position="center 20%" className="photo-crisp" />
      <div className="fade-r-sand-soft absolute inset-0" />
    </div>
    <div className="absolute top-[250px] left-24 w-[1010px]">
      <p className="slide-kicker text-bill-green">Innan besluten fanns eldsjälarna</p>
      <h2 className="slide-title-lg anim-rise d1 mt-8">Eldsjälarna blev<br />en gemensam röst</h2>
      <Rule className="mt-12" />
      <div className="mt-14 flex items-start gap-8">
        {steps.map((t, i) => (
          <div key={t} className={`anim-rise d${i + 2} flex items-start gap-8`}>
            <p className="slide-body-lg w-[270px] leading-tight">{t}</p>
            {i < steps.length - 1 && <span className="text-5xl leading-none text-bill-green">→</span>}
          </div>
        ))}
      </div>
    </div>
    <div className="fade-t-ink anim-fade d6 absolute right-0 bottom-0 z-10 h-[340px] w-[36%]" />
    <div className="anim-fade d6 absolute bottom-20 right-20 z-20 text-right text-white">
      <p className="slide-body-lg font-semibold">Lotta Stigsdotter</p>
      <p className="slide-body opacity-75">En av eldsjälarna bakom BFEF</p>
    </div>
  </Slide>;
}



export function S05() {
  return <Slide tone="green">
    <ActTag act="Akt 1" name="Riktningen" />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
      <p className="slide-kicker anim-fade text-white/65">Vi började inte med en inköpslista</p>
      <h2 className="slide-title-lg anim-rise d2 mt-10 max-w-[1580px]">Södra och västra Sveriges bästa<br /><span className="text-bill-yellow">outdoordestination året runt</span></h2>
      <p className="slide-body-lg anim-rise d5 mt-14 max-w-[1100px] opacity-75">Först riktningen. Sedan investeringarna.</p>
    </div>
  </Slide>;
}

export function S05B() {
  return <Slide tone="bare">
    <Photo src={img.naraStaden} alt="Billingen och Skövde från luften med avstånd till Göteborg och Stockholm" position="center 55%" zoom={false} className="photo-lift" />
    {/* Täcker originalbildens egen rubrik, men lämnar avståndsillustrationen nedtill fri */}
    <div
      className="fade-r-ink-soft absolute top-0 left-0 z-10 h-[820px] w-[50%]"
      style={{
        maskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 0%, #000 58%, transparent 100%)",
      }}
    />
    <ActTag act="Akt 1" name="Läget" />
    <div className="absolute top-[230px] left-20 z-20 w-[820px]">
      <h2 className="slide-title-lg anim-rise d1">Nära staden.<br /><span className="text-bill-teal">Nära marknaden.</span></h2>
      <div className="anim-fade d4 mt-10 space-y-3">
        <p className="slide-body-lg">Fem minuter med bil från Skövde centrum</p>
        <p className="slide-body-lg">Cirka 1 timme med tåg från Göteborg</p>
        <p className="slide-body-lg">Cirka 2 timmar med tåg från Stockholm</p>
      </div>
      <p className="slide-source mt-8" style={{ opacity: 0.85 }}>Restider avser direkttåg på Västra stambanan, ordinarie tidtabell.</p>
    </div>
  </Slide>;
}
