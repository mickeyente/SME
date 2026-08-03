import { ScoreSeal } from '@/components/ui/ScoreSeal'
import { Card, CardTitle } from '@/components/ui/Card'

// Placeholder — Phase 1 backend will replace this with a real API call
const MOCK_RESULT = {
  score: 62,
  breakdown: [
    { label: 'Data storage & encryption', score: 40 },
    { label: 'Account access control', score: 70 },
    { label: 'Third-party data sharing', score: 80 },
  ],
}

export default function DashboardPage() {
  return (
    <div className="space-y-7">
      <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="mb-2 text-small font-semibold uppercase tracking-[0.16em] text-safe">Security workspace</p>
          <h1 className="font-display text-display-lg text-ink">Good morning, Chidi.</h1>
          <p className="mt-2 max-w-xl text-body text-ink-soft">Here is a clear view of the data-protection work that matters most this week.</p>
        </div>
        <p className="rounded-full bg-paper-raised px-3 py-1.5 text-caption text-ink-soft ring-1 ring-line">Last assessed <span className="font-data text-ink">02 Aug 2026</span></p>
      </section>

      <section className="surface-grid overflow-hidden rounded-card bg-ink p-6 text-paper shadow-xl shadow-ink/10 sm:p-8">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-small font-medium text-paper/65">Your NDPA readiness score</p>
            <h2 className="mt-2 font-display text-display text-paper">You&apos;re on the right track.</h2>
            <p className="mt-3 max-w-md text-body text-paper/70">Resolve the two priority actions below to move from moderately compliant to confident.</p>
            <a href="/assessment" className="mt-6 inline-flex rounded-control bg-amber px-4 py-2.5 text-small font-semibold text-ink transition hover:brightness-110">Continue assessment <span className="ml-2">→</span></a>
          </div>
          <div className="rounded-full bg-paper p-4 shadow-2xl shadow-black/25"><ScoreSeal score={MOCK_RESULT.score} /></div>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1.35fr_0.85fr]">
        <Card className="p-0 overflow-hidden">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <div><p className="text-caption font-semibold uppercase tracking-[0.14em] text-ink-soft">Priority actions</p><CardTitle className="mt-1">Fix these first</CardTitle></div>
            <span className="grid h-8 w-8 place-items-center rounded-full bg-risk/10 text-sm font-bold text-risk">2</span>
          </div>
          <div className="divide-y divide-ink/10">
            <div className="flex gap-4 px-5 py-4"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-risk/10 text-risk">!</span><div className="min-w-0"><p className="font-medium text-ink">Encrypt customer records at rest</p><p className="mt-1 text-small text-ink-soft">Your storage safeguards need documented encryption controls.</p></div><a href="/policies" className="ml-auto self-center text-small font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4">View</a></div>
            <div className="flex gap-4 px-5 py-4"><span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-caution/15 text-caution">!</span><div className="min-w-0"><p className="font-medium text-ink">Review vendor data agreements</p><p className="mt-1 text-small text-ink-soft">Two processors have no recorded data-processing agreement.</p></div><a href="/integrations" className="ml-auto self-center text-small font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4">Review</a></div>
          </div>
        </Card>

        <Card className="bg-paper-raised">
          <p className="text-caption font-semibold uppercase tracking-[0.14em] text-ink-soft">Score by control</p>
          <div className="mt-5 space-y-5">
            {MOCK_RESULT.breakdown.map((item) => <div key={item.label}><div className="mb-2 flex justify-between gap-3 text-small"><span className="text-ink">{item.label}</span><span className="font-data text-ink-soft">{item.score}%</span></div><div className="h-2 overflow-hidden rounded-full bg-ink/8"><div className={`h-full rounded-full ${item.score < 45 ? 'bg-risk' : item.score < 75 ? 'bg-amber' : 'bg-safe'}`} style={{ width: `${item.score}%` }} /></div></div>)}
          </div>
        </Card>
      </div>
    </div>
  )
}
