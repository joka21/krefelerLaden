import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MainNav } from '@/components/navigation/MainNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LocalMarket - Lokaler Multistore-Marktplatz',
  description: 'Entdecke lokale Geschäfte und Anbieter in deiner Nähe. Unterstütze deine lokale Gemeinschaft.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <MainNav />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="border-t bg-muted/50 py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="text-center text-sm text-muted-foreground">
              <p>&copy; 2024 LocalMarket. Alle Rechte vorbehalten.</p>
              <p className="mt-2">
                Unterstütze deine lokale Gemeinschaft - kaufe lokal, wirke global.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}