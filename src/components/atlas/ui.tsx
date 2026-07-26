import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type Tone =
  | "life" | "knowledge" | "economy" | "nature" | "infra" | "social" | "spirit" | "warning" | "critical";

export const toneVar = (tone: string = "life") => `var(--${tone})`;

export function Panel({
  title,
  subtitle,
  index,
  action,
  className,
  bodyClassName,
  children,
}: {
  title?: string;
  subtitle?: string;
  index?: number;
  action?: ReactNode;
  className?: string;
  bodyClassName?: string;
  children: ReactNode;
}) {
  return (
    <section className={cn("panel flex flex-col overflow-hidden", className)}>
      {(title || action) && (
        <header className="flex items-start justify-between gap-3 border-b border-border/70 px-4 py-3">
          <div className="flex items-start gap-2.5">
            {index !== undefined && (
              <span
                className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md text-[0.65rem] font-bold"
                style={{
                  color: toneVar("life"),
                  backgroundColor: "color-mix(in oklab, var(--life) 18%, transparent)",
                }}
              >
                {index}
              </span>
            )}
            <div>
              {title && <h2 className="panel-title">{title}</h2>}
              {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
            </div>
          </div>
          {action}
        </header>
      )}
      <div className={cn("flex-1 p-4", bodyClassName)}>{children}</div>
    </section>
  );
}

export function Bar({ value, tone = "life", className }: { value: number; tone?: string; className?: string }) {
  return (
    <div className={cn("h-1.5 w-full overflow-hidden rounded-full bg-secondary", className)}>
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{
          width: `${Math.min(100, Math.max(0, value))}%`,
          backgroundColor: toneVar(tone),
          boxShadow: `0 0 12px -2px ${toneVar(tone)}`,
        }}
      />
    </div>
  );
}

export function Chip({
  children,
  tone = "life",
  className,
}: {
  children: ReactNode;
  tone?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[0.68rem] font-medium",
        className,
      )}
      style={{
        color: toneVar(tone),
        backgroundColor: `color-mix(in oklab, ${toneVar(tone)} 14%, transparent)`,
        border: `1px solid color-mix(in oklab, ${toneVar(tone)} 28%, transparent)`,
      }}
    >
      {children}
    </span>
  );
}

export function StatTile({
  label,
  value,
  note,
  tone = "life",
  icon,
}: {
  label: string;
  value: string;
  note?: string;
  tone?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="panel flex items-center gap-3 px-3.5 py-3">
      {icon && (
        <span
          className="flex size-9 shrink-0 items-center justify-center rounded-lg"
          style={{
            color: toneVar(tone),
            backgroundColor: `color-mix(in oklab, ${toneVar(tone)} 14%, transparent)`,
          }}
        >
          {icon}
        </span>
      )}
      <div className="min-w-0">
        <p className="truncate text-[0.7rem] text-muted-foreground">{label}</p>
        <p className="font-display text-lg leading-tight font-semibold">
          {value}
          {note && (
            <span className="ml-1.5 text-[0.7rem] font-medium" style={{ color: toneVar(tone) }}>
              {note}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export function Dots({ filled, total = 6, tone = "life" }: { filled: number; total?: number; tone?: string }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="size-1.5 rounded-full"
          style={{
            backgroundColor: i < filled ? toneVar(tone) : "var(--secondary)",
            boxShadow: i < filled ? `0 0 8px -1px ${toneVar(tone)}` : undefined,
          }}
        />
      ))}
    </div>
  );
}

export function Donut({
  segments,
  center,
  caption,
  size = 160,
}: {
  segments: { value: number; tone: string; name?: string }[];
  center?: string;
  caption?: string;
  size?: number;
}) {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  let acc = 0;
  const stops = segments
    .map((s) => {
      const from = (acc / total) * 100;
      acc += s.value;
      const to = (acc / total) * 100;
      return `${toneVar(s.tone)} ${from}% ${to}%`;
    })
    .join(", ");

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative grid place-items-center rounded-full"
        style={{ width: size, height: size, background: `conic-gradient(${stops})` }}
      >
        <div
          className="grid place-items-center rounded-full bg-background"
          style={{ width: size * 0.62, height: size * 0.62 }}
        >
          <span className="font-display text-xl font-bold">{center}</span>
        </div>
      </div>
      {caption && <p className="text-xs text-muted-foreground">{caption}</p>}
    </div>
  );
}

export function Quote({ text, author }: { text: string; author: string }) {
  return (
    <div className="panel px-4 py-4">
      <p className="font-display text-3xl leading-none" style={{ color: toneVar("life") }}>
        &ldquo;
      </p>
      <p className="mt-1 text-sm leading-relaxed text-foreground/85">{text}</p>
      <p className="mt-3 text-xs text-muted-foreground">— {author}</p>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-2xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {actions}
    </div>
  );
}

export function NodeGraph({
  nodes,
  edges,
  height = 420,
}: {
  nodes: { id: string; label: string; count?: number; tone: string; x: number; y: number }[];
  edges: [string, string][];
  height?: number;
}) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className="relative w-full grid-field overflow-hidden rounded-lg" style={{ height }}>
      <svg className="absolute inset-0 size-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {edges.map(([a, b], i) => {
          const na = byId[a];
          const nb = byId[b];
          if (!na || !nb) return null;
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={toneVar(na.tone)}
              strokeWidth={0.18}
              strokeOpacity={0.5}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </svg>
      {nodes.map((n) => (
        <div
          key={n.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="relative max-w-[7.5rem] rounded-full border px-3 py-2 text-center text-[0.62rem] leading-tight font-medium backdrop-blur-sm"
            style={{
              color: toneVar(n.tone),
              borderColor: `color-mix(in oklab, ${toneVar(n.tone)} 45%, transparent)`,
              backgroundColor: `color-mix(in oklab, ${toneVar(n.tone)} 12%, var(--background))`,
              boxShadow: `0 0 22px -8px ${toneVar(n.tone)}`,
            }}
          >
            {n.label}
            {n.count !== undefined && (
              <span
                className="absolute -top-2 -right-2 grid size-4 place-items-center rounded-full text-[0.55rem] font-bold text-background"
                style={{ backgroundColor: toneVar(n.tone) }}
              >
                {n.count}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
