import { img } from "@/lib/images";
import { Slide, Photo, Mark, ActTag, Rule } from "@/components/deck/ui";

const A1 = { act: "Akt 1", name: "Drömmen" };
const A2 = { act: "Akt 2", name: "Valet" };

/* 1 — hero */
export function S01() {
  return (
    <Slide tone="bare">
      <Photo src={img.heroSunset} alt="Solnedgång från Billingens topp" position="center 40%" />
      <div className="absolute inset-0 bg-gradient-to-t from-bill-ink via-bill-ink/40 to-bill-ink/10" />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-28 w-auto" />
      <div className="absolute right-20 bottom-28 left-20">
        <h1 className="slide-mega anim-rise d1">BILLINGEN</h1>
        <p className="slide-subtitle anim-rise d3 mt-8 max-w-[1100px] opacity-90">
          Hur bygger man egentligen en destination?
        </p>
        <Rule className="mt-10" />
        <div className="anim-rise d5 mt-10 flex items-end justify-between">
          <p className="slide-body opacity-70">En resa som många har byggt, i över femtio år</p>
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
      <div className="absolute inset-y-0 right-0 w-[42%]">
        <Photo src={img.arneMaja} alt="Arne och Maja Sandberg på Billingen omkring 1970" position="center 30%" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green-deep via-transparent to-transparent" />
      </div>
      <div className="slide-mega anim-fade d1 absolute bottom-[-40px] left-14 opacity-15" style={{ fontSize: 520 }}>
        1970
      </div>
      <div className="absolute top-[320px] left-20 w-[900px]">
        <h2 className="slide-title-lg anim-rise d2">DET BÖRJADE MED EN DRÖM.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d4 mt-10 max-w-[760px] opacity-85">
          Arne ”Uno-X” Sandberg och Maja Sandberg drömde om ett friluftsparadis på Billingens topp.
        </p>
      </div>
      <p className="slide-caption anim-fade d6 absolute right-20 bottom-16 opacity-60">
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
      <div className="absolute inset-y-0 right-0 w-[46%]">
        <Photo src={img.utsikt} alt="Utsikt från Billingen" position="center 50%" />
      </div>
      <div className="absolute top-[300px] left-20 w-[880px]">
        <p className="slide-kicker anim-fade text-bill-green">Utgångsläget</p>
        <h2 className="slide-title-lg anim-rise d2 mt-8">POTENTIAL ÄR INTE EN DESTINATION.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d4 mt-10 max-w-[760px] opacity-70">
          Naturen fanns redan. Resten behövde byggas – av många, under lång tid.
        </p>
      </div>
    </Slide>
  );
}

/* 4 — riktningen */
export function S04() {
  return (
    <Slide tone="green">
      <ActTag {...A2} />
      <Mark />
      <div className="absolute inset-y-0 right-0 w-[38%] opacity-25">
        <Photo src={img.mtb} alt="Mountainbike på Billingen" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green to-transparent" />
      </div>
      <div className="absolute top-[280px] left-20 w-[1200px]">
        <h2 className="slide-title anim-rise d1">EN GEMENSAM RIKTNING BESTÄMDES.</h2>
        <div className="anim-rise d3 mt-14 border-t border-b border-white/25 py-14">
          <p className="slide-kicker text-bill-amber">Vision</p>
          <p className="slide-title-lg mt-6 max-w-[1180px]">
            SÖDRA OCH VÄSTRA SVERIGES BÄSTA OUTDOORDESTINATION ÅRET RUNT
          </p>
        </div>
        <p className="slide-body-lg anim-rise d5 mt-10 opacity-75">Först riktningen. Sedan investeringarna.</p>
      </div>
    </Slide>
  );
}
