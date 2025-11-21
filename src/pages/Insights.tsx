import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { FileText, Calendar } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";

const Insights = () => {
  const insights = [
    {
      title: "Coming Soon",
      excerpt: "Insights and articles about content marketing, copywriting, and email strategies will be published here.",
      date: "Stay tuned",
      category: "Marketing",
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
            Insights
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 font-secondary max-w-2xl mx-auto">
            Thoughts on content, copy, and marketing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PixelCard className="h-full flex flex-col cursor-pointer hover:transform hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="w-5 h-5 text-accent" />
                    <span className="text-sm text-accent font-secondary font-semibold">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-primary font-bold text-foreground mb-3">
                    {insight.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow font-secondary">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-auto">
                    <Calendar className="w-4 h-4" />
                    <span className="font-secondary">{insight.date}</span>
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

export default Insights;
