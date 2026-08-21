import type { ComponentType } from "react";
import { S01, S02, S03, S04, S05 } from "./act1";
import { S06, S07, S08, S09, S10 } from "./act2";
import { S11, S12, S13, S14, S15 } from "./act3";
import { S16, S17, S18, S19, S20 } from "./act4";

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
  d(1, "Billingen", "Öppning", S01, "Börja utan att presentera projektet. Fråga i stället: Hur bygger man en destination? Vänta. Säg sedan: Det korta svaret är att ingen gör det ensam."),
  d(2, "Ett beslut 1967", "Akt 1", S02, "Arne hade sålt Uno-X. Han och Maja kunde ha köpt aktier. I stället valde de att göra något roligt för Skövde. Det valet blev början på dagens Billingen."),
  d(3, "Gåvan", "Akt 1", S03, "1970 stod ett helt friluftsparadis färdigt. Sedan överläts friluftsområdet till kommunen för en krona. Pausa efter siffran. Vår resa börjar alltså med ett förtroende."),
  d(4, "Femtio år senare", "Akt 1", S04, "En gåva är inte färdig för all framtid. Anläggningar åldras, vanor förändras och vintern blir mindre förutsägbar. Frågan blev: skulle vi förvalta minnet – eller utveckla idén?"),
  d(5, "Riktningen", "Akt 1", S05, "Vi började inte med en inköpslista. Vi började med riktningen: södra och västra Sveriges bästa outdoordestination året runt. Den riktningen fick överleva både mandatperioder och förändrade planer."),
  d(6, "Modet", "Akt 2", S06, "288 miljoner är en stor offentlig investering. Besluten fattades långt innan gästnätter och rubriker kunde mätas. Tacka politiken över block- och mandatperioder – uthålligheten är själva poängen."),
  d(7, "Vad som byggdes", "Akt 2", S07, "Räkna inte upp allt. Visa tre rörelser: från väderberoende till mer snösäkerhet, från separata anläggningar till ett sammanhängande område och från säsong till året runt."),
  d(8, "Systemet", "Akt 2", S08, "Klicka fram helheten. Gästen möter inte våra organisationsgränser. Hon möter resan: ankomst, aktivitet, mat, boende och nästa anledning att komma tillbaka.", 2),
  d(9, "Dubbla nyttan", "Akt 2", S09, "Det här är inte turism eller invånarnytta. Samma investering kan ge barnets fritid, föreningens arena, företagens attraktionskraft och besökarens upplevelse."),
  d(10, "Året runt", "Akt 2", S10, "Året runt är inte en slogan. Det är riskspridning, fler arbetstillfällen över året och bättre användning av samma infrastruktur."),
  d(11, "Kundresan", "Akt 3", S11, "Vi säljer inte elva kilometer konstsnö. Vi hjälper någon att klara sitt första Vasalopp. Det är skillnaden mellan att marknadsföra en anläggning och att utveckla en destination."),
  d(12, "Billingehus", "Akt 3", S12, "Kommunens investering gjorde platsen starkare. Lotus tog över 2022, öppnade hotellet 2023 och utvecklade spa och kongresskapacitet. Offentligt och privat började dra åt samma håll."),
  d(13, "Människorna", "Akt 3", S13, "Ingen logotyp bygger en destination. Lyft föreningarna, medarbetarna, företagen, politiken, kommunen, hotellet, Turistrådet och invånarna. Någon behöver hålla ihop helheten – men ingen äger framgången."),
  d(14, "Västsverige", "Akt 3", S14, "Vänd dig till rummet. Samarbetet med Turistrådet har gett oss kompetens, räckvidd, kampanjer, pressresor och marknadsbearbetning som vi inte hade kunnat skapa lika starkt själva."),
  d(15, "Evenemangen", "Akt 3", S15, "Evenemang är mer än tillfälliga gästnätter. De sätter en deadline, stresstestar infrastrukturen och ger en berättelse som når långt utanför kommunen. SM-veckan 2027 är nästa nivå."),
  d(16, "Hållbarheten", "Akt 4", S16, "Hållbarhet blir konkret när platsen fungerar för boende och besökare, fylls när den annars är tom och skapar robustare verksamheter. Billingen och Billingehus är Skaraborgs kandidat till Årets Hållbarhetskliv 2026."),
  d(17, "Resultatet", "Akt 4", S17, "Klicka fram åren. 245 885 gästnätter 2025 är Skövdes starkaste notering hittills. Var noga: Billingen är en av flera motorer, inte ensam förklaring.", 4),
  d(18, "Värdet", "Akt 4", S18, "Gästnätter är bara ett mått. Turismkonsumtionen ökade från 1,351 till 1,484 miljarder kronor. Men värdet syns också i stolthet, folkhälsa, föreningsliv och attraktivitet."),
  d(19, "Inte färdiga", "Akt 4", S19, "Var öppna med nästa problem. Efterfrågan börjar ibland växa ur hotellkapaciteten, särskilt mitt i veckan. Destinationsutveckling blir aldrig färdig – varje framgång skapar nästa flaskhals."),
  d(20, "Lärdomen", "Avslutning", S20, "Klicka fram sista meningen. Det började med två människors dröm. Det fortsatte genom hundratals beslut. Vårt ansvar är att lämna över något ännu bättre. Tack.", 2),
];
