import { Header } from "@/components/Header";
import { Cursor } from "@/components/ui/inverted-cursor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Code, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import aboutBgPixel from "@/assets/about-bg-pixel.png";
export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      <Header />

      <section
        className="flex-grow py-24 px-4 pt-32 relative"
        style={{
          backgroundImage: `url(${aboutBgPixel})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">About Me</h1>

          <div className="pixel-border pixel-shadow bg-card p-6 mb-12 max-w-4xl mx-auto">
            <p className="font-secondary text-base md:text-lg leading-relaxed mb-6">
              Head of Content with <strong>5+ years of experience</strong> generating demand and high-quality leads in
              SaaS and B2B Tech companies. Generated <strong>$12M+ in client revenue</strong>, boosted email engagement
              (<strong>open rate +52%, CTOR +5%, registration +194%</strong>), and produced content{" "}
              <strong>ranking #1 and #0</strong>.
              <br />
              <br />
              Led content, email, and LinkedIn growth and strategy for startups and mid-sized firms across SaaS and B2B
              Tech from early to growth stages.
              <br />
              <br />
              Currently building expertise in the Web3, blockchain, and cryptocurrency space, connecting numbers to
              narratives, and translating data into insight and strategy.
            </p>
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 pixel-border h-auto gap-2 p-2 bg-card/50">
              <TabsTrigger
                value="experience"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="recognition"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Award className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Recognition</span>
              </TabsTrigger>
              <TabsTrigger
                value="interests"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
              >
                <Target className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Interests</span>
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="w-8 h-8 text-secondary" />
                <h2 className="font-primary text-2xl md:text-3xl text-pixel">Professional Experience</h2>
              </div>

              <div className="pixel-border pixel-shadow bg-card/30 p-6 mb-6">
                <div className="text-center mb-6">
                  <h3 className="font-primary text-2xl md:text-3xl text-secondary mb-2">5+ Years</h3>
                  <p className="font-secondary text-lg text-muted-foreground">of Professional Experience</p>
                </div>
                <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                  <div className="flex gap-3">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="flex gap-3 animate-marquee shrink-0">
                        <Badge variant="secondary" className="pixel-border">Email Marketing</Badge>
                        <Badge variant="secondary" className="pixel-border">Content Strategy</Badge>
                        <Badge variant="secondary" className="pixel-border">Copywriting</Badge>
                        <Badge variant="secondary" className="pixel-border">Ghostwriting</Badge>
                        <Badge variant="secondary" className="pixel-border">Content Writing</Badge>
                        <Badge variant="secondary" className="pixel-border">SEO</Badge>
                        <Badge variant="secondary" className="pixel-border">Leadership</Badge>
                        <Badge variant="secondary" className="pixel-border">Cryptocurrency Research Analysis</Badge>
                        <Badge variant="secondary" className="pixel-border">Creative Writing</Badge>
                        <Badge variant="secondary" className="pixel-border">Storytelling</Badge>
                        <Badge variant="secondary" className="pixel-border">Technical Writing</Badge>
                        <Badge variant="secondary" className="pixel-border">Content Editing</Badge>
                        <Badge variant="secondary" className="pixel-border">Copy Editing</Badge>
                        <Badge variant="secondary" className="pixel-border">Proofreading</Badge>
                        <Badge variant="secondary" className="pixel-border">Campaign Management</Badge>
                        <Badge variant="secondary" className="pixel-border">Research</Badge>
                        <Badge variant="secondary" className="pixel-border">Marketing</Badge>
                        <Badge variant="secondary" className="pixel-border">Sales</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Head of Content</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Mar. 2023 — Nov. 2025</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">Renee Content · Remote</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Generated $12M+ in measurable client revenue through ROI-focused content campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Mentored and led a team of 12 writers and marketers, overseeing their deliverables and providing
                        feedback and training materials to maintain high quality, authentic voice, and brand alignment
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Content Marketing Mentor</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Mar. 2023 — Nov. 2025</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">ADPList · Remote</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Mentored global marketers and founders through 80+ sessions totaling 2,600+ minutes of 1:1
                        guidance
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Guest Speaker</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Apr. 2025</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">ADPList's 2025 Don't Settle Conference · Remote</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Delivered a 1-hour speech on "The $100K Side Hustle Formula: A Step-by-Step Guide to
                        Monetization"
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Senior Email Marketing Manager</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Nov. 2023 — Jan. 2025</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">
                    Roomvu · Vancouver, British Columbia, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Strategized, developed, and sent cold emails to 1M+ leads weekly and marketing emails to
                        brokerages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Increased weekly registration by 194%+ (from an average of 170 to an average of 500)</span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Digital Marketing Manager</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Jun. 2023 — Sep. 2023</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">
                    Citronity · Vancouver, British Columbia, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Developed and implemented comprehensive digital marketing strategies to enhance the company's brand visibility, generating qualified leads, driving customer acquisition, identifying target audiences, creating engaging campaigns, and leveraging various digital channels to maximize reach and engagement
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <h3 className="font-primary text-xl flex-1">
                      Product Marketing Manager & Technical Content Specialist
                    </h3>
                    <span className="font-secondary text-sm text-muted-foreground whitespace-nowrap flex-shrink-0">
                      Nov. 2022 — Jun. 2023
                    </span>
                  </div>
                  <p className="font-primary text-secondary mb-3">Nordic Defender · Gothenburg, Sweden (Remote)</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Initiated and conducted in-depth market analysis proactively to identify trends and competitive
                        differentiators
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Partnered with cross-functional teams to simplify complex cybersecurity concepts into white
                        papers, press releases, case studies, blogs, articles, emails, LinkedIn posts, webpages, and
                        landing pages
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Technical Content Writer</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Apr. 2022 — Sep. 2022</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">Cloudzy · Dubai, United Arab Emirates (Remote)</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Wrote blog posts ranking #1 and position zero on Google, with 13+ min time on page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Increased webpage and landing page conversion rates by 3.7%</span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Content Marketer & Email Marketer</h3>
                    <span className="font-secondary text-sm text-muted-foreground">Sep. 2021 — Apr. 2022</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">
                    WatchThemLive · Toronto, Ontario, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>
                        Developed and executed targeted email marketing campaigns to nurture leads, drive engagement, and grow conversions, increasing open rates by 50%+ and CTRs by 23%+
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Education Tab */}
            <TabsContent value="education" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-8 h-8 text-secondary" />
                <h2 className="font-primary text-2xl md:text-3xl text-pixel">Education</h2>
              </div>

              <div className="space-y-6">
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <h3 className="font-primary text-xl mb-2">Kharazmi University</h3>
                  <p className="font-primary text-secondary mb-2">Bachelor of Arts - BA, English Language and Literature</p>
                  <p className="font-secondary text-sm text-muted-foreground mb-4">2017 - 2021</p>
                  <p className="font-secondary text-muted-foreground">
                    Studied and analyzed major works of English literature and philosophy, history, and elementary French language.
                  </p>
                </div>
                
                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-6">Professional Certifications</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-secondary">
                    <div>
                      <p className="font-semibold">Digital Skills: Web Analytics</p>
                      <p className="text-muted-foreground text-sm">Accenture | Issued Dec 2021</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Successful Negotiation: Essential Strategies and Skills</p>
                      <p className="text-muted-foreground text-sm">Coursera | Issued Dec 2021</p>
                      <p className="text-xs text-muted-foreground">Credential ID: AQQT4SSWMYM2</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Digital Skills: Digital Marketing</p>
                      <p className="text-muted-foreground text-sm">Accenture | Issued Nov 2021</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Essential Skills for Your Career Development</p>
                      <p className="text-muted-foreground text-sm">University of Leeds | Issued Nov 2021</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Learning Python (2020)</p>
                      <p className="text-muted-foreground text-sm">LinkedIn | Issued Nov 2021</p>
                      <p className="text-xs text-muted-foreground">Credential ID: AcXR1nPYplQDz7S17VPq01atgnhj</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">The Fundamentals of Digital Marketing</p>
                      <p className="text-muted-foreground text-sm">Google | Issued Nov 2021</p>
                      <p className="text-xs text-muted-foreground">Credential ID: TKU 5TS KJX</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Inbound Marketing</p>
                      <p className="text-muted-foreground text-sm">HubSpot Academy | Issued Sep 2021</p>
                      <p className="text-xs text-muted-foreground">Credential ID: 19725d86b52b4b828f77c3189524c998</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Digital Advertising</p>
                      <p className="text-muted-foreground text-sm">HubSpot Academy | Issued Oct 2021</p>
                      <p className="text-xs text-muted-foreground">Credential ID: e2f041055da847699222539df93e4e13</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Code className="w-8 h-8 text-secondary" />
                <h2 className="font-primary text-2xl md:text-3xl text-pixel">Skills & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Finance</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">Macroeconomics</Badge>
                    <Badge className="pixel-border">Cryptocurrency Analysis</Badge>
                    <Badge className="pixel-border">Fundamental Analysis</Badge>
                    <Badge className="pixel-border">On-Chain Analysis</Badge>
                    <Badge className="pixel-border">Tokenomics</Badge>
                    <Badge className="pixel-border">Technical Analysis</Badge>
                    <Badge className="pixel-border">DeFi</Badge>
                    <Badge className="pixel-border">Risk Management</Badge>
                    <Badge className="pixel-border">Portfolio Management</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Marketing & Sales</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">SEO Content Writing</Badge>
                    <Badge className="pixel-border">Email Marketing</Badge>
                    <Badge className="pixel-border">LinkedIn Executive Branding</Badge>
                    <Badge className="pixel-border">Webpage Copywriting</Badge>
                    <Badge className="pixel-border">Landing Page Copywriting</Badge>
                    <Badge className="pixel-border">Direct-Response Copywriting</Badge>
                    <Badge className="pixel-border">Sales Email Writing</Badge>
                    <Badge className="pixel-border">Negotiation</Badge>
                    <Badge className="pixel-border">B2B Sales</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">TradingView</Badge>
                    <Badge className="pixel-border">Token Terminal</Badge>
                    <Badge className="pixel-border">CoinMarketCap</Badge>
                    <Badge className="pixel-border">DefiLlama</Badge>
                    <Badge className="pixel-border">Tokenomist</Badge>
                    <Badge className="pixel-border">RootData</Badge>
                    <Badge className="pixel-border">Dune</Badge>
                    <Badge className="pixel-border">Excel</Badge>
                    <Badge className="pixel-border">Power BI</Badge>
                    <Badge className="pixel-border">Metabase</Badge>
                    <Badge className="pixel-border">GA4</Badge>
                    <Badge className="pixel-border">ActiveCampaign</Badge>
                    <Badge className="pixel-border">Customer.io</Badge>
                    <Badge className="pixel-border">Mautic</Badge>
                    <Badge className="pixel-border">Ahrefs</Badge>
                    <Badge className="pixel-border">Semrush</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">Cross-Functional Team Leadership</Badge>
                    <Badge className="pixel-border">Stakeholder Communication</Badge>
                    <Badge className="pixel-border">Team Collaboration</Badge>
                    <Badge className="pixel-border">Adaptability</Badge>
                    <Badge className="pixel-border">Quick Learning</Badge>
                    <Badge className="pixel-border">Time Management</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6 md:col-span-2">
                  <h3 className="font-primary text-xl mb-4">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">English (Native Proficiency)</Badge>
                    <Badge className="pixel-border">French (Elementary)</Badge>
                    <Badge className="pixel-border">Farsi (Native)</Badge>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Recognition Tab */}
            <TabsContent value="recognition" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-secondary" />
                <h2 className="font-primary text-2xl md:text-3xl text-pixel">Awards & Recognition</h2>
              </div>

              <div className="space-y-4">
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2025 — </span>
                      Guest Speaker | ADPList's Don't Settle Conference
                    </p>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2025 — </span>
                      ADPList Top 50 Mentor
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Interests Tab */}
            <TabsContent value="interests" className="space-y-6">
              <div className="flex items-center gap-4 mb-8">
                <Target className="w-8 h-8 text-secondary" />
                <h2 className="font-primary text-2xl md:text-3xl text-pixel">Interests</h2>
              </div>

              <div className="pixel-border pixel-shadow bg-card/30 p-8">
                <h3 className="font-primary text-xl mb-6">Hobbies & Passions</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Finance and Economics:  Connecting numbers to narratives, and translating data into insight and
                      strategy
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Marketing Psychology: Understanding consumer behavior, decision-making, and influence
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Entrepreneurship: Problem-solving, leadership, and high-level strategizing
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Reading: Business books, finance literature, and marketing classics
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Coffee: Exploring specialty (third-wave) coffee and different brewing methods
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">
                      Music: Listening to Classical and Jazz music and playing Flamenco and Classical Guitar
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
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
