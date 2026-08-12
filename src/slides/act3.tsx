import { img } from "@/lib/images";
import { Slide, Photo, ActTag, Rule, Chip } from "@/components/deck/ui";

const A4 = { act: "Akt 4", name: "Tillsammans" };

/* 11 — Billingehus, en ikon får en ny roll */
export function S11() {
  return (
    <Slide tone="bare">
      <Photo src={img.modernBuilding} alt="Billingehus på Billingen idag" position="center 55%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/80 to-bill-ink/15" />
      <ActTag {...A4} />
      <div className="absolute top-[300px] left-20 w-[1000px]">
        <h2 className="slide-title-lg anim-rise d1">EN GAMMAL IKON FÅR EN NY ROLL.</h2>
        <Rule className="mt-10" />
        <p className="slide-body-lg anim-rise d3 mt-10 max-w-[860px] opacity-85">
          Billingehus har varit en del av bergets identitet sedan början.
        </p>
        <p className="slide-body-lg anim-rise d5 mt-6 max-w-[860px] opacity-60">
          En omfattande privat omvandling har gjort hotellet till en starkare del av destinationen.
        </p>
      </div>
    </Slide>
  );
}

/* 12 — offentligt + privat */
export function S12() {
  const left = ["aktiviteter", "natur", "evenemang", "reseanledningar", "året-runt-produkt"];
  const right = ["boende", "restaurang", "spa", "konferens", "längre vistelser"];
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <h2 className="slide-title anim-rise d1 absolute top-[170px] left-20 max-w-[1500px]">
        NÄR OFFENTLIGT OCH PRIVAT FÖRSTÄRKER VARANDRA.
      </h2>
      <div className="absolute top-[380px] right-20 left-20 grid grid-cols-[1fr_auto_1fr] items-start gap-16">
        <div className="anim-rise d3">
          <p className="slide-kicker text-bill-green">Billingen ger Billingehus</p>
          <ul className="slide-body-lg mt-8 space-y-3 opacity-80">
            {left.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="anim-fade d5 self-center text-bill-green" style={{ fontSize: 120, lineHeight: 1 }}>
          ⇄
        </div>
        <div className="anim-rise d4 text-right">
          <p className="slide-kicker text-bill-green">Billingehus ger Billingen</p>
          <ul className="slide-body-lg mt-8 space-y-3 opacity-80">
            {right.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="slide-title anim-rise d7 absolute bottom-16 left-20">
        GÄSTENS UPPLEVELSE SLUTAR INTE VID HOTELLDÖRREN.
      </p>
    </Slide>
  );
}

/* 13 — dubbla nyttan */
export function S13() {
  return (
    <Slide tone="green">
      <ActTag {...A4} />
      <h2 className="slide-title anim-rise d1 absolute top-[190px] left-20 max-w-[1400px]">
        BILLINGEN ÄR INTE BARA EN TURISMSATSNING.
      </h2>
      <div className="absolute top-[400px] right-20 left-20 grid grid-cols-2 gap-24">
        <div className="anim-rise d3">
          <p className="slide-kicker text-bill-amber">För besökaren</p>
          <ul className="slide-body-lg mt-8 space-y-3 opacity-85">
            {["upplevelser", "aktivitet", "evenemang", "boende"].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="anim-rise d4 border-l border-white/25 pl-24">
          <p className="slide-kicker text-bill-amber">För skövdebon</p>
          <ul className="slide-body-lg mt-8 space-y-3 opacity-85">
            {["motion", "natur", "folkhälsa", "föreningsliv", "livskvalitet"].map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="anim-rise d6 absolute right-20 bottom-16 left-20 border-t border-white/25 pt-10">
        <p className="slide-title text-bill-amber">ATTRAKTIONSKRAFT</p>
        <p className="slide-body mt-4 opacity-75">
          En bra plats att besöka kan samtidigt vara en bättre plats att leva på.
        </p>
      </div>
    </Slide>
  );
}

/* 14 — Turistrådet Västsverige */
export function S14() {
  const parts = ["Kampanjer", "Pressresor", "Nationell och internationell exponering", "Rätt målgrupper"];
  return (
    <Slide tone="bare">
      <Photo src={img.trailRun} alt="Löpning på Billingens leder" position="center 45%" />
      <div className="absolute inset-0 bg-gradient-to-r from-bill-ink via-bill-ink/80 to-bill-ink/20" />
      <ActTag {...A4} />
      <div className="absolute top-[280px] left-20 w-[1080px]">
        <h2 className="slide-title anim-rise d1">
          VI BYGGDE PRODUKTEN TILLSAMMANS.
          <br />
          OCH FICK HJÄLP ATT NÅ UT.
        </h2>
        <Rule className="mt-10" />
        <div className="anim-rise d3 mt-10 flex flex-wrap gap-5">
          {parts.map((t) => (
            <Chip key={t} className="border-bill-amber/60">
              {t}
            </Chip>
          ))}
        </div>
        <p className="slide-body-lg anim-rise d5 mt-12 max-w-[900px] opacity-80">
          Samarbetet med Turistrådet Västsverige har hjälpt oss koppla ihop produktutveckling,
          målgrupper, kampanjer och PR.
        </p>
      </div>
    </Slide>
  );
}

/* 15 — evenemang */
export function S15() {
  const ev = ["SM-veckan vinter 2023", "Enduro-VM 2025", "SM-veckan vinter 2027"];
  return (
    <Slide tone="ink">
      <ActTag {...A4} />
      <Photo src={img.eventCrowd} alt="Publik vid evenemang på Billingen" className="opacity-25" />
      <div className="absolute inset-0 bg-bill-ink/70" />
      <div className="absolute top-[240px] left-20 w-[1250px]">
        <p className="slide-kicker anim-fade text-bill-amber">Evenemang som destinationsutveckling</p>
        <h2 className="slide-title anim-rise d2 mt-8">
          VI ANVÄNDER INTE BARA DESTINATIONEN FÖR EVENEMANG.
        </h2>
        <p className="slide-title anim-rise d4 mt-8 text-bill-amber">
          VI ANVÄNDER EVENEMANG FÖR ATT UTVECKLA DESTINATIONEN.
        </p>
      </div>
      <div className="absolute right-20 bottom-20 left-20 flex gap-14 border-t border-white/15 pt-10">
        {ev.map((t, i) => (
          <p key={t} className={`slide-body-lg anim-rise d${i + 5} opacity-70`}>
            {t}
          </p>
        ))}
      </div>
    </Slide>
  );
}

/* 16 — hållbarhet */
export function S16() {
  const dims = ["NATUR", "FOLKHÄLSA", "INKLUDERING", "ÅRET-RUNT-EKONOMI"];
  return (
    <Slide tone="sand">
      <ActTag {...A4} />
      <div className="absolute inset-y-0 right-0 w-[34%]">
        <Photo src={img.bergetgruppen} alt="Bergetgruppen arbetar på Billingen" position="center 50%" />
      </div>
      <div className="absolute top-[200px] left-20 w-[1100px]">
        <h2 className="slide-title anim-rise d1">HÅLLBARHET ÄR INTE ETT SIDOPROJEKT.</h2>
        <h2 className="slide-title anim-rise d2 mt-4">DET ÄR HUR VI UTVECKLAR PLATSEN.</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-10">
          {dims.map((d, i) => (
            <p key={d} className={`slide-subtitle anim-rise d${i + 3} border-t border-bill-ink/20 pt-6`}>
              {d}
            </p>
          ))}
        </div>
      </div>
      <p className="slide-body anim-fade d7 absolute bottom-40 left-20 opacity-60">
        Bergetgruppen – social inkludering i skötseln av berget.
      </p>
      <div className="anim-rise d8 absolute bottom-10 left-20">
        <p className="slide-body-lg text-bill-green" style={{ fontWeight: 700 }}>
          NOMINERAD TILL ÅRETS HÅLLBARHETSKLIV 2026
        </p>
        <p className="slide-body mt-3 opacity-60">Ett kvitto på att riktningen uppmärksammas.</p>
      </div>
    </Slide>
  );
}
