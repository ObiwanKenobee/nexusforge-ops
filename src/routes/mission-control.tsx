import { createFileRoute } from "@tanstack/react-router";
import { CircleCheck, Circle, Sparkles } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Donut, Quote, toneVar } from "@/components/atlas/ui";
import { missions, activeMission, missionPortfolio, missionImpact } from "@/lib/atlas-data";

export const Route = createFileRoute("/mission-control")({
  head: () => ({
    meta: [
      { title: "Mission Control — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Plan, coordinate and execute community missions: 24 active missions with milestones, budgets, partners and impact prediction.",
      },
      { property: "og:title", content: "Mission Control — Atlas Sanctum" },
      { property: "og:description", content: "Real-time mission management hub for community-led change." },
    ],
  }),
  component: MissionControl,
});

function MissionControl() {
  const m = activeMission;
  return (
    <AppShell
      subtitle="Mission Control"
      tagline="Whatever the problem, community is the answer."
      searchPlaceholder="Search missions, partners, milestones..."
    >
      <PageHeader
        title="Mission Control Center"
        subtitle="Plan. Coordinate. Execute. Impact. — 24 active · 18 in progress · 3 at risk · 12 completed"
        actions={
          <button
            className="rounded-lg px-3.5 py-2 text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            + New Mission
          </button>
        }
      />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-7">
        {missions.map((x) => (
          <div key={x.id} className="panel px-3.5 py-3">
            <p className="truncate text-xs font-medium">{x.name}</p>
            <p className="mt-1 font-display text-base font-semibold" style={{ color: toneVar(x.tone) }}>
              {x.progress}%
            </p>
            <Bar className="mt-1.5" value={x.progress} tone={x.tone} />
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-3">
          <Panel title={m.title} action={<Chip tone="social">{m.status}</Chip>}>
            <p className="label-caps mb-1">Goal</p>
            <p className="text-xs leading-relaxed text-foreground/80">{m.goal}</p>

            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {m.stats.map((s) => (
                <div key={s.label} className="rounded-lg border border-border/70 bg-surface/60 p-2.5 text-center">
                  <p className="text-[0.62rem] text-muted-foreground">{s.label}</p>
                  <p className="font-display text-base font-semibold" style={{ color: toneVar("life") }}>
                    {s.value}
                  </p>
                  {s.note && <p className="text-[0.58rem] text-muted-foreground">{s.note}</p>}
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Milestones">
            <ul className="space-y-2.5">
              {m.milestones.map((ms) => (
                <li key={ms.name} className="grid grid-cols-[1fr_auto] gap-2 text-xs">
                  <span className="flex items-center gap-2">
                    {ms.progress === 100 ? (
                      <CircleCheck className="size-3.5" style={{ color: toneVar("life") }} />
                    ) : (
                      <Circle className="size-3.5 text-muted-foreground" />
                    )}
                    {ms.name}
                  </span>
                  <span className="text-muted-foreground">{ms.due}</span>
                  <div className="col-span-2 flex items-center gap-2">
                    <Bar
                      value={ms.progress}
                      tone={ms.progress === 100 ? "life" : ms.progress > 0 ? "warning" : "social"}
                    />
                    <span className="w-9 shrink-0 text-right text-[0.62rem] text-muted-foreground">{ms.progress}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Quote text="Whatever the problem, community is the answer." author="Atlas Sanctum Ethos" />
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Mission Timeline" subtitle="8 of 12 months completed">
            <div className="flex items-center gap-1">
              {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((mo, i) => (
                <div key={mo} className="flex-1 text-center">
                  <div
                    className="mb-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: i < 4 ? toneVar("life") : "var(--secondary)" }}
                  />
                  <span className="text-[0.6rem] text-muted-foreground">{mo}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Recent Activity">
            <ul className="space-y-2.5">
              {m.activity.map((a) => (
                <li key={a.text} className="flex items-start justify-between gap-3 text-xs">
                  <span className="text-foreground/85">{a.text}</span>
                  <span className="shrink-0 text-[0.62rem] text-muted-foreground">{a.ago}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Location" subtitle="Mathare River, Nairobi County, Kenya" bodyClassName="p-3">
            <div
              className="h-44 rounded-lg grid-field"
              style={{
                background:
                  "linear-gradient(120deg, color-mix(in oklab, var(--nature) 22%, transparent), color-mix(in oklab, var(--infra) 20%, transparent))",
              }}
            />
          </Panel>

          <Panel title="Financial Overview">
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                ["Total Budget", "$6.8M"],
                ["Spent", "$4.2M"],
                ["Remaining", "$2.6M"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="text-[0.62rem] text-muted-foreground">{l}</p>
                  <p className="font-display text-sm font-semibold">{v}</p>
                </div>
              ))}
            </div>
            <Bar className="mt-3" value={62} tone="life" />
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="AI Mission Assistant" subtitle="Intelligent recommendations for mission success">
            <ul className="space-y-2">
              {m.recommendations.map((r) => (
                <li key={r.text} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="flex gap-2 text-xs leading-relaxed">
                    <Sparkles className="mt-0.5 size-3.5 shrink-0" style={{ color: toneVar("knowledge") }} />
                    {r.text}
                  </p>
                  <span className="mt-2 inline-block">
                    <Chip tone={r.tag === "High Impact" ? "life" : "warning"}>{r.tag}</Chip>
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Impact Prediction">
            <p className="font-display text-lg font-semibold" style={{ color: toneVar("life") }}>
              High Impact · 82/100
            </p>
            <p className="mt-1 text-[0.68rem] text-muted-foreground">
              On track to create significant environmental and social impact.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                ["Environmental", 85, "nature"],
                ["Social", 80, "social"],
                ["Economic", 75, "economy"],
              ].map(([l, v, t]) => (
                <li key={l as string}>
                  <div className="mb-1 flex justify-between text-[0.68rem]">
                    <span>{l}</span>
                    <span className="text-muted-foreground">{v}%</span>
                  </div>
                  <Bar value={v as number} tone={t as string} />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Mission Portfolio Overview">
            <div className="flex items-center gap-4">
              <Donut size={110} center="36" segments={missionPortfolio.map((p) => ({ value: p.value, tone: p.tone }))} />
              <ul className="flex-1 space-y-1.5 text-[0.7rem]">
                {missionPortfolio.map((p) => (
                  <li key={p.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-sm" style={{ backgroundColor: toneVar(p.tone) }} />
                      {p.name}
                    </span>
                    <span className="text-muted-foreground">{p.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="Total Impact Across Missions">
            <div className="grid grid-cols-2 gap-2">
              {missionImpact.map((i) => (
                <div key={i.label} className="rounded-lg border border-border/70 bg-surface/60 p-2.5 text-center">
                  <p className="font-display text-base font-semibold" style={{ color: toneVar("life") }}>
                    {i.value}
                  </p>
                  <p className="text-[0.6rem] text-muted-foreground">{i.label}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
