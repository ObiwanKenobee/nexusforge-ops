import { createFileRoute } from "@tanstack/react-router";
import { Activity, Layers, Radio, TriangleAlert, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, toneVar } from "@/components/atlas/ui";
import {
  globalMetrics, realityIndicators, dynamicLayers, aiInsights, liveFeeds,
  realtimeAlerts, regions, timeline,
} from "@/lib/atlas-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Living Reality — Atlas Sanctum Civilization OS" },
      {
        name: "description",
        content:
          "Observe the real-time pulse of communities and ecosystems: wellbeing, climate, food security and live signals across every region.",
      },
      { property: "og:title", content: "Living Reality — Atlas Sanctum Civilization OS" },
      {
        property: "og:description",
        content: "Real-time planetary dashboard of wellbeing, ecology, and community signals.",
      },
    ],
  }),
  component: LivingReality,
});

function LivingReality() {
  return (
    <AppShell
      subtitle="Living Reality Dashboard"
      tagline="Behind every data point is a person with a name, a story, and a dream."
    >
      <PageHeader
        title="Living Reality"
        subtitle="Observe. Understand. Act. Regenerate."
        actions={<Chip tone="life">128 sensors streaming</Chip>}
      />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
        {globalMetrics.map((m) => (
          <div key={m.label} className="panel px-3.5 py-3">
            <p className="truncate text-[0.7rem] text-muted-foreground">{m.label}</p>
            <p className="mt-1 font-display text-xl leading-none font-semibold">
              {m.value}
              <span className="ml-1 text-xs font-normal text-muted-foreground">{m.unit}</span>
            </p>
            <p
              className="mt-1.5 flex items-center gap-1 text-[0.68rem]"
              style={{ color: toneVar(m.trend === "up" ? "life" : "critical") }}
            >
              {m.trend === "up" ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
              {m.delta}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[280px_minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <Panel title="Dynamic Layers" subtitle="18 / 24 active" bodyClassName="p-2">
            <ul className="max-h-[380px] space-y-0.5 overflow-y-auto pr-1">
              {dynamicLayers.map((l, i) => (
                <li
                  key={l}
                  className="flex items-center justify-between rounded-md px-2.5 py-2 text-sm hover:bg-secondary/60"
                >
                  <span className="flex items-center gap-2">
                    <Layers className="size-3.5" style={{ color: toneVar(i % 2 ? "social" : "life") }} />
                    {l}
                  </span>
                  <span
                    className="size-1.5 rounded-full"
                    style={{ backgroundColor: i < 18 ? toneVar("life") : "var(--secondary)" }}
                  />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel index={1} title="Living Reality" subtitle="Real-time pulse of communities and ecosystems">
            <ul className="space-y-3">
              {realityIndicators.map((i) => (
                <li key={i.label}>
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-foreground/85">{i.label}</span>
                    <span style={{ color: toneVar(i.tone) }}>{i.value}%</span>
                  </div>
                  <Bar value={i.value} tone={i.tone} />
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel
            title="Planetary View"
            subtitle="Reality → Understanding → Action → Impact"
            action={<Chip tone="social">3D · Live</Chip>}
            bodyClassName="p-0"
          >
            <div className="relative grid h-[420px] place-items-center grid-field">
              <div
                className="absolute size-[300px] rounded-full sm:size-[360px]"
                style={{
                  background:
                    "radial-gradient(circle at 34% 30%, color-mix(in oklab, var(--life) 55%, transparent), color-mix(in oklab, var(--infra) 45%, transparent) 45%, var(--background) 78%)",
                  boxShadow: "0 0 120px -20px color-mix(in oklab, var(--social) 60%, transparent)",
                }}
              />
              <div
                className="absolute size-[300px] animate-[spin_60s_linear_infinite] rounded-full border sm:size-[360px]"
                style={{ borderColor: "color-mix(in oklab, var(--life) 30%, transparent)" }}
              />
              <div className="relative z-10 text-center">
                <p className="label-caps">Global Wellbeing Index</p>
                <p className="font-display text-6xl font-bold text-glow" style={{ color: toneVar("life") }}>
                  72
                </p>
                <p className="mt-1 text-xs text-muted-foreground">Composite of 9 civilization indicators</p>
              </div>
              <div className="absolute bottom-3 left-3 panel px-3 py-2">
                <div
                  className="h-2 w-32 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, var(--life), var(--economy), var(--critical))",
                  }}
                />
                <div className="mt-1 flex justify-between text-[0.6rem] text-muted-foreground">
                  <span>LOW</span>
                  <span>HIGH</span>
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="Global Timeline" subtitle="Past 7 days" bodyClassName="p-4">
            <div className="flex h-40 items-end gap-2">
              {timeline.map((t) => (
                <div key={t.day} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-32 w-full items-end justify-center gap-1">
                    {(["wellbeing", "economy", "environment"] as const).map((k, idx) => (
                      <div
                        key={k}
                        className="w-1/4 rounded-t-sm"
                        style={{
                          height: `${t[k]}%`,
                          backgroundColor: toneVar(["life", "economy", "nature"][idx]),
                          opacity: 0.85,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-[0.6rem] text-muted-foreground">{t.day}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Regional Overview" subtitle="Click a region to explore">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {regions.map((r) => (
                <div key={r.name} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <div
                    className="mb-2 h-14 rounded-md"
                    style={{
                      background:
                        "linear-gradient(140deg, color-mix(in oklab, var(--life) 45%, transparent), color-mix(in oklab, var(--economy) 40%, transparent))",
                    }}
                  />
                  <p className="text-xs font-medium">{r.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">
                    Wellbeing <span style={{ color: toneVar("life") }}>{r.wellbeing}</span> {r.delta}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="AI Insights" subtitle="12 new insights today">
            <ul className="space-y-2.5">
              {aiInsights.map((i) => (
                <li key={i.text} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <div className="flex gap-2">
                    <Activity className="mt-0.5 size-3.5 shrink-0" style={{ color: toneVar(i.tone) }} />
                    <div>
                      <p className="text-xs leading-relaxed">{i.text}</p>
                      <p className="mt-1.5 text-[0.62rem] text-muted-foreground">{i.meta}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Live Data Feeds" subtitle="128 active sensors">
            <div className="grid grid-cols-2 gap-2">
              {liveFeeds.map((f) => (
                <div key={f.label} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <Radio className="mb-1.5 size-3.5" style={{ color: toneVar("social") }} />
                  <p className="text-xs">{f.label}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{f.value}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Real-time Alerts" subtitle="24 active alerts">
            <ul className="space-y-2">
              {realtimeAlerts.map((a) => (
                <li key={a.title} className="flex gap-2.5 rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <TriangleAlert className="mt-0.5 size-3.5 shrink-0" style={{ color: toneVar(a.tone) }} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs">
                      {a.title} <span style={{ color: toneVar(a.tone) }}>{a.level}</span>
                    </p>
                    <p className="truncate text-[0.62rem] text-muted-foreground">{a.place}</p>
                  </div>
                  <span className="text-[0.6rem] text-muted-foreground">{a.ago}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
