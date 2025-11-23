import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { ClientLogos } from "@/components/ClientLogos";
import { Lightbulb, Megaphone, Mail, BookOpen, PenTool, FileText, TrendingUp, MessageSquare, Sparkles } from "lucide-react";
import { Cursor } from "@/components/ui/inverted-cursor";
import servicesBg from "@/assets/services-bg-pixel.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Services() {
  const contentMarketingServices = [{
    icon: Lightbulb,
    title: "Content Strategy",
    description: "Data-driven plans that align content with business goals and audience needs."
  }, {
    icon: BookOpen,
    title: "Blogs Writing",
    description: "Engaging blog posts and articles that drive organic traffic and establish thought leadership."
  }, {
    icon: FileText,
    title: "Technical Writing",
    description: "Clear, precise white papers and technical documentation that simplify complex topics."
  }, {
    icon: Sparkles,
    title: "Creative Writing",
    description: "Captivating narratives for case studies and press releases that tell your brand story."
  }, {
    icon: MessageSquare,
    title: "Storytelling",
    description: "Compelling stories that resonate emotionally and connect with your audience."
  }, {
    icon: PenTool,
    title: "Ghostwriting",
    description: "Authentic social content that builds your personal brand and grows your following on LinkedIn and X."
  }, {
    icon: TrendingUp,
    title: "SEO-Optimized Content Writing",
    description: "Strategic content that ranks on search engines and converts visitors into customers."
  }];
  const copywritingServices = [{
    icon: Megaphone,
    title: "Webpage Copywriting",
    description: "Persuasive web copy that communicates value and drives action across your website."
  }, {
    icon: Sparkles,
    title: "Landing-Page Copywriting",
    description: "High-converting landing pages designed to capture leads and boost conversions."
  }, {
    icon: TrendingUp,
    title: "Direct-Response Copywriting",
    description: "Compelling copy that motivates immediate action and measurable results."
  }];
  const emailMarketingServices = [{
    icon: Mail,
    title: "Email Copywriting",
    description: "Engaging email copy that cuts through inbox noise and drives clicks."
  }, {
    icon: BookOpen,
    title: "Newsletter Writing",
    description: "Value-packed newsletters that keep subscribers engaged and coming back."
  }, {
    icon: FileText,
    title: "Email Sequencing",
    description: "Strategic automated sequences that nurture leads and build relationships."
  }, {
    icon: TrendingUp,
    title: "Campaign Management",
    description: "End-to-end campaign execution from strategy to analysis and optimization."
  }];
  return <div className="min-h-screen flex flex-col">
      <Cursor />
      <Header />
      
      <section className="flex-grow py-12 sm:py-20 md:py-24 px-4 pt-24 sm:pt-28 md:pt-32 relative" style={{
      backgroundImage: `url(${servicesBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="font-primary text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 text-center text-pixel">Marketing Services</h1>
          
          <div className="mb-8 sm:mb-10 md:mb-12 text-center max-w-3xl mx-auto">
            <p className="font-secondary text-sm sm:text-base md:text-lg text-muted-foreground">
              From strategy to execution, I create content and copy that drive results. I write{" "}
              <span className="text-accent font-semibold">blogs, articles, emails, white papers, press releases, case studies, LinkedIn and X posts, and webpages and landing pages copy</span>{" "}
              that convert.
            </p>
          </div>

          <Tabs defaultValue="content-marketing" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-10 md:mb-12 pixel-border bg-card">
              <TabsTrigger value="content-marketing" className="font-primary text-[10px] sm:text-xs md:text-sm text-pixel data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-2 sm:px-3 md:px-4">
                Content Marketing
              </TabsTrigger>
              <TabsTrigger value="copywriting" className="font-primary text-[10px] sm:text-xs md:text-sm text-pixel data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-2 sm:px-3 md:px-4">
                Copywriting
              </TabsTrigger>
              <TabsTrigger value="email-marketing" className="font-primary text-[10px] sm:text-xs md:text-sm text-pixel data-[state=active]:bg-accent data-[state=active]:text-accent-foreground px-2 sm:px-3 md:px-4">
                Email Marketing
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content-marketing" className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {contentMarketingServices.map((service, index) => {
                const Icon = service.icon;
                return <PixelCard key={index} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-primary text-base sm:text-lg mb-1 sm:mb-2 text-pixel">{service.title}</h3>
                        <p className="font-secondary text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </PixelCard>;
              })}
              </div>
              <div className="mt-6 sm:mt-8">
                <PixelCard className="bg-accent/10 border-accent">
                  <p className="font-secondary text-xs sm:text-sm">
                    <span className="font-semibold text-accent">Deliverables include:</span> Blog posts, articles, white papers, case studies, press releases, LinkedIn posts, and SEO-optimized content.
                  </p>
                </PixelCard>
              </div>
            </TabsContent>

            <TabsContent value="copywriting" className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {copywritingServices.map((service, index) => {
                const Icon = service.icon;
                return <PixelCard key={index} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-primary text-base sm:text-lg mb-1 sm:mb-2 text-pixel">{service.title}</h3>
                        <p className="font-secondary text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </PixelCard>;
              })}
              </div>
              <div className="mt-6 sm:mt-8">
                <PixelCard className="bg-accent/10 border-accent">
                  <p className="font-secondary text-xs sm:text-sm">
                    <span className="font-semibold text-accent">Deliverables include:</span> Webpage copy, landing pages, sales pages, product descriptions, and direct-response marketing materials.
                  </p>
                </PixelCard>
              </div>
            </TabsContent>

            <TabsContent value="email-marketing" className="mt-6 sm:mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {emailMarketingServices.map((service, index) => {
                const Icon = service.icon;
                return <PixelCard key={index} className="flex gap-3 sm:gap-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-primary text-base sm:text-lg mb-1 sm:mb-2 text-pixel">{service.title}</h3>
                        <p className="font-secondary text-xs sm:text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </PixelCard>;
              })}
              </div>
              <div className="mt-6 sm:mt-8">
                <PixelCard className="bg-accent/10 border-accent">
                  <p className="font-secondary text-xs sm:text-sm">
                    <span className="font-semibold text-accent">Deliverables include:</span> Email campaigns, newsletters, automated sequences, drip campaigns, and promotional emails.
                  </p>
                </PixelCard>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

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
    </div>;
}
