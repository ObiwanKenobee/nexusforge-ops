import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Quote, toneVar } from "@/components/atlas/ui";
import { perspectives, philosophy, pillars } from "@/lib/atlas-data";

export const Route = createFileRoute("/collective-intelligence")({
  head: () => ({
    meta: [
      { title: "Collective Intelligence — Atlas Sanctum" },
      {
        name: "description",
        content:
          "One reality, many perspectives. See the same civilization data through citizen, leader, NGO, government and investor lenses.",
      },
      { property: "og:title", content: "Collective Intelligence — Atlas Sanctum" },
      { property: "og:description", content: "One reality. Many perspectives. Shared understanding." },
    ],
  }),
  component: CollectiveIntelligence,
});

function CollectiveIntelligence() {
  const [active, setActive] = useState(perspectives[0].id);
  const current = perspectives.find((p) => p.id === active)!;

  return (
    <AppShell
      subtitle="Collective Intelligence"
      tagline="One reality. Many perspectives. Shared understanding builds shared futures."
      searchPlaceholder="Search perspectives, roles, shared views..."
    >
      <PageHeader title="Collective Intelligence" subtitle="One reality. Many perspectives." />

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <Panel title="Perspective Lens" subtitle="Switch roles to see what each stakeholder sees">
            <div className="flex flex-wrap gap-2">
              {perspectives.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="rounded-lg border px-4 py-2.5 text-xs font-medium transition-colors"
                  style={{
                    color: active === p.id ? toneVar("life") : undefined,
                    borderColor:
                      active === p.id ? "color-mix(in oklab, var(--life) 45%, transparent)" : "var(--border)",
                    backgroundColor:
                      active === p.id ? "color-mix(in oklab, var(--life) 12%, transparent)" : "transparent",
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <p className="label-caps mb-2">{current.label} View</p>
              <ul className="grid gap-2 sm:grid-cols-3">
                {current.items.map((i) => (
                  <li key={i} className="rounded-lg border border-border/70 bg-surface/60 p-3 text-xs">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="Shared Signals" subtitle="Where perspectives converge and diverge">
            <ul className="space-y-3">
              {[
                ["Agreement on priorities", 82, "life"],
                ["Data trust across roles", 74, "social"],
                ["Duplicate program overlap", 23, "critical"],
                ["Cross-sector collaborations", 68, "knowledge"],
              ].map(([l, v, t]) => (
                <li key={l as string}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span>{l}</span>
                    <span style={{ color: toneVar(t as string) }}>{v}%</span>
                  </div>
                  <Bar value={v as number} tone={t as string} />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Civilization Pillars">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
              {pillars.map((p) => (
                <div key={p.name} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <p className="text-xs font-medium">{p.name}</p>
                  <p className="mt-1 text-[0.65rem] text-muted-foreground">{p.note}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="The Experience Philosophy">
            <ul className="space-y-2.5 text-xs text-foreground/85">
              {philosophy.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full" style={{ backgroundColor: toneVar("life") }} />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: toneVar("social") }}>
              We don&apos;t just build solutions. We build the capacity for communities to solve their own problems.
            </p>
          </Panel>

          <Panel title="Participation">
            <div className="grid grid-cols-2 gap-2">
              {[
                ["Active Citizens", "48,210"],
                ["Verified Leaders", "1,340"],
                ["Partner NGOs", "212"],
                ["Public Agencies", "36"],
              ].map(([l, v]) => (
                <div key={l} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="font-display text-base font-semibold" style={{ color: toneVar("life") }}>
                    {v}
                  </p>
                  <p className="text-[0.62rem] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              <Chip tone="knowledge">Consensus 84%</Chip>
              <Chip tone="social">Open Standards</Chip>
              <Chip tone="life">DAO Governance</Chip>
            </div>
          </Panel>

          <Quote text="One reality. Many perspectives." author="Atlas Sanctum Ethos" />
        </div>
      </div>
    </AppShell>
  );
}
