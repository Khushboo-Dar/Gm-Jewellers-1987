import { Star } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-6">About GM Jewellers</h2>
            <p className="text-tertiary font-secondary mb-6">
              Visit us in Baga, just steps from Calangute and Candolim beaches. At GM Jewellers, we turn your dream designs into reality, at a fraction of European prices.

              We craft jewellery in 9ct, 18ct, and 22ct yellow or white gold, as well as 925 silver, using only the finest stones. All pieces come with a certificate of authenticity.
            </p>
            <p className="text-tertiary font-secondary mb-6">
              Our collection includes diamond rings, bracelets, pendants, chains, brooches, cufflinks, wedding bands, and engagement rings.

Bring your own design, choose from our catalogue, or collaborate with our expert designer GD. We also offer a wide range of loose diamonds and precious/semi-precious stones.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-tertiary font-secondary">Trusted by 1000+ families</span>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden"> {/* Removed all background and padding */}
            <img 
              src="/shop.jpg" 
              alt="GM Jewellers Store" 
              className="w-full h-auto object-cover aspect-square" /* Changed to aspect-square for perfect square */
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "/placeholder-shop.jpg";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About