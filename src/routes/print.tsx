import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { slides } from "@/slides";

export const Route = createFileRoute("/print")({
  head: () => ({
    meta: [
      { title: "Billingen – ladda ner presentation" },
      {
        name: "description",
        content:
          "Utskriftsvänlig version av Billingen-keynote för nedladdning som PDF.",
      },
      { property: "og:title", content: "Billingen – ladda ner presentation" },
      {
        property: "og:description",
        content: "Utskriftsvänlig version av Billingen-keynote för nedladdning som PDF.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrintDeck,
});

function PrintDeck() {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="print-deck bg-bill-ink">
      <div className="screen-only fixed top-0 left-0 z-50 p-8 text-white">
        <p className="slide-body">Förbereder utskrift… Välj “Spara som PDF” i dialogen.</p>
      </div>
      {slides.map((s, i) => {
        const C = s.Component;
        return (
          <div
            key={s.id}
            className={`print-slide ${i < slides.length - 1 ? "print-slide-break" : ""}`}
          >
            <C step={s.steps - 1} />
          </div>
        );
      })}
    </main>
  );
}
