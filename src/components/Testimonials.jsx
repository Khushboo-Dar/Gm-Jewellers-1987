import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sally O",
      location: "UK",
      date: "Apr 2025 • Couples",
      title: "Simply the best",
      content: "We always enjoy our time in GM Jewellers and always it seems buy more than we had planned. This year was our third visit and we were again not disappointed with our beautiful jewellery Mohammed has made for us. The quality and workmanship put into our...",
      fullContent: "We always enjoy our time in GM Jewellers and always it seems buy more than we had planned. This year was our third visit and we were again not disappointed with our beautiful jewellery Mohammed has made for us. The quality and workmanship put into our pieces is exceptional. We'll definitely be returning on our next trip to Goa.",
      rating: 5,
      writtenDate: "Written 14 April 2025"
    },
    {
      id: 2,
      name: "the4getful",
      location: "Yorkshire, UK",
      date: "Mar 2025 • Couples",
      title: "Good honest jeweller",
      content: "Used before did a fantastic job repairing chains and making rings smaller. Went again and had more things repaired. Good as new really happy. Price really good give him a try",
      fullContent: "Used before did a fantastic job repairing chains and making rings smaller. Went again and had more things repaired. Good as new really happy. Price really good give him a try. Mohammed provides excellent service with fair pricing and quality workmanship.",
      rating: 5,
      writtenDate: "Written 4 March 2025"
    },
    {
      id: 3,
      name: "Julia R",
      location: "Liverpool, UK",
      date: "Jan 2025 • Family",
      title: "Stunning Jewellery and Exceptional Service!",
      content: "A trip to Goa wouldn't be complete without visiting GM Jewellers! Mohammed crafted the most beautiful diamond stud earrings and a stunning diamond cross for me, and I couldn't be happier. My auntie also purchased a gorgeous diamond set...",
      fullContent: "A trip to Goa wouldn't be complete without visiting GM Jewellers! Mohammed crafted the most beautiful diamond stud earrings and a stunning diamond cross for me, and I couldn't be happier. My auntie also purchased a gorgeous diamond set, and we are both absolutely delighted with our pieces. We returned to the UK thrilled with our purchases and have received so many lovely compliments! Thank you Mohammed :)",
      rating: 5,
      writtenDate: "Written 11 February 2025"
    },
    {
      id: 4,
      name: "Sally B",
      location: "London, UK",
      date: "Apr 2025 • Couples",
      title: "Amazing!",
      content: "Amazing as always! Mohammed is just the best jeweller! We come back on every visit and buy different pieces! Mohammed listens and can help with designs and then the final product is always a wow moment!",
      fullContent: "Amazing as always! Mohammed is just the best jeweller! We come back on every visit and buy different pieces! Mohammed listens and can help with designs and then the final product is always a wow moment! It's such a special place and we will certainly be back again and again! Thank you",
      rating: 5,
      writtenDate: "Written 5 May 2025"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [pause, testimonials.length]);

  return (
    <section id="testimonials" className="py-16 bg-primary text-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-primary font-bold mb-4">Client Testimonials</h2>
          <p className="font-secondary max-w-2xl mx-auto text-secondary/80">
            Hear what our valued customers say about their experience
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          <div className="flex overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full sm:w-1/3 flex-shrink-0 px-4">
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 h-full">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-secondary/30'}`}
                        />
                      ))}
                    </div>
                    <h3 className="font-primary font-bold text-lg mb-1">{testimonial.title}</h3>
                    <p className="text-secondary/80 font-secondary text-sm mb-2">{testimonial.date}</p>
                    <p className="text-secondary font-secondary mb-4">"{testimonial.content}"</p>
                    <div className="mt-auto">
                      <p className="font-primary font-semibold">{testimonial.name}</p>
                      <p className="text-secondary/70 font-secondary text-sm">{testimonial.location}</p>
                      <p className="text-secondary/60 font-secondary text-xs mt-2">{testimonial.writtenDate}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - 2 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-secondary' : 'bg-secondary/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;