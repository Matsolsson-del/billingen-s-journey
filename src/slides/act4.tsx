import { img } from "@/lib/images";
import { Slide, Photo, ActTag } from "@/components/deck/ui";

const A5 = { act: "Akt 5", name: "Systemet" };
const A6 = { act: "Akt 6", name: "Resultaten" };
const A7 = { act: "Akt 7", name: "Vad vi tar med oss" };

/* 17 — systemmodellen */
export function S17({ step = 0 }: { step?: number }) {
  const ring = [
    "Vision",
    "Politiska beslut",
    "Kommunala investeringar",
    "Privata investeringar",
    "Föreningsliv",
    "Produktutveckling",
    "Evenemang",
    "Marknad",
    "Besökare",
    "Nya investeringar",
  ];
  const R = 350;
  return (
    <Slide tone="deep">
      <ActTag {...A5} />
      <div className="absolute top-1/2 left-1/2 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-[90px] rounded-full border border-white/20" />
        {ring.map((t, i) => {
          const a = (i / ring.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={t}
              className="absolute w-[320px] text-center transition-all duration-700"
              style={{
                left: 440 + Math.cos(a) * R - 160,
                top: 440 + Math.sin(a) * R - 22,
                opacity: step >= 1 || i === 0 ? 1 : 0.18,
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <span className="slide-body">{t}</span>
            </div>
          );
        })}
        <div className="absolute top-1/2 left-1/2 flex h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-green">
          <p className="slide-subtitle">Billingen</p>
        </div>
      </div>
      <p className="slide-body anim-fade absolute bottom-16 left-24 opacity-70">
        Många beslut. Samma riktning.
      </p>
    </Slide>
  );
}

/* 18 — aktörerna */
export function S18() {
  const actors = [
    "Skövde kommun",
    "Politiken",
    "Invånarna",
    "Näringslivet",
    "Föreningslivet",
    "Billingehus",
    "Turistrådet Västsverige",
    "Next Skövde",
    "Arrangörer",
  ];
  const R = 340;
  return (
    <Slide tone="sand">
      <ActTag {...A5} />
      <h2 className="slide-title anim-rise d1 absolute top-[130px] right-24 left-24 text-center">
        Ingen enskild aktör äger framgången
      </h2>
      <div className="absolute top-[590px] left-1/2 h-[860px] w-[860px] -translate-x-1/2 -translate-y-1/2">
        {actors.map((t, i) => {
          const a = (i / actors.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div
              key={t}
              className={`anim-fade d${Math.min(8, i + 1)} absolute w-[300px] text-center`}
              style={{ left: 430 + Math.cos(a) * R - 150, top: 430 + Math.sin(a) * R - 20 }}
            >
              <span className="slide-body">{t}</span>
            </div>
          );
        })}
        <div className="anim-rise absolute top-1/2 left-1/2 flex h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bill-green">
          <p className="slide-subtitle text-white">Billingen</p>
        </div>
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
      <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
        <div className="flex items-end justify-between gap-16">
          {years.map((b, i) => (
            <div
              key={b.y}
              className="transition-all duration-700"
              style={{ opacity: step >= i ? 1 : 0.12 }}
            >
              <p className="slide-mega" style={{ fontSize: 110, whiteSpace: "nowrap" }}>
                {b.v}
              </p>
              <p className="slide-subtitle mt-4 opacity-55">{b.y}</p>
            </div>
          ))}
        </div>
        <div
          className="mt-24 border-t border-white/20 pt-14 transition-all duration-700"
          style={{ opacity: step >= 3 ? 1 : 0 }}
        >
          <p className="slide-title-lg text-bill-teal">≈ +20 %</p>
          <p className="slide-subtitle mt-4 opacity-60">på två år</p>
        </div>
      </div>
      <p className="slide-caption anim-fade absolute bottom-16 left-24 opacity-45">
        Kommersiella gästnätter i Skövde
      </p>
    </Slide>
  );
}

/* 20 — jan–jun 2026 */
export function S20() {
  const rows = [
    { t: "Skövde", v: "[jan–jun 2026 – fyll i]", hi: true },
    { t: "Västsverige", v: "[jan–jun 2026 – fyll i]", hi: false },
    { t: "Sverige", v: "[jan–jun 2026 – fyll i]", hi: false },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...A6} />
      <h2 className="slide-title anim-rise d1 absolute top-[220px] left-24 max-w-[1300px]">
        Och utvecklingen fortsätter 2026
      </h2>
      <div className="absolute right-24 bottom-[200px] left-24 space-y-16">
        {rows.map((r, i) => (
          <div key={r.t} className={`anim-rise d${i + 3} flex items-baseline justify-between`}>
            <p className="slide-subtitle">{r.t}</p>
            <p className={`slide-title ${r.hi ? "text-bill-green" : "opacity-45"}`} style={{ fontSize: 52 }}>
              {r.v}
            </p>
          </div>
        ))}
      </div>
      <p className="slide-caption anim-fade d7 absolute bottom-16 left-24 opacity-55">
        Källa: Tillväxtverket, inkvarteringsstatistik jan–jun 2026
      </p>
    </Slide>
  );
}

/* 21 — kapaciteten */
export function S21() {
  return (
    <Slide tone="bare">
      <Photo src={img.hotelroom} alt="Hotellrum i Skövde" position="center 50%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink/92 via-bill-ink/70 to-bill-ink/25" />
      <ActTag {...A6} />
      <div className="absolute top-1/2 left-24 w-[1000px] -translate-y-1/2">
        <h2 className="slide-title-lg anim-rise d1">
          Efterfrågan börjar växa
          <br />
          ur kapaciteten
        </h2>
        <p className="slide-body-lg anim-rise d3 mt-12 max-w-[820px] opacity-80">
          Särskilt tisdag–torsdag räcker hotellkapaciteten återkommande inte till.
        </p>
      </div>
      <p className="slide-subtitle anim-fade d5 absolute bottom-16 left-24 text-bill-teal">
        Destinationsutveckling blir aldrig färdig
      </p>
    </Slide>
  );
}

/* 22 — lärdomarna */
export function S22() {
  const lessons = ["Riktning", "Mod", "System", "Tillsammans", "Uthållighet"];
  return (
    <Slide tone="green">
      <ActTag {...A7} />
      <div className="absolute top-1/2 right-16 left-16 grid -translate-y-1/2 grid-cols-5">
        {lessons.map((l, i) => (
          <div
            key={l}
            className={`anim-rise d${i + 2} border-l border-white/25 px-8 py-10 first:border-l-0`}
          >
            <p className="slide-title" style={{ fontSize: 58 }}>
              {l}
            </p>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* 23 — avslutning */
export function S23({ step = 0 }: { step?: number }) {
  return (
    <Slide tone="bare">
      <Photo src={img.winterAerial} alt="Billingen från luften" position="center 55%" />
      <div className="absolute inset-0 bg-bill-ink/65" />
      <img src={img.logo} alt="Billingen Skövde" className="anim-fade absolute top-20 left-20 h-20 w-auto" />
      <div className="absolute top-1/2 right-24 left-24 -translate-y-1/2">
        <p className="slide-title-lg anim-rise">Det började med en dröm.</p>
        <p
          className="slide-title-lg mt-8 text-bill-teal transition-all duration-1000"
          style={{ opacity: step >= 1 ? 1 : 0, transform: step >= 1 ? "none" : "translateY(24px)" }}
        >
          Många har byggt vidare på den.
        </p>
      </div>
      <p className="slide-body anim-fade d6 absolute right-24 bottom-16 left-24 opacity-70">
        Destinationer byggs när många beslut börjar peka åt samma håll.
      </p>
    </Slide>
  );
}
