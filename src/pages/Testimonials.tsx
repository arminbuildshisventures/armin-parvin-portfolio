import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialsBg from "@/assets/testimonials-bg-pixel.png";
import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
import avatar2 from "@/assets/testimonials/avatar-2.png";
import avatar3 from "@/assets/testimonials/avatar-3.png";
import avatar4 from "@/assets/testimonials/avatar-4.png";
import avatar5 from "@/assets/testimonials/avatar-5.png";
import avatar6 from "@/assets/testimonials/avatar-6.png";
import avatar7 from "@/assets/testimonials/avatar-7.png";
import avatar8 from "@/assets/testimonials/avatar-8.png";
import avatar9 from "@/assets/testimonials/avatar-9.png";
import avatar10 from "@/assets/testimonials/avatar-10.png";
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
  const clientLogos = [
    {
      src: lorenzoLogo,
      alt: "Lorenzo CPA",
    },
    {
      src: rahmaniniaLogo,
      alt: "Mehdi Rahmaninia",
    },
    {
      src: wtlLogo,
      alt: "WatchThemLive",
    },
    {
      src: bsuiteLogo,
      alt: "BSuite",
    },
    {
      src: citronityLogo,
      alt: "Citronity",
    },
    {
      src: cloudzyLogo,
      alt: "Cloudzy",
    },
    {
      src: convertLogo,
      alt: "Convert",
    },
    {
      src: nordicLogo,
      alt: "Nordic Defender",
    },
    {
      src: roomvuLogo,
      alt: "Roomvu",
    },
    {
      src: veronalabsLogo,
      alt: "Verona Labs",
    },
    {
      src: wpsmsLogo,
      alt: "WP SMS",
    },
  ];
  const featuredTestimonials = [
    {
      name: "Trina Moitra",
      role: "CMO, Convert.com",
      content:
        "Armin impressed me with his attention to detail & his knowledge of the industry from day 1. We needed someone to take on the production of bottom-of-the-funnel focused content and to seed Convert's name in the SERPs for our brand new features. Our collaboration was very pleasant. Renee Content has a good process and they really give 110% to understand your requirements. Thank you for being such consummate professionals!",
      rating: 5,
      avatar: trinaMoitra,
    },
    {
      name: "Parand Sh.",
      role: "Business Owner",
      content:
        "The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%. Our collaboration has been an absolute pleasure, a decision I would make over and over again. They made sure that all my requirements were understood fully and executed flawlessly.",
      rating: 5,
      avatar: parandSh,
      caseStudyUrl: "#", // Placeholder for case study link
    },
  ];

  const regularTestimonials = [
    {
      name: "Jennifer Chen",
      role: "Founder, GrowthLabs",
      content: "The copywriting quality is exceptional. Armin captured our brand voice perfectly and every landing page he wrote converts at 23% higher than our previous pages. Worth every penny.",
      rating: 5,
      avatar: avatar3,
    },
    {
      name: "David Thompson",
      role: "VP of Marketing, FinanceFlow",
      content: "Outstanding content strategy and execution. Our engagement metrics have tripled since working with Armin. He's not just a writer, he's a strategic partner who understands business goals.",
      rating: 5,
      avatar: avatar4,
    },
    {
      name: "Amanda Foster",
      role: "Head of Content, BrandBuilders",
      content: "Armin's ghostwriting services helped me maintain a consistent LinkedIn presence while managing my team. His posts consistently get 10x more engagement than what I wrote myself. Highly recommended!",
      rating: 5,
      avatar: avatar5,
    },
    {
      name: "Robert Kim",
      role: "CMO, SaaS Innovate",
      content: "Professional, responsive, and incredibly talented. Our email nurture sequences are now industry-leading thanks to Armin's expertise. Customer retention improved by 34% within 3 months.",
      rating: 5,
      avatar: avatar6,
    },
    {
      name: "Emily Watson",
      role: "Director of Growth, StartupHub",
      content: "Working with Armin was seamless. He delivered high-quality blog content that perfectly aligned with our SEO strategy. Traffic from organic search increased 280% year-over-year.",
      rating: 5,
      avatar: avatar7,
    },
    {
      name: "James Patterson",
      role: "Owner, E-commerce Plus",
      content: "The product descriptions and category pages Armin wrote for us are converting at rates we've never seen before. Sales increased 42% in the first quarter. Exceptional copywriting skills!",
      rating: 5,
      avatar: avatar8,
    },
    {
      name: "Lisa Anderson",
      role: "Marketing Manager, HealthTech Co",
      content: "Armin's ability to simplify complex topics while maintaining engagement is remarkable. Our content is now accessible to a broader audience and our lead generation has doubled.",
      rating: 5,
      avatar: avatar9,
    },
    {
      name: "Chris Martinez",
      role: "Founder, Digital Dynamics",
      content: "Best decision we made was hiring Armin for our content needs. His writing is engaging, SEO-optimized, and always delivered on time. Our content marketing ROI has never been better.",
      rating: 5,
      avatar: avatar10,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow relative">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${testimonialsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Header />

        <main className="relative container mx-auto px-4 pt-32 pb-16">
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
          <h1 className="text-4xl md:text-6xl font-primary text-center mb-4 text-pixel">Testimonials</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 font-secondary max-w-2xl mx-auto">
            What clients say about working with me
          </p>

          {/* Client Logos Carousel */}
          <div className="mb-16 pixel-border bg-zinc-800 backdrop-blur-sm p-8 rounded-lg relative">
            <p className="text-center text-zinc-400 font-secondary mb-6">Trusted by leading brands</p>
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 flex-shrink-0 animate-marquee">
                    {clientLogos.map((logo, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className={`flex items-center justify-center h-20 w-52 flex-shrink-0 hover:scale-110 transition-transform duration-300 ${
                          logo.alt === "WP SMS" || logo.alt === "Lorenzo CPA" ? "px-10" : ""
                        }`}
                      >
                        <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain brightness-0 invert" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none rounded-l-lg" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none rounded-r-lg" />
          </div>

          {/* Featured Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-primary text-center mb-8 text-accent">Featured Testimonials</h2>
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
                  <PixelCard className="h-full flex flex-col p-8 bg-gradient-to-br from-card via-card to-accent/10">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-20 h-20 pixel-border">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-primary font-bold text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground font-secondary">{testimonial.role}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-accent text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                    <p className="text-foreground text-base leading-relaxed flex-grow font-secondary">"{testimonial.content}"</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <PixelCard className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-16 h-16 pixel-border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-primary font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground font-secondary">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-accent mb-3 opacity-50" />
                  <p className="text-foreground mb-4 flex-grow font-secondary text-sm">"{testimonial.content}"</p>
                  <div className="flex gap-1 mt-auto">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </main>
      </div>

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
