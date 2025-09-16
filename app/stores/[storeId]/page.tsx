import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Star, MapPin, Clock, Phone, Mail, Globe, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ProductGrid } from '@/components/products/ProductGrid'
import { mockStores, mockProducts } from '@/lib/dummy-data'
import { formatRating } from '@/lib/utils'

interface StorePageProps {
  params: {
    storeId: string
  }
}

export default function StorePage({ params }: StorePageProps) {
  const store = mockStores.find(s => s.id === params.storeId)
  const storeProducts = mockProducts.filter(p => p.storeId === params.storeId)

  if (!store) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Zurück zur Übersicht
          </Button>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
        {store.banner && (
          <div className="relative h-48 md:h-64">
            <Image
              src={store.banner}
              alt={`${store.name} Banner`}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 md:w-32 md:h-32">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  className="rounded-lg object-cover border-2 border-white shadow-md"
                />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{store.name}</h1>
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{formatRating(store.rating)}</span>
                      <span className="text-muted-foreground">({store.reviewCount} Bewertungen)</span>
                    </div>
                    <Badge>{store.category}</Badge>
                  </div>
                  <p className="text-gray-600 mb-4">{store.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Adresse
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p>{store.address.street}</p>
                    <p>{store.address.postalCode} {store.address.city}</p>
                    <p>{store.address.country}</p>
                  </div>

                  <h3 className="font-semibold mb-3 mt-6 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Kontakt
                  </h3>
                  <div className="text-sm text-gray-600 space-y-2">
                    {store.contact.phone && (
                      <p className="flex items-center">
                        <Phone className="h-3 w-3 mr-2" />
                        {store.contact.phone}
                      </p>
                    )}
                    {store.contact.email && (
                      <p className="flex items-center">
                        <Mail className="h-3 w-3 mr-2" />
                        {store.contact.email}
                      </p>
                    )}
                    {store.contact.website && (
                      <p className="flex items-center">
                        <Globe className="h-3 w-3 mr-2" />
                        <a href={store.contact.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                          Website besuchen
                        </a>
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Öffnungszeiten
                  </h3>
                  <div className="text-sm space-y-1">
                    {Object.entries(store.openingHours).map(([day, hours]) => {
                      const dayNames = {
                        monday: 'Montag',
                        tuesday: 'Dienstag',
                        wednesday: 'Mittwoch',
                        thursday: 'Donnerstag',
                        friday: 'Freitag',
                        saturday: 'Samstag',
                        sunday: 'Sonntag'
                      }

                      return (
                        <div key={day} className="flex justify-between">
                          <span>{dayNames[day as keyof typeof dayNames]}:</span>
                          <span className="font-medium">
                            {hours ? `${hours.open} - ${hours.close}` : 'Geschlossen'}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={storeProducts}
        title={`Produkte von ${store.name}`}
      />

      {storeProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Dieser Shop hat noch keine Produkte online gestellt.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Kontaktiere den Shop direkt für weitere Informationen über das Sortiment.
          </p>
        </div>
      )}
    </div>
  )
}