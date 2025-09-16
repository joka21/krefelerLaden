import { Search, TrendingUp, Leaf, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { StoreGrid } from '@/components/stores/StoreGrid'
import { mockStores } from '@/lib/dummy-data'

export default function HomePage() {
  const featuredStores = mockStores.slice(0, 8)

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center py-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Entdecke lokale Geschäfte
        </h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Unterstütze deine lokale Gemeinschaft und finde die besten Anbieter in deiner Nähe.
          Von frischen Lebensmitteln bis hin zu handwerklichen Dienstleistungen.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Nach Geschäften oder Produkten suchen..."
              className="pl-12 h-12 text-lg"
            />
            <Button className="absolute right-1 top-1 bottom-1 px-6">
              Suchen
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Leaf className="h-4 w-4 text-green-600" />
            <span>Nachhaltig & Regional</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <Clock className="h-4 w-4 text-blue-600" />
            <span>Schnelle Abholung</span>
          </div>
          <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
            <TrendingUp className="h-4 w-4 text-purple-600" />
            <span>Lokale Wirtschaft</span>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Beliebte Geschäfte</h2>
            <p className="text-gray-600">Entdecke die am besten bewerteten lokalen Anbieter</p>
          </div>
          <Button variant="outline">Alle Geschäfte anzeigen</Button>
        </div>

        <StoreGrid stores={featuredStores} />
      </section>

      <section className="bg-gray-50 rounded-2xl p-8 mb-12">
        <h2 className="text-2xl font-bold text-center mb-8">Kategorien entdecken</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Lebensmittel', icon: '🥬', count: '12 Geschäfte' },
            { name: 'Bäcker', icon: '🥖', count: '8 Geschäfte' },
            { name: 'Handwerk', icon: '🔨', count: '15 Geschäfte' },
            { name: 'Dienstleistungen', icon: '⚙️', count: '20 Geschäfte' },
            { name: 'Mode', icon: '👕', count: '6 Geschäfte' },
            { name: 'Gesundheit', icon: '💊', count: '9 Geschäfte' },
            { name: 'Sport', icon: '⚽', count: '7 Geschäfte' },
            { name: 'Sonstiges', icon: '📦', count: '25 Geschäfte' }
          ].map((category) => (
            <div
              key={category.name}
              className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-semibold mb-1">{category.name}</h3>
              <p className="text-sm text-gray-500">{category.count}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Warum LocalMarket?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold mb-2">Nachhaltig einkaufen</h3>
            <p className="text-gray-600 text-sm">
              Reduziere deinen CO2-Fußabdruck durch lokale Einkäufe und kurze Transportwege.
            </p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold mb-2">Lokale Wirtschaft stärken</h3>
            <p className="text-gray-600 text-sm">
              Unterstütze kleine Unternehmen und schaffe Arbeitsplätze in deiner Region.
            </p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold mb-2">Persönlicher Service</h3>
            <p className="text-gray-600 text-sm">
              Profitiere von persönlicher Beratung und individuellem Service vor Ort.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}