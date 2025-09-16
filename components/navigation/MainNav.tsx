'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

export function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
                <MapPin className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-primary">LocalMarket</span>
            </Link>
          </div>

          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Suche nach Produkten oder Geschäften..."
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge
                variant="destructive"
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 text-xs"
              >
                3
              </Badge>
            </Button>

            <Button variant="ghost" size="sm">
              <User className="h-5 w-5 mr-2" />
              Anmelden
            </Button>
          </div>
        </div>

        <div className="flex items-center space-x-6 py-2 border-t">
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Startseite
            </Link>
            <Link
              href="/categories/lebensmittel"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Lebensmittel
            </Link>
            <Link
              href="/categories/handwerk"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Handwerk
            </Link>
            <Link
              href="/categories/dienstleistungen"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Dienstleistungen
            </Link>
            <Link
              href="/stores"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Alle Shops
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}