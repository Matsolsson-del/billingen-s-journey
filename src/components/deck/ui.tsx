import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { img } from "@/lib/images";

/** Scales a fixed 1920x1080 slide to fit its container. */
export function ScaledSlide({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / 1920, height / 1080));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("relative h-full w-full overflow-hidden", className)}>
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: 1920,
          height: 1080,
          marginLeft: -960,
          marginTop: -540,
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* --------------------------------------------------------------- */

export function Slide({
  children,
  tone = "green",
  className,
}: {
  children: ReactNode;
  tone?: "green" | "deep" | "sand" | "ink" | "bare";
  className?: string;
}) {
  const tones: Record<string, string> = {
    green: "bg-bill-green text-white",
    deep: "bg-bill-green-deep text-white",
    sand: "bg-bill-sand text-bill-ink",
    ink: "bg-bill-ink text-white",
    bare: "bg-black text-white",
  };
  return <div className={cn("slide-content", tones[tone], className)}>{children}</div>;
}

export function Photo({
  src,
  alt,
  className,
  position = "center",
  zoom = true,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  zoom?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn("absolute inset-0 h-full w-full object-cover", zoom && "anim-zoom", className)}
      style={{ objectPosition: position }}
    />
  );
}

export function Scrim({ className }: { className?: string }) {
  return <div className={cn("absolute inset-0", className)} />;
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src={img.logo}
      alt="Billingen Skövde"
      className={cn("absolute top-16 right-20 h-24 w-auto opacity-95", className)}
    />
  );
}

export function ActTag({ act, name }: { act: string; name: string }) {
  return (
    <div className="anim-fade absolute top-20 left-20 flex items-center gap-5">
      <span className="slide-chrome text-bill-teal">{act}</span>
      <span className="h-px w-16 bg-current opacity-25" />
      <span className="slide-chrome opacity-60">{name}</span>
    </div>
  );
}

export function Rule({ className }: { className?: string }) {
  return <div className={cn("anim-wipe d1 h-[3px] w-28 bg-bill-teal", className)} />;
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "slide-caption inline-flex items-center rounded-full border border-current/25 px-6 py-2 opacity-80",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Caption under a photo tile. */
export function Tile({
  src,
  alt,
  label,
  position = "center",
  className,
}: {
  src: string;
  alt: string;
  label?: string;
  position?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="relative flex-1 overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
      </div>
      {label ? <p className="slide-subtitle mt-6">{label}</p> : null}
    </div>
  );
}

