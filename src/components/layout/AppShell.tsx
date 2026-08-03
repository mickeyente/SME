'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Score' },
  { href: '/policies', label: 'Policies' },
  { href: '/integrations', label: 'Integrations' },
  { href: '/security-logs', label: 'Alerts' },
  { href: '/ciso', label: 'Virtual CISO' },
]

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-paper selection:bg-amber/30">
      <header className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-6">
          <a href="/dashboard" className="flex items-center gap-3" aria-label="NDPA Copilot dashboard">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-sm font-bold text-paper shadow-lg shadow-ink/15">N</span>
            <span className="font-display text-title text-ink">NDPA <span className="text-ink-soft">Copilot</span></span>
          </a>
          <nav className="hidden items-center gap-1 rounded-xl bg-ink/[0.04] p-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3 py-2 text-small font-medium transition-colors ${pathname === item.href ? 'bg-paper-raised text-ink shadow-sm' : 'text-ink-soft hover:text-ink'}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a href="/assessment" className="hidden rounded-control bg-ink px-4 py-2 text-small font-medium text-paper transition hover:bg-ink-soft sm:block">Run assessment</a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 pb-24 lg:px-6 lg:py-10">{children}</main>

      {/* mobile bottom nav — this is a low-bandwidth, mobile-first product */}
      <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-around border-t border-line bg-paper-raised/95 px-1 py-2 backdrop-blur md:hidden">
        {NAV_ITEMS.map((item) => (
          <a key={item.href} href={item.href} className={`rounded-lg px-2 py-1.5 text-caption font-medium ${pathname === item.href ? 'bg-ink text-paper' : 'text-ink-soft'}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  )
}
