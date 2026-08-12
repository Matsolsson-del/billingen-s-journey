import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Tile } from "@/components/deck/ui";

const A4 = { act: "Akt 4", name: "Tillsammans" };

/* 11 — Billingehus */
export function S11() {
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <h2 className="slide-title anim-rise d1 absolute top-[160px] left-24">
        En gammal ikon får en ny roll
      </h2>
      <div className="absolute top-[330px] right-24 left-24 grid h-[480px] grid-cols-2 gap-14">
        <Tile
          className="anim-rise d2"
          src={img.panorama}
          alt="Billingehus på berget"
          label="Ikonen på berget"
          position="center 45%"
        />
        <Tile
          className="anim-rise d3"
          src={img.hotelroom}
          alt="Nyrenoverat rum på Billingehus"
          label="Efter omvandlingen"
          position="center 50%"
        />
      </div>
      <p className="slide-body anim-fade d6 absolute right-24 bottom-16 left-24 opacity-70">
        Billingehus har funnits med från början. Nu är hotellet en starkare del av destinationen.
      </p>
    </Slide>
  );
}

/* 12 — offentligt + privat */
export function S12() {
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <h2 className="slide-title anim-rise d1 absolute top-[150px] left-24 max-w-[1400px]">
        När offentligt och privat
        <br />
        förstärker varandra
      </h2>
      <div className="absolute top-[400px] right-24 left-24 grid h-[400px] grid-cols-[1fr_auto_1fr] items-center gap-10">
        <div className="anim-rise d3 relative h-full overflow-hidden">
          <img
            src={img.mtbForest}
            alt="Aktiviteter på Billingen"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="anim-fade d5 text-bill-green" style={{ fontSize: 90, lineHeight: 1 }}>
          ↔
        </div>
        <div className="anim-rise d4 relative h-full overflow-hidden">
          <img
            src={img.modernBuilding}
            alt="Billingehus"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="absolute right-24 bottom-16 left-24 flex items-end justify-between">
        <div className="anim-fade d6">
          <p className="slide-subtitle">Platsen stärker hotellet.</p>
          <p className="slide-subtitle mt-2">Hotellet stärker platsen.</p>
        </div>
        <p className="slide-body text-bill-green">
          Gästens upplevelse slutar inte vid hotelldörren.
        </p>
      </div>
    </Slide>
  );
}

/* 13 — dubbla nyttan */
export function S13() {
  return (
    <Slide tone="green">
      <ActTag {...A4} />
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center">
        <div className="anim-rise d2 flex h-[540px] w-[540px] items-center justify-center rounded-full bg-white/15">
          <p className="slide-subtitle -translate-x-24">Besökare</p>
        </div>
        <div className="anim-rise d3 -ml-[190px] flex h-[540px] w-[540px] items-center justify-center rounded-full bg-white/15">
          <p className="slide-subtitle translate-x-24">Skövdebor</p>
        </div>
      </div>
      <p className="slide-title anim-fade d5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-bill-amber">
        Attraktionskraft
      </p>
      <p className="slide-body anim-fade d7 absolute right-24 bottom-16 left-24 text-center opacity-75">
        En bra plats att besöka kan samtidigt vara en bättre plats att leva på.
      </p>
    </Slide>
  );
}

/* 14 — Turistrådet Västsverige */
export function S14() {
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <div className="absolute inset-y-0 right-0 w-[46%]">
        <Photo src={img.vandring} alt="Vandring på Billingens leder" position="center 45%" zoom={false} />
      </div>
      <div className="absolute top-1/2 left-24 w-[820px] -translate-y-1/2">
        <h2 className="slide-title-lg anim-rise d1 text-bill-green">Tillsammans når vi längre</h2>
        <p className="slide-subtitle anim-rise d3 mt-12 opacity-85">
          Produktutveckling · kampanjer · pressresor · PR
        </p>
        <p className="slide-body anim-fade d5 mt-12 max-w-[720px] opacity-65">
          Samarbetet med Turistrådet Västsverige har varit en viktig del i att utveckla och
          positionera Billingen.
        </p>
      </div>
    </Slide>
  );
}

/* 15 — evenemang */
export function S15() {
  const ev = [
    { t: "SM-veckan 2023", src: img.skiRace, alt: "Tävling i spåret på Billingen" },
    { t: "Enduro-VM 2025", src: img.mtb, alt: "Mountainbike på Billingen" },
    { t: "SM-veckan 2027", src: img.eventCrowd, alt: "Publik vid evenemang på Billingen" },
  ];
  return (
    <Slide tone="ink">
      <ActTag {...A4} />
      <h2 className="slide-title anim-rise d1 absolute top-[160px] left-24">
        Evenemang utvecklar destinationen
      </h2>
      <div className="absolute top-[330px] right-24 bottom-24 left-24 grid grid-cols-3 gap-12">
        {ev.map((e, i) => (
          <Tile key={e.t} src={e.src} alt={e.alt} label={e.t} className={`anim-rise d${i + 2}`} />
        ))}
      </div>
    </Slide>
  );
}

/* 16 — hållbarhet */
export function S16() {
  const dims = ["Natur", "Folkhälsa", "Inkludering", "Året runt"];
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <div className="absolute inset-y-0 right-0 w-[40%]">
        <Photo src={img.bergetgruppen} alt="Bergetgruppen arbetar på Billingen" position="center 50%" />
      </div>
      <div className="absolute top-[240px] left-24 w-[960px]">
        <h2 className="slide-title anim-rise d1">
          Hållbarhet är hur vi
          <br />
          utvecklar platsen
        </h2>
        <div className="mt-16 grid grid-cols-2 gap-x-16 gap-y-10">
          {dims.map((d, i) => (
            <p
              key={d}
              className={`slide-subtitle anim-rise d${i + 3} border-t border-bill-ink/15 pt-6`}
            >
              {d}
            </p>
          ))}
        </div>
      </div>
      <div className="anim-rise d8 absolute bottom-16 left-24">
        <p className="slide-subtitle text-bill-green">Nominerad till Årets Hållbarhetskliv 2026</p>
        <p className="slide-caption mt-3 opacity-60">
          Ett kvitto på att riktningen uppmärksammas.
        </p>
      </div>
    </Slide>
  );
}
