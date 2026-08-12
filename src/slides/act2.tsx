import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule, Tile } from "@/components/deck/ui";

const A2 = { act: "Akt 2", name: "Modet" };
const A3 = { act: "Akt 3", name: "Systemet" };

/* 5 — 280 mkr */
export function S05() {
  return (
    <Slide tone="sand">
      <ActTag {...A2} />
      <div className="absolute inset-y-0 right-0 w-[38%]">
        <Photo src={img.pumptrack} alt="Pumptrack på Billingen" position="center 50%" />
      </div>
      <div className="absolute top-[210px] left-24 w-[1000px]">
        <h2 className="slide-title anim-rise d1">
          Skövde kommun vågade
          <br />
          investera långsiktigt
        </h2>
        <p className="slide-mega anim-rise d3 mt-14 text-bill-green" style={{ fontSize: 170, whiteSpace: "nowrap" }}>≈ 280 mkr</p>
        <p className="slide-body anim-fade d4 mt-6 opacity-60">Billingeprojektet 2017–2024</p>
        <p className="slide-body-lg anim-rise d6 mt-14 max-w-[900px] opacity-75">
          Spår · MTB · bad · arena · service · infrastruktur
        </p>
      </div>
      <p className="slide-caption anim-fade d8 absolute bottom-16 left-24 opacity-55">
        Därutöver bland annat cirka 20 mkr till Billingebacken 2026.
      </p>
    </Slide>
  );
}

/* 6 — politiskt mod */
export function S06() {
  return (
    <Slide tone="bare">
      <Photo src={img.winterAerial} alt="Billingen en vinterdag" position="center 45%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink/90 via-bill-ink/60 to-bill-ink/20" />
      <ActTag {...A2} />
      <div className="absolute top-1/2 left-24 w-[1000px] -translate-y-1/2">
        <h2 className="slide-title-lg anim-rise d1">
          Långsiktighet kräver
          <br />
          politiskt mod
        </h2>
        <Rule className="mt-12" />
        <p className="slide-body-lg anim-rise d4 mt-12 max-w-[780px] opacity-85">
          Besluten fattas långt innan effekterna går att mäta.
        </p>
        <p className="slide-body anim-fade d6 mt-6 max-w-[780px] opacity-60">
          Över flera mandatperioder och olika politiska majoriteter.
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
      <div className="absolute top-[150px] left-24 w-[1180px]">
        <h2 className="slide-title anim-rise d1">Ett sammanhängande system</h2>
        <p className="slide-body anim-fade d3 mt-6 max-w-[1000px] opacity-65">
          Boende, aktiviteter, bad, leder och arenor – tre kilometer från centrum.
        </p>
      </div>
      <div className="absolute top-[330px] right-16 bottom-10 left-16">
        <img
          src={img.karta}
          alt="Översiktskarta över Billingen i Skövde"
          className="anim-fade d2 absolute inset-0 h-full w-full object-contain"
        />
      </div>
    </Slide>
  );
}

/* 8 — målgrupper */
export function S08() {
  const who = [
    { src: img.xcFamily, label: "Barnfamiljen", alt: "Familj på skidor på Billingen" },
    { src: img.skiRace, label: "Träningsentusiasten", alt: "Träning i spåret på Billingen" },
    { src: img.vandring, label: "Den aktiva naturturisten", alt: "Vandring på Billingens leder" },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...A3} />
      <h2 className="slide-title anim-rise d1 absolute top-[160px] left-24">För vem bygger vi?</h2>
      <div className="absolute top-[330px] right-24 bottom-24 left-24 grid grid-cols-3 gap-12">
        {who.map((w, i) => (
          <Tile
            key={w.label}
            src={w.src}
            alt={w.alt}
            label={w.label}
            className={`anim-rise d${i + 2}`}
          />
        ))}
      </div>
    </Slide>
  );
}

/* 9 — året runt */
export function S09() {
  const seasons = [
    { s: "Vinter", src: img.skiClassic, alt: "Längdskidåkning på Billingen" },
    { s: "Vår", src: img.trailRun, alt: "Löpning på Billingens leder" },
    { s: "Sommar", src: img.billingecenter, alt: "Sommar vid Billingecenter" },
    { s: "Höst", src: img.mtbForest, alt: "Mountainbike i höstskogen" },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...A3} />
      <h2 className="slide-title anim-rise d1 absolute top-[160px] left-24">
        Från vinterberg till året runt
      </h2>
      <div className="absolute top-[320px] right-24 left-24 grid h-[540px] grid-cols-4 gap-10">
        {seasons.map((x, i) => (
          <Tile key={x.s} src={x.src} alt={x.alt} label={x.s} className={`anim-rise d${i + 2}`} />
        ))}
      </div>
      <p className="slide-body anim-fade d7 absolute bottom-16 left-24 opacity-65">
        En starkare affär och en mindre sårbar destination.
      </p>
    </Slide>
  );
}

/* 10 — Vasaloppscenter */
export function S10() {
  const tiles = [
    { src: img.skiRace, alt: "Längdskidåkning i konstsnöspåret" },
    { src: img.mtb, alt: "Cykling på Billingen" },
    { src: img.trailRun, alt: "Löpning på Billingen" },
  ];
  return (
    <Slide tone="ink">
      <ActTag {...A3} />
      <h2 className="slide-title-lg anim-rise d1 absolute top-[150px] left-24">
        Sälj inte spåret. Sälj målet.
      </h2>
      <div className="absolute top-[340px] right-24 left-24 grid h-[480px] grid-cols-3 gap-10">
        {tiles.map((t, i) => (
          <div key={t.alt} className={`anim-rise d${i + 2} relative overflow-hidden`}>
            <img src={t.src} alt={t.alt} className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute right-24 bottom-16 left-24 flex items-baseline justify-between">
        <p className="slide-subtitle anim-fade d5 text-bill-teal">Resan mot Vasaloppet</p>
        <p className="slide-caption anim-fade d6 opacity-60">
          Vasaloppscenter · längdskidor · cykling · löpning
        </p>
      </div>
    </Slide>
  );
}
