import { Header } from "@/components/Header";
import { PixelButton } from "@/components/PixelButton";
import { PixelCard } from "@/components/PixelCard";
import { Mail, FileText, PenTool, Target, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pixel-art.png";
import aboutBg from "@/assets/about-bg-pixel.jpg";
import servicesBg from "@/assets/services-bg-pixel.jpg";
import workBg from "@/assets/work-bg-pixel.jpg";
import contactBg from "@/assets/contact-bg-pixel.jpg";
import emailMarketingBg from "@/assets/services/email-marketing-bg.png";
import contentWritingBg from "@/assets/services/content-writing-bg.png";
import copywritingBg from "@/assets/services/copywriting-bg.png";
import strategyBg from "@/assets/services/strategy-bg.png";
import optimizationBg from "@/assets/services/optimization-bg.png";
import consultingBg from "@/assets/services/consulting-bg.png";
import convertBg from "@/assets/case-studies/convert-bg.png";
import roomvuBg from "@/assets/case-studies/roomvu-bg.png";
import nordicBg from "@/assets/case-studies/nordic-bg.png";
import cloudzyBg from "@/assets/case-studies/cloudzy-bg.png";
import convertLogo from "@/assets/clients/convert.svg";
import roomvuLogo from "@/assets/clients/roomvu.svg";
import nordicLogo from "@/assets/clients/nordic.svg";
import cloudzyLogo from "@/assets/clients/cloudzy.svg";
import { ClientLogos } from "@/components/ClientLogos";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { TestimonialsSection } from "@/components/ui/testimonials-with-marquee";
import { marqueeTestimonials } from "@/data/testimonials";
import { useState } from "react";
import { Typewriter } from "@/components/ui/typewriter-text";
const Index = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <AuroraBackground className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img
            src={heroImage}
            alt="Pixel art marketing"
            className="w-full h-full object-cover object-[35%_bottom] md:object-center"
          />
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="container mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="pixel-border bg-secondary px-3 py-2 max-w-[90vw] mx-auto">
              <p className="font-primary text-[9px] sm:text-xs text-center leading-tight sm:whitespace-nowrap">
                Copywriter • Ghostwriter • Content Marketer • Email Marketer
              </p>
            </div>
            <h1 className="font-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pixel-inverted leading-tight sm:leading-relaxed px-2">
              Words That Convert
            </h1>
            <div className="min-h-[4rem] md:min-h-0 flex items-center justify-center">
              <p className="font-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
                <Typewriter
                  text={[
                    "Let's make your brand stand out in a skeptical market.",
                    "Become the obvious choice in a skeptical market.",
                    "Tell your unforgettable story in a skeptical market.",
                  ]}
                  speed={100}
                  loop={true}
                  deleteSpeed={50}
                  delay={2000}
                />
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <PixelButton variant="primary" onClick={scrollToContact}>
                Work With Me
              </PixelButton>
              <PixelButton
                variant="accent"
                onClick={() =>
                  document.getElementById("work")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View Work
              </PixelButton>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-4 relative"
        style={{
          backgroundImage: `url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">About Me</h2>
          <PixelCard>
            <div className="font-secondary text-base md:text-lg leading-relaxed">
              <p className={`mb-6 ${!isExpanded ? "md:block" : ""}`}>
                Content and Copy Lead with <strong className="text-accent">5+ years of experience</strong> generating
                demand and high-quality leads in SaaS and B2B Tech companies. Generated{" "}
                <strong className="text-accent">$12M+ in client revenue</strong>, boosted email engagement (
                <strong className="text-accent">open rate +52%, CTOR +5%, registration +194%</strong>), and produced
                content <strong className="text-accent">ranking #1 and #0</strong>.
              </p>

              <div className={`${isExpanded ? "block" : "hidden md:block"}`}>
                <p className="mb-6">
                  Led content, email, and LinkedIn growth and strategy for startups and mid-sized firms across SaaS and
                  B2B Tech from early to growth stages.
                </p>

                <p>
                  Currently building expertise in the Web3, blockchain, and cryptocurrency space, connecting numbers to
                  narratives, and translating data into insight and strategy.
                </p>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="md:hidden mt-4 text-accent font-primary text-sm hover:underline"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          </PixelCard>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 px-4 relative"
        style={{
          backgroundImage: `url(${servicesBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-muted/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${emailMarketingBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <Mail className="w-12 h-12 mb-4 text-accent" />
                <h3 className="font-primary text-sm mb-3">Email Marketing</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  Strategic email campaigns that nurture leads and drive conversions through targeted messaging and
                  automation.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${contentWritingBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <FileText className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="font-primary text-sm mb-3">Content Writing</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  SEO-optimized blog posts, articles, and web content that engage readers and establish thought
                  leadership.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${copywritingBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <PenTool className="w-12 h-12 mb-4 text-accent" />
                <h3 className="font-primary text-sm mb-3">Copywriting</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  Persuasive copy for landing pages, ads, and sales materials that converts visitors into customers.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${strategyBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <Target className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="font-primary text-sm mb-3">Strategy</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  Comprehensive content strategies aligned with business goals and audience needs.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${optimizationBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <TrendingUp className="w-12 h-12 mb-4 text-accent" />
                <h3 className="font-primary text-sm mb-3">Optimization</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  A/B testing and analytics-driven improvements to maximize campaign performance.
                </p>
              </div>
            </PixelCard>

            <PixelCard className="relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `url(${consultingBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="relative z-10">
                <Users className="w-12 h-12 mb-4 text-secondary" />
                <h3 className="font-primary text-sm mb-3">Consulting</h3>
                <p className="font-secondary text-sm leading-relaxed">
                  Expert guidance on content strategy, messaging, and marketing automation.
                </p>
              </div>
            </PixelCard>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="work"
        className="py-24 px-4 relative"
        style={{
          backgroundImage: `url(${workBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="font-primary text-2xl md:text-4xl mb-12 text-center text-pixel">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Convert.com */}
            <Link to="/work?case=convert-com" className="h-full">
              <PixelCard className="relative overflow-hidden cursor-pointer h-full flex flex-col">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${convertBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-accent/20 pixel-border h-48 mb-6 flex flex-col items-center justify-center gap-4">
                    <img src={convertLogo} alt="Convert.com" className="h-12 brightness-0 invert" />
                    <span className="font-primary text-sm text-accent text-center">Content Marketing</span>
                  </div>
                  <h3 className="font-primary text-sm mb-3">Convert.com: SERP Rankings Achieved</h3>
                  <p className="font-secondary text-sm leading-relaxed mb-4">
                    Created bottom-of-funnel content strategy and wrote multi-perspective articles to establish brand
                    presence in SERPs for new features.
                  </p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Case Study</span>
                    <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Technology</span>
                  </div>
                </div>
              </PixelCard>
            </Link>

            {/* Roomvu */}
            <Link to="/work?case=roomvu" className="h-full">
              <PixelCard className="relative overflow-hidden cursor-pointer h-full flex flex-col">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${roomvuBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-secondary/20 pixel-border h-48 mb-6 flex flex-col items-center justify-center gap-4">
                    <img src={roomvuLogo} alt="Roomvu" className="h-12 brightness-0 invert" />
                    <span className="font-primary text-sm text-secondary text-center">Cold Email Marketing</span>
                  </div>
                  <h3 className="font-primary text-sm mb-3">Roomvu: 24,000+ Users Acquired</h3>
                  <p className="font-secondary text-sm leading-relaxed mb-4">
                    Redesigned email marketing strategy with advanced segmentation and hyper-personalized campaigns,
                    increasing weekly registrations from 170 to 500.
                  </p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Case Study</span>
                    <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Real Estate</span>
                  </div>
                </div>
              </PixelCard>
            </Link>

            {/* Nordic Defender */}
            <Link to="/work?case=nordic-defender" className="h-full">
              <PixelCard className="relative overflow-hidden cursor-pointer h-full flex flex-col">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${nordicBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-accent/20 pixel-border h-48 mb-6 flex flex-col items-center justify-center gap-4">
                    <img src={nordicLogo} alt="Nordic Defender" className="h-12 brightness-0 invert" />
                    <span className="font-primary text-sm text-accent text-center">Product Marketing</span>
                  </div>
                  <h3 className="font-primary text-sm mb-3">Nordic Defender: 30% Email Open Rate Increase</h3>
                  <p className="font-secondary text-sm leading-relaxed mb-4">
                    Managed all marketing channels for Next-Gen Pentest Solution including 100+ emails, 50+ technical
                    articles, and 43+ landing pages.
                  </p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Case Study</span>
                    <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Cybersecurity</span>
                  </div>
                </div>
              </PixelCard>
            </Link>

            {/* Cloudzy */}
            <Link to="/work?case=cloudzy" className="h-full">
              <PixelCard className="relative overflow-hidden cursor-pointer h-full flex flex-col">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `url(${cloudzyBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="bg-secondary/20 pixel-border h-48 mb-6 flex flex-col items-center justify-center gap-4">
                    <img src={cloudzyLogo} alt="Cloudzy" className="h-12 brightness-0 invert" />
                    <span className="font-primary text-sm text-secondary text-center">Technical Content</span>
                  </div>
                  <h3 className="font-primary text-sm mb-3">Cloudzy: #1 Rankings & 5X Conversion</h3>
                  <p className="font-secondary text-sm leading-relaxed mb-4">
                    Developed technical blog content and landing pages achieving #1 rankings, featured snippets, 5X
                    conversion rates, and 2,360+ users acquired.
                  </p>
                  <div className="flex gap-2 flex-wrap mt-auto">
                    <span className="pixel-border bg-secondary/30 px-3 py-1 text-xs font-secondary">Case Study</span>
                    <span className="pixel-border bg-accent/30 px-3 py-1 text-xs font-secondary">Technology</span>
                  </div>
                </div>
              </PixelCard>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 relative"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
              <PixelButton
                variant="accent"
                onClick={() => window.open("https://linkedin.com/in/arminparvin/", "_blank")}
              >
                LinkedIn
              </PixelButton>
            </div>
          </PixelCard>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <TestimonialsSection
        title="What Clients Say"
        description="Trusted by marketing leaders and growing businesses worldwide"
        testimonials={marqueeTestimonials}
      />

      {/* Client Logos Section */}
      <ClientLogos />

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
};
export default Index;
