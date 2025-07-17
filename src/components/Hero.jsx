const Hero = () => {
  const handleScroll = () => {
    const section = document.getElementById("collections");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-primary font-bold text-primary mb-6">
            Exquisite Jewellery
            <span className="block text-3xl md:text-5xl text-tertiary mt-2">Crafted with Love</span>
          </h1>
          <p className="text-xl text-tertiary font-secondary mb-8 max-w-2xl mx-auto">
            Discover timeless elegance with our handcrafted jewellery collection. 
            From traditional designs to contemporary pieces, find the perfect jewellery for every occasion.
          </p>
          <div className="flex justify-center">
            <button
              onClick={handleScroll}
              className="bg-primary text-secondary px-8 py-3 rounded-lg hover:bg-secondary hover:text-primary hover:border hover:border-primary transition-colors duration-300"
            >
              View Collections
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
