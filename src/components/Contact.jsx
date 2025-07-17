import { MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-4">Visit Our Store</h2>
          <p className="text-tertiary font-secondary max-w-2xl mx-auto">
            Experience our jewellery collection in person. We're here to help you find the perfect piece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-secondary font-semibold text-tertiary mb-2">Location</h3>
            <p className="text-tertiary font-secondary">
              Baga Road Near Tibetan market<br />
              Main road CSM Baga, 403516 India
            </p>
          </div>

          <div className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-secondary font-semibold text-tertiary mb-2">Phone</h3>
            <p className="text-tertiary font-secondary">
              +91 70068 04470<br />
              +91 77410 30706
            </p>
          </div>

          <div className="text-center">
            <div className="bg-secondary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-lg font-secondary font-semibold text-tertiary mb-2">Email</h3>
            <p className="text-tertiary font-secondary">
              gmjewellery3@gmail.com<br />
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowMap(!showMap)}
            className="bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-secondary hover:text-primary hover:border hover:border-primary transition-colors duration-300 font-secondary"
          >
            {showMap ? 'Hide Map' : 'Get Directions'}
          </button>
        </div>

        {showMap && (
          <div className="mt-8 rounded-lg overflow-hidden shadow-lg border border-primary/20">
            <iframe
              src="https://www.tripadvisor.co.uk/Attraction_Review-g635747-d1742552-Reviews-GM_Jewellers-Baga_North_Goa_District_Goa.html#MAPVIEW"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="GM Jewellers Location"
              className="rounded-lg"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  )
}

export default Contact;