import { img } from "@/lib/images";
import { Slide, Photo, Mark, ActTag, Rule, Chip } from "@/components/deck/ui";

/* SLIDE 1 — hero */
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
          <p className="slide-body opacity-70">
            En drygt 50-årig resa från idé till destinationssystem
          </p>
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

/* SLIDE 2 — 1970 */
export function S02() {
  return (
    <Slide tone="deep">
      <ActTag act="Akt 1" name="En dröm på ett berg" />
      <div className="absolute inset-y-0 right-0 w-[42%]">
        <Photo src={img.arneMaja} alt="Arne och Maja Sandberg i liften på Billingen, omkring 1970" position="center 30%" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green-deep via-transparent to-transparent" />
      </div>
      <div
        className="slide-mega anim-fade d1 absolute bottom-[-40px] left-14 opacity-15"
        style={{ fontSize: 520 }}
      >
        1970
      </div>
      <div className="absolute top-[300px] left-20 w-[900px]">
        <h2 className="slide-title-lg anim-rise d2">DET BÖRJADE MED EN DRÖM.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d4 mt-10 max-w-[760px] opacity-85">
          Arne ”Uno-X” Sandberg och Maja Sandberg drömde om ett friluftsparadis på Billingens topp.
        </p>
        <p className="slide-body anim-rise d5 mt-6 max-w-[760px] opacity-65">
          Billingehus blev ett landmärke för Skövde.
        </p>
      </div>
      <p className="slide-caption anim-fade d6 absolute right-20 bottom-16 opacity-60">
        Arne och Maja Sandberg
      </p>
    </Slide>
  );
}

/* SLIDE 3 — plats vs destination */
export function S03() {
  const plats = ["natur", "berg", "utsikt", "snö", "skog"];
  const dest = [
    "anledning att resa",
    "saker att göra",
    "möjlighet att stanna",
    "service",
    "värdskap",
    "företag",
    "evenemang",
    "tillgänglighet",
  ];
  return (
    <Slide tone="sand">
      <ActTag act="Akt 1" name="En dröm på ett berg" />
      <div className="absolute inset-x-20 top-[230px] grid grid-cols-2 gap-24">
        <div className="anim-rise d1">
          <h3 className="slide-title">ATT HA<br />EN PLATS</h3>
          <Rule className="mt-8" />
          <ul className="slide-body-lg mt-10 space-y-3 opacity-60">
            {plats.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div className="anim-rise d3 border-l border-bill-ink/15 pl-24">
          <h3 className="slide-title text-bill-green">
            ATT BYGGA
            <br />
            EN DESTINATION
          </h3>
          <Rule className="mt-8" />
          <ul className="slide-body-lg mt-10 grid grid-cols-2 gap-x-10 gap-y-3 opacity-80">
            {dest.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="anim-rise d6 absolute right-20 bottom-16 left-20 border-t border-bill-ink/15 pt-10">
        <p className="slide-title">POTENTIAL ÄR INTE EN DESTINATION.</p>
      </div>
    </Slide>
  );
}

/* SLIDE 4 — visionen */
export function S04() {
  return (
    <Slide tone="green">
      <ActTag act="Akt 2" name="Ett strategiskt val" />
      <Mark />
      <div className="absolute inset-y-0 right-0 w-[38%] opacity-25">
        <Photo src={img.mtb} alt="Mountainbike på Billingen" />
        <div className="absolute inset-0 bg-gradient-to-r from-bill-green to-transparent" />
      </div>
      <div className="absolute top-[220px] left-20 w-[1200px]">
        <h2 className="slide-title anim-rise d1">SEDAN BESTÄMDE VI OSS.</h2>
        <p className="slide-body-lg anim-rise d2 mt-6 max-w-[900px] opacity-75">
          Billingen skulle utvecklas från friluftsområde till året-runt-destination.
        </p>
        <div className="anim-rise d4 mt-16 border-t border-b border-white/25 py-14">
          <p className="slide-kicker text-bill-amber">Vision</p>
          <p className="slide-title-lg mt-6 max-w-[1180px]">
            SÖDRA OCH VÄSTRA SVERIGES BÄSTA OUTDOORDESTINATION ÅRET RUNT
          </p>
        </div>
        <p className="slide-body anim-rise d6 mt-10 max-w-[900px] opacity-70">
          Först riktningen. Sedan investeringarna.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 5 — investeringen */
export function S05() {
  const items = [
    "11 km belysta konstsnöspår",
    "Mountainbike Arena",
    "Två pumptracks",
    "Billingebadet",
    "Billingecenter",
    "Arena Billingen",
    "Vägar och parkering",
    "Stadionutveckling",
    "Välkomsttorg",
    "Service och föreningsfunktioner",
  ];
  return (
    <Slide tone="ink">
      <ActTag act="Akt 2" name="Ett strategiskt val" />
      <Photo src={img.pumptrack} alt="Pumptrack på Billingen" className="opacity-20" />
      <div className="absolute inset-0 bg-bill-ink/70" />
      <div className="absolute top-[210px] left-20 w-[820px]">
        <p className="slide-kicker anim-fade text-bill-amber">Billingeprojektet 2017–2024</p>
        <p className="slide-mega anim-rise d1 mt-8">≈ 280</p>
        <p className="slide-subtitle anim-rise d2 mt-2 opacity-80">miljoner kronor</p>
        <Rule className="mt-12" />
        <p className="slide-body anim-rise d5 mt-10 max-w-[700px] opacity-70">
          Diskret men viktigt: 2026 tillförs ytterligare cirka 20 mkr till Billingebacken.
        </p>
      </div>
      <div className="absolute top-[200px] right-20 w-[820px]">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {items.map((t, i) => (
            <div
              key={t}
              className={`anim-rise d${Math.min(8, i + 1)} border-l-2 border-bill-amber/70 pl-6`}
            >
              <p className="slide-body">{t}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="anim-rise d8 absolute right-20 bottom-16 left-20 border-t border-white/15 pt-8">
        <p className="slide-title">VI INVESTERADE INTE I EN SAK. VI INVESTERADE I EN HELHET.</p>
      </div>
    </Slide>
  );
}

/* SLIDE 6 — kartan */
export function S06() {
  const nodes = [
    "Hotell",
    "Camping & stugby",
    "Skidstadion",
    "Billingecenter",
    "MTB-arena",
    "Billingebadet",
    "Leder",
    "Aktiviteter",
    "Parkering",
    "Service",
  ];
  return (
    <Slide tone="sand">
      <ActTag act="Akt 2" name="Ett strategiskt val" />
      <div className="absolute inset-y-0 right-0 w-[52%] bg-white">
        <img
          src={img.karta}
          alt="Översiktskarta Billingen Skövde"
          className="anim-fade d2 absolute inset-0 h-full w-full object-contain p-16"
        />
      </div>
      <div className="absolute top-[240px] left-20 w-[780px]">
        <h2 className="slide-title anim-rise d1">
          NÄR ALLT FINNS INOM RÄCKHÅLL FÖRÄNDRAS PRODUKTEN.
        </h2>
        <Rule className="mt-10" />
        <div className="mt-12 flex flex-wrap gap-3">
          {nodes.map((n, i) => (
            <Chip key={n} className={`anim-rise d${Math.min(8, i + 1)}`}>
              {n}
            </Chip>
          ))}
        </div>
        <p className="slide-body anim-rise d8 mt-12 max-w-[700px] opacity-65">
          Tre kilometer från Skövde centrum. Ett sammanhängande ekosystem – inte en samling
          attraktioner.
        </p>
      </div>
    </Slide>
  );
}
