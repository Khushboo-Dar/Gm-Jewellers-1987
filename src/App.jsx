import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Collections from './components/Collections'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className="min-h-screen bg-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Collections 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory} 
      />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App