import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule } from "@/components/deck/ui";

const A1 = { act: "Akt 1", name: "Förtroendet" };

export function S01() {
  return <Slide tone="bare">
    <Photo src={img.heroSunset} alt="Solnedgång från Billingen" position="center 42%" />
    <div className="absolute inset-0 bg-gradient-to-t from-bill-ink/95 via-bill-ink/35 to-transparent" />
    <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-24 w-auto" />
    <div className="absolute right-24 bottom-28 left-24">
      <h1 className="slide-mega anim-rise d1" style={{ fontSize: 184 }}>Hur bygger man<br />en destination?</h1>
      <div className="anim-rise d4 mt-14 flex items-end justify-between">
        <p className="slide-subtitle text-bill-yellow">Billingen · en utvecklingsresa</p>
        <p className="slide-body text-right opacity-75">Mats Olsson<br />Next Skövde</p>
      </div>
    </div>
  </Slide>;
}

export function S02() {
  return <Slide tone="deep">
    <ActTag {...A1} />
    <div className="absolute inset-y-0 right-0 w-[46%]">
      <Photo src={img.arneMaja} alt="Arne och Maja Sandberg" position="center 28%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-green-deep via-bill-green-deep/20 to-transparent" />
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
    <Photo src={img.winterAerial} alt="Billingen från luften" position="center 46%" />
    <div className="absolute inset-0 bg-bill-ink/65" />
    <ActTag {...A1} />
    <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2 text-center">
      <p className="slide-kicker anim-fade text-bill-yellow">Femtio år senare</p>
      <h2 className="slide-title-lg anim-rise d2 mt-10">Förvalta minnet<br /><span className="text-bill-teal">eller utveckla idén?</span></h2>
    </div>
  </Slide>;
}

export function S04B() {
  const steps = [
    { n: "01", t: "Föreningarna samlades", d: "Lotta Stigsdotter kallade ihop klubbarna på berget." },
    { n: "02", t: "En gemensam vision", d: "Många viljor formulerade en enda riktning för Billingen." },
    { n: "03", t: "BFEF bildades", d: "Billingens fritidsområde ekonomisk förening blev en gemensam röst." },
    { n: "04", t: "Kommunen sa ja", d: "Ett tålmodigt arbete som till slut ledde fram till investeringsbeslutet." },
  ];
  return <Slide tone="sand">
    <ActTag act="Akt 1" name="Grunden" />
    <div className="absolute inset-y-0 right-0 w-[42%]">
      <Photo src={img.lotta} alt="Lotta Stigsdotter" position="center 20%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-sand via-bill-sand/40 to-transparent" />
    </div>
    <div className="absolute top-[170px] left-24 w-[980px]">
      <p className="slide-kicker text-bill-green">Innan besluten fanns eldsjälarna</p>
      <h2 className="slide-title-lg anim-rise d1 mt-8">Grunden lades av<br />ideella krafter</h2>
      <Rule className="mt-10" />
      <div className="mt-10 space-y-7">
        {steps.map((s, i) => (
          <div key={s.n} className={`anim-rise d${i + 2} flex items-baseline gap-8`}>
            <span className="slide-kicker text-bill-green" style={{ fontSize: 34 }}>{s.n}</span>
            <div>
              <p className="slide-body-lg">{s.t}</p>
              <p className="slide-body mt-1 opacity-65">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="anim-fade d6 absolute inset-y-0 right-0 z-10 w-[42%] bg-gradient-to-t from-bill-ink/85 via-bill-ink/25 to-transparent" />
    <div className="anim-fade d6 absolute bottom-20 right-20 z-20 text-right text-white">
      <p className="slide-body-lg font-semibold">Lotta Stigsdotter</p>
      <p className="slide-body opacity-75">Samlande kraft bakom BFEF</p>
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
    <Photo src={img.naraStaden} alt="Billingen och Skövde från luften med avstånd till Göteborg och Stockholm" position="center 55%" zoom={false} />
    {/* Täcker originalbildens egen rubrik så typografin följer presentationen */}
    <div
      className="absolute inset-y-0 left-0 z-10 w-[46%]"
      style={{
        background:
          "linear-gradient(to right, var(--bill-ink) 0%, var(--bill-ink) 72%, color-mix(in oklab, var(--bill-ink) 0%, transparent) 100%)",
      }}
    />
    <ActTag act="Akt 1" name="Läget" />
    <div className="absolute top-[300px] left-20 z-20 w-[760px]">
      <h2 className="slide-title-lg anim-rise d1">Nära staden.<br /><span className="text-bill-teal">Nära marknaden.</span></h2>
      <p className="slide-body anim-fade d4 mt-10 max-w-[600px] opacity-75">Natur, livskvalitet och tillgänglighet på samma plats.</p>
    </div>

  </Slide>;
}
