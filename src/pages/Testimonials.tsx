import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Client Name",
      role: "CEO, Company Name",
      content: "Outstanding work on our content strategy. The results speak for themselves - our engagement has tripled.",
      rating: 5,
    },
    {
      name: "Client Name",
      role: "Marketing Director, Company Name",
      content: "Exceptional copywriting that truly captures our brand voice. Every piece converts.",
      rating: 5,
    },
    {
      name: "Client Name",
      role: "Founder, Company Name",
      content: "The email campaigns delivered incredible ROI. Professional, creative, and results-driven.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-primary text-center mb-4 text-pixel">
            Testimonials
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 font-secondary max-w-2xl mx-auto">
            What clients say about working with me
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
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
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-accent">★</span>
                      ))}
                    </div>
                  </div>
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className="border-t-4 pixel-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground font-primary mb-2">Armin Parvin</p>
          <p className="text-muted-foreground font-secondary mb-2">
            4rminp4rvin@gmail.com
          </p>
          <p className="text-muted-foreground font-secondary">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
