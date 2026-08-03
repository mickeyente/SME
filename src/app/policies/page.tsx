import { Card, CardTitle } from '@/components/ui/Card'

const policies = [
  { name: 'Privacy policy', status: 'Ready', updated: '02 Aug 2026', tone: 'safe' },
  { name: 'Data retention policy', status: 'Review needed', updated: '18 Jul 2026', tone: 'caution' },
  { name: 'Incident response plan', status: 'Draft', updated: '—', tone: 'risk' },
]

export default function PoliciesPage() {
  return <div className="space-y-7"><section className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-small font-semibold uppercase tracking-[0.16em] text-safe">Governance</p><h1 className="mt-2 font-display text-display-lg">Policies, made practical.</h1><p className="mt-2 max-w-xl text-body text-ink-soft">Keep the documents your team needs to handle personal data responsibly.</p></div><button className="rounded-control bg-ink px-4 py-2.5 text-small font-semibold text-paper">Create policy</button></section><Card className="p-0 overflow-hidden"><div className="grid grid-cols-[1fr_auto] gap-4 border-b border-line px-5 py-4 text-caption font-semibold uppercase tracking-[0.12em] text-ink-soft sm:grid-cols-[1fr_160px_130px_100px]"><span>Document</span><span className="hidden sm:block">Last updated</span><span className="hidden sm:block">Status</span><span> </span></div>{policies.map((policy) => <div key={policy.name} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-ink/10 px-5 py-5 last:border-0 sm:grid-cols-[1fr_160px_130px_100px]"><div><CardTitle className="text-body">{policy.name}</CardTitle><p className="mt-1 text-small text-ink-soft">NDPA starter template</p></div><span className="hidden text-small text-ink-soft sm:block">{policy.updated}</span><span className={`hidden w-fit rounded-full px-2.5 py-1 text-caption font-medium sm:block ${policy.tone === 'safe' ? 'bg-safe/10 text-safe' : policy.tone === 'caution' ? 'bg-caution/15 text-caution' : 'bg-risk/10 text-risk'}`}>{policy.status}</span><button className="text-small font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4">Open</button></div>)}</Card></div>
}
