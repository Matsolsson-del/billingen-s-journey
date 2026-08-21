import type { ComponentType } from "react";
import { S01, S02, S03, S04, S04B, S05, S05B } from "./act1";
import { S06, S07, S09, S10 } from "./act2";
import { S11, S11B, S11C, S13, S14, S15, S15B } from "./act3";
import { S16, S17, S18, S19, S20, S21 } from "./act4";

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
  d(5, "Eldsjälarna", "Akt 1", S04B, "Här börjar svaret, och det börjar underifrån. Lotta Stigsdotter samlade föreningarna på berget. Tillsammans formulerade de en gemensam vision och bildade BFEF – Billingens fritidsområde ekonomisk förening. Först då kunde kommunen fatta beslut. Grunden kom från ideella krafter, inte från ett tjänstemannaförslag."),
  d(6, "Riktningen", "Akt 1", S05, "Vi började inte med en inköpslista. Vi började med riktningen: södra och västra Sveriges bästa outdoordestination året runt. Den riktningen fick överleva både mandatperioder och förändrade planer."),
  d(7, "Läget", "Akt 1", S05B, "Billingen ligger fem minuter med bil från centrum, cirka en timme med tåg från Göteborg och två från Stockholm. Närheten är en förutsättning – både för invånarnas vardag och för besökarens beslut."),
  d(8, "Modet", "Akt 2", S06, "288 miljoner är en stor offentlig investering. Politiken sa ja till något som redan hade folklig förankring – men besluten fattades långt innan gästnätter och rubriker kunde mätas. Tacka politiken över block- och mandatperioder."),
  d(9, "Vad som byggdes", "Akt 2", S07, "Räkna inte upp allt. Visa tre rörelser: från väderberoende till mer snösäkerhet, från separata anläggningar till ett sammanhängande område och från säsong till året runt. Landa i friktionen: planerna ändrades, ägare byttes, förutsättningarna skiftade – men riktningen låg fast."),
  d(10, "Dubbla nyttan", "Akt 2", S09, "Det här är inte turism eller invånarnytta. Samma investering ger barnets fritid, föreningens arena, företagens attraktionskraft och besökarens upplevelse."),
  d(11, "Året runt", "Akt 2", S10, "Året runt är inte en slogan. Det är riskspridning, fler arbetstillfällen över året och bättre användning av samma infrastruktur."),
  d(12, "Vasaloppsmålet", "Akt 3", S11, "Vi säljer inte elva kilometer konstsnö – vi hjälper någon att klara sitt första Vasalopp. Här ligger också kundresepoängen: gästen möter inte våra organisationsgränser, hon möter resan från ankomst till nästa anledning att komma tillbaka."),
  d(13, "Risken", "Akt 3", S11B, "När kommunen fattade investeringsbeslutet var hotellet fortfarande destinationens svaga länk. Det var slitet, framtiden var osäker och den utveckling som behövdes hade ännu inte blivit verklighet. Här kunde berättelsen faktiskt ha stannat. Vi kunde ha fått ett fantastiskt friluftsområde – men ingen komplett destination.\n\n[Sources]\nBild: File:First Hotel Billingehus.jpg, foto I99pema, 2019-08-06, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:First_Hotel_Billingehus.jpg (nedladdad och lokalt lagrad 2026-08-21).\nDatering av hotellets läge före omvandlingen: Sveriges Radio 2017, https://www.sverigesradio.se/artikel/6607828 (endast referens, ingen bild använd)."),
  d(15, "Förvandlingen", "Akt 3", S11C, "Sedan såg Lotus Group något annat. Där andra såg risk såg de potentialen i platsen, utsikten och den offentliga satsning som redan hade börjat förändra berget. De tog över Billingehus och inledde en omfattande omvandling. Hotellet återöppnade 2023. Därefter kom Earth Spa, Elevation Spa och Bergasalen.\n\nI dag: kongresshall för upp till 750 personer, 235 hotellrum, restauranger, två spa, infinitypooler – och ett helt outdoorområde direkt utanför dörren.\n\nSubjektivt men uppriktigt: jag tycker att vi nu har Västsveriges fräckaste konferensprodukt. Inte för att varje del måste vara störst, utan för att kombinationen är så svår att kopiera. Kort paus.\n\nLärdomen vidare: Kommunens investering stärkte platsens potential. Den privata investeringen gjorde helheten komplett. När offentligt och privat började dra åt samma håll fick båda investeringarna större värde.\n\n[Sources]\nBilder: Billingehus/Lotus Hotel Group officiella pressbilder – bergasalen-kongress-night-billingehus-skovde-0137 och pool-ute-elevation-spa-billingehus-2116, https://billingehus.com/mote-event/kongress/ och https://billingehus.com/en/spa-wellness/elevation-spa/ (nedladdade lokalt 2026-08-21; pressbildsgalleri: https://www.mynewsdesk.com/se/lotushotelgroup/tag/billingehus). Upphovsrätt Lotus Hotel Group – använd enligt medievillkor.\nFakta: Bergasalen 700 kvm, upp till 750 personer i biosittning samt 235 hotellrum och leder/konstsnöspår cirka 2 minuter bort – https://billingehus.com/mote-event/kongress/. Infinitypool inne och två utomhuspooler – https://billingehus.com/en/spa-wellness/elevation-spa/.\nÅrtal: Lotus Hotel Group anger att Billingehus välkomnades hösten 2021 och ägs/drivs sedan 2022, nya Billingehus öppnade sommaren 2023, Earth Spa våren 2024 följt av Elevation Spa och kongresshall – https://lotushotelgroup.se/om-oss/var-historia/. Därför formuleringen 2021–2022.", 5),
  d(15, "Människorna", "Akt 3", S13, "Ingen logotyp bygger en destination. Lyft föreningarna och BFEF, medarbetarna, företagen, politiken, kommunen, hotellet, Turistrådet och invånarna. Någon behöver hålla ihop helheten – men ingen äger framgången."),
  d(16, "Västsverige", "Akt 3", S14, "Vänd dig till rummet. Samarbetet med Turistrådet har gett oss kompetens, räckvidd, kampanjer, pressresor och marknadsbearbetning som vi inte hade byggt lika starkt själva."),
  d(17, "Evenemangen", "Akt 3", S15, "Evenemang är mer än tillfälliga gästnätter. De sätter en deadline, stresstestar infrastrukturen och ger en berättelse som når långt utanför kommunen. Enduro-VM 2025 var motorcykelenduro i maj. SM-veckan 2027 är nästa nivå."),
  d(18, "Billingetrollet", "Akt 3", S15B, "Berätta om Billingetrollet – vår symbol. Billingetrollets skog, skogsteatern och skogsbion. Premiärsäsongen 2025 sågs av cirka 2 500 besökare. En destination behöver också en berättelse som barn minns."),
  d(19, "Hållbarheten", "Akt 4", S16, "Hållbarhet blir konkret när platsen fungerar för boende och besökare, fylls när den annars är tom och skapar robustare verksamheter. Billingen och Billingehus är Skaraborgs kandidat till Årets Hållbarhetskliv 2026."),
  d(20, "Resultatet", "Akt 4", S17, "Klicka fram åren. 245 885 gästnätter 2025 är Skövdes starkaste notering hittills – siffran är preliminär. Var noga: Billingen är en av flera motorer, inte ensam förklaring.", 4),
  d(21, "Värdet", "Akt 4", S18, "Gästnätter är bara ett mått. Turismkonsumtionen ökade från 1,351 miljarder 2023 till 1,484 miljarder 2025. Men värdet syns också i stolthet, folkhälsa, föreningsliv och attraktivitet."),
  d(22, "Nästa kapacitetsfråga", "Akt 4", S19, "Var öppna med nästa problem. Efterfrågan börjar ibland växa ur hotellkapaciteten, särskilt tisdag–torsdag. Destinationsutveckling blir aldrig färdig – varje framgång skapar nästa flaskhals."),
  d(23, "Lärdomen", "Avslutning", S20, "Klicka fram sista meningen och avsluta muntligt här: Det började som en gåva. Det fortsatte genom hundratals beslut av många andra. Vårt ansvar är att lämna över något ännu bättre.", 2),
  d(24, "Håll kontakt", "Outro", S21, "Passiv utrobild som får ligga kvar under frågestunden: Facebook och Instagram @Billingenskovde, QR-kod till billingen.se."),
];
