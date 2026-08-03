'use client'

import { useState } from 'react'

const questions = [
  {
    title: 'Where do you store customer information?',
    detail: 'Include spreadsheets, cloud applications, computers and paper files.',
    options: ['Only in approved cloud tools', 'A mix of cloud tools and local files', 'I am not sure'],
  },
  {
    title: 'Who can access personal data?',
    detail: 'Think about staff, contractors and third-party providers.',
    options: ['Only people who need it for their role', 'Most of the team can access it', 'I have not reviewed access'],
  },
  {
    title: 'Do vendors process data for you?',
    detail: 'For example: payroll, email marketing, CRM or payment providers.',
    options: ['Yes, with written agreements', 'Yes, but agreements are incomplete', 'No or not sure'],
  },
]

export default function AssessmentPage() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [complete, setComplete] = useState(false)
  const question = questions[step]
  const choose = (option: string) => {
    const answers = [...selected, option]
    setSelected(answers)
    if (step === questions.length - 1) setComplete(true)
    else setStep(step + 1)
  }

  if (complete) {
    return <div className="mx-auto max-w-2xl py-10 text-center"><div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-safe/10 text-2xl text-safe">✓</div><p className="mt-6 text-small font-semibold uppercase tracking-[0.16em] text-safe">Assessment saved</p><h1 className="mt-2 font-display text-display-lg">Your answers are in.</h1><p className="mx-auto mt-3 max-w-md text-body text-ink-soft">We have updated the actions in your workspace. Start with the priority items to improve your readiness score.</p><a href="/dashboard" className="mt-7 inline-flex rounded-control bg-ink px-5 py-3 text-small font-semibold text-paper">View your dashboard →</a></div>
  }

  return (
    <div className="mx-auto max-w-2xl">
      <a href="/dashboard" className="text-small font-medium text-ink-soft hover:text-ink">← Back to workspace</a>
      <div className="mt-8"><div className="mb-3 flex items-center justify-between text-small"><span className="font-medium text-ink">Readiness check</span><span className="font-data text-ink-soft">{step + 1} / {questions.length}</span></div><div className="h-2 overflow-hidden rounded-full bg-ink/10"><div className="h-full rounded-full bg-amber transition-all duration-300" style={{ width: `${((step + 1) / questions.length) * 100}%` }} /></div></div>
      <section className="mt-8 rounded-card bg-paper-raised p-6 shadow-xl shadow-ink/5 ring-1 ring-line sm:p-8"><p className="text-caption font-semibold uppercase tracking-[0.15em] text-ink-soft">Question {step + 1}</p><h1 className="mt-3 font-display text-display text-ink">{question.title}</h1><p className="mt-3 text-body text-ink-soft">{question.detail}</p><div className="mt-7 space-y-3">{question.options.map((option) => <button key={option} onClick={() => choose(option)} className="flex w-full items-center justify-between rounded-control border border-ink/15 px-4 py-4 text-left text-body text-ink transition hover:border-ink hover:bg-ink/[0.03]"><span>{option}</span><span className="text-ink-soft">→</span></button>)}</div></section>
      <p className="mt-5 text-center text-caption text-ink-soft">Takes less than 5 minutes · You can revisit this anytime</p>
    </div>
  )
}
