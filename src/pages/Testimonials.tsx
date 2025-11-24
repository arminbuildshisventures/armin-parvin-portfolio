import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ClientLogos } from "@/components/ClientLogos";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { testimonials, marqueeTestimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialsBg from "@/assets/testimonials-bg-pixel.png";

const Testimonials = () => {
  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow relative">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${testimonialsBg})`,
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        />
        <Header />

        <main className="relative container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-primary text-center mb-3 sm:mb-4 text-pixel">Testimonials</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 sm:mb-10 md:mb-12 font-secondary max-w-2xl mx-auto px-4">
            What clients say about working with me
          </p>

          {/* Featured Testimonials */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-primary text-center mb-6 sm:mb-8 text-accent">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <PixelCard className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-gradient-to-br from-card via-card to-accent/10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 pixel-border flex-shrink-0">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-primary font-bold text-sm sm:text-base md:text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-secondary leading-tight">{testimonial.role}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-accent text-sm sm:text-base md:text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-3 sm:mb-4 opacity-50" />
                    <p className="text-foreground text-sm sm:text-base leading-relaxed flex-grow font-secondary">"{testimonial.content}"</p>
                    {testimonial.caseStudyUrl && (
                      <a 
                        href={testimonial.caseStudyUrl}
                        className="mt-4 inline-block text-accent hover:text-accent/80 font-primary text-sm font-semibold transition-colors"
                      >
                        Read Case Study →
                      </a>
                    )}
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regular Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index + 2) * 0.1,
                }}
              >
                <PixelCard className="flex flex-col h-full p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 pixel-border flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-primary font-bold text-sm sm:text-base text-foreground">{testimonial.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-secondary leading-tight">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-xs sm:text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 sm:mb-3 opacity-50" />
                  <p className="text-foreground mb-3 sm:mb-4 font-secondary text-xs sm:text-sm leading-relaxed flex-grow">"{testimonial.content}"</p>
                  {testimonial.caseStudyUrl && (
                    <a 
                      href={testimonial.caseStudyUrl}
                      className="mt-auto inline-block text-accent hover:text-accent/80 font-primary text-xs font-semibold transition-colors"
                    >
                      Read Case Study →
                    </a>
                  )}
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </main>
      </div>

      {/* Testimonials Marquee */}
      <TestimonialsSection
        title="What Clients Say"
        description="Trusted by marketing leaders and growing businesses worldwide"
        testimonials={marqueeTestimonials}
      />

      {/* Client Logos Section */}
      <ClientLogos />

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
    </div>
  );
};
export default Testimonials;
