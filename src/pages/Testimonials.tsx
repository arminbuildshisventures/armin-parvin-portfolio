import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import cloudzyLogo from "@/assets/clients/cloudzy.svg";
import convertLogo from "@/assets/clients/convert.svg";
import hoothemesLogo from "@/assets/clients/hoothemes.png";
import lorenzocpaLogo from "@/assets/clients/lorenzocpa.png";
import nordicLogo from "@/assets/clients/nordic.svg";
import rahmaniniaLogo from "@/assets/clients/rahmaninia.png";
import roomvuLogo from "@/assets/clients/roomvu.svg";
import veronalabsLogo from "@/assets/clients/veronalabs.png";
import wpsmsLogo from "@/assets/clients/wpsms.png";
import watchthemlive from "@/assets/clients/watchthemlive.png";
const Testimonials = () => {
  const clientLogos = [{
    src: cloudzyLogo,
    alt: "Cloudzy"
  }, {
    src: convertLogo,
    alt: "Convert"
  }, {
    src: hoothemesLogo,
    alt: "Hoothemes"
  }, {
    src: lorenzocpaLogo,
    alt: "Lorenzo CPA"
  }, {
    src: nordicLogo,
    alt: "Nordic Defender"
  }, {
    src: rahmaniniaLogo,
    alt: "Mehdi Rahmaninia"
  }, {
    src: roomvuLogo,
    alt: "Roomvu"
  }, {
    src: veronalabsLogo,
    alt: "Verona Labs"
  }, {
    src: wpsmsLogo,
    alt: "WP SMS"
  }, {
    src: watchthemlive,
    alt: "WatchThemLive"
  }];
  const testimonials = [{
    name: "Client Name",
    role: "CEO, Company Name",
    content: "Outstanding work on our content strategy. The results speak for themselves - our engagement has tripled.",
    rating: 5
  }, {
    name: "Client Name",
    role: "Marketing Director, Company Name",
    content: "Exceptional copywriting that truly captures our brand voice. Every piece converts.",
    rating: 5
  }, {
    name: "Client Name",
    role: "Founder, Company Name",
    content: "The email campaigns delivered incredible ROI. Professional, creative, and results-driven.",
    rating: 5
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 pt-32 pb-16">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-4xl md:text-6xl font-primary text-center mb-4 text-pixel">
            Testimonials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 font-secondary max-w-2xl mx-auto">
            What clients say about working with me
          </p>

          {/* Client Logos Carousel */}
          <div className="mb-16 pixel-border bg-white/95 backdrop-blur-sm p-8 rounded-lg relative">
            <p className="text-center text-muted-foreground font-secondary mb-6">
              Trusted by leading brands
            </p>
            <div className="relative w-full overflow-hidden">
              {/* Left gradient fade */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/95 via-white/95 to-transparent z-10 pointer-events-none"></div>
              {/* Right gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/95 via-white/95 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex">
                {[...Array(3)].map((_, setIndex) => <div key={setIndex} className="flex gap-12 flex-shrink-0 animate-marquee">
                    {clientLogos.map((logo, index) => <div key={`${setIndex}-${index}`} className="flex items-center justify-center h-16 w-40 flex-shrink-0 hover:scale-110 transition-transform duration-300">
                        <img src={logo.src} alt={logo.alt} className="max-h-56 max-w-full object-contain" />
                      </div>)}
                  </div>)}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }}>
                <PixelCard className="h-full flex flex-col">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-foreground mb-6 flex-grow font-secondary">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-primary font-bold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground font-secondary">
                      {testimonial.role}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-accent">★</span>)}
                    </div>
                  </div>
                </PixelCard>
              </motion.div>)}
          </div>
        </motion.div>
      </main>

      <footer className="py-8 px-4 pixel-border border-b-0 border-x-0">
        <div className="container mx-auto text-center">
          <p className="font-primary text-xs mb-2">Armin Parvin</p>
          <p className="font-secondary text-sm text-muted-foreground">
            4rminp4rvin@gmail.com
            <br />
            <br />© {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>;
};
export default Testimonials;