import { createFileRoute } from "@tanstack/react-router";
import { Heart, Sparkles, Star, Plus } from "lucide-react";
import { AppShell } from "@/components/atlas/AppShell";
import { Panel, Chip, PageHeader, Donut, toneVar } from "@/components/atlas/ui";
import { stories, storyStats, storyCategories, matchmaking } from "@/lib/atlas-data";

export const Route = createFileRoute("/human-stories")({
  head: () => ({
    meta: [
      { title: "Human Stories — Atlas Sanctum" },
      {
        name: "description",
        content:
          "Real people, real dreams, real impact. Explore 1,248 community stories with skills, needs, and AI-matched opportunities.",
      },
      { property: "og:title", content: "Human Stories — Atlas Sanctum" },
      { property: "og:description", content: "People behind the data: skills, needs, dreams and matched opportunities." },
    ],
  }),
  component: HumanStories,
});

function HumanStories() {
  return (
    <AppShell
      subtitle="Human Stories"
      tagline="Behind every data point is a person with a name, a story, and a dream."
      searchPlaceholder="Search people, skills, needs, dreams..."
    >
      <PageHeader
        title="Human Stories"
        subtitle="Real people. Real dreams. Real impact. — showing 1,248 stories"
        actions={
          <button
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium"
            style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}
          >
            <Plus className="size-4" /> Add Story
          </button>
        }
      />

      <div className="grid gap-3 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-3">
          {stories.map((s) => (
            <article key={s.id} className="panel flex flex-col overflow-hidden">
              <div
                className="relative h-40"
                style={{
                  background: `linear-gradient(150deg, color-mix(in oklab, ${toneVar(s.tone)} 40%, transparent), var(--surface-2))`,
                }}
              >
                <span className="absolute top-3 left-3">
                  <Chip tone={s.tone}>{s.badge}</Chip>
                </span>
                <Heart className="absolute top-3 right-3 size-4 text-muted-foreground" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="font-display text-lg font-semibold">
                    {s.name} <span className="text-xs font-normal text-muted-foreground">· {s.age}</span>
                  </h3>
                  <p className="text-[0.68rem] text-muted-foreground">{s.location}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex flex-wrap gap-1.5">
                  {s.role.split(" · ").map((r) => (
                    <Chip key={r} tone={s.tone}>
                      {r}
                    </Chip>
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <p className="label-caps mb-1.5">My Story</p>
                    <p className="text-xs leading-relaxed text-foreground/80">{s.story}</p>
                    <p className="label-caps mt-3 mb-1.5">Dream</p>
                    <p className="text-xs leading-relaxed text-foreground/80">{s.dream}</p>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <p className="label-caps mb-1">Skills</p>
                      <ul className="space-y-0.5 text-xs text-foreground/80">
                        {s.skills.map((x) => (
                          <li key={x}>· {x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label-caps mb-1">Needs</p>
                      <ul className="space-y-0.5 text-xs text-foreground/80">
                        {s.needs.map((x) => (
                          <li key={x}>· {x}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label-caps mb-1">Achievements</p>
                      <ul className="space-y-0.5 text-xs text-foreground/80">
                        {s.achievements.map((x) => (
                          <li key={x}>· {x}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-auto grid gap-2 border-t border-border/70 pt-3 sm:grid-cols-2">
                  <div>
                    <p className="label-caps mb-1">Connections</p>
                    <p className="text-xs text-muted-foreground">+{s.connections} people</p>
                  </div>
                  <div>
                    <p className="label-caps mb-1">Nearby Opportunities</p>
                    <ul className="space-y-0.5 text-xs text-foreground/80">
                      {s.opportunities.map((o) => (
                        <li key={o}>· {o}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className="flex items-center justify-center gap-2 rounded-lg border py-2.5 text-xs font-semibold tracking-wide uppercase"
                  style={{
                    color: toneVar("knowledge"),
                    borderColor: "color-mix(in oklab, var(--knowledge) 40%, transparent)",
                    backgroundColor: "color-mix(in oklab, var(--knowledge) 12%, transparent)",
                  }}
                >
                  <Sparkles className="size-3.5" /> AI Recommendations +{s.recommendations}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <Panel title="Stories Impact" subtitle="Real change. Real people.">
            <ul className="space-y-3">
              {storyStats.map((s, i) => (
                <li key={s.label} className="flex items-center gap-3">
                  <Star className="size-4" style={{ color: toneVar(["life", "social", "critical", "spirit"][i]) }} />
                  <div>
                    <p className="font-display text-lg leading-none font-semibold" style={{ color: toneVar("life") }}>
                      {s.value}
                    </p>
                    <p className="text-[0.68rem] text-muted-foreground">{s.label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Stories by Category">
            <div className="flex items-center gap-4">
              <Donut
                size={120}
                segments={storyCategories.map((c) => ({ value: c.value, tone: c.tone }))}
                center="6"
              />
              <ul className="flex-1 space-y-1.5">
                {storyCategories.map((c) => (
                  <li key={c.name} className="flex items-center justify-between text-[0.7rem]">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-sm" style={{ backgroundColor: toneVar(c.tone) }} />
                      {c.name}
                    </span>
                    <span className="text-muted-foreground">{c.value}%</span>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>

          <Panel title="AI Insights" subtitle="New insights from people's stories">
            <ul className="space-y-2 text-xs text-foreground/80">
              <li>Rising need for tools in mechanic community</li>
              <li>High potential in women entrepreneurs</li>
              <li>Education resources gap in Ward 17</li>
            </ul>
          </Panel>
        </div>
      </div>

      <Panel
        className="mt-3"
        title="AI Matchmaking & Recommendations"
        subtitle="Connecting dreams with opportunities and resources"
      >
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {matchmaking.map((m) => (
            <div key={m.kind} className="rounded-lg border border-border/70 bg-surface/60 p-3">
              <p className="text-xs font-medium" style={{ color: toneVar("knowledge") }}>
                {m.kind}
              </p>
              <p className="text-[0.68rem] text-muted-foreground">{m.person}</p>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs">{m.offer}</p>
                  <p className="text-[0.65rem] text-muted-foreground">{m.detail}</p>
                </div>
                <span
                  className="grid size-12 shrink-0 place-items-center rounded-full border text-xs font-semibold"
                  style={{
                    color: toneVar("life"),
                    borderColor: "color-mix(in oklab, var(--life) 45%, transparent)",
                  }}
                >
                  {m.match}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
