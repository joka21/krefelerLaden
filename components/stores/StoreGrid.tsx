import { Store } from '@/lib/types'
import { StoreCard } from './StoreCard'

interface StoreGridProps {
  stores: Store[]
  title?: string
}

export function StoreGrid({ stores, title }: StoreGridProps) {
  if (stores.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Keine Geschäfte gefunden.</p>
      </div>
    )
  }

  return (
    <div>
      {title && (
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>
    </div>
  )
}