import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Package } from 'lucide-react'
import { Product } from '@/lib/types'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <Link href={`/stores/${product.storeId}/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <Image
            src={product.images[0] || 'https://via.placeholder.com/400'}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.comparePrice && (
            <div className="absolute top-2 left-2">
              <Badge variant="destructive">
                {Math.round(((product.comparePrice - product.price) / product.comparePrice) * 100)}% sparen
              </Badge>
            </div>
          )}
          {!product.isAvailable && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary">Nicht verfügbar</Badge>
            </div>
          )}
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/stores/${product.storeId}/products/${product.id}`}>
          <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-3">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold">{formatPrice(product.price)}</span>
              {product.comparePrice && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.comparePrice)}
                </span>
              )}
            </div>
            {product.weight && (
              <p className="text-xs text-muted-foreground">
                {product.weight >= 1000 ? `${product.weight / 1000}kg` : `${product.weight}g`}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
            <Package className="h-3 w-3" />
            <span>{product.stock} verfügbar</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Button
            size="sm"
            disabled={!product.isAvailable || product.stock === 0}
            className="ml-2"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Hinzufügen
          </Button>
        </div>
      </div>
    </div>
  )
}