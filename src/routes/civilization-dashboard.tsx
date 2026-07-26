import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, PageHeader, Donut, Quote, toneVar } from "@/components/atlas/ui";
import { flourishing, capitals, missionImpact, regions } from "@/lib/atlas-data";

export const Route = createFileRoute("/civilization-dashboard")({
  head: () => ({
    meta: [
      { title: "Civilization Dashboard — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Measuring what truly matters: overall flourishing at 84%, across human, ecological, economic and educational dimensions.",
      },
      { property: "og:title", content: "Civilization Dashboard — Atlas Sanctum" },
      { property: "og:description", content: "Overall flourishing index across every dimension of civilization." },
    ],
  }),
  component: CivilizationDashboard,
});

function CivilizationDashboard() {
  return (
    <AppShell
      subtitle="Civilization Dashboard"
      tagline="Measuring what truly matters — not just what is easy to count."
      searchPlaceholder="Search indicators, regions, indexes..."
    >
      <PageHeader title="Civilization Dashboard" subtitle="Measuring what truly matters." />

      <div className="grid gap-3 xl:grid-cols-[340px_minmax(0,1fr)_320px]">
        <Panel title="Overall Flourishing" bodyClassName="p-6">
          <Donut
            size={210}
            center="84%"
            caption="Overall Flourishing"
            segments={flourishing.map((f) => ({ value: f.value, tone: f.tone }))}
          />
        </Panel>

        <div className="flex flex-col gap-3">
          <Panel title="Flourishing Indicators">
            <ul className="space-y-3">
              {flourishing.map((f) => (
                <li key={f.label}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{f.label}</span>
                    <span style={{ color: toneVar(f.tone) }}>{f.value}%</span>
                  </div>
                  <Bar value={f.value} tone={f.tone} />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Capital Contribution">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {capitals.map((c) => (
                <div key={c.id} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <p className="text-[0.68rem]">{c.name}</p>
                  <p className="font-display text-lg font-semibold" style={{ color: toneVar(c.tone) }}>
                    {c.score}
                  </p>
                  <Bar className="mt-1.5" value={c.score} tone={c.tone} />
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Regional Flourishing">
            <ul className="grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
              {regions.map((r) => (
                <li key={r.name} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <div className="flex items-center justify-between text-xs">
                    <span>{r.name}</span>
                    <span style={{ color: toneVar("life") }}>{r.wellbeing}</span>
                  </div>
                  <Bar className="mt-2" value={r.wellbeing} tone="life" />
                  <p className="mt-1 text-[0.62rem] text-muted-foreground">{r.delta} vs last quarter</p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Cumulative Impact">
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

          <Panel title="What We Refuse to Measure Away">
            <ul className="space-y-2 text-xs text-foreground/80">
              <li>Dignity of work, not just employment rate</li>
              <li>Belonging, not just population density</li>
              <li>Regeneration, not just extraction volume</li>
              <li>Generational legacy, not just quarterly growth</li>
            </ul>
          </Panel>

          <Quote text="Measuring what truly matters — not just what is easy to count." author="Atlas Sanctum Ethos" />
        </div>
      </div>
    </AppShell>
  );
}
