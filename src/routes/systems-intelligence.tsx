import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Quote, NodeGraph, toneVar } from "@/components/atlas/ui";
import {
  systemHeadline, systemNodes, systemEdges, forecastImpact, leveragePoints, feedbackLoops,
} from "@/lib/atlas-data";

export const Route = createFileRoute("/systems-intelligence")({
  head: () => ({
    meta: [
      { title: "Systems Intelligence — Atlas Sanctum" },
      {
        name: "description",
        content:
          "See the relationships and solve root causes: causal loops, leverage points and scenario simulation across social, economic and ecological systems.",
      },
      { property: "og:title", content: "Systems Intelligence — Atlas Sanctum" },
      { property: "og:description", content: "You can't fix what you don't understand. Map the whole system." },
    ],
  }),
  component: SystemsIntelligence,
});

function SystemsIntelligence() {
  return (
    <AppShell
      subtitle="Systems Intelligence"
      tagline="You can't fix what you don't understand. You can't understand what you can't see."
      searchPlaceholder="Search systems, indicators, relationships..."
    >
      <PageHeader title="Systems Intelligence" subtitle="See the relationships. Understand the system. — Nairobi County · 2024–2030" />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {systemHeadline.map((h) => (
          <div key={h.label} className="panel px-3.5 py-3">
            <p className="truncate text-[0.7rem] text-muted-foreground">{h.label}</p>
            <p className="mt-1 font-display text-lg font-semibold">{h.value}</p>
            <p className="text-[0.65rem]" style={{ color: toneVar("social") }}>
              {h.note}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[220px_minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <Panel title="System Map Legend">
            <ul className="space-y-1.5 text-[0.7rem]">
              {[
                ["Social System", "social"], ["Economic System", "economy"],
                ["Environmental System", "nature"], ["Governance System", "infra"],
              ].map(([n, t]) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: toneVar(t) }} />
                  {n}
                </li>
              ))}
            </ul>
            <p className="label-caps mt-4 mb-1.5">Link Strength</p>
            <div
              className="h-2 rounded-full"
              style={{ background: "linear-gradient(90deg, var(--social), var(--economy), var(--critical))" }}
            />
          </Panel>
          <Quote
            text="You can't fix what you don't understand. You can't understand what you can't see."
            author="Atlas Sanctum Ethos"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="System Map" subtitle="Causal influence and feedback across 15 subsystems" bodyClassName="p-3">
            <NodeGraph nodes={systemNodes} edges={systemEdges} height={520} />
          </Panel>

          <Panel title="Critical Feedback Loops">
            <div className="grid gap-3 md:grid-cols-3">
              {feedbackLoops.map((l) => (
                <div key={l.name} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <p className="text-xs font-medium" style={{ color: toneVar(l.tone) }}>
                    {l.name}
                  </p>
                  <p className="mt-1 text-[0.68rem] text-foreground/80">{l.chain}</p>
                  <p className="mt-1 text-[0.62rem] text-muted-foreground">{l.note}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Quick Scenarios">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {[
                ["Invest in Local Agriculture", 72, "life"],
                ["Expand Healthcare Access", 68, "critical"],
                ["Youth Employment Drive", 75, "knowledge"],
                ["Improve Governance", 69, "infra"],
              ].map(([n, v, t]) => (
                <div key={n as string} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <p className="text-xs">{n}</p>
                  <p className="mt-2 font-display text-lg font-semibold" style={{ color: toneVar(t as string) }}>
                    {v}/100
                  </p>
                  <Bar className="mt-1.5" value={v as number} tone={t as string} />
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="System Dynamics Simulator" subtitle="Scenario: Improve Education Funding">
            <ul className="space-y-2 text-xs">
              {[
                ["Increase education budget by", "20%"],
                ["Teacher training programs", "On"],
                ["School meals expansion", "On"],
                ["Duration", "5 Years (2024–2029)"],
              ].map(([l, v]) => (
                <li key={l} className="flex items-center justify-between rounded-lg border border-border/70 bg-surface/60 px-2.5 py-2">
                  <span className="text-foreground/85">{l}</span>
                  <span style={{ color: toneVar("knowledge") }}>{v}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-3 w-full rounded-lg py-2 text-xs font-semibold"
              style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
            >
              Run Simulation
            </button>
          </Panel>

          <Panel title="Forecast Impact (2030)">
            <table className="w-full text-[0.7rem]">
              <thead>
                <tr className="label-caps">
                  <th className="pb-2 text-left font-semibold">Indicator</th>
                  <th className="pb-2 text-right font-semibold">Base</th>
                  <th className="pb-2 text-right font-semibold">Scenario</th>
                  <th className="pb-2 text-right font-semibold">Δ</th>
                </tr>
              </thead>
              <tbody>
                {forecastImpact.map((f) => (
                  <tr key={f.indicator} className="border-t border-border/60">
                    <td className="py-1.5">{f.indicator}</td>
                    <td className="text-right text-muted-foreground">{f.baseline}%</td>
                    <td className="text-right">{f.scenario}%</td>
                    <td className="text-right" style={{ color: toneVar(f.change.startsWith("-") ? "life" : "life") }}>
                      {f.change}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <Panel title="Top Leverage Points">
            <ul className="space-y-2.5">
              {leveragePoints.map((l, i) => (
                <li key={l.name}>
                  <div className="mb-1 flex items-center justify-between text-[0.7rem]">
                    <span>
                      <span className="mr-2 text-muted-foreground">{i + 1}</span>
                      {l.name}
                    </span>
                    <Chip tone={l.impact === "High" ? "life" : "warning"}>{l.impact}</Chip>
                  </div>
                  <Bar value={l.weight} tone={l.impact === "High" ? "life" : "knowledge"} />
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
