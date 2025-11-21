import { Header } from "@/components/Header";
import { Cursor } from "@/components/ui/inverted-cursor";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Code, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      <Header />
      
      <section 
        className="flex-grow py-24 px-4 pt-32 relative"
        style={{
          backgroundImage: `url('/src/assets/about-bg-pixel.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">About Me</h1>
          
          <div className="pixel-border pixel-shadow bg-card p-6 mb-12 max-w-4xl mx-auto">
            <p className="font-secondary text-base md:text-lg leading-relaxed mb-6">
              I'm a content strategist and copywriter who believes in the power of words to drive action. With expertise
              in email marketing, content creation, and conversion optimization, I help businesses communicate their
              value effectively.
            </p>
            <p className="font-secondary text-base md:text-lg leading-relaxed mb-6">
              My approach combines data-driven insights with creative storytelling to deliver campaigns that resonate
              with your audience and achieve measurable results.
            </p>
            <p className="font-secondary text-base md:text-lg leading-relaxed">
              Whether you need compelling email sequences, engaging blog content, or conversion-focused copy, I bring
              a strategic mindset and proven techniques to every project. Let's work together to make your brand stand
              out in a skeptical market.
            </p>
          </div>
          
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8 pixel-border h-auto gap-2 p-2 bg-card/50">
              <TabsTrigger value="experience" className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="education" className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills" className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Code className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="recognition" className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
                <Award className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Recognition</span>
              </TabsTrigger>
              <TabsTrigger value="interests" className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
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
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="pixel-border">Email Marketing</Badge>
                  <Badge variant="secondary" className="pixel-border">Content Strategy</Badge>
                  <Badge variant="secondary" className="pixel-border">Copywriting</Badge>
                  <Badge variant="secondary" className="pixel-border">Conversion Optimization</Badge>
                </div>
                <p className="font-secondary text-lg text-muted-foreground">5+ Years of Professional Experience</p>
              </div>

              <div className="space-y-6">
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Content Strategist & Copywriter</h3>
                    <span className="font-secondary text-sm text-muted-foreground">2020 — Present</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">Freelance</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Crafted high-converting email campaigns resulting in 40%+ open rates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Developed content strategies that increased engagement by 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Created conversion-focused copy that boosted sales by 35%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Delivered data-driven content that resonates with target audiences</span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-primary text-xl">Email Marketing Specialist</h3>
                    <span className="font-secondary text-sm text-muted-foreground">2018 — 2020</span>
                  </div>
                  <p className="font-primary text-secondary mb-3">Digital Marketing Agency</p>
                  <ul className="space-y-2 font-secondary text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Managed email campaigns for 20+ clients across various industries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>Optimized email sequences to improve click-through rates by 50%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">●</span>
                      <span>A/B tested subject lines and content to maximize performance</span>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <h3 className="font-primary text-xl mb-2">Marketing Certification</h3>
                  <p className="font-primary text-secondary mb-2">HubSpot Academy</p>
                  <p className="font-secondary text-sm text-muted-foreground mb-4">2021</p>
                  <p className="font-secondary text-muted-foreground">
                    Advanced certification in inbound marketing, content strategy, and email marketing best practices.
                  </p>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <h3 className="font-primary text-xl mb-2">Copywriting Mastery</h3>
                  <p className="font-primary text-secondary mb-2">AWAI (American Writers & Artists Institute)</p>
                  <p className="font-secondary text-sm text-muted-foreground mb-4">2019</p>
                  <p className="font-secondary text-muted-foreground">
                    Comprehensive training in direct response copywriting and conversion optimization techniques.
                  </p>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <h3 className="font-primary text-xl mb-2">Bachelor of Arts in Communications</h3>
                  <p className="font-primary text-secondary mb-2">University Name</p>
                  <p className="font-secondary text-sm text-muted-foreground mb-4">2014 — 2018</p>
                  <p className="font-secondary text-muted-foreground">
                    Focus on digital media, persuasive writing, and marketing communications.
                  </p>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all">
                  <h3 className="font-primary text-xl mb-2">Google Analytics Certification</h3>
                  <p className="font-primary text-secondary mb-2">Google</p>
                  <p className="font-secondary text-sm text-muted-foreground mb-4">2020</p>
                  <p className="font-secondary text-muted-foreground">
                    Certified in Google Analytics for tracking and optimizing marketing performance.
                  </p>
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
                  <h3 className="font-primary text-xl mb-4">Writing & Strategy</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">Email Copywriting</Badge>
                    <Badge className="pixel-border">Content Strategy</Badge>
                    <Badge className="pixel-border">SEO Writing</Badge>
                    <Badge className="pixel-border">Storytelling</Badge>
                    <Badge className="pixel-border">Brand Voice</Badge>
                    <Badge className="pixel-border">Ghostwriting</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Marketing Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">Mailchimp</Badge>
                    <Badge className="pixel-border">HubSpot</Badge>
                    <Badge className="pixel-border">ConvertKit</Badge>
                    <Badge className="pixel-border">ActiveCampaign</Badge>
                    <Badge className="pixel-border">Google Analytics</Badge>
                    <Badge className="pixel-border">WordPress</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Conversion & Testing</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">A/B Testing</Badge>
                    <Badge className="pixel-border">CRO</Badge>
                    <Badge className="pixel-border">Landing Pages</Badge>
                    <Badge className="pixel-border">Lead Magnets</Badge>
                    <Badge className="pixel-border">Sales Funnels</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-6">
                  <h3 className="font-primary text-xl mb-4">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">B2B Marketing</Badge>
                    <Badge className="pixel-border">SaaS Content</Badge>
                    <Badge className="pixel-border">Newsletter Writing</Badge>
                    <Badge className="pixel-border">Case Studies</Badge>
                    <Badge className="pixel-border">Whitepapers</Badge>
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
                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2023 — </span>
                      Top Rated Email Marketing Specialist, Upwork
                    </p>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2022 — </span>
                      Content Marketing Award for Best Email Campaign
                    </p>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2021 — </span>
                      Featured in "Top 50 Marketing Writers to Follow"
                    </p>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-6 hover:pixel-shadow-lg transition-all flex items-center gap-4">
                  <Award className="w-6 h-6 text-accent" />
                  <div className="flex-1">
                    <p className="font-secondary">
                      <span className="font-primary">2020 — </span>
                      AWAI Circle of Success Award
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
                    <p className="font-secondary text-lg">Marketing Psychology: Understanding consumer behavior and decision-making</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Writing Fiction: Crafting short stories and creative narratives</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Podcasts: Deep dives into marketing, storytelling, and entrepreneurship</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Reading: Business books, copywriting classics, and psychological thrillers</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Coffee Culture: Exploring local cafes and brewing methods</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Hiking & Nature: Finding inspiration outdoors and disconnecting to recharge</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <span className="text-accent text-xl mt-1">●</span>
                    <p className="font-secondary text-lg">Photography: Capturing moments and practicing visual storytelling</p>
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
