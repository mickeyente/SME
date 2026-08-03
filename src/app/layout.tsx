import '@/styles/globals.css'
import { AppShell } from '@/components/layout/AppShell'

export const metadata = {
  title: 'NDPA Copilot | Security clarity for SMEs',
  description: 'A practical NDPA risk workspace for Nigerian SMEs.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
