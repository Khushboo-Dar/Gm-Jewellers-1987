import { Mail } from 'lucide-react'; // Changed from Phone to MessageCircle for WhatsApp

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-primary font-bold mb-4">GM JEWELLERS</h3>
            <p className="text-secondary/80 mb-6 font-secondary">
              Creating timeless jewellery pieces with exceptional craftsmanship since 1987.
              Your trusted jeweller in Goa.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/917006804470"
                className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                aria-label="Message us on WhatsApp"
              >
                <img
                  src="/whatsapp.png"
                  alt="WhatsApp"
                  className="w-5 h-5 invert opacity-80 hover:opacity-100 transition-all duration-300 object-contain"
                />
              </a>

              <a
                href="mailto:gmjewellery3@gmail.com"
                className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://www.tripadvisor.co.uk/Attraction_Review-g635747-d1742552-Reviews-GM_Jewellers-Baga_North_Goa_District_Goa.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary transition-colors"
                aria-label="View us on Tripadvisor"
              >
                <img
                  src="/tripadv.png"
                  alt="Tripadvisor"
                  className="w-5 h-5 invert opacity-80 hover:opacity-100 transition-all duration-300 object-contain"
                />
              </a>
              <a
                href="https://www.facebook.com/share/16hWiSCLhJ/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary hover:text-primary transition-colors"
                aria-label="Visit us on Facebook"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-primary font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-secondary">
              <li><a href="#home" className="text-secondary/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#collections" className="text-secondary/80 hover:text-secondary transition-colors">Collections</a></li>
              <li><a href="#about" className="text-secondary/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#contact" className="text-secondary/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-primary font-semibold mb-4">Store Hours</h4>
            <ul className="space-y-2 font-secondary text-secondary/80">
              <li>Monday - Saturday: 10:00 AM - 8:00 PM</li>
              <li>Sunday: 10:00 AM - 6:00 PM</li>
              <li>Public Holidays: Closed</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-tertiary mt-8 pt-8 text-center font-secondary text-secondary/80">
          <p>&copy; 1987 GM Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer