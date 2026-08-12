import { createFileRoute } from "@tanstack/react-router";
import { Deck } from "@/components/deck/Deck";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Billingen – en destinations utvecklingsresa | Next Skövde" },
      {
        name: "description",
        content:
          "Keynote om hur Billingen i Skövde gick från friluftsområde till outdoordestination året runt – 280 mkr, 245 885 gästnätter och sex lärdomar.",
      },
      { property: "og:title", content: "Billingen – en destinations utvecklingsresa" },
      {
        property: "og:description",
        content:
          "Mats Olsson, VD Next Skövde: hur en plats blev en destination. Drömmen, valet, investeringarna, systemet och resultaten.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Deck,
});
