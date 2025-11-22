import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import lorenzoLogo from "@/assets/clients/LorenzoLogo.png";
import rahmaniniaLogo from "@/assets/clients/Rahmaninia Logo 1.png";
import wtlLogo from "@/assets/clients/WTL.png";
import bsuiteLogo from "@/assets/clients/bsuite-logo.svg";
import citronityLogo from "@/assets/clients/citronity.svg";
import cloudzyLogo from "@/assets/clients/cloudzy.svg";
import convertLogo from "@/assets/clients/convert.svg";
import nordicLogo from "@/assets/clients/nordic.svg";
import roomvuLogo from "@/assets/clients/roomvu.svg";
import veronalabsLogo from "@/assets/clients/veronalabs.png";
import wpsmsLogo from "@/assets/clients/wpsms.png";
const Testimonials = () => {
  const clientLogos = [{
    src: lorenzoLogo,
    alt: "Lorenzo CPA"
  }, {
    src: rahmaniniaLogo,
    alt: "Mehdi Rahmaninia"
  }, {
    src: wtlLogo,
    alt: "WatchThemLive"
  }, {
    src: bsuiteLogo,
    alt: "BSuite"
  }, {
    src: citronityLogo,
    alt: "Citronity"
  }, {
    src: cloudzyLogo,
    alt: "Cloudzy"
  }, {
    src: convertLogo,
    alt: "Convert"
  }, {
    src: nordicLogo,
    alt: "Nordic Defender"
  }, {
    src: roomvuLogo,
    alt: "Roomvu"
  }, {
    src: veronalabsLogo,
    alt: "Verona Labs"
  }, {
    src: wpsmsLogo,
    alt: "WP SMS"
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
          <div className="mb-16 pixel-border bg-zinc-800 backdrop-blur-sm p-8 rounded-lg relative">
            <p className="text-center text-zinc-400 font-secondary mb-6">
              Trusted by leading brands
            </p>
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                {[...Array(3)].map((_, setIndex) => <div key={setIndex} className="flex gap-16 flex-shrink-0 animate-marquee">
                    {clientLogos.map((logo, index) => <div key={`${setIndex}-${index}`} className="flex items-center justify-center h-20 w-48 flex-shrink-0 hover:scale-110 transition-transform duration-300 px-4">
                        <img src={logo.src} alt={logo.alt} className="h-14 w-auto max-w-full object-contain brightness-0 invert" />
                      </div>)}
                  </div>)}
              </div>
            </div>
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none rounded-l-lg" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none rounded-r-lg" />
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