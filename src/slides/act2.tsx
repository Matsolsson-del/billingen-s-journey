import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule, Chip } from "@/components/deck/ui";

const A2 = { act: "Akt 2", name: "Modet" };
const A3 = { act: "Akt 3", name: "Systemet" };

/* 5 — 280 mkr, kommunen vågade */
export function S05() {
  const items = ["11 km konstsnöspår", "MTB-arena", "Billingebadet", "Billingecenter", "Arena Billingen", "Infrastruktur"];
  return (
    <Slide tone="ink">
      <ActTag {...A2} />
      <Photo src={img.pumptrack} alt="Pumptrack på Billingen" className="opacity-15" />
      <div className="absolute inset-0 bg-bill-ink/75" />
      <div className="absolute top-[230px] left-20 w-[880px]">
        <h2 className="slide-title anim-rise d1">SKÖVDE KOMMUN VÅGADE INVESTERA LÅNGSIKTIGT.</h2>
        <Rule className="mt-10" />
        <p className="slide-mega anim-rise d3 mt-12">≈ 280</p>
        <p className="slide-subtitle anim-rise d4 opacity-80">miljoner kronor</p>
        <p className="slide-body anim-fade d6 mt-8 opacity-60">Billingeprojektet 2017–2024</p>
      </div>
      <div className="absolute top-[330px] right-20 flex w-[720px] flex-wrap gap-5">
        {items.map((t, i) => (
          <Chip key={t} className={`anim-rise d${i + 3} border-bill-amber/50`}>
            {t}
          </Chip>
        ))}
      </div>
      <p className="slide-body anim-fade d8 absolute right-20 bottom-16 opacity-55">
        Därutöver bland annat ≈ 20 mkr i Billingebacken 2026
      </p>
    </Slide>
  );
}

/* 6 — politiskt mod */
export function S06() {
  return (
    <Slide tone="green">
      <ActTag {...A2} />
      <div className="absolute inset-y-0 right-0 w-[40%] opacity-30">
        <Photo src={img.panorama} alt="Billingen från luften" zoom={false} />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green to-transparent" />
      </div>
      <div className="absolute top-1/2 left-20 w-[1150px] -translate-y-1/2">
        <p className="slide-kicker anim-fade text-bill-amber">En central lärdom</p>
        <h2 className="slide-title-lg anim-rise d2 mt-8">LÅNGSIKTIGHET KRÄVER POLITISKT MOD.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d4 mt-10 max-w-[950px] opacity-85">
          Besluten fattas långt innan effekterna går att mäta.
        </p>
        <p className="slide-body anim-rise d6 mt-6 max-w-[950px] opacity-60">
          Över flera mandatperioder, av olika politiska majoriteter.
        </p>
      </div>
    </Slide>
  );
}

/* 7 — kartan */
export function S07() {
  return (
    <Slide tone="sand">
      <ActTag {...A3} />
      <div className="absolute inset-y-0 right-0 w-[54%] bg-white">
        <img
          src={img.karta}
          alt="Översiktskarta över Billingen i Skövde"
          className="anim-fade d2 absolute inset-0 h-full w-full object-contain p-16"
        />
      </div>
      <div className="absolute top-1/2 left-20 w-[760px] -translate-y-1/2">
        <h2 className="slide-title anim-rise d1">ETT SAMMANHÄNGANDE SYSTEM.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 opacity-70">
          Boende, aktiviteter, bad, leder och arenor – tre kilometer från centrum.
        </p>
      </div>
    </Slide>
  );
}

/* 8 — för vem */
export function S08() {
  const who = ["Barnfamiljen", "Den aktiva", "Motionären", "Eliten"];
  return (
    <Slide tone="bare">
      <Photo src={img.xcFamily} alt="Familj på skidor på Billingen" position="center 45%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/75 to-bill-ink/10" />
      <ActTag {...A3} />
      <div className="absolute top-[300px] left-20 w-[950px]">
        <h2 className="slide-title anim-rise d1">FÖR VEM BYGGER VI?</h2>
        <Rule className="mt-10" />
        <div className="mt-12 space-y-7">
          {who.map((w, i) => (
            <p key={w} className={`slide-subtitle anim-rise d${i + 3} opacity-90`}>
              {w}
            </p>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* 9 — året runt */
export function S09() {
  const seasons = [
    { s: "VINTER", t: "Skidor, spår, backe" },
    { s: "VÅR", t: "Löpning, vandring" },
    { s: "SOMMAR", t: "Bad, cykel, läger" },
    { s: "HÖST", t: "Leder, evenemang" },
  ];
  return (
    <Slide tone="deep">
      <ActTag {...A3} />
      <h2 className="slide-title anim-rise d1 absolute top-[220px] left-20 max-w-[1300px]">
        FRÅN VINTERBERG TILL ÅRET RUNT.
      </h2>
      <div className="absolute right-20 bottom-[230px] left-20 grid grid-cols-4 gap-px bg-white/15">
        {seasons.map((x, i) => (
          <div key={x.s} className={`anim-rise d${i + 3} bg-bill-green-deep px-10 py-14`}>
            <p className="slide-kicker text-bill-amber">{x.s}</p>
            <p className="slide-body-lg mt-6 opacity-85">{x.t}</p>
          </div>
        ))}
      </div>
      <p className="slide-title anim-rise d7 absolute bottom-16 left-20">
        ÅRET RUNT ÄR EN AFFÄRSMODELL.
      </p>
    </Slide>
  );
}

/* 10 — Vasaloppscenter */
export function S10() {
  return (
    <Slide tone="bare">
      <Photo src={img.skiClassic} alt="Längdskidåkning i konstsnöspåret på Billingen" position="center 40%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/80 to-bill-ink/20" />
      <ActTag {...A3} />
      <div className="absolute top-[280px] left-20 w-[1050px]">
        <h2 className="slide-title-lg anim-rise d1">
          SÄLJ INTE SPÅRET.
          <br />
          SÄLJ MÅLET.
        </h2>
        <Rule className="mt-10" />
        <div className="anim-rise d3 mt-10 flex flex-wrap gap-5">
          {["Vasaloppscenter", "Längdskidor", "Cykling", "Löpning"].map((t) => (
            <Chip key={t} className="border-bill-amber/60 text-bill-amber">
              {t}
            </Chip>
          ))}
        </div>
        <p className="slide-body-lg anim-rise d5 mt-12 max-w-[900px] opacity-85">
          Ingen köper elva kilometer konstsnöspår. Man köper resan mot sitt mål.
        </p>
      </div>
    </Slide>
  );
}
