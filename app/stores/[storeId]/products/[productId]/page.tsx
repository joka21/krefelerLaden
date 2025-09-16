import Image from 'next/image'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ShoppingCart, Package, Weight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { mockStores, mockProducts } from '@/lib/dummy-data'
import { formatPrice } from '@/lib/utils'

interface ProductPageProps {
  params: {
    storeId: string
    productId: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = mockProducts.find(p => p.id === params.productId && p.storeId === params.storeId)
  const store = mockStores.find(s => s.id === params.storeId)

  if (!product || !store) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href={`/stores/${params.storeId}`}>
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zu {store.name}
          </Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg border">
            <Image
              src={product.images[0] || 'https://via.placeholder.com/600'}
              alt={product.name}
              fill
              className="object-cover"
            />
            {!product.isAvailable && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Nicht verfügbar
                </Badge>
              </div>
            )}
          </div>

          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(1, 5).map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded border">
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Link href={`/stores/${store.id}`} className="text-primary hover:underline">
                {store.name}
              </Link>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{store.rating}</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
                {product.comparePrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                )}
              </div>
              {product.comparePrice && (
                <Badge variant="destructive">
                  {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% sparen
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Beschreibung</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {product.weight && (
                <div className="flex items-center space-x-2">
                  <Weight className="h-4 w-4 text-muted-foreground" />
                  <span>
                    {product.weight >= 1000
                      ? `${product.weight / 1000}kg`
                      : `${product.weight}g`
                    }
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span>{product.stock} auf Lager</span>
              </div>
            </div>

            {product.dimensions && (
              <div>
                <h3 className="font-semibold mb-2">Abmessungen</h3>
                <p className="text-sm text-gray-600">
                  {product.dimensions.width} × {product.dimensions.height} × {product.dimensions.depth} cm
                </p>
              </div>
            )}
          </div>

          <div className="border-t pt-6">
            <div className="flex items-center space-x-4">
              <Button
                size="lg"
                disabled={!product.isAvailable || product.stock === 0}
                className="flex-1"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.isAvailable && product.stock > 0
                  ? 'In den Warenkorb'
                  : 'Nicht verfügbar'
                }
              </Button>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Kategorie</p>
                <p className="font-medium">{product.category}</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <h3 className="font-semibold mb-2">Abholung</h3>
              <p className="text-sm text-muted-foreground">
                Dieses Produkt kann direkt bei {store.name} abgeholt werden.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                {store.address.street}, {store.address.postalCode} {store.address.city}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}