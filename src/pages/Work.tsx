import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { Cursor } from "@/components/ui/inverted-cursor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import workBg from "@/assets/work-bg-pixel.png";

export default function Work() {
  const caseStudies = [
    {
      title: "Convert.com",
      category: "Content Marketing",
      description: "Created bottom-of-funnel content strategy and production to establish brand presence in SERPs for new features.",
      results: "Industry recognition achieved",
    },
    {
      title: "Roomvu",
      category: "Email Marketing",
      description: "Led email marketing campaigns that increased user registration by 194% through strategic automation and optimization.",
      results: "194% registration increase",
    },
    {
      title: "Nordic Defender",
      category: "Product Marketing",
      description: "Conducted market analysis and created content strategy to position cybersecurity products in competitive landscape.",
      results: "Market positioning established",
    },
    {
      title: "Cloudzy",
      category: "Technical Content",
      description: "Wrote technical blog posts achieving #1 rankings and position zero on Google for target keywords.",
      results: "#1 Google rankings",
    },
    {
      title: "WP SMS Pro",
      category: "Content Strategy",
      description: "Developed comprehensive content strategy to drive product awareness and user engagement.",
      results: "Brand awareness increased",
    },
    {
      title: "LorenzoCPA",
      category: "Copywriting",
      description: "Crafted professional service copy and content to establish authority in accounting and tax services.",
      results: "Authority positioning",
    },
    {
      title: "Citronity",
      category: "Digital Marketing",
      description: "Developed digital marketing strategies for brand visibility and lead generation across channels.",
      results: "Multi-channel presence",
    },
    {
      title: "BSuite365",
      category: "B2B Content",
      description: "Created B2B content marketing materials to drive enterprise client engagement and conversions.",
      results: "Enterprise engagement",
    },
    {
      title: "WatchThemLive",
      category: "Email Marketing",
      description: "Executed email campaigns increasing open rates by 50%+ and click-through rates by 23%+.",
      results: "50%+ open rate increase",
    },
    {
      title: "Influencer Marketing Business",
      category: "Content Strategy",
      description: "Developed content strategy and materials for influencer marketing platform launch and growth.",
      results: "Platform launch success",
    },
    {
      title: "Rahmaninia Digital Marketing Agency",
      category: "Agency Content",
      description: "Created comprehensive content suite for digital marketing agency brand positioning.",
      results: "Brand positioning achieved",
    },
    {
      title: "Digital Marketing Agency",
      category: "Content Marketing",
      description: "Executed content marketing strategy to establish thought leadership and drive client acquisition.",
      results: "Thought leadership established",
    },
    {
      title: "MV Production",
      category: "Creative Content",
      description: "Developed creative content and copy for media production company brand storytelling.",
      results: "Brand story developed",
    },
    {
      title: "Boutique",
      category: "E-commerce Content",
      description: "Created e-commerce content strategy increasing website traffic by 38% and conversion rate by 23%.",
      results: "38% traffic growth",
    },
    {
      title: "C-Level Executives, Coaches, and Speakers",
      category: "Ghostwriting",
      description: "Ghostwrote thought leadership content for C-level executives, coaches, and speakers to build their personal brands.",
      results: "Personal brand authority established",
    },
  ];

  const selectedWorkByCategory = {
    "Cryptocurrency Taxes": [
      {
        title: "Tax Strategy Content",
        category: "Cryptocurrency Taxes",
        description: "Created educational content on cryptocurrency tax optimization and compliance strategies.",
        results: "Expert positioning established",
      },
    ],
    "PropTech": [
      {
        title: "Real Estate Technology Content",
        category: "PropTech",
        description: "Developed content strategy for property technology platform targeting real estate professionals.",
        results: "Market awareness increased",
      },
    ],
    "Cybersecurity": [
      {
        title: "Security Product Marketing",
        category: "Cybersecurity",
        description: "Created technical content and marketing materials for cybersecurity solutions.",
        results: "Product adoption driven",
      },
    ],
    "Customer Success Stories": [
      {
        title: "Client Testimonial Campaign",
        category: "Customer Success Stories",
        description: "Crafted compelling customer success narratives that showcased product value and ROI.",
        results: "Social proof enhanced",
      },
    ],
    "Technology": [
      {
        title: "Tech Platform Content",
        category: "Technology",
        description: "Produced technical documentation and marketing content for SaaS platforms.",
        results: "User engagement increased",
      },
    ],
    "Trading": [
      {
        title: "Trading Platform Content",
        category: "Trading",
        description: "Developed educational content and market analysis for trading platform users.",
        results: "User education improved",
      },
    ],
    "UI/UX": [
      {
        title: "Design Process Documentation",
        category: "UI/UX",
        description: "Created content explaining UI/UX design principles and best practices.",
        results: "Design awareness built",
      },
    ],
    "Marketing Strategies": [
      {
        title: "Marketing Framework Content",
        category: "Marketing Strategies",
        description: "Developed strategic marketing content and frameworks for B2B companies.",
        results: "Strategic positioning achieved",
      },
    ],
    "Conversion Rate Optimization (CRO)": [
      {
        title: "CRO Case Studies",
        category: "CRO",
        description: "Audited and optimized website copy and CTAs, increasing conversion rate from 2.1% to 4.8%.",
        results: "128% conversion increase",
      },
    ],
    "User Behavior": [
      {
        title: "Behavioral Analytics Content",
        category: "User Behavior",
        description: "Created content on user behavior analysis and optimization strategies.",
        results: "Insights delivered",
      },
    ],
    "Software": [
      {
        title: "Software Documentation",
        category: "Software",
        description: "Produced technical documentation and user guides for software products.",
        results: "User onboarding improved",
      },
    ],
    "Ghostwriting": [
      {
        title: "Executive Thought Leadership",
        category: "Ghostwriting",
        description: "Ghostwrote LinkedIn posts, articles, and keynote content for C-level executives, coaches, and speakers.",
        results: "Brand authority enhanced",
      },
    ],
    "Miscellaneous": [
      {
        title: "B2B Newsletter",
        category: "Ghostwriting",
        description: "Ghostwrote weekly newsletters for a business consultant, growing their subscriber base from 500 to 8,000.",
        results: "1,500% subscriber growth",
      },
      {
        title: "Content Marketing Campaign",
        category: "Content Strategy",
        description: "Developed and executed a multi-channel content campaign that generated 1,200 qualified leads in 90 days.",
        results: "1,200 qualified leads",
      },
    ],
  };

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
        
        <div className="container mx-auto max-w-6xl relative z-10 space-y-24">
          {/* Case Studies Section */}
          <div>
            <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Case Studies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((project, index) => (
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

          {/* Selected Work Section */}
          <div>
            <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Selected Work</h1>
            <Tabs defaultValue="Cryptocurrency Taxes" className="w-full">
              <TabsList className="w-full flex flex-wrap h-auto gap-2 bg-background/50 pixel-border p-4 mb-8">
                <TabsTrigger value="Cryptocurrency Taxes" className="font-primary text-xs md:text-sm">Cryptocurrency Taxes</TabsTrigger>
                <TabsTrigger value="PropTech" className="font-primary text-xs md:text-sm">PropTech</TabsTrigger>
                <TabsTrigger value="Cybersecurity" className="font-primary text-xs md:text-sm">Cybersecurity</TabsTrigger>
                <TabsTrigger value="Customer Success Stories" className="font-primary text-xs md:text-sm">Customer Success Stories</TabsTrigger>
                <TabsTrigger value="Technology" className="font-primary text-xs md:text-sm">Technology</TabsTrigger>
                <TabsTrigger value="Trading" className="font-primary text-xs md:text-sm">Trading</TabsTrigger>
                <TabsTrigger value="UI/UX" className="font-primary text-xs md:text-sm">UI/UX</TabsTrigger>
                <TabsTrigger value="Marketing Strategies" className="font-primary text-xs md:text-sm">Marketing Strategies</TabsTrigger>
                <TabsTrigger value="Conversion Rate Optimization (CRO)" className="font-primary text-xs md:text-sm">CRO</TabsTrigger>
                <TabsTrigger value="User Behavior" className="font-primary text-xs md:text-sm">User Behavior</TabsTrigger>
                <TabsTrigger value="Software" className="font-primary text-xs md:text-sm">Software</TabsTrigger>
                <TabsTrigger value="Ghostwriting" className="font-primary text-xs md:text-sm">Ghostwriting</TabsTrigger>
                <TabsTrigger value="Miscellaneous" className="font-primary text-xs md:text-sm">Miscellaneous</TabsTrigger>
              </TabsList>

              {Object.entries(selectedWorkByCategory).map(([category, projects]) => (
                <TabsContent key={category} value={category}>
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
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 pixel-border border-b-0 border-x-0 relative z-10 bg-background">
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
