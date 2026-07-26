import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Quote, toneVar } from "@/components/atlas/ui";
import {
  capitals, capitalHeadline, humanCapitalBreakdown, capitalRisk,
  capitalConnections, capitalEvolution,
} from "@/lib/atlas-data";

export const Route = createFileRoute("/capital-intelligence")({
  head: () => ({
    meta: [
      { title: "Capital Intelligence — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Beyond GDP: measure the seven forms of capital — human, knowledge, economic, natural, infrastructure, social and cultural wealth.",
      },
      { property: "og:title", content: "Capital Intelligence — Atlas Sanctum" },
      { property: "og:description", content: "The seven capitals of a community, scored, tracked and connected." },
    ],
  }),
  component: CapitalIntelligence,
});

function CapitalIntelligence() {
  return (
    <AppShell
      subtitle="Capital Intelligence"
      tagline="We don't inherit the Earth from our ancestors, we borrow it from our children."
      searchPlaceholder="Search capitals, indicators, assets..."
    >
      <PageHeader
        title="Capital Intelligence"
        subtitle="Beyond GDP. Measuring what truly creates flourishing. — Nairobi County · 2024"
      />

      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {capitalHeadline.map((h) => (
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

      <div className="grid gap-3 xl:grid-cols-[300px_minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-3">
          <Panel title="The Seven Capitals" bodyClassName="p-2">
            <ul className="space-y-1">
              {capitals.map((c) => (
                <li
                  key={c.id}
                  className="rounded-lg border px-3 py-2.5"
                  style={{
                    borderColor: `color-mix(in oklab, ${toneVar(c.tone)} 30%, transparent)`,
                    backgroundColor: `color-mix(in oklab, ${toneVar(c.tone)} 8%, transparent)`,
                  }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span>{c.name}</span>
                    <span style={{ color: toneVar(c.tone) }}>{c.score}/100</span>
                  </div>
                  <Bar className="mt-2" value={c.score} tone={c.tone} />
                </li>
              ))}
            </ul>
          </Panel>
          <Quote
            text="We don't inherit the Earth from our ancestors, we borrow it from our children."
            author="African Proverb"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Panel
            title="The Seven Capitals — Interconnected Wealth"
            subtitle="A holistic view of the true wealth of our civilization."
            action={<Chip tone="social">Radial View</Chip>}
          >
            <div className="relative mx-auto grid aspect-square w-full max-w-[460px] place-items-center">
              {capitals.map((c, i) => {
                const angle = (i / capitals.length) * Math.PI * 2 - Math.PI / 2;
                const r = 38;
                return (
                  <div
                    key={c.id}
                    className="absolute w-28 -translate-x-1/2 -translate-y-1/2 rounded-xl border p-2.5 text-center"
                    style={{
                      left: `${50 + Math.cos(angle) * r}%`,
                      top: `${50 + Math.sin(angle) * r}%`,
                      borderColor: `color-mix(in oklab, ${toneVar(c.tone)} 45%, transparent)`,
                      backgroundColor: `color-mix(in oklab, ${toneVar(c.tone)} 12%, var(--background))`,
                      boxShadow: `0 0 30px -12px ${toneVar(c.tone)}`,
                    }}
                  >
                    <p className="text-[0.62rem] leading-tight">{c.name}</p>
                    <p className="font-display text-lg font-bold" style={{ color: toneVar(c.tone) }}>
                      {c.score}
                    </p>
                  </div>
                );
              })}
              <div
                className="grid size-32 place-items-center rounded-full border text-center"
                style={{
                  borderColor: "color-mix(in oklab, var(--life) 35%, transparent)",
                  background: "var(--gradient-aurora)",
                }}
              >
                <div>
                  <p className="font-display text-2xl font-bold">75</p>
                  <p className="text-[0.6rem] text-muted-foreground">Overall</p>
                </div>
              </div>
            </div>
          </Panel>

          <Panel title="Capitals Time Evolution" subtitle="2020 → 2024">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {capitals.map((c) => {
                const key = c.id as keyof (typeof capitalEvolution)[number];
                const series = capitalEvolution.map((y) => Number(y[key]));
                return (
                  <div key={c.id} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                    <p className="text-[0.68rem]">
                      {c.name} <span style={{ color: toneVar(c.tone) }}>{c.score}</span>
                    </p>
                    <div className="mt-2 flex h-16 items-end gap-1">
                      {series.map((v, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-t-sm"
                          style={{ height: `${v}%`, backgroundColor: toneVar(c.tone), opacity: 0.5 + i * 0.12 }}
                        />
                      ))}
                    </div>
                    <div className="mt-1 flex justify-between text-[0.55rem] text-muted-foreground">
                      <span>2020</span>
                      <span>2024</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Panel>

          <Panel title="Capitals Summary Insights">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {capitals.map((c) => (
                <div key={c.id} className="rounded-lg border border-border/70 bg-surface/60 p-3">
                  <p className="mb-1 text-[0.68rem] font-medium" style={{ color: toneVar(c.tone) }}>
                    {c.name}
                  </p>
                  <p className="text-xs leading-relaxed text-foreground/80">{c.insight}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Human Capital Breakdown">
            <ul className="space-y-2.5">
              {humanCapitalBreakdown.map((h) => (
                <li key={h.label}>
                  <div className="mb-1 flex justify-between text-[0.7rem]">
                    <span>{h.label}</span>
                    <span className="text-muted-foreground">{h.value.toLocaleString()}</span>
                  </div>
                  <Bar value={h.pct} tone="life" />
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Risk & Growth Analysis">
            <table className="w-full text-xs">
              <thead>
                <tr className="label-caps">
                  <th className="pb-2 text-left font-semibold">Capital</th>
                  <th className="pb-2 text-left font-semibold">Risk</th>
                  <th className="pb-2 text-left font-semibold">Growth</th>
                </tr>
              </thead>
              <tbody>
                {capitalRisk.map((r) => (
                  <tr key={r.name} className="border-t border-border/60">
                    <td className="py-1.5">{r.name}</td>
                    <td style={{ color: toneVar(r.risk === "High" ? "critical" : r.risk === "Medium" ? "warning" : "life") }}>
                      {r.risk}
                    </td>
                    <td style={{ color: toneVar(r.growth === "High" ? "life" : "warning") }}>{r.growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Panel>

          <Panel title="Strongest Connections" subtitle="Capital synergy map">
            <ul className="space-y-2">
              {capitalConnections.map((c) => (
                <li key={c.pair}>
                  <div className="mb-1 flex justify-between text-[0.7rem]">
                    <span>{c.pair}</span>
                    <span style={{ color: toneVar("nature") }}>{c.strength.toFixed(2)}</span>
                  </div>
                  <Bar value={c.strength * 100} tone="nature" />
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
