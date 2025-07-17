import { Star } from 'lucide-react'

const Collections = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'rings', name: 'Rings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'earrings', name: 'Earrings' },
    { id: 'bracelets', name: 'Bracelets' }
  ]

  // Base products shown in "All Collections"
  const baseProducts = [
    { id: 1, name: 'Diamond Solitaire Ring', category: 'rings', image: '/diamond-ring.jpg' },
    { id: 2, name: 'Gold Pearl Necklace', category: 'necklaces', image: '/gold-pearl-necklace.jpg' },
    { id: 3, name: 'Emerald Drop Earrings', category: 'earrings', image: '/emerald-earring.jpg' },
    { id: 4, name: 'Tennis Bracelet', category: 'bracelets', image: '/diamond-bracelet.jpg' },
    { id: 5, name: 'Platinum Wedding Band', category: 'rings', image: '/platinum-wed-band.jpg' },
    { id: 6, name: 'Sapphire Pendant', category: 'necklaces', image: '/sapphire-pendant.jpg' }
  ]

  // Additional category-specific products
  const categoryProducts = {
    rings: [
      { id: 7, name: 'Vintage Diamond Ring', category: 'rings', image: '/ring1.jpeg' },
      { id: 8, name: 'Modern Gold Band', category: 'rings', image: '/ring2.jpeg' }
    ],
    earrings: [
      { id: 9, name: 'Emerald Earrings', category: 'earrings', image: '/earring1.jpeg' }
    ],
    bracelets: [
      { id: 10, name: 'Sapphire Tennis Bracelet', category: 'bracelets', image: '/sap-bracelet.jpeg' }
    ]
  }

  const filteredProducts = selectedCategory === 'all' 
    ? baseProducts 
    : [
        ...baseProducts.filter(product => product.category === selectedCategory),
        ...(categoryProducts[selectedCategory] || [])
      ]

  return (
    <section id="collections" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-4">Our Collections</h2>
          <p className="text-tertiary font-secondary max-w-2xl mx-auto">
            Each piece is carefully crafted with attention to detail and quality that has made GM Jewellers a trusted name in Goa.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 font-secondary ${
                selectedCategory === category.id
                  ? 'bg-primary text-secondary hover:bg-secondary hover:text-primary hover:border hover:border-primary'
                  : 'bg-secondary text-primary border border-primary hover:bg-primary hover:text-secondary'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder-jewelry.jpg';
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-primary font-semibold text-tertiary">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections