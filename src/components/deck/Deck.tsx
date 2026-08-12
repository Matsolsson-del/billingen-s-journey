import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Grid3x3, Maximize2, StickyNote, X } from "lucide-react";
import { ScaledSlide } from "@/components/deck/ui";
import { slides } from "@/slides";

const at = (i: number) => slides[Math.max(0, Math.min(slides.length - 1, i))]!;
import { cn } from "@/lib/utils";

function useDeckState() {
  const [index, setIndex] = useState(() => {
    if (typeof window === "undefined") return 0;
    const n = Number(new URLSearchParams(window.location.search).get("slide"));
    return Number.isFinite(n) && n >= 1 && n <= slides.length ? n - 1 : 0;
  });
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(index + 1));
    window.history.replaceState(null, "", url.toString());
    document.title = `${index + 1}/${slides.length} — ${at(index).title} · Billingen`;
  }, [index]);

  const next = useCallback(() => {
    const s = at(index);
    if (step < s.steps - 1) setStep((v) => v + 1);
    else if (index < slides.length - 1) {
      setIndex(index + 1);
      setStep(0);
    }
  }, [index, step]);

  const prev = useCallback(() => {
    if (step > 0) setStep((v) => v - 1);
    else if (index > 0) {
      const i = index - 1;
      setIndex(i);
      setStep(at(i).steps - 1);
    }
  }, [index, step]);

  const go = useCallback((i: number) => {
    setIndex(i);
    setStep(0);
  }, []);

  return { index, step, next, prev, go };
}

export function Deck() {
  const { index, step, next, prev, go } = useDeckState();
  const [grid, setGrid] = useState(false);
  const [notes, setNotes] = useState(false);
  const [idle, setIdle] = useState(false);
  const slide = at(index);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key.toLowerCase() === "g") setGrid((v) => !v);
      else if (e.key.toLowerCase() === "n") setNotes((v) => !v);
      else if (e.key.toLowerCase() === "f") document.documentElement.requestFullscreen?.();
      else if (e.key === "Escape") setGrid(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const wake = () => {
      setIdle(false);
      clearTimeout(t);
      t = setTimeout(() => setIdle(true), 2600);
    };
    wake();
    window.addEventListener("mousemove", wake);
    return () => {
      window.removeEventListener("mousemove", wake);
      clearTimeout(t);
    };
  }, []);

  const Current = slide.Component;

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-bill-ink">
      <ScaledSlide>
        <div key={`${slide.id}`} className="h-full w-full">
          <Current step={step} />
        </div>
      </ScaledSlide>

      {/* progress */}
      <div className="absolute inset-x-0 top-0 z-20 h-[3px] bg-white/10">
        <div
          className="h-full bg-bill-amber transition-all duration-500"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>

      {/* chrome */}
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-8 py-6 transition-opacity duration-500",
          idle && !notes ? "opacity-0" : "opacity-100",
        )}
      >
        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            aria-label="Föregående"
            className="rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Nästa"
            className="rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <span className="ml-2 rounded-full bg-black/45 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/80 uppercase backdrop-blur">
            {index + 1} / {slides.length} · {slide.act}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setNotes((v) => !v)}
            aria-label="Talarmanus"
            className="rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <StickyNote className="h-5 w-5" />
          </button>
          <button
            onClick={() => setGrid(true)}
            aria-label="Översikt"
            className="rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <Grid3x3 className="h-5 w-5" />
          </button>
          <button
            onClick={() => document.documentElement.requestFullscreen?.()}
            aria-label="Helskärm"
            className="rounded-full bg-black/45 p-3 text-white backdrop-blur transition hover:bg-black/70"
          >
            <Maximize2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* notes */}
      {notes && (
        <div className="absolute right-0 bottom-24 left-0 z-30 mx-8 rounded-lg bg-black/80 px-8 py-6 text-white backdrop-blur">
          <p className="text-xs font-semibold tracking-[0.2em] text-bill-amber uppercase">
            Talarmanus · {slide.title}
          </p>
          <p className="mt-3 text-lg font-light opacity-90">{slide.notes}</p>
        </div>
      )}

      {/* grid overview */}
      {grid && (
        <div className="absolute inset-0 z-40 overflow-y-auto bg-bill-ink/97 p-10">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-semibold tracking-[0.2em] text-white/70 uppercase">
              Översikt · 23 slides
            </p>
            <button
              onClick={() => setGrid(false)}
              aria-label="Stäng"
              className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {slides.map((s, i) => {
              const C = s.Component;
              return (
                <button
                  key={s.id}
                  onClick={() => {
                    go(i);
                    setGrid(false);
                  }}
                  className={cn(
                    "group relative aspect-video overflow-hidden rounded-md ring-1 ring-white/15 transition hover:ring-bill-amber",
                    i === index && "ring-2 ring-bill-amber",
                  )}
                >
                  <div className="pointer-events-none absolute inset-0">
                    <ScaledSlide>
                      <C step={s.steps - 1} />
                    </ScaledSlide>
                  </div>
                  <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 text-[11px] font-semibold tracking-wider text-white/90 uppercase">
                    {s.id}. {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
