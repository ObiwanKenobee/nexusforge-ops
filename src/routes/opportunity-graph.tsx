import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Quote, NodeGraph, toneVar } from "@/components/atlas/ui";
import {
  graphHeadline, graphNodes, graphEdges, graphIntelligence, impactPathway, topOpportunities,
} from "@/lib/atlas-data";

export const Route = createFileRoute("/opportunity-graph")({
  head: () => ({
    meta: [
      { title: "Opportunity Graph — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Discover connections and unlock impact: 1,248 mapped opportunities linking assets, people, organizations and unmet needs.",
      },
      { property: "og:title", content: "Opportunity Graph — Atlas Sanctum" },
      { property: "og:description", content: "Everything is connected. Explore the network of assets, people and needs." },
    ],
  }),
  component: OpportunityGraph,
});

function OpportunityGraph() {
  return (
    <AppShell
      subtitle="Opportunity Graph"
      tagline="The greatest opportunities are found in the spaces between what exists and what could be."
      searchPlaceholder="Search opportunities, assets, people, places..."
    >
      <PageHeader title="Opportunity Graph" subtitle="Discover connections. Unlock impact. — Nairobi County · All sectors" />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {graphHeadline.map((h) => (
          <div key={h.label} className="panel px-3.5 py-3">
            <p className="truncate text-[0.7rem] text-muted-foreground">{h.label}</p>
            <p className="mt-1 font-display text-lg font-semibold">
              {h.value}
              {h.note && (
                <span className="ml-1.5 text-[0.68rem] font-normal" style={{ color: toneVar("life") }}>
                  {h.note}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-3 xl:grid-cols-[240px_minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-3">
          <Panel title="Graph Layers" bodyClassName="p-2">
            <ul className="space-y-0.5">
              {["Assets", "People", "Organizations", "Services", "Needs", "Programs", "Funding", "Policies", "Infrastructure"].map(
                (l) => (
                  <li key={l} className="flex items-center gap-2 rounded-md px-2.5 py-2 text-sm hover:bg-secondary/60">
                    <span
                      className="grid size-4 place-items-center rounded-sm text-[0.6rem] text-background"
                      style={{ backgroundColor: toneVar("life") }}
                    >
                      ✓
                    </span>
                    {l}
                  </li>
                ),
              )}
            </ul>
          </Panel>
          <Panel title="Legend">
            <ul className="space-y-1.5 text-[0.7rem]">
              {[
                ["Asset", "life"], ["People", "economy"], ["Organization", "social"],
                ["Service / Program", "nature"], ["Need / Outcome", "knowledge"],
                ["Policy / System", "infra"], ["Funding", "spirit"],
              ].map(([n, t]) => (
                <li key={n} className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: toneVar(t) }} />
                  {n}
                </li>
              ))}
            </ul>
          </Panel>
          <Quote
            text="The greatest opportunities are found in the spaces between what exists and what could be."
            author="Atlas Sanctum Ethos"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Panel
            title="Opportunity Network"
            subtitle="Everything is connected. Explore to discover impact."
            action={<Chip tone="social">Force Directed</Chip>}
            bodyClassName="p-3"
          >
            <NodeGraph nodes={graphNodes} edges={graphEdges} height={480} />
          </Panel>

          <Panel title="Impact Pathway" subtitle="Overall impact potential: Very High · 24,500 people impacted">
            <div className="flex flex-wrap items-stretch gap-2">
              {impactPathway.map((p, i) => (
                <div key={p.step} className="flex items-center gap-2">
                  <div
                    className="w-32 rounded-lg border p-2.5"
                    style={{
                      borderColor: `color-mix(in oklab, ${toneVar(p.tone)} 40%, transparent)`,
                      backgroundColor: `color-mix(in oklab, ${toneVar(p.tone)} 10%, transparent)`,
                    }}
                  >
                    <p className="text-[0.65rem] leading-tight">{p.step}</p>
                    <p className="mt-1 text-[0.6rem]" style={{ color: toneVar(p.tone) }}>
                      {p.note}
                    </p>
                  </div>
                  {i < impactPathway.length - 1 && <ArrowRight className="size-3.5 text-muted-foreground" />}
                </div>
              ))}
            </div>
            <Bar className="mt-4" value={88} tone="life" />
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Graph Intelligence" subtitle="AI-powered insights">
            <ul className="space-y-2">
              {graphIntelligence.map((g) => (
                <li key={g.label} className="flex items-start justify-between gap-3 rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <div>
                    <p className="text-xs">{g.label}</p>
                    <p className="text-[0.62rem] text-muted-foreground">{g.note}</p>
                  </div>
                  <span className="font-display text-sm font-semibold" style={{ color: toneVar("knowledge") }}>
                    {g.value}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Opportunity Spotlight" action={<Chip tone="life">High Impact</Chip>}>
            <h3 className="font-display text-sm font-semibold">
              Connect Women&apos;s Cooperatives to School Feeding Program
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-foreground/80">
              This connection can create 120 jobs, improve nutrition for 4,200 children, and generate $180K in annual
              economic activity.
            </p>
            <dl className="mt-3 space-y-2 text-[0.7rem]">
              {[
                ["Impact Score", "96/100", 96],
                ["Confidence", "92%", 92],
                ["Time to Impact", "3–6 months", 60],
              ].map(([label, value, v]) => (
                <div key={label as string}>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                  <Bar className="mt-1" value={v as number} tone="life" />
                </div>
              ))}
            </dl>
          </Panel>

          <Panel title="Top Opportunities">
            <ul className="space-y-2">
              {topOpportunities.map((o, i) => (
                <li key={o.name} className="flex items-center gap-2 text-xs">
                  <span className="text-muted-foreground">{i + 1}</span>
                  <span className="flex-1">{o.name}</span>
                  <Chip tone={o.impact > 85 ? "life" : "warning"}>{o.impact}</Chip>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Network Health">
            <div className="grid grid-cols-2 gap-3">
              {[
                ["Density", 72, "Healthy", "life"],
                ["Diversity", 68, "Good", "social"],
                ["Resilience", 75, "Healthy", "nature"],
                ["Efficiency", 83, "Excellent", "knowledge"],
              ].map(([n, v, s, t]) => (
                <div key={n as string} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="text-[0.68rem] text-muted-foreground">{n}</p>
                  <p className="font-display text-base font-semibold">{v}%</p>
                  <p className="text-[0.6rem]" style={{ color: toneVar(t as string) }}>
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
