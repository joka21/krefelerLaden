import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Package, Users, TrendingUp, Euro, Settings, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockStores, mockProducts } from '@/lib/dummy-data'
import { formatPrice } from '@/lib/utils'

interface AdminDashboardProps {
  params: {
    storeId: string
  }
}

export default function AdminDashboard({ params }: AdminDashboardProps) {
  const store = mockStores.find(s => s.id === params.storeId)
  const storeProducts = mockProducts.filter(p => p.storeId === params.storeId)

  if (!store) {
    notFound()
  }

  const totalValue = storeProducts.reduce((sum, product) => sum + (product.price * product.stock), 0)
  const lowStockProducts = storeProducts.filter(p => p.stock < 5)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Shop Dashboard</h1>
            <p className="text-muted-foreground">Verwalte {store.name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <Link href={`/stores/${store.id}`}>
              <Button variant="outline">Shop ansehen</Button>
            </Link>
            <Button>
              <Settings className="h-4 w-4 mr-2" />
              Einstellungen
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded">
              <Package className="h-6 w-6 text-blue-600" />
            </div>
            <Badge variant="outline">{storeProducts.length}</Badge>
          </div>
          <h3 className="font-semibold mb-1">Produkte</h3>
          <p className="text-sm text-muted-foreground">
            {storeProducts.filter(p => p.isAvailable).length} verfügbar
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded">
              <Euro className="h-6 w-6 text-green-600" />
            </div>
            <Badge variant="outline">{formatPrice(totalValue)}</Badge>
          </div>
          <h3 className="font-semibold mb-1">Lagerwert</h3>
          <p className="text-sm text-muted-foreground">
            Geschätzter Gesamtwert
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <Badge variant="outline">{store.rating}</Badge>
          </div>
          <h3 className="font-semibold mb-1">Bewertung</h3>
          <p className="text-sm text-muted-foreground">
            {store.reviewCount} Bewertungen
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
            <Badge variant="outline">aktiv</Badge>
          </div>
          <h3 className="font-semibold mb-1">Status</h3>
          <p className="text-sm text-muted-foreground">
            {store.isActive ? 'Online' : 'Offline'}
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Aktuelle Produkte</h2>
              <Link href={`/admin/${store.id}/products`}>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Produkt hinzufügen
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-6">
            {storeProducts.length === 0 ? (
              <div className="text-center py-8">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Noch keine Produkte vorhanden
                </p>
                <Link href={`/admin/${store.id}/products`}>
                  <Button>Erstes Produkt hinzufügen</Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {storeProducts.slice(0, 5).map((product) => (
                  <div key={product.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(product.price)} • {product.stock} auf Lager
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={product.isAvailable ? "default" : "secondary"}>
                        {product.isAvailable ? "Aktiv" : "Inaktiv"}
                      </Badge>
                      {product.stock < 5 && (
                        <Badge variant="destructive">Wenig Lager</Badge>
                      )}
                    </div>
                  </div>
                ))}
                {storeProducts.length > 5 && (
                  <div className="text-center pt-4">
                    <Link href={`/admin/${store.id}/products`}>
                      <Button variant="outline">
                        Alle {storeProducts.length} Produkte anzeigen
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold">Warnungen & Hinweise</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {lowStockProducts.length > 0 && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h3 className="font-medium text-red-800 mb-2">Geringer Lagerbestand</h3>
                  <p className="text-sm text-red-600 mb-2">
                    {lowStockProducts.length} Produkte haben weniger als 5 Artikel auf Lager:
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    {lowStockProducts.slice(0, 3).map((product) => (
                      <li key={product.id}>
                        • {product.name} ({product.stock} verfügbar)
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-medium text-blue-800 mb-2">Shop-Optimierung</h3>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Füge Produktbilder hinzu für bessere Sichtbarkeit</li>
                  <li>• Aktualisiere deine Öffnungszeiten regelmäßig</li>
                  <li>• Beantworte Kundenbewertungen zeitnah</li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">Erfolg</h3>
                <p className="text-sm text-green-600">
                  Dein Shop hat eine ausgezeichnete Bewertung von {store.rating} Sternen!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}