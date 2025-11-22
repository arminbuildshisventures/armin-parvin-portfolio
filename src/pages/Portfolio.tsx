import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { Cursor } from "@/components/ui/inverted-cursor";
import workBg from "@/assets/work-bg-pixel.png";

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Email Campaign",
      category: "Email Marketing",
      description: "Designed and executed a 12-email sequence that increased customer retention by 45% for a fashion retailer.",
      results: "45% increase in retention",
    },
    {
      title: "SaaS Blog Strategy",
      category: "Content Writing",
      description: "Created a content strategy and wrote 24 blog posts that drove 300% growth in organic traffic over 6 months.",
      results: "300% traffic growth",
    },
    {
      title: "Product Launch Copy",
      category: "Copywriting",
      description: "Crafted landing page and ad copy for a tech startup's product launch, resulting in $500K revenue in the first month.",
      results: "$500K first month revenue",
    },
    {
      title: "B2B Newsletter",
      category: "Ghostwriting",
      description: "Ghostwrote weekly newsletters for a business consultant, growing their subscriber base from 500 to 8,000.",
      results: "1,500% subscriber growth",
    },
    {
      title: "Conversion Rate Optimization",
      category: "Strategy",
      description: "Audited and optimized website copy and CTAs, increasing conversion rate from 2.1% to 4.8%.",
      results: "128% conversion increase",
    },
    {
      title: "Content Marketing Campaign",
      category: "Content Strategy",
      description: "Developed and executed a multi-channel content campaign that generated 1,200 qualified leads in 90 days.",
      results: "1,200 qualified leads",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      <Header />
      
      <section 
        className="flex-grow py-24 px-4 pt-32 relative"
        style={{
          backgroundImage: `url(${workBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Portfolio</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <PixelCard key={index}>
                <div className="inline-block pixel-border bg-accent/20 px-3 py-1 mb-4">
                  <span className="font-primary text-xs">{project.category}</span>
                </div>
                <h3 className="font-primary text-lg mb-3">{project.title}</h3>
                <p className="font-secondary text-sm mb-4">{project.description}</p>
                <div className="pixel-border bg-secondary/20 px-3 py-2 mt-4">
                  <p className="font-secondary text-xs font-semibold">{project.results}</p>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
}
