import type { ComponentType } from "react";
import { S01, S02, S03, S04, S05, S06 } from "./act1";
import { S07, S08, S09, S10, S11, S12 } from "./act2";
import { S13, S14, S15, S16, S17, S18 } from "./act3";
import { S19, S20, S21, S22, S23 } from "./act4";

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
  d(1, "Billingen", "Öppning", S01, "Välkomna. Jag ska berätta hur en plats blev en destination – och vad det krävde."),
  d(2, "1970 – drömmen", "Akt 1", S02, "Arne och Maja Sandberg drömde om ett friluftsparadis på berget. Billingehus blev ett landmärke."),
  d(3, "Plats vs destination", "Akt 1", S03, "Vi hade allt av naturen. Men potential är inte en destination."),
  d(4, "Visionen", "Akt 2", S04, "Vi bestämde riktningen först: södra och västra Sveriges bästa outdoordestination året runt."),
  d(5, "280 miljoner", "Akt 2", S05, "Cirka 280 mkr 2017–2024. Inte en sak – en helhet. 2026 tillförs ytterligare cirka 20 mkr."),
  d(6, "Ekosystemet", "Akt 2", S06, "Allt inom räckhåll, tre kilometer från centrum. Det förändrar produkten."),
  d(7, "Målgrupperna", "Akt 3", S07, "Barnfamiljen, den aktiva, motionären och eliten – samtidigt."),
  d(8, "Året runt", "Akt 3", S08, "Året runt är inte en ambition, det är en affärsmodell."),
  d(9, "Barnen", "Akt 3", S09, "Barnen avgör var familjen åker. Billingetrollet är på riktigt viktig."),
  d(10, "Evenemangen", "Akt 3", S10, "Evenemangen gör platsen känd långt utanför Skaraborg."),
  d(11, "Boendet", "Akt 3", S11, "Utan sängar blir besöket ett dagsbesök."),
  d(12, "För alla", "Akt 3", S12, "Tillgänglighet, föreningsliv och arbetsintegrerande skötsel."),
  d(13, "Huvudtesen", "Akt 4", S13, "Destinationer byggs inte av en enskild satsning."),
  d(14, "Samverkan", "Akt 4", S14, "Kommun, bolag, näringsliv, föreningsliv. Samverkan är infrastruktur."),
  d(15, "Next Skövdes roll", "Akt 4", S15, "Någon måste hålla i helheten över tid."),
  d(16, "Affärsplanen", "Akt 4", S16, "Riktningen ligger fast i affärsplanen 2024–2026."),
  d(17, "Gästnätterna", "Akt 5", S17, "203 000 (2023) → 229 209 (+13 %) → 245 885 (+7 %). Klicka fram staplarna.", 4),
  d(18, "Snabbare än omvärlden", "Akt 5", S18, "Jan–mars 2026: Skövde +17,3 %, Västsverige +8,4 %, Sverige +2,1 %."),
  d(19, "Det nya problemet", "Akt 5", S19, "Tisdag–torsdag är staden full. Efterfrågan finns, kapaciteten saknas."),
  d(20, "Sex lärdomar", "Akt 6", S20, "Sammanfattningen ni kan ta med hem."),
  d(21, "Tidslinjen", "Akt 6", S21, "Femtio år av beslut åt samma håll."),
  d(22, "Uthållighet", "Akt 6", S22, "Pausa. Klicka fram andra raden: de byggs av uthållighet.", 2),
  d(23, "Tack", "Avslutning", S23, "Tack. Frågor?"),
];
