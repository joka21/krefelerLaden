import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Plus, Search, Filter, Package, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { mockStores, mockProducts } from '@/lib/dummy-data'
import { formatPrice } from '@/lib/utils'
import Image from 'next/image'

interface ProductManagementProps {
  params: {
    storeId: string
  }
}

export default function ProductManagement({ params }: ProductManagementProps) {
  const store = mockStores.find(s => s.id === params.storeId)
  const storeProducts = mockProducts.filter(p => p.storeId === params.storeId)

  if (!store) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/admin/${params.storeId}`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zum Dashboard
          </Button>
        </Link>
      </div>

      <div className="mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Produktverwaltung</h1>
            <p className="text-muted-foreground">
              Verwalte die Produkte für {store.name}
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Neues Produkt
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow-sm mb-6">
        <div className="p-6 border-b">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Produkte durchsuchen..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        <div className="p-6">
          {storeProducts.length === 0 ? (
            <div className="text-center py-12">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Noch keine Produkte</h3>
              <p className="text-muted-foreground mb-6">
                Füge dein erstes Produkt hinzu, um mit dem Verkauf zu beginnen.
              </p>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Erstes Produkt erstellen
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {storeProducts.map((product) => (
                <div key={product.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={product.images[0] || 'https://via.placeholder.com/64'}
                      alt={product.name}
                      fill
                      className="rounded object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-1 mb-2">
                          {product.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="font-medium">{formatPrice(product.price)}</span>
                          <span className="text-muted-foreground">
                            {product.stock} auf Lager
                          </span>
                          <span className="text-muted-foreground">
                            Kategorie: {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex flex-col items-end space-y-2">
                      <Badge variant={product.isAvailable ? "default" : "secondary"}>
                        {product.isAvailable ? "Aktiv" : "Inaktiv"}
                      </Badge>
                      {product.stock < 5 && (
                        <Badge variant="destructive" className="text-xs">
                          Geringer Bestand
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {storeProducts.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {storeProducts.length}
            </div>
            <p className="text-muted-foreground">Gesamt Produkte</p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {storeProducts.filter(p => p.isAvailable).length}
            </div>
            <p className="text-muted-foreground">Aktive Produkte</p>
          </div>

          <div className="bg-white p-6 rounded-lg border shadow-sm text-center">
            <div className="text-3xl font-bold text-red-600 mb-2">
              {storeProducts.filter(p => p.stock < 5).length}
            </div>
            <p className="text-muted-foreground">Geringer Bestand</p>
          </div>
        </div>
      )}
    </div>
  )
}