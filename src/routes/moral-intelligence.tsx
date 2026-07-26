import { createFileRoute } from "@tanstack/react-router";
import { Star, ShieldCheck, CircleCheck } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Bar, Chip, PageHeader, Donut, Quote, toneVar } from "@/components/atlas/ui";
import {
  ethicalCriteria, ethicalFramework, safeguards, riskMitigation, aiReasoning, moralAlternatives,
} from "@/lib/atlas-data";

export const Route = createFileRoute("/moral-intelligence")({
  head: () => ({
    meta: [
      { title: "Moral Intelligence — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Ethics before action. Evaluate proposed projects against dignity, ecology, fairness and future generations before deciding.",
      },
      { property: "og:title", content: "Moral Intelligence — Atlas Sanctum" },
      { property: "og:description", content: "We don't just ask CAN we? We ask SHOULD we?" },
    ],
  }),
  component: MoralIntelligence,
});

function MoralIntelligence() {
  return (
    <AppShell
      subtitle="Moral Intelligence"
      tagline="The measure of intelligence is not knowledge, but wisdom in action."
      searchPlaceholder="Search ethics cases, policies, frameworks..."
    >
      <PageHeader
        title="Should we build this factory?"
        subtitle="Kibera, Nairobi County · BuildWell Industries · $12.4M · 450 direct, 1,200 indirect jobs"
        actions={<Chip tone="life">Evaluation Completed · May 18, 2024</Chip>}
      />

      <div className="grid gap-3 xl:grid-cols-[240px_minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <Panel title="Ethical Framework">
            <ul className="space-y-2 text-xs text-foreground/85">
              {ethicalFramework.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <ShieldCheck className="size-3.5" style={{ color: toneVar("knowledge") }} />
                  {f}
                </li>
              ))}
            </ul>
          </Panel>
          <Quote text="The measure of intelligence is not knowledge, but wisdom in action." author="Atlas Sanctum Ethos" />
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Ethical Criteria Evaluation">
            <ul className="divide-y divide-border/60">
              {ethicalCriteria.map((c) => (
                <li key={c.name} className="grid gap-1 py-2.5 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:items-center sm:gap-4">
                  <div>
                    <p className="text-xs font-medium">{c.name}</p>
                    <p className="text-[0.62rem] text-muted-foreground">{c.note}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3"
                        style={{
                          color: i < Math.round(c.score) ? toneVar(c.tone) : "var(--secondary)",
                          fill: i < Math.round(c.score) ? toneVar(c.tone) : "transparent",
                        }}
                      />
                    ))}
                    <span className="ml-2 text-xs">{c.score}/5</span>
                  </div>
                  <Chip tone={c.tone}>{c.impact}</Chip>
                </li>
              ))}
            </ul>
          </Panel>

          <div className="grid gap-3 md:grid-cols-[200px_minmax(0,1fr)]">
            <Panel title="Overall Ethical Score">
              <div className="grid place-items-center">
                <Donut size={130} center="75" caption="Good" segments={[{ value: 75, tone: "life" }, { value: 25, tone: "secondary" }]} />
              </div>
            </Panel>
            <Panel title="Overall Recommendation">
              <p className="font-display text-xl font-semibold" style={{ color: toneVar("life") }}>
                Proceed with Safeguards
              </p>
              <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                The project has strong potential for good impact with manageable risks if key safeguards are
                implemented.
              </p>
              <button
                className="mt-3 rounded-lg px-3.5 py-2 text-xs font-medium"
                style={{
                  color: toneVar("knowledge"),
                  backgroundColor: "color-mix(in oklab, var(--knowledge) 16%, transparent)",
                }}
              >
                View Safeguards
              </button>
            </Panel>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            <Panel title="Key Safeguards Required">
              <ul className="space-y-2 text-xs text-foreground/85">
                {safeguards.map((s) => (
                  <li key={s} className="flex gap-2">
                    <CircleCheck className="mt-0.5 size-3.5 shrink-0" style={{ color: toneVar("life") }} />
                    {s}
                  </li>
                ))}
              </ul>
            </Panel>
            <Panel title="Risk Mitigation" subtitle="Overall risk level: Medium">
              <ul className="space-y-2">
                {riskMitigation.map((r) => (
                  <li key={r.name} className="flex items-center justify-between text-xs">
                    <span>{r.name}</span>
                    <Chip tone={r.level === "Medium" ? "warning" : "life"}>{r.level}</Chip>
                  </li>
                ))}
              </ul>
            </Panel>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="AI Reasoning & Explanation">
            <ul className="space-y-3">
              {aiReasoning.map((r) => (
                <li key={r.title} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="text-xs font-medium" style={{ color: toneVar(r.tone) }}>
                    {r.title}
                  </p>
                  <p className="mt-1 text-[0.68rem] leading-relaxed text-foreground/75">{r.note}</p>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Community Perspective" subtitle="Based on 1,248 community feedback responses">
            <div className="flex items-center gap-4">
              <Donut
                size={110}
                center="78%"
                segments={[
                  { value: 78, tone: "life" },
                  { value: 14, tone: "warning" },
                  { value: 8, tone: "critical" },
                ]}
              />
              <ul className="flex-1 space-y-1.5 text-[0.7rem]">
                {[
                  ["Support with Conditions", "78%", "life"],
                  ["Neutral / Need More Info", "14%", "warning"],
                  ["Do Not Support", "8%", "critical"],
                ].map(([l, v, t]) => (
                  <li key={l} className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-sm" style={{ backgroundColor: toneVar(t) }} />
                      {l}
                    </span>
                    <span className="text-muted-foreground">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="Alternative Options Considered">
            <ul className="space-y-2">
              {moralAlternatives.map((o) => (
                <li key={o.name} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="text-xs font-medium">{o.name}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{o.detail}</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="font-display text-sm font-semibold">{o.score}/100</span>
                    <Chip tone={o.impact === "High Impact" ? "life" : "warning"}>{o.impact}</Chip>
                  </div>
                  <Bar className="mt-2" value={o.score} tone={o.impact === "High Impact" ? "life" : "warning"} />
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
