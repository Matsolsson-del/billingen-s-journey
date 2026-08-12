import type { ComponentType } from "react";
import { S01, S02, S03, S04 } from "./act1";
import { S05, S06, S07, S08, S09, S10 } from "./act2";
import { S11, S12, S13, S14, S15, S16 } from "./act3";
import { S17, S18, S19, S20, S21, S22, S23 } from "./act4";

export type SlideDef = {
  id: number;
  title: string;
  act: string;
  steps: number;
  notes: string;
  Component: ComponentType<{ step?: number }>;
};

const d = (
  id: number,
  title: string,
  act: string,
  Component: ComponentType<{ step?: number }>,
  notes: string,
  steps = 1,
): SlideDef => ({ id, title, act, Component, notes, steps });

export const slides: SlideDef[] = [
  d(1, "Billingen", "Öppning", S01, "Jag står här och berättar historien. Men väldigt många andra har byggt den."),
  d(2, "1970 – drömmen", "Akt 1", S02, "Arne ”Uno-X” och Maja Sandberg drömde om ett friluftsparadis på berget. 2026 bygger vi vidare på samma idé."),
  d(3, "Potential", "Akt 1", S03, "Naturen fanns. Men potential är inte en destination."),
  d(4, "Riktningen", "Akt 2", S04, "En gemensam riktning bestämdes – först riktningen, sedan investeringarna."),
  d(5, "≈ 280 mkr", "Akt 2", S05, "Skövde kommun vågade investera långsiktigt: ca 280 mkr 2017–2024, plus ca 20 mkr i Billingebacken 2026."),
  d(6, "Politiskt mod", "Akt 2", S06, "Besluten fattas långt innan effekterna går att mäta. Var generös mot politiken – över mandatperioder, oavsett majoritet."),
  d(7, "Kartan", "Akt 3", S07, "Ett sammanhängande system tre kilometer från centrum."),
  d(8, "För vem", "Akt 3", S08, "Barnfamiljen, den aktiva, motionären och eliten – samtidigt."),
  d(9, "Året runt", "Akt 3", S09, "Året runt är inte en ambition, det är en affärsmodell."),
  d(10, "Vasaloppscenter", "Akt 3", S10, "Vasaloppscenter i längd, cykel och löpning. Människan köper inte spåret – hon köper resan mot sitt mål."),
  d(11, "Billingehus", "Akt 4", S11, "En ikon sedan början – och en privat omvandling som gjort hotellet till en starkare del av destinationen."),
  d(12, "Offentligt + privat", "Akt 4", S12, "Offentlig destinationsinvestering och privat kommersiell investering förstärker varandra. Gästens upplevelse slutar inte vid hotelldörren."),
  d(13, "Dubbla nyttan", "Akt 4", S13, "Investeringen är lika mycket för skövdebon som för besökaren. Det är attraktionskraft."),
  d(14, "Turistrådet Västsverige", "Akt 4", S14, "En framgångsfaktor har varit att inte göra allt själva. Samarbetet kring kampanjer, pressresor och marknadsbearbetning har varit mycket värdefullt."),
  d(15, "Evenemang", "Akt 4", S15, "Evenemang testar infrastrukturen, bygger position, ger media och lokal stolthet – och driver produktutveckling."),
  d(16, "Hållbarhet", "Akt 4", S16, "Hållbarhet är hur vi utvecklar platsen. Nomineringen till Årets Hållbarhetskliv är ett kvitto på att riktningen uppmärksammas."),
  d(17, "Huvudtesen", "Akt 5", S17, "Klicka fram cirkeln: vision, politiska beslut, investeringar, föreningsliv, produkt, evenemang, marknadsföring, besökare, nya investeringar.", 2),
  d(18, "Nätverket", "Akt 5", S18, "Ingen enskild aktör äger framgången. Men någon måste ta ansvar för helheten – det behöver inte vara ett destinationsbolag."),
  d(19, "Gästnätterna", "Akt 6", S19, "203 000 → 229 209 → 245 885. Klicka fram åren. Billingen är en av flera motorer i Skövdes växande destination.", 4),
  d(20, "Jan–jun 2026", "Akt 6", S20, "PLACEHOLDER: fyll i verifierade siffror från Tillväxtverket för jan–jun 2026 (Skövde, Västsverige, Sverige)."),
  d(21, "Flaskhalsen", "Akt 6", S21, "Efterfrågan börjar växa ur kapaciteten. Destinationsutveckling blir aldrig färdig."),
  d(22, "Fem lärdomar", "Akt 7", S22, "Riktning, politiskt mod, system, tillsammans, uthållighet."),
  d(23, "Slutbilden", "Avslutning", S23, "Klicka fram slutpoängen. Det började med en dröm – och vi är många som byggt vidare på den.", 2),
];
