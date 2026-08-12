import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule } from "@/components/deck/ui";

const A5 = { act: "Akt 5", name: "Systemet" };
const A6 = { act: "Akt 6", name: "Resultaten" };
const A7 = { act: "Akt 7", name: "Vad vi tar med oss" };

/* 17 — huvudtesen som cirkel */
export function S17({ step = 0 }: { step?: number }) {
  const ring = [
    "VISION",
    "POLITISKA BESLUT",
    "OFFENTLIGA INVESTERINGAR",
    "FÖRETAGENS INVESTERINGAR",
    "FÖRENINGSLIV",
    "PRODUKTUTVECKLING",
    "EVENEMANG",
    "MARKNADSFÖRING",
    "BESÖKARE",
    "NYA INVESTERINGAR",
  ];
  const R = 380;
  return (
    <Slide tone="deep">
      <ActTag {...A5} />
      <div className="absolute top-[150px] left-20 w-[820px]">
        <h2 className="slide-title anim-rise d1">
          DESTINATIONER BYGGS INTE AV EN ENSKILD SATSNING.
        </h2>
        <p className="slide-title anim-rise d3 mt-8 text-bill-amber">
          DE BYGGS NÄR MÅNGA BESLUT BÖRJAR PEKA ÅT SAMMA HÅLL.
        </p>
      </div>
      <div className="absolute top-1/2 right-[220px] h-[900px] w-[900px] -translate-y-1/2">
        <div className="absolute inset-[110px] rounded-full border border-bill-amber/35" />
        {ring.map((t, i) => {
          const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={t}
              className="absolute w-[300px] text-center transition-all duration-700"
              style={{
                left: 450 + Math.cos(a) * R - 150,
                top: 450 + Math.sin(a) * R - 20,
                opacity: step >= 1 || i === 0 ? 1 : 0.15,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span className="slide-caption" style={{ letterSpacing: "0.08em" }}>
                {t}
              </span>
            </div>
          );
        })}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="slide-subtitle text-bill-amber">BILLINGEN</p>
        </div>
      </div>
    </Slide>
  );
}

/* 18 — nätverket av aktörer */
export function S18() {
  const actors = [
    "SKÖVDE KOMMUN",
    "POLITIKEN",
    "NÄRINGSLIVET",
    "FÖRENINGSLIVET",
    "BILLINGEHUS",
    "TURISTRÅDET VÄSTSVERIGE",
    "NEXT SKÖVDE",
    "ARRANGÖRER",
    "INVÅNARNA",
  ];
  const R = 330;
  return (
    <Slide tone="sand">
      <ActTag {...A5} />
      <div className="absolute top-1/2 left-[130px] h-[800px] w-[800px] -translate-y-1/2">
        {actors.map((t, i) => {
          const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={t}
              className={`anim-fade d${Math.min(8, i + 1)} absolute w-[280px] text-center`}
              style={{ left: 400 + Math.cos(a) * R - 140, top: 400 + Math.sin(a) * R - 18 }}
            >
              <span className="slide-caption" style={{ fontWeight: 700, letterSpacing: "0.06em" }}>
                {t}
              </span>
            </div>
          );
        })}
        <div className="anim-rise absolute top-1/2 left-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-green">
          <p className="slide-subtitle text-white">BILLINGEN</p>
        </div>
      </div>
      <div className="absolute top-1/2 right-20 w-[820px] -translate-y-1/2">
        <h2 className="slide-title anim-rise d2">INGEN ENSKILD AKTÖR ÄGER FRAMGÅNGEN.</h2>
        <Rule className="mt-10" />
        <p className="slide-title anim-rise d4 mt-10 text-bill-green">
          MEN ALLA KAN BIDRA TILL RIKTNINGEN.
        </p>
        <p className="slide-body anim-fade d6 mt-10 opacity-65">
          Någon måste ta ansvar för helheten – men det behöver inte vara samma aktör överallt.
        </p>
      </div>
    </Slide>
  );
}

/* 19 — gästnätter */
export function S19({ step = 0 }: { step?: number }) {
  const years = [
    { y: "2023", v: "203 000" },
    { y: "2024", v: "229 209" },
    { y: "2025", v: "245 885" },
  ];
  return (
    <Slide tone="ink">
      <ActTag {...A6} />
      <div className="absolute top-1/2 right-20 left-20 -translate-y-1/2">
        <div className="flex items-end justify-between">
          {years.map((b, i) => (
            <div
              key={b.y}
              className="transition-all duration-700"
              style={{ opacity: step >= i ? 1 : 0.12 }}
            >
              <p className="slide-mega" style={{ fontSize: 168 }}>
                {b.v}
              </p>
              <p className="slide-subtitle mt-4 opacity-55">{b.y}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-24 border-t border-white/20 pt-12 transition-all duration-700"
          style={{ opacity: step >= 3 ? 1 : 0 }}
        >
          <p className="slide-title-lg text-bill-amber">≈ +20 %</p>
          <p className="slide-subtitle mt-4 opacity-60">på två år</p>
        </div>
      </div>
      <p className="slide-body anim-fade absolute bottom-16 left-20 opacity-45">
        Kommersiella gästnätter i Skövde
      </p>
    </Slide>
  );
}

/* 20 — jan–jun 2026 */
export function S20() {
  const rows = [
    { t: "SKÖVDE", v: "[JAN–JUN 2026 — fyll i]", hi: true },
    { t: "VÄSTSVERIGE", v: "[JAN–JUN 2026 — fyll i]", hi: false },
    { t: "SVERIGE", v: "[JAN–JUN 2026 — fyll i]", hi: false },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...A6} />
      <h2 className="slide-title anim-rise d1 absolute top-[220px] left-20 max-w-[1300px]">
        OCH UTVECKLINGEN FORTSÄTTER 2026.
      </h2>
      <div className="absolute right-20 bottom-[200px] left-20 space-y-16">
        {rows.map((r, i) => (
          <div key={r.t} className={`anim-rise d${i + 3} flex items-baseline justify-between`}>
            <p className="slide-subtitle" style={{ fontWeight: 700 }}>
              {r.t}
            </p>
            <p className={`slide-title ${r.hi ? "text-bill-green" : "opacity-45"}`} style={{ fontSize: 56 }}>
              {r.v}
            </p>
          </div>
        ))}
      </div>
      <p className="slide-body anim-fade d7 absolute bottom-16 left-20 opacity-55">
        Källa: Tillväxtverket, preliminär inkvarteringsstatistik jan–jun 2026
      </p>
    </Slide>
  );
}

/* 21 — flaskhalsen */
export function S21() {
  return (
    <Slide tone="bare">
      <Photo src={img.hotelroom} alt="Hotellrum i Skövde" position="center 50%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/85 to-bill-ink/30" />
      <ActTag {...A6} />
      <div className="absolute top-[280px] left-20 w-[1050px]">
        <h2 className="slide-title-lg anim-rise d1">EFTERFRÅGAN BÖRJAR VÄXA UR KAPACITETEN.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 max-w-[880px] opacity-85">
          Särskilt tisdag–torsdag räcker hotellkapaciteten återkommande inte till. Gäster får ibland
          övernatta på annan ort.
        </p>
        <p className="slide-title anim-rise d5 mt-14 text-bill-amber">
          DESTINATIONSUTVECKLING BLIR ALDRIG FÄRDIG.
        </p>
      </div>
    </Slide>
  );
}

/* 22 — fem lärdomar */
export function S22() {
  const lessons = [
    { n: "01", t: "BESTÄM RIKTNINGEN.", s: "Investera sedan." },
    { n: "02", t: "POLITISKT MOD SPELAR ROLL.", s: "Effekterna kommer efter besluten." },
    { n: "03", t: "BYGG SYSTEM.", s: "Inte isolerade attraktioner." },
    { n: "04", t: "GÖR DET TILLSAMMANS.", s: "Offentligt, privat och ideellt." },
    { n: "05", t: "HÅLL UT.", s: "Decennier, inte kampanjperioder." },
  ];
  return (
    <Slide tone="green">
      <ActTag {...A7} />
      <h2 className="slide-title anim-rise d1 absolute top-[200px] left-20">FEM LÄRDOMAR.</h2>
      <div className="absolute right-20 bottom-[140px] left-20 space-y-10">
        {lessons.map((l, i) => (
          <div key={l.n} className={`anim-rise d${i + 3} flex items-baseline gap-12 border-t border-white/20 pt-7`}>
            <span className="slide-subtitle text-bill-amber" style={{ fontSize: 40 }}>
              {l.n}
            </span>
            <p className="slide-subtitle" style={{ fontWeight: 700 }}>
              {l.t}
            </p>
            <p className="slide-body-lg opacity-65">{l.s}</p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 23 — slutbilden */
export function S23({ step = 0 }: { step?: number }) {
  return (
    <Slide tone="bare">
      <Photo src={img.winterAerial} alt="Billingen från luften" position="center 55%" />
      <div className="absolute inset-0 bg-bill-ink/70" />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-24 w-auto" />
      <div className="absolute top-1/2 right-20 left-20 -translate-y-1/2">
        <p className="slide-title anim-rise opacity-85">DET BÖRJADE MED EN DRÖM.</p>
        <p className="slide-title anim-rise d2 mt-6 opacity-85">
          OCH VI ÄR MÅNGA SOM HAR BYGGT VIDARE PÅ DEN.
        </p>
        <div
          className="mt-20 transition-all duration-1000"
          style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "none" : "translateY(24px)" }}
        >
          <p className="slide-title-lg max-w-[1500px]">
            DESTINATIONER BYGGS INTE AV EN ENSKILD SATSNING.
          </p>
          <p className="slide-title-lg mt-8 max-w-[1500px] text-bill-amber">
            DE BYGGS NÄR MÅNGA BESLUT BÖRJAR PEKA ÅT SAMMA HÅLL.
          </p>
        </div>
      </div>
      <p className="slide-body anim-fade d6 absolute bottom-16 left-20 opacity-60">
        Billingen Skövde – fortfarande under utveckling.
      </p>
    </Slide>
  );
}
