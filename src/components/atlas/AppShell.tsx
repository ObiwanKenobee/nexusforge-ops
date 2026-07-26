import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  Globe2, HeartHandshake, BarChart3, Share2, Target, Scale, Workflow, Users, Gauge,
  Sparkles, Search, Bell, HelpCircle, Menu, X, Hexagon,
} from "lucide-react";
import { modules } from "@/lib/atlas-data";
import { cn } from "@/lib/utils";

const icons: Record<string, typeof Globe2> = {
  Globe2, HeartHandshake, BarChart3, Share2, Target, Scale, Workflow, Users, Gauge, Sparkles,
};

function Brand({ subtitle }: { subtitle: string }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <span
        className="grid size-10 shrink-0 place-items-center rounded-xl"
        style={{
          color: "var(--life)",
          background: "color-mix(in oklab, var(--life) 12%, transparent)",
          boxShadow: "var(--glow-life)",
        }}
      >
        <Hexagon className="size-5" strokeWidth={1.5} />
      </span>
      <span className="min-w-0">
        <span className="block font-display text-sm font-bold tracking-[0.18em]">ATLAS SANCTUM</span>
        <span className="block truncate text-[0.65rem] tracking-[0.14em] text-muted-foreground uppercase">
          {subtitle}
        </span>
      </span>
    </Link>
  );
}

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-0.5">
      {modules.map((m) => {
        const Icon = icons[m.icon];
        return (
          <Link
            key={m.to}
            to={m.to}
            onClick={onNavigate}
            activeOptions={{ exact: m.to === "/" }}
            className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent data-[status=active]:bg-sidebar-accent data-[status=active]:text-sidebar-primary"
          >
            <Icon className="size-4 shrink-0 opacity-80 group-data-[status=active]:opacity-100" />
            <span className="truncate">{m.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({
  subtitle,
  tagline,
  searchPlaceholder = "Search location, indicator, or ask Atlas AI...",
  children,
}: {
  subtitle: string;
  tagline: string;
  searchPlaceholder?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <div className="flex items-center gap-3 px-3 py-3 lg:px-5">
          <button
            className="grid size-9 place-items-center rounded-lg border border-border lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
          <div className="hidden w-64 shrink-0 lg:block">
            <Brand subtitle={subtitle} />
          </div>
          <div className="lg:hidden">
            <Brand subtitle={subtitle} />
          </div>

          <div className="relative ml-auto hidden max-w-xl flex-1 md:block">
            <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              className="h-10 w-full rounded-lg border border-input bg-surface/70 pr-14 pl-9 text-sm outline-none placeholder:text-muted-foreground focus:border-ring/60"
              placeholder={searchPlaceholder}
              aria-label="Search Atlas Sanctum"
            />
            <kbd className="absolute top-1/2 right-3 -translate-y-1/2 text-[0.65rem] text-muted-foreground">
              ⌘K
            </kbd>
          </div>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <span
              className="hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs sm:flex"
              style={{
                color: "var(--life)",
                borderColor: "color-mix(in oklab, var(--life) 35%, transparent)",
                backgroundColor: "color-mix(in oklab, var(--life) 10%, transparent)",
              }}
            >
              <span className="size-1.5 animate-pulse rounded-full" style={{ backgroundColor: "var(--life)" }} />
              Real-time LIVE
            </span>
            <button className="relative grid size-9 place-items-center rounded-lg border border-border" aria-label="Notifications">
              <Bell className="size-4" />
              <span
                className="absolute -top-1 -right-1 grid size-4 place-items-center rounded-full text-[0.6rem] font-bold text-background"
                style={{ backgroundColor: "var(--critical)" }}
              >
                7
              </span>
            </button>
            <button className="hidden size-9 place-items-center rounded-lg border border-border sm:grid" aria-label="Help">
              <HelpCircle className="size-4" />
            </button>
            <div className="flex items-center gap-2 rounded-lg border border-border py-1 pr-3 pl-1">
              <span
                className="grid size-7 place-items-center rounded-md text-[0.65rem] font-bold"
                style={{ backgroundColor: "color-mix(in oklab, var(--knowledge) 25%, transparent)" }}
              >
                EO
              </span>
              <span className="hidden leading-tight sm:block">
                <span className="block text-xs font-medium">Eugene Ochako</span>
                <span className="block text-[0.62rem] text-muted-foreground">Mythic Engineer</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-50 w-72 shrink-0 overflow-y-auto border-r border-sidebar-border bg-sidebar px-3 py-4 transition-transform lg:sticky lg:top-[65px] lg:z-0 lg:h-[calc(100vh-65px)] lg:translate-x-0",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="mb-4 flex items-center justify-between lg:hidden">
            <Brand subtitle={subtitle} />
            <button onClick={() => setOpen(false)} aria-label="Close navigation">
              <X className="size-4" />
            </button>
          </div>
          <p className="label-caps px-3 pb-2">Modules</p>
          <NavList onNavigate={() => setOpen(false)} />
          <div className="panel mt-5 px-3.5 py-3.5">
            <p className="text-sm leading-relaxed text-foreground/85">{tagline}</p>
            <p className="mt-2 text-[0.68rem] text-muted-foreground">— Atlas Sanctum Ethos</p>
          </div>
        </aside>

        {open && (
          <button
            className="fixed inset-0 z-40 bg-background/70 backdrop-blur-sm lg:hidden"
            aria-label="Close navigation overlay"
            onClick={() => setOpen(false)}
          />
        )}

        <main className="min-w-0 flex-1 px-3 py-4 lg:px-5">{children}</main>
      </div>
    </div>
  );
}
