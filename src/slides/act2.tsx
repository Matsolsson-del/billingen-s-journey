import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule, Chip, Mark } from "@/components/deck/ui";

const ACT = { act: "Akt 3", name: "Ett system, inte en attraktion" };

/* SLIDE 7 — målgrupper */
export function S07() {
  const cards = [
    { src: img.xcFamily, alt: "Familj på längdskidor", t: "BARNFAMILJEN", s: "Enkelt, tryggt, nära" },
    { src: img.mtbForest, alt: "Mountainbike i skogen", t: "DEN AKTIVA", s: "Leder, backar, flow" },
    { src: img.trailRun, alt: "Löpare på Billingen", t: "MOTIONÄREN", s: "Vardagsträning i naturen" },
    { src: img.skiRace, alt: "Skidtävling på Billingen", t: "ELITEN", s: "Tävling och läger" },
  ];
  return (
    <Slide tone="ink">
      <ActTag {...ACT} />
      <h2 className="slide-title anim-rise d1 absolute top-[190px] left-20">
        VI BYGGDE FÖR FLERA MÄNNISKOR SAMTIDIGT.
      </h2>
      <div className="absolute right-20 bottom-[120px] left-20 grid grid-cols-4 gap-8">
        {cards.map((c, i) => (
          <div
            key={c.t}
            className={`anim-rise d${i + 2} relative h-[560px] overflow-hidden rounded-sm`}
          >
            <Photo src={c.src} alt={c.alt} zoom={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-bill-ink via-bill-ink/20 to-transparent" />
            <div className="absolute right-8 bottom-8 left-8">
              <p className="slide-subtitle" style={{ fontSize: 40, fontWeight: 700 }}>
                {c.t}
              </p>
              <p className="slide-caption mt-2 opacity-70">{c.s}</p>
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* SLIDE 8 — året runt */
export function S08() {
  const cols = [
    { src: img.skiersTwo, alt: "Skidåkare i konstsnöspåret", t: "VINTER", s: "11 km konstsnö, belyst" },
    { src: img.vandring, alt: "Vandring på Billingen", t: "VÅR", s: "Leder och utsikter" },
    { src: img.pumptrack, alt: "Pumptrack", t: "SOMMAR", s: "Bad, cykel, evenemang" },
    { src: img.utsikt, alt: "Utsikt över landskapet", t: "HÖST", s: "Löpning och lugn" },
  ];
  return (
    <Slide tone="bare">
      <div className="absolute inset-0 grid grid-cols-4">
        {cols.map((c, i) => (
          <div key={c.t} className={`anim-fade d${i + 1} relative overflow-hidden`}>
            <Photo src={c.src} alt={c.alt} zoom={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-bill-ink via-bill-ink/25 to-bill-ink/40" />
            <div className="absolute right-10 bottom-16 left-10">
              <p className="slide-kicker text-bill-amber">{c.t}</p>
              <p className="slide-body mt-4 opacity-85">{c.s}</p>
            </div>
            <div className="absolute inset-y-0 right-0 w-px bg-white/15" />
          </div>
        ))}
      </div>
      <div className="absolute top-[120px] right-20 left-20 text-center">
        <h2 className="slide-title-lg anim-rise">SÄSONGEN SLUTADE ALDRIG.</h2>
        <p className="slide-body-lg anim-rise d2 mx-auto mt-8 max-w-[1100px] opacity-80">
          Året runt är inte en ambition. Det är en affärsmodell.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 9 — barnen */
export function S09() {
  return (
    <Slide tone="bare">
      <Photo src={img.billingetrollet} alt="Barn möter Billingetrollet" position="center 35%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink/90 via-bill-ink/40 to-transparent" />
      <ActTag {...ACT} />
      <div className="absolute top-[330px] left-20 w-[900px]">
        <h2 className="slide-title-lg anim-rise d1">BARNEN AVGÖR VAR FAMILJEN ÅKER.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 max-w-[760px] opacity-85">
          Billingetrollet, lekplatser, pulkabackar och enkla första äventyr. En destination som ett
          barn vill återvända till blir en destination familjen bokar igen.
        </p>
      </div>
    </Slide>
  );
}

/* SLIDE 10 — evenemang */
export function S10() {
  return (
    <Slide tone="deep">
      <ActTag {...ACT} />
      <Mark />
      <div className="absolute top-[210px] left-20 w-[780px]">
        <h2 className="slide-title anim-rise d1">EVENEMANGEN GÖR PLATSEN KÄND.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 opacity-85">
          Tävlingar, läger, festivaler och mästerskap fyller anläggningen – och sprider bilden av
          Billingen långt utanför Skaraborg.
        </p>
        <div className="anim-rise d5 mt-14 flex flex-wrap gap-3">
          <Chip>Skidtävlingar</Chip>
          <Chip>MTB-lopp</Chip>
          <Chip>Träningsläger</Chip>
          <Chip>Konferens</Chip>
          <Chip>Festival</Chip>
        </div>
      </div>
      <div className="absolute top-[160px] right-20 flex w-[880px] flex-col gap-8">
        <div className="anim-rise d2 relative h-[400px] overflow-hidden">
          <Photo src={img.eventCrowd} alt="Publik vid evenemang på Billingen" zoom={false} />
        </div>
        <div className="anim-rise d4 relative h-[320px] overflow-hidden">
          <Photo src={img.skiRace} alt="Skidtävling på Billingen" zoom={false} />
        </div>
      </div>
    </Slide>
  );
}

/* SLIDE 11 — boende */
export function S11() {
  const cards = [
    { src: img.billingecenter, alt: "Billingecenter", t: "BILLINGECENTER", s: "Navet på berget" },
    { src: img.stugby, alt: "Stugby och camping", t: "CAMPING & STUGBY", s: "Nära naturen" },
    { src: img.hotelroom, alt: "Hotellrum", t: "HOTELL", s: "Möten och konferens" },
  ];
  return (
    <Slide tone="sand">
      <ActTag {...ACT} />
      <h2 className="slide-title anim-rise d1 absolute top-[190px] left-20 max-w-[1300px]">
        UTAN NÅGONSTANS ATT SOVA BLIR BESÖKET ETT DAGSBESÖK.
      </h2>
      <div className="absolute right-20 bottom-[150px] left-20 grid grid-cols-3 gap-10">
        {cards.map((c, i) => (
          <div key={c.t} className={`anim-rise d${i + 3}`}>
            <div className="relative h-[520px] overflow-hidden">
              <Photo src={c.src} alt={c.alt} zoom={false} />
            </div>
            <p className="slide-subtitle mt-6" style={{ fontSize: 36, fontWeight: 700 }}>
              {c.t}
            </p>
            <p className="slide-body mt-2 opacity-65">{c.s}</p>
          </div>
        ))}
      </div>
      <p className="slide-body anim-fade d7 absolute bottom-16 left-20 opacity-65">
        Boendet förvandlar besök till gästnätter.
      </p>
    </Slide>
  );
}

/* SLIDE 12 — hållbarhet & inkludering */
export function S12() {
  return (
    <Slide tone="bare">
      <div className="absolute inset-0 grid grid-cols-3">
        <div className="anim-fade relative overflow-hidden">
          <Photo src={img.bergetgruppen} alt="Bergetgruppen i arbete på Billingen" zoom={false} />
        </div>
        <div className="anim-fade d2 relative overflow-hidden">
          <Photo src={img.vindskydd} alt="Vindskydd i skogen" zoom={false} />
        </div>
        <div className="anim-fade d3 relative overflow-hidden">
          <Photo src={img.rainbow} alt="Regnbåge över Billingen" zoom={false} />
        </div>
      </div>
      <div className="absolute inset-0 bg-bill-ink/72" />
      <ActTag {...ACT} />
      <div className="absolute top-[300px] left-20 w-[1150px]">
        <h2 className="slide-title-lg anim-rise d1">EN DESTINATION FÖR ALLA.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 max-w-[950px] opacity-85">
          Tillgängliga leder, arbetsintegrerande skötsel, föreningsliv och öppna ytor. Hållbarhet
          handlar lika mycket om vem som får plats som om hur vi bygger.
        </p>
      </div>
    </Slide>
  );
}
