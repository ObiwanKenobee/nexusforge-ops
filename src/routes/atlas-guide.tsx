import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Send } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Chip, PageHeader, Quote, toneVar } from "@/components/atlas/ui";
import { guideAnswer, guidePrompts, philosophy, pillars } from "@/lib/atlas-data";

export const Route = createFileRoute("/atlas-guide")({
  head: () => ({
    meta: [
      { title: "Atlas Guide — Your AI Partner for Wisdom & Action" },
      {
        name: "description",
        content:
          "Ask Atlas Guide anything about your community: root causes, funding gaps, high-impact interventions and recommended next steps.",
      },
      { property: "og:title", content: "Atlas Guide — Atlas Sanctum" },
      { property: "og:description", content: "Your AI partner for wisdom and action across the civilization OS." },
    ],
  }),
  component: AtlasGuide,
});

function AtlasGuide() {
  return (
    <AppShell
      subtitle="Atlas Guide"
      tagline="From data to understanding. From understanding to wise action."
      searchPlaceholder="Ask Atlas AI anything..."
    >
      <PageHeader title="Atlas Guide" subtitle="Your AI partner for wisdom & action." />

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="flex flex-col gap-3">
          <Panel title="Conversation" bodyClassName="p-4">
            <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm border border-border bg-surface-2 px-4 py-2.5 text-sm">
              {guideAnswer.question}
            </div>

            <div className="mt-4 flex gap-3">
              <span
                className="grid size-8 shrink-0 place-items-center rounded-full"
                style={{
                  color: toneVar("knowledge"),
                  backgroundColor: "color-mix(in oklab, var(--knowledge) 16%, transparent)",
                }}
              >
                <Sparkles className="size-4" />
              </span>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-surface/70 px-4 py-3">
                <p className="text-xs text-muted-foreground">Atlas Guide</p>
                <p className="mt-1 text-sm">{guideAnswer.intro}</p>
                <ol className="mt-2 space-y-1 text-sm text-foreground/85">
                  {guideAnswer.factors.map((f, i) => (
                    <li key={f}>
                      {i + 1}. {f}
                    </li>
                  ))}
                </ol>
                <p className="mt-3 text-xs text-muted-foreground">{guideAnswer.followUp}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <Chip tone="life">Explore interventions</Chip>
                  <Chip tone="social">Show related missions</Chip>
                  <Chip tone="knowledge">Open systems map</Chip>
                </div>
              </div>
            </div>

            <div className="relative mt-5">
              <input
                className="h-12 w-full rounded-xl border border-input bg-surface/70 pr-12 pl-4 text-sm outline-none placeholder:text-muted-foreground focus:border-ring/60"
                placeholder="Ask Atlas Guide about your community..."
                aria-label="Ask Atlas Guide"
              />
              <button
                className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center rounded-lg"
                style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
                aria-label="Send question"
              >
                <Send className="size-4" />
              </button>
            </div>
          </Panel>

          <Panel title="Suggested Questions">
            <ul className="grid gap-2 sm:grid-cols-2">
              {guidePrompts.map((p) => (
                <li
                  key={p}
                  className="cursor-pointer rounded-lg border border-border/70 bg-surface/60 p-3 text-xs hover:border-ring/50"
                >
                  {p}
                </li>
              ))}
            </ul>
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
          </Panel>

          <Panel title="Platform Foundations">
            <ul className="space-y-2">
              {pillars.map((p) => (
                <li key={p.name} className="rounded-lg border border-border/70 bg-surface/60 p-2.5">
                  <p className="text-xs font-medium">{p.name}</p>
                  <p className="text-[0.62rem] text-muted-foreground">{p.note}</p>
                </li>
              ))}
            </ul>
          </Panel>

          <Quote
            text="Technology is at its best when it increases people's agency, not their dependence."
            author="Atlas Sanctum Ethos"
          />
        </div>
      </div>
    </AppShell>
  );
}
