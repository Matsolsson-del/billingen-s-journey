import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule } from "@/components/deck/ui";

const A1 = { act: "Akt 1", name: "Drömmen" };
const A2 = { act: "Akt 2", name: "Valet" };

/* 1 — hero */
export function S01() {
  return (
    <Slide tone="bare">
      <Photo src={img.heroSunset} alt="Solnedgång från Billingens topp" position="center 40%" />
      <div className="absolute inset-0 bg-gradient-to-t from-bill-ink/90 via-bill-ink/35 to-bill-ink/10" />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-24 w-auto" />
      <div className="absolute right-24 bottom-32 left-24">
        <h1 className="slide-mega anim-rise d1" style={{ fontSize: 200 }}>
          Billingen
        </h1>
        <p className="slide-subtitle anim-rise d3 mt-8 max-w-[1100px] opacity-90">
          Hur bygger man egentligen en destination?
        </p>
        <div className="anim-rise d5 mt-14 flex items-end justify-between">
          <p className="slide-body opacity-70">En resa som många har byggt, över femtio år</p>
          <p className="slide-body text-right opacity-70">
            Mats Olsson
            <br />
            Next Skövde
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* 2 — 1970, drömmen */
export function S02() {
  return (
    <Slide tone="deep">
      <ActTag {...A1} />
      <div className="absolute inset-y-0 right-0 w-[46%]">
        <Photo src={img.arneMaja} alt="Arne och Maja Sandberg på Billingen omkring 1970" position="center 30%" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green-deep via-bill-green-deep/25 to-transparent" />
      </div>
      <div className="absolute top-1/2 left-24 w-[860px] -translate-y-1/2">
        <p className="slide-mega anim-rise d1 text-bill-amber" style={{ fontSize: 180 }}>
          1970
        </p>
        <h2 className="slide-title-lg anim-rise d3 mt-10">Det började med en dröm</h2>
        <p className="slide-body-lg anim-rise d5 mt-8 max-w-[720px] opacity-80">
          Arne och Maja Sandberg drömde om ett
          <br />
          friluftsparadis på Billingens topp.
        </p>
      </div>
      <p className="slide-caption anim-fade d6 absolute right-24 bottom-16 opacity-60">
        Arne och Maja Sandberg
      </p>
    </Slide>
  );
}

/* 3 — potential är inte en destination */
export function S03() {
  return (
    <Slide tone="sand">
      <ActTag {...A1} />
      <div className="absolute inset-y-0 right-0 w-[52%]">
        <Photo src={img.utsikt} alt="Utsikt från Billingen" position="center 50%" />
      </div>
      <div className="absolute top-1/2 left-24 w-[760px] -translate-y-1/2">
        <h2 className="slide-title-lg anim-rise d1 text-bill-green">
          Potential är inte
          <br />
          en destination
        </h2>
        <Rule className="mt-12" />
        <p className="slide-body-lg anim-rise d4 mt-12 max-w-[660px] opacity-70">
          Naturen fanns redan. Resten behövde byggas – av många, under lång tid.
        </p>
      </div>
    </Slide>
  );
}

/* 4 — visionen */
export function S04() {
  return (
    <Slide tone="bare">
      <Photo src={img.winterAerial} alt="Billingen från luften" position="center 45%" zoom={false} />
      <div className="absolute inset-0 bg-bill-ink/45" />
      <ActTag {...A2} />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-16 right-20 h-20 w-auto" />
      <div className="absolute right-0 bottom-0 left-0 bg-bill-green px-24 pt-16 pb-20">
        <p className="slide-kicker anim-fade text-white/70">Vision</p>
        <p className="slide-title anim-rise d2 mt-8 max-w-[1400px] text-white">
          Södra och västra Sveriges bästa
          <br />
          outdoordestination året runt
        </p>
      </div>
    </Slide>
  );
}
