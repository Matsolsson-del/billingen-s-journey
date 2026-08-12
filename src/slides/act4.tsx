import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule } from "@/components/deck/ui";

const ACT5 = { act: "Akt 5", name: "Resultaten" };
const ACT6 = { act: "Akt 6", name: "Vad vi tar med oss" };

/* SLIDE 19 — det nya problemet */
export function S19() {
  return (
    <Slide tone="bare">
      <Photo src={img.hotelroom} alt="Hotellrum i Skövde" position="center 50%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/85 to-bill-ink/30" />
      <ActTag {...ACT5} />
      <div className="absolute top-[260px] left-20 w-[1050px]">
        <p className="slide-kicker anim-fade text-bill-amber">Ett nytt slags problem</p>
        <h2 className="slide-title-lg anim-rise d1 mt-8">RUMMEN RÄCKER INTE TILL.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 max-w-[900px] opacity-85">
          Tisdag till torsdag är Skövde i praktiken fullbokat. Efterfrågan finns – kapaciteten
          saknas.
        </p>
        <p className="slide-body anim-rise d5 mt-8 max-w-[900px] opacity-60">
          Framgång skapar nya flaskhalsar. Det är ett bättre problem än det vi hade 2016.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 20 — vad vi lärt oss */
export function S20() {
  const lessons = [
    { n: "01", t: "Bestäm riktningen först", s: "Investeringar utan riktning blir kostnader." },
    { n: "02", t: "Bygg helhet, inte attraktioner", s: "Systemet skapar värdet, inte enskildheterna." },
    { n: "03", t: "Året runt är en affärsmodell", s: "En säsong bär inte en destination." },
    { n: "04", t: "Boendet avgör", s: "Utan sängar blir besök inte gästnätter." },
    { n: "05", t: "Samverkan är infrastruktur", s: "Ingen aktör klarar det ensam." },
    { n: "06", t: "Uthållighet slår kampanjer", s: "Femtio år, inte fem." },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...ACT6} />
      <h2 className="slide-title anim-rise d1 absolute top-[190px] left-20">SEX LÄRDOMAR.</h2>
      <div className="absolute right-20 bottom-[110px] left-20 grid grid-cols-3 gap-x-16 gap-y-14">
        {lessons.map((l, i) => (
          <div key={l.n} className={`anim-rise d${i + 2} border-t border-bill-ink/20 pt-8`}>
            <span className="slide-badge text-bill-green">{l.n}</span>
            <p className="slide-subtitle mt-6" style={{ fontSize: 42, fontWeight: 700 }}>
              {l.t}
            </p>
            <p className="slide-body mt-3 opacity-65">{l.s}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* SLIDE 21 — tidslinjen */
export function S21() {
  const points = [
    { y: "1970", t: "Drömmen" },
    { y: "2016", t: "Beslutet" },
    { y: "2017–2024", t: "280 mkr" },
    { y: "2025", t: "245 885 gästnätter" },
    { y: "2026", t: "Nya investeringar" },
  ];
  return (
    <Slide tone="deep">
      <ActTag {...ACT6} />
      <Photo src={img.panorama} alt="Panorama över Billingen" className="opacity-20" zoom={false} />
      <div className="absolute inset-0 bg-bill-green-deep/70" />
      <h2 className="slide-title anim-rise d1 absolute top-[220px] left-20 max-w-[1300px]">
        FEMTIO ÅR AV BESLUT ÅT SAMMA HÅLL.
      </h2>
      <div className="absolute right-20 bottom-[220px] left-20">
        <div className="anim-wipe d2 h-px w-full bg-white/30" />
        <div className="mt-0 grid grid-cols-5">
          {points.map((p, i) => (
            <div key={p.y} className={`anim-rise d${i + 3} relative pt-12`}>
              <div className="absolute top-0 left-0 h-4 w-4 -translate-y-1/2 rounded-full bg-bill-amber" />
              <p className="slide-subtitle" style={{ fontSize: 46, fontWeight: 700 }}>
                {p.y}
              </p>
              <p className="slide-body mt-3 opacity-70">{p.t}</p>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* SLIDE 22 — huvudtesen, helskärm (stegvis) */
export function S22({ step = 0 }: { step?: number }) {
  return (
    <Slide tone="bare">
      <Photo src={img.winterAerial} alt="Billingen i vinterskrud från luften" position="center 55%" />
      <div className="absolute inset-0 bg-bill-ink/70" />
      <div className="absolute top-1/2 right-20 left-20 -translate-y-1/2">
        <h2 className="slide-title-lg anim-rise max-w-[1500px]">
          DESTINATIONER BYGGS INTE AV EN ENSKILD SATSNING.
        </h2>
        <p
          className="slide-title mt-14 max-w-[1500px] text-bill-amber transition-all duration-1000"
          style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "none" : "translateY(24px)" }}
        >
          DE BYGGS AV UTHÅLLIGHET.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 23 — avslutning */
export function S23() {
  return (
    <Slide tone="bare">
      <Photo src={img.heroSunset} alt="Solnedgång över Billingen" position="center 45%" />
      <div className="absolute inset-0 bg-gradient-to-t from-bill-ink via-bill-ink/60 to-bill-ink/20" />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-28 w-auto" />
      <div className="absolute right-20 bottom-28 left-20">
        <h2 className="slide-title-lg anim-rise d1 max-w-[1300px]">TACK.</h2>
        <Rule className="mt-10" />
        <div className="anim-rise d3 mt-12 flex items-end justify-between">
          <p className="slide-subtitle max-w-[900px] opacity-85">
            Vi fortsätter bygga. Ett beslut i taget.
          </p>
          <div className="text-right">
            <p className="slide-body-lg" style={{ fontWeight: 700 }}>
              Mats Olsson
            </p>
            <p className="slide-body mt-2 opacity-70">
              VD, Next Skövde Destinationsutveckling AB
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
