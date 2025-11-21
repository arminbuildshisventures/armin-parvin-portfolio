import { Header } from "@/components/Header";
import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { Mail, FileText, PenTool, Target, TrendingUp, Users } from "lucide-react";
import heroImage from "@/assets/hero-pixel-art.png";
import aboutBg from "@/assets/about-bg-pixel.png";
import servicesBg from "@/assets/services-bg-pixel.png";
import workBg from "@/assets/work-bg-pixel.png";
import contactBg from "@/assets/contact-bg-pixel.png";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Cursor } from "@/components/ui/inverted-cursor";
const Index = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <div className="min-h-screen">
      <Cursor />
      <Header />

      {/* Hero Section */}
      <AuroraBackground className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={heroImage} alt="Pixel art marketing" className="w-full h-full object-cover" />
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut"
      }} className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block pixel-border bg-secondary px-6 py-2">
              <p className="font-primary text-xs">Copywriter • Ghostwriter • Content Marketer • Email Marketer</p>
            </div>
            <h1 className="font-primary text-3xl md:text-5xl lg:text-6xl text-pixel-inverted leading-relaxed">
              Words That Convert
            </h1>
            <p className="font-secondary text-lg md:text-xl max-w-2xl mx-auto">
              Let's make your brand stand out in a skeptical market.        
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <PixelButton variant="primary" onClick={scrollToContact}>
                Work With Me
              </PixelButton>
              <PixelButton variant="accent" onClick={() => document.getElementById("work")?.scrollIntoView({
              behavior: "smooth"
            })}>
                View Portfolio
              </PixelButton>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* About Section */}
      <section id="about" className="py-24 px-4 relative" style={{ backgroundImage: `url(${aboutBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">About Me</h2>
          <PixelCard>
            <p className="font-secondary text-base md:text-lg leading-relaxed mb-6">
              Head of Content with 5+ years of experience generating demand and high-quality leads in SaaS and B2B Tech companies. Generated $12M+ in client revenue, boosted email engagement (open rate +52%, CTOR +5%, registration +194%), and produced content ranking #1 and #0. Led content, email, and LinkedIn growth and strategy for startups and mid-sized firms across SaaS and B2B Tech from early to growth stages. Currently building expertise in the Web3, blockchain, and cryptocurrency space, connecting numbers to narratives, and translating data into insight and strategy.













 <strong>(open rate +52%, CTOR +5%, registration +194%)</strong>, and produced <strong>content ranking #1 and #0</strong>. Led content, email, and LinkedIn growth and strategy for startups and mid-sized firms across SaaS and B2B Tech from early to growth stages.
              <br /><br />
              Currently building expertise in the Web3, blockchain, and cryptocurrency space, connecting numbers to narratives, and translating data into insight and strategy.




















            </p>
            
          </PixelCard>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 relative" style={{ backgroundImage: `url(${servicesBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-muted/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PixelCard>
              <Mail className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-primary text-sm mb-3">Email Marketing</h3>
              <p className="font-secondary text-sm leading-relaxed">
                Strategic email campaigns that nurture leads and drive conversions through targeted messaging and
                automation.
              </p>
            </PixelCard>

            <PixelCard>
              <FileText className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-primary text-sm mb-3">Content Writing</h3>
              <p className="font-secondary text-sm leading-relaxed">
                SEO-optimized blog posts, articles, and web content that engage readers and establish thought
                leadership.
              </p>
            </PixelCard>

            <PixelCard>
              <PenTool className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-primary text-sm mb-3">Copywriting</h3>
              <p className="font-secondary text-sm leading-relaxed">
                Persuasive copy for landing pages, ads, and sales materials that converts visitors into customers.
              </p>
            </PixelCard>

            <PixelCard>
              <Target className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-primary text-sm mb-3">Strategy</h3>
              <p className="font-secondary text-sm leading-relaxed">
                Comprehensive content strategies aligned with business goals and audience needs.
              </p>
            </PixelCard>

            <PixelCard>
              <TrendingUp className="w-12 h-12 mb-4 text-accent" />
              <h3 className="font-primary text-sm mb-3">Optimization</h3>
              <p className="font-secondary text-sm leading-relaxed">
                A/B testing and analytics-driven improvements to maximize campaign performance.
              </p>
            </PixelCard>

            <PixelCard>
              <Users className="w-12 h-12 mb-4 text-secondary" />
              <h3 className="font-primary text-sm mb-3">Consulting</h3>
              <p className="font-secondary text-sm leading-relaxed">
                Expert guidance on content strategy, messaging, and marketing automation.
              </p>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-4 relative" style={{ backgroundImage: `url(${workBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PixelCard>
              <div className="bg-accent/20 pixel-border h-48 mb-6 flex items-center justify-center">
                <span className="font-primary text-xs text-accent">E-Commerce Campaign</span>
              </div>
              <h3 className="font-primary text-sm mb-3">Email Series: 42% Open Rate</h3>
              <p className="font-secondary text-sm leading-relaxed mb-4">
                Developed a 5-part welcome series for an e-commerce brand, resulting in 42% open rates and 18%
                click-through rates.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Email</span>
                <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Automation</span>
              </div>
            </PixelCard>

            <PixelCard>
              <div className="bg-secondary/20 pixel-border h-48 mb-6 flex items-center justify-center">
                <span className="font-primary text-xs text-secondary">SaaS Content</span>
              </div>
              <h3 className="font-primary text-sm mb-3">Blog Content: 3x Traffic Growth</h3>
              <p className="font-secondary text-sm leading-relaxed mb-4">
                Created SEO-optimized blog content strategy that tripled organic traffic in 6 months for a B2B SaaS
                company.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Content</span>
                <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">SEO</span>
              </div>
            </PixelCard>

            <PixelCard>
              <div className="bg-accent/20 pixel-border h-48 mb-6 flex items-center justify-center">
                <span className="font-primary text-xs text-accent">Landing Page</span>
              </div>
              <h3 className="font-primary text-sm mb-3">Landing Page: 28% Conversion</h3>
              <p className="font-secondary text-sm leading-relaxed mb-4">
                Rewrote landing page copy and optimized CTAs, increasing conversion rate from 12% to 28% for a lead
                generation campaign.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Copywriting</span>
                <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">CRO</span>
              </div>
            </PixelCard>

            <PixelCard>
              <div className="bg-secondary/20 pixel-border h-48 mb-6 flex items-center justify-center">
                <span className="font-primary text-xs text-secondary">Newsletter</span>
              </div>
              <h3 className="font-primary text-sm mb-3">Newsletter: 10K Subscribers</h3>
              <p className="font-secondary text-sm leading-relaxed mb-4">
                Launched and grew a weekly industry newsletter to 10,000 engaged subscribers with consistent 35%+ open
                rates.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Email</span>
                <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Growth</span>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 relative" style={{ backgroundImage: `url(${contactBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-muted/90"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">Let's Work Together</h2>
          <PixelCard className="text-center">
            <p className="font-secondary text-lg mb-8 leading-relaxed">
              Ready to level up your content and email marketing? Let's discuss how I can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PixelButton variant="primary" onClick={() => window.open("mailto:4rminp4rvin@gmail.com", "_blank")}>
                Send Email
              </PixelButton>
              <PixelButton variant="accent" onClick={() => window.open("https://linkedin.com/in/arminparvin/", "_blank")}>
                LinkedIn
              </PixelButton>
            </div>
          </PixelCard>
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
    </div>;
};
export default Index;