import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule, Mark } from "@/components/deck/ui";

const ACT4 = { act: "Akt 4", name: "Systemet bakom" };
const ACT5 = { act: "Akt 5", name: "Resultaten" };

/* SLIDE 13 — huvudtesen introduceras */
export function S13() {
  return (
    <Slide tone="green">
      <ActTag {...ACT4} />
      <Mark />
      <div className="absolute top-1/2 right-20 left-20 -translate-y-1/2">
        <p className="slide-kicker anim-fade text-bill-amber">Huvudtes</p>
        <h2 className="slide-title-lg anim-rise d2 mt-10 max-w-[1500px]">
          DESTINATIONER BYGGS INTE AV EN ENSKILD SATSNING.
        </h2>
        <p className="slide-subtitle anim-rise d4 mt-10 max-w-[1200px] opacity-80">
          De byggs av många beslut som pekar åt samma håll, under lång tid.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 14 — samverkan */
export function S14() {
  const parts = [
    { t: "KOMMUNEN", s: "Mark, infrastruktur, långsiktighet" },
    { t: "NEXT SKÖVDE", s: "Destinationsutveckling och samordning" },
    { t: "NÄRINGSLIVET", s: "Boende, mat, upplevelser" },
    { t: "FÖRENINGSLIVET", s: "Aktivitet, arrangemang, ideell kraft" },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...ACT4} />
      <h2 className="slide-title anim-rise d1 absolute top-[210px] left-20 max-w-[1200px]">
        INGEN AKTÖR KLARAR DET SJÄLV.
      </h2>
      <div className="absolute right-20 bottom-[190px] left-20 grid grid-cols-4 gap-px bg-bill-ink/15">
        {parts.map((p, i) => (
          <div key={p.t} className={`anim-rise d${i + 2} bg-bill-sand px-10 py-14`}>
            <span className="slide-badge text-bill-green">0{i + 1}</span>
            <p className="slide-subtitle mt-8" style={{ fontSize: 40, fontWeight: 700 }}>
              {p.t}
            </p>
            <p className="slide-body mt-4 opacity-65">{p.s}</p>
          </div>
        ))}
      </div>
      <p className="slide-title anim-rise d7 absolute bottom-16 left-20">
        SAMVERKAN ÄR INFRASTRUKTUR.
      </p>
    </Slide>
  );
}

/* SLIDE 15 — Next Skövdes roll */
export function S15() {
  const roles = [
    "Håller i den långsiktiga riktningen",
    "Kopplar ihop kommun, näringsliv och föreningar",
    "Utvecklar produkten och paketerar den",
    "Marknadsför destinationen mot rätt målgrupper",
    "Följer upp och justerar",
  ];
  return (
    <Slide tone="bare">
      <Photo src={img.modernBuilding} alt="Ny anläggning på Billingen" position="center 55%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/80 to-bill-ink/20" />
      <ActTag {...ACT4} />
      <div className="absolute top-[240px] left-20 w-[1000px]">
        <h2 className="slide-title anim-rise d1">NÅGON MÅSTE HÅLLA I HELHETEN.</h2>
        <Rule className="mt-10" />
        <ul className="mt-12 space-y-6">
          {roles.map((r, i) => (
            <li key={r} className={`anim-rise d${i + 3} flex items-baseline gap-6`}>
              <span className="slide-badge text-bill-amber">0{i + 1}</span>
              <span className="slide-body-lg opacity-90">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </Slide>
  );
}

/* SLIDE 16 — affärsplanens riktning */
export function S16() {
  return (
    <Slide tone="deep">
      <ActTag {...ACT4} />
      <div className="absolute inset-y-0 right-0 w-[45%]">
        <Photo src={img.skiClassic} alt="Längdskidåkning i konstsnöspåret" position="center 40%" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green-deep via-bill-green-deep/60 to-transparent" />
      </div>
      <div className="absolute top-[250px] left-20 w-[1000px]">
        <p className="slide-kicker anim-fade text-bill-amber">Affärsplan 2024–2026</p>
        <h2 className="slide-title anim-rise d1 mt-8">RIKTNINGEN LIGGER FAST.</h2>
        <Rule className="mt-10" />
        <div className="mt-12 space-y-8">
          {[
            "Fler gästnätter – jämnare över veckan och året",
            "Starkare varumärke i södra och västra Sverige",
            "Fler och större evenemang",
            "Hållbar utveckling av berget",
          ].map((t, i) => (
            <p key={t} className={`slide-body-lg anim-rise d${i + 3} border-l-2 border-bill-amber/70 pl-8 opacity-90`}>
              {t}
            </p>
          ))}
        </div>
      </div>
    </Slide>
  );
}

/* SLIDE 17 — gästnätterna (stegvis) */
export function S17({ step = 0 }: { step?: number }) {
  const bars = [
    { year: "2023", value: "203 000", pct: 0.62, note: "" },
    { year: "2024", value: "229 209", pct: 0.78, note: "+13 %" },
    { year: "2025", value: "245 885", pct: 0.94, note: "+7 %" },
  ];
  return (
    <Slide tone="ink">
      <ActTag {...ACT5} />
      <h2 className="slide-title anim-rise d1 absolute top-[190px] left-20">
        OCH SÅ HÄNDE DET NÅGOT.
      </h2>
      <p className="slide-body anim-fade d2 absolute top-[320px] left-20 opacity-60">
        Kommersiella gästnätter i Skövde
      </p>
      <div className="absolute right-20 bottom-[190px] left-20 flex h-[520px] items-end gap-16">
        {bars.map((b, i) => {
          const on = step >= i;
          return (
            <div key={b.year} className="flex-1">
              <div className="relative flex h-[480px] items-end">
                <div
                  className="w-full bg-bill-green transition-all duration-[900ms] ease-out"
                  style={{ height: on ? `${b.pct * 100}%` : "0%" }}
                />
                <div
                  className="absolute right-0 bottom-full mb-6 left-0 transition-opacity duration-700"
                  style={{ opacity: on ? 1 : 0 }}
                >
                  <p className="slide-title" style={{ fontSize: 76 }}>
                    {b.value}
                  </p>
                  {b.note && <p className="slide-body-lg mt-1 text-bill-amber">{b.note}</p>}
                </div>
              </div>
              <p className="slide-subtitle mt-8 opacity-60" style={{ fontSize: 40 }}>
                {b.year}
              </p>
            </div>
          );
        })}
      </div>
      <p
        className="slide-title absolute bottom-16 left-20 transition-all duration-700"
        style={{ opacity: step >= 3 ? 1 : 0, transform: step >= 3 ? "none" : "translateY(20px)" }}
      >
        TVÅ ÅR I RAD. ÖVER 40 000 FLER GÄSTNÄTTER.
      </p>
    </Slide>
  );
}

/* SLIDE 18 — tillväxtjämförelse */
export function S18() {
  const rows = [
    { t: "SKÖVDE", v: "+17,3 %", w: 1, hi: true },
    { t: "VÄSTSVERIGE", v: "+8,4 %", w: 0.49, hi: false },
    { t: "SVERIGE", v: "+2,1 %", w: 0.12, hi: false },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...ACT5} />
      <h2 className="slide-title anim-rise d1 absolute top-[200px] left-20 max-w-[1300px]">
        VI VÄXER SNABBARE ÄN OMVÄRLDEN.
      </h2>
      <p className="slide-body anim-fade d2 absolute top-[360px] left-20 opacity-60">
        Gästnätter januari–mars 2026, jämfört med föregående år
      </p>
      <div className="absolute right-20 bottom-[170px] left-20 space-y-12">
        {rows.map((r, i) => (
          <div key={r.t} className={`anim-rise d${i + 3}`}>
            <div className="flex items-baseline justify-between">
              <p className="slide-subtitle" style={{ fontWeight: 700, fontSize: 44 }}>
                {r.t}
              </p>
              <p
                className={`slide-title ${r.hi ? "text-bill-green" : "opacity-45"}`}
                style={{ fontSize: r.hi ? 96 : 64 }}
              >
                {r.v}
              </p>
            </div>
            <div className="mt-4 h-3 w-full bg-bill-ink/10">
              <div
                className={`anim-wipe d${i + 3} h-full ${r.hi ? "bg-bill-green" : "bg-bill-ink/35"}`}
                style={{ width: `${r.w * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="slide-body anim-fade d7 absolute bottom-16 left-20 opacity-60">
        Källa: Skövdes behov av ökad hotellkapacitet, 2026
      </p>
    </Slide>
  );
}
