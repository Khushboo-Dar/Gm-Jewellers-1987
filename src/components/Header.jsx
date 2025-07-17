import { useState, useRef, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';

export const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  const [showContact, setShowContact] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowContact(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText('+91 7006804470');
    setShowContact(false);
  };

  return (
    <header className="bg-secondary shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="relative">
              <div className="text-2xl font-primary font-bold text-primary flex items-baseline">
  GM JEWELLERS
  <sup className="ml-2 text-xs text-primary/70 font-secondary tracking-wider">SINCE 1987</sup>
</div>

            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-tertiary hover:text-primary transition-colors">Home</a>
            <a href="#collections" className="text-tertiary hover:text-primary transition-colors">Collections</a>
            <a href="#about" className="text-tertiary hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-tertiary hover:text-primary transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-6">
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setShowContact(!showContact)}
                className="p-1 group relative"
                aria-label="Contact options"
              >
                <Mail className="h-5 w-5 text-tertiary group-hover:text-primary transition-colors" />
                <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              </button>
              
              {showContact && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-xl rounded-lg z-50 overflow-hidden border border-primary/20">
                  <div className="p-1 bg-primary/10">
                    <p className="text-xs font-secondary text-primary text-center">Contact Options</p>
                  </div>
                  <div className="p-3">
                    <a 
                      href="mailto:gmjewellery3@gmail.com" 
                      className="flex items-center gap-3 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Mail className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-secondary font-medium text-tertiary">Email Us</p>
                        <p className="font-secondary text-xs text-tertiary/70">gmjewellery3@gmail.com</p>
                      </div>
                    </a>
                    <button 
                      onClick={copyPhoneNumber}
                      className="w-full flex items-center gap-3 p-2 hover:bg-primary/5 rounded-lg transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-secondary font-medium text-tertiary">Call Us</p>
                        <p className="font-secondary text-xs text-tertiary/70">+91 7006804470</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Home</a>
            <a href="#collections" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Collections</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;