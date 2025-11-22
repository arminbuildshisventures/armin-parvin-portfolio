import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { Cursor } from "@/components/ui/inverted-cursor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import workBg from "@/assets/work-bg-pixel.png";
import roomvuResults1 from "@/assets/work/roomvu-results-1.png";
import roomvuResults2 from "@/assets/work/roomvu-results-2.jpg";
import roomvuResults3 from "@/assets/work/roomvu-results-3.jpg";

interface CaseStudy {
  title: string;
  category: string;
  description: string;
  results: string;
  challenge: string;
  process: string;
  outcome: string;
  images: string[];
}

export default function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      title: "Convert.com",
      category: "Content Marketing",
      description: "Created bottom-of-funnel content strategy and production to establish brand presence in SERPs for new features.",
      results: "SERP Rankings Achieved | Organic Traffic Increased | Brand Recognition Established | Content Produced: 50+ Articles",
      challenge: "Convert.com needed to establish a strong brand presence in search results for their brand new features and seed Convert's name in the SERPs. The challenge was creating content that would rank well while also providing value to potential customers at the bottom of the funnel. They specifically needed multi-perspective, journalistic articles about a new space called Full-Stack Experimentation.",
      process: "Developed a comprehensive content strategy focusing on feature-specific content and Full-Stack Experimentation thought leadership. Conducted keyword research, competitor analysis, and created detailed content briefs. Worked closely with the product team to understand technical specifications and translated them into accessible, SEO-optimized content. Produced multi-perspective, journalistic articles that positioned Convert as leaders in the Full-Stack Experimentation space.",
      outcome: "Successfully established Convert.com's presence in SERPs for target keywords. The content strategy led to increased organic traffic and improved brand recognition within the industry. Content pieces consistently ranked in top positions for competitive keywords. Produced 50+ articles focused on Full-Stack Experimentation, positioning Convert as thought leaders in this emerging space.",
      images: [],
    },
    {
      title: "Roomvu",
      category: "Cold Email Marketing",
      description: "Roomvu is a PropTech platform offering hyper-local real estate video marketing. Through winning email marketing, copywriting, and storytelling techniques, brought them an added client base of 24,000+ users.",
      results: "Email Open Rate Increase: 10% | Email CTOR Increase: 2.5% | Emails Crafted: 1,000+ | Users Acquired: 24,000+",
      challenge: "Roomvu is a PropTech platform that offers hyper-local real estate video marketing. They acquire clients through different processes, including SEO, Cold Emails, paid ads, social media, organic, referrals, and Email Marketing. When we decided to work together, they already had a cold email marketing setup. However, the untapped potential was huge. Roomvu faced low user registration rates and needed to significantly improve conversion through their cold email marketing efforts. The existing campaigns weren't engaging enough and lacked strategic automation.",
      process: "I redesigned the entire email marketing strategy from the ground up. Implemented advanced segmentation, created hyper-personalized drip campaigns, A/B tested subject lines and copy, and developed automated workflows based on user behavior. I also optimized send times and refined messaging to resonate with the real estate professional audience.",
      outcome: "Through winning email marketing, copywriting, and storytelling techniques, I brought roomvu an added client base of 24,000+ users, increasing their weekly registrations from an average of 170 to an average of 500. Email open rate increased by 10%, email CTOR increased by 2.5%, and over 1,000+ emails were crafted throughout the engagement.",
      images: [roomvuResults2, roomvuResults3, roomvuResults1],
    },
    {
      title: "Nordic Defender",
      category: "Product Marketing",
      description: "Managed all marketing channels for Next-Gen Pentest Solution including email marketing, content writing, white papers, and sales documents.",
      results: "Email Open Rate Increase: 30% | Email CTOR Increase: 10% | Emails Crafted: 100+ | Technical Articles Written: 50+ | Sales Document Developed: 10+ | Landing Pages Developed: 43+",
      challenge: "Nordic Defender is an all-in-one cybersecurity solution provider that serves organizations, companies, and businesses in different industries and sizes. Nordic Defender entered a highly competitive cybersecurity market with established players. They needed to differentiate their products and establish credibility quickly to gain market share. I was responsible for all marketing channels related to their Next-Gen Pentest Solution, including email marketing, content writing, landing page writing, white paper writing, and sales document writing.",
      process: "I initiated and conducted in-depth market analysis proactively to identify trends and competitive differentiators. Partnered with cross-functional teams to simplify complex cybersecurity concepts into white papers, press releases, case studies, blogs, articles, emails, LinkedIn posts, webpages, and landing pages. I set up their email marketing system and used winning copywriting and storytelling techniques to maximize Nordic Defender's ROI and added revenue.",
      outcome: "Successfully positioned Nordic Defender as a credible player in the cybersecurity space. Achieved 30% increase in email open rates and 10% improvement in email CTOR. Created 100+ emails, 50+ technical articles, 10+ sales documents, and 43+ landing pages. The content strategy generated qualified leads and established the brand as a thought leader. Market awareness increased significantly within the first six months.",
      images: [],
    },
    {
      title: "Cloudzy",
      category: "Technical Content",
      description: "Wrote technical blog posts achieving #1 rankings and position zero on Google for target keywords.",
      results: "#1 Google rankings",
      challenge: "Cloudzy needed to improve their organic search visibility in a competitive cloud hosting market. Their existing content wasn't ranking well, and they were losing potential customers to competitors who dominated the search results.",
      process: "Researched high-value keywords with commercial intent. Created in-depth technical blog posts that provided genuine value to readers while incorporating SEO best practices. Focused on comprehensive coverage of topics, proper heading structure, internal linking, and user experience. Ensured technical accuracy while maintaining readability.",
      outcome: "Achieved #1 rankings and featured snippets (position zero) on Google for multiple target keywords. Organic traffic increased significantly, leading to more qualified leads. The technical blog posts became valuable resources frequently shared within the cloud hosting community.",
      images: ["/placeholder.svg"],
    },
    {
      title: "WP SMS Pro",
      category: "Content Strategy",
      description: "Developed comprehensive content strategy to drive product awareness and user engagement.",
      results: "Brand awareness increased",
      challenge: "WP SMS Pro struggled with low brand awareness in a niche market. They needed a content strategy that would educate their target audience about SMS marketing for WordPress while driving product adoption.",
      process: "Developed a multi-channel content strategy targeting WordPress site owners and developers. Created educational content about SMS marketing benefits, use cases, and implementation guides. Produced tutorials, comparison articles, and integration guides. Established a content calendar with consistent publishing schedule.",
      outcome: "Significantly increased brand awareness within the WordPress community. Organic traffic grew steadily, and product sign-ups improved. The educational content positioned WP SMS Pro as the go-to solution for WordPress SMS integration.",
      images: ["/placeholder.svg"],
    },
    {
      title: "LorenzoCPA",
      category: "Copywriting",
      description: "Crafted professional service copy and content to establish authority in accounting and tax services.",
      results: "Authority positioning",
      challenge: "LorenzoCPA needed to differentiate themselves in a crowded accounting services market. Their existing website copy didn't effectively communicate their expertise or build trust with potential clients.",
      process: "Rewrote all website copy with a focus on establishing authority and building client trust. Created service page copy that clearly explained complex tax concepts in accessible language. Developed a professional yet approachable brand voice. Crafted compelling calls-to-action and trust-building elements throughout the site.",
      outcome: "Successfully positioned LorenzoCPA as a trusted authority in accounting and tax services. The new copy improved website engagement metrics and increased consultation bookings. Client feedback indicated the website now effectively communicated the firm's expertise and professionalism.",
      images: ["/placeholder.svg"],
    },
    {
      title: "Citronity",
      category: "Digital Marketing",
      description: "Developed digital marketing strategies for brand visibility and lead generation across channels.",
      results: "Multi-channel presence",
      challenge: "Citronity lacked a cohesive digital marketing presence across channels. They needed an integrated strategy to improve brand visibility and generate quality leads across multiple platforms.",
      process: "Developed a comprehensive multi-channel digital marketing strategy. Coordinated content across social media, blog, email, and paid channels. Created consistent brand messaging and visual identity. Implemented tracking and analytics to measure performance across all channels. Optimized campaigns based on data-driven insights.",
      outcome: "Established strong multi-channel presence with consistent brand messaging. Lead generation increased across all channels with improved quality of leads. The integrated approach created synergy between channels, amplifying overall marketing effectiveness.",
      images: ["/placeholder.svg"],
    },
    {
      title: "BSuite365",
      category: "B2B Content",
      description: "Created B2B content marketing materials to drive enterprise client engagement and conversions.",
      results: "Enterprise engagement",
      challenge: "BSuite365 struggled to engage enterprise clients with their existing content. They needed sophisticated B2B content that would resonate with decision-makers and demonstrate clear ROI.",
      process: "Developed enterprise-focused content strategy with emphasis on ROI and business value. Created whitepapers, case studies, and thought leadership pieces. Collaborated with sales team to understand buyer pain points and objections. Crafted content for each stage of the enterprise buying cycle.",
      outcome: "Significantly improved engagement with enterprise prospects. The content assets became valuable tools for the sales team, shortening sales cycles. Multiple enterprise clients cited the content as influential in their decision-making process.",
      images: ["/placeholder.svg"],
    },
    {
      title: "WatchThemLive",
      category: "Email Marketing",
      description: "Executed email campaigns increasing open rates by 50%+ and click-through rates by 23%+.",
      results: "50%+ open rate increase",
      challenge: "WatchThemLive had low email engagement rates and struggled to convert subscribers into active users. Their email campaigns weren't delivering the expected ROI.",
      process: "Completely redesigned email campaign strategy with focus on personalization and value delivery. Implemented advanced segmentation based on user behavior and preferences. A/B tested every element from subject lines to CTAs. Created compelling copy that emphasized benefits over features. Optimized email design for better mobile experience.",
      outcome: "Achieved 50%+ increase in open rates and 23%+ improvement in click-through rates. Email campaigns became a primary driver of user activation and retention. The improved engagement led to measurable increases in product usage and customer lifetime value.",
      images: ["/placeholder.svg"],
    },
    {
      title: "Influencer Marketing Business",
      category: "Content Strategy",
      description: "Developed content strategy and materials for influencer marketing platform launch and growth.",
      results: "Platform launch success",
      challenge: "Launching a new influencer marketing platform required establishing credibility and attracting both brands and influencers to a two-sided marketplace. The platform needed content that would appeal to both audiences simultaneously.",
      process: "Developed dual-audience content strategy addressing both brands and influencers. Created launch materials including website copy, pitch decks, and educational resources. Produced thought leadership content about influencer marketing trends. Developed case studies and success stories as the platform gained traction.",
      outcome: "Successfully launched the platform with strong initial adoption from both sides. The content effectively communicated value propositions to different audience segments. Platform grew steadily with content serving as a key driver of user acquisition.",
      images: ["/placeholder.svg"],
    },
    {
      title: "Rahmaninia Digital Marketing Agency",
      category: "Agency Content",
      description: "Created comprehensive content suite for digital marketing agency brand positioning.",
      results: "Brand positioning achieved",
      challenge: "The agency needed to establish a strong brand identity and differentiate themselves in a competitive digital marketing landscape. They required a complete content suite that would showcase their expertise and attract high-value clients.",
      process: "Developed comprehensive brand positioning strategy and created full content suite including website copy, service descriptions, case studies, and thought leadership content. Crafted unique brand voice that balanced professionalism with approachability. Created portfolio presentations and client-facing materials.",
      outcome: "Successfully positioned the agency with a distinct brand identity. The content suite helped attract larger, more profitable clients. Agency credibility increased significantly, leading to improved close rates and higher-value contracts.",
      images: ["/placeholder.svg"],
    },
    {
      title: "Digital Marketing Agency",
      category: "Content Marketing",
      description: "Executed content marketing strategy to establish thought leadership and drive client acquisition.",
      results: "Thought leadership established",
      challenge: "The agency needed to establish thought leadership in a crowded market to attract premium clients. Their existing content wasn't positioning them as industry experts or generating quality leads.",
      process: "Developed thought leadership content strategy focusing on insights and industry trends. Created in-depth articles, research pieces, and commentary on marketing innovations. Established consistent publishing schedule and promoted content across channels. Positioned agency executives as industry voices through bylined articles and speaking opportunities.",
      outcome: "Successfully established the agency as thought leaders in digital marketing. Content generated consistent flow of inbound leads from qualified prospects. Industry recognition increased with several pieces being featured in major marketing publications.",
      images: ["/placeholder.svg"],
    },
    {
      title: "MV Production",
      category: "Creative Content",
      description: "Developed creative content and copy for media production company brand storytelling.",
      results: "Brand story developed",
      challenge: "MV Production needed to articulate their unique creative vision and attract high-end clients. Their existing content didn't capture the quality and creativity of their work.",
      process: "Developed brand storytelling approach that highlighted their creative process and portfolio. Crafted compelling project descriptions and case studies. Created website copy that balanced artistic vision with commercial appeal. Wrote client-facing materials that demonstrated production expertise.",
      outcome: "Successfully communicated MV Production's creative capabilities through engaging brand storytelling. The new content attracted higher-quality client inquiries and improved conversion rates. Portfolio presentations became more effective at closing deals.",
      images: ["/placeholder.svg"],
    },
    {
      title: "Boutique",
      category: "E-commerce Content",
      description: "Created e-commerce content strategy increasing website traffic by 38% and conversion rate by 23%.",
      results: "38% traffic growth",
      challenge: "The boutique struggled with low website traffic and poor conversion rates. Their product descriptions were generic, and the site lacked engaging content that would drive purchases.",
      process: "Developed comprehensive e-commerce content strategy including compelling product descriptions, category pages, and blog content. Implemented SEO best practices for product pages. Created lifestyle content that showcased products in context. Optimized calls-to-action and checkout copy to reduce friction.",
      outcome: "Achieved 38% increase in website traffic and 23% improvement in conversion rate. The enhanced product descriptions and content significantly improved user engagement and reduced bounce rates. Average order value increased as customers discovered more products through improved navigation and content.",
      images: ["/placeholder.svg"],
    },
    {
      title: "C-Level Executives, Coaches, and Speakers",
      category: "Ghostwriting",
      description: "Ghostwrote thought leadership content for C-level executives, coaches, and speakers to build their personal brands.",
      results: "Personal brand authority established",
      challenge: "Executives, coaches, and speakers needed to establish strong personal brands but lacked time to create consistent, high-quality content. They required authentic content that reflected their voice and expertise while maintaining professional standards.",
      process: "Conducted in-depth interviews to understand their perspectives, experiences, and unique insights. Developed content that authentically represented their voice and expertise. Created LinkedIn posts, articles, and keynote content. Maintained consistent publishing schedule while ensuring all content aligned with their brand positioning.",
      outcome: "Successfully built personal brand authority for multiple clients. Their LinkedIn following and engagement grew significantly. Several clients secured speaking opportunities and consulting contracts directly attributed to their enhanced online presence and thought leadership content.",
      images: ["/placeholder.svg"],
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
                <PixelCard 
                  key={index}
                  className="cursor-pointer transition-transform hover:-translate-x-1 hover:-translate-y-1"
                  onClick={() => setSelectedCaseStudy(project)}
                >
                  <div className="inline-block pixel-border bg-accent/20 px-3 py-1 mb-4">
                    <span className="font-primary text-xs">{project.category}</span>
                  </div>
                  <h3 className="font-primary text-lg mb-3">{project.title}</h3>
                  <p className="font-secondary text-sm mb-4">{project.description}</p>
                  <div className="pixel-border bg-secondary/20 px-3 py-2 mt-4">
                    <p className="font-secondary text-xs font-semibold">{project.results}</p>
                  </div>
                  <p className="font-primary text-xs text-accent mt-4">Click to read full case study →</p>
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

      {/* Case Study Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={() => setSelectedCaseStudy(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto pixel-border bg-background">
          {selectedCaseStudy && (
            <>
              <DialogHeader>
                <div className="inline-block pixel-border bg-accent/20 px-3 py-1 mb-4 w-fit">
                  <span className="font-primary text-xs">{selectedCaseStudy.category}</span>
                </div>
                <DialogTitle className="font-primary text-2xl md:text-3xl mb-4">
                  {selectedCaseStudy.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="space-y-8 mt-6">
                {/* Challenge Section */}
                <div className="space-y-3">
                  <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                    Challenge
                  </h3>
                  <p className="font-secondary text-sm leading-relaxed">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                {/* Process Section */}
                <div className="space-y-3">
                  <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                    Process
                  </h3>
                  <p className="font-secondary text-sm leading-relaxed">
                    {selectedCaseStudy.process}
                  </p>
                </div>

                {/* Outcome Section */}
                <div className="space-y-3">
                  <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                    Outcome
                  </h3>
                  <p className="font-secondary text-sm leading-relaxed">
                    {selectedCaseStudy.outcome}
                  </p>
                </div>

                {/* Results Images */}
                {selectedCaseStudy.images.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                      Results
                    </h3>
                    <div className="space-y-4">
                      {selectedCaseStudy.images.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedCaseStudy.images.slice(0, -1).map((image, index) => (
                            <div key={index} className="pixel-border p-2 bg-secondary/10">
                              <img 
                                src={image} 
                                alt={`${selectedCaseStudy.title} result ${index + 1}`}
                                className="w-full h-auto"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="pixel-border p-2 bg-secondary/10">
                        <img 
                          src={selectedCaseStudy.images[selectedCaseStudy.images.length - 1]} 
                          alt={`${selectedCaseStudy.title} result ${selectedCaseStudy.images.length}`}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Final Results Banner */}
                <div className="pixel-border bg-secondary/20 px-4 py-3 mt-6">
                  <p className="font-secondary text-sm font-semibold text-center">
                    {selectedCaseStudy.results}
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

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
