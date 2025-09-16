import Image from 'next/image'
import Link from 'next/link'
import { Star, Clock, MapPin } from 'lucide-react'
import { Store } from '@/lib/types'
import { formatRating } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

interface StoreCardProps {
  store: Store
}

export function StoreCard({ store }: StoreCardProps) {
  const isOpen = checkIfOpen(store.openingHours)

  return (
    <Link href={`/stores/${store.id}`} className="group">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <Image
            src={store.image}
            alt={store.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge variant={isOpen ? "default" : "secondary"}>
              <Clock className="mr-1 h-3 w-3" />
              {isOpen ? "Geöffnet" : "Geschlossen"}
            </Badge>
          </div>
        </div>

        <div className="p-4">
          <div className="mb-2 flex items-start justify-between">
            <h3 className="font-semibold text-lg line-clamp-1">{store.name}</h3>
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{formatRating(store.rating)}</span>
              <span className="text-muted-foreground">({store.reviewCount})</span>
            </div>
          </div>

          <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
            {store.description}
          </p>

          <div className="flex items-center justify-between">
            <Badge variant="outline">{store.category}</Badge>
            <div className="flex items-center space-x-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3" />
              <span>{store.address.city}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

function checkIfOpen(openingHours: Store['openingHours']): boolean {
  const now = new Date()
  const currentDay = now.toLocaleDateString('de-DE', { weekday: 'long' }).toLowerCase()
  const currentTime = now.getHours() * 60 + now.getMinutes()

  const dayMapping: { [key: string]: string } = {
    'montag': 'monday',
    'dienstag': 'tuesday',
    'mittwoch': 'wednesday',
    'donnerstag': 'thursday',
    'freitag': 'friday',
    'samstag': 'saturday',
    'sonntag': 'sunday'
  }

  const englishDay = dayMapping[currentDay]
  const todayHours = openingHours[englishDay]

  if (!todayHours) return false

  const [openHour, openMinute] = todayHours.open.split(':').map(Number)
  const [closeHour, closeMinute] = todayHours.close.split(':').map(Number)

  const openTime = openHour * 60 + openMinute
  const closeTime = closeHour * 60 + closeMinute

  return currentTime >= openTime && currentTime <= closeTime
}