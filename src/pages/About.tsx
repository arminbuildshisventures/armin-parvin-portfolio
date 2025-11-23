import { Header } from "@/components/Header";
import { Cursor } from "@/components/ui/inverted-cursor";
import { ClientLogos } from "@/components/ClientLogos";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Code, Award, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import aboutBgPixel from "@/assets/about-bg-pixel.png";
import youngGuitar1 from "@/assets/journey/young-guitar-1.png";
import youngPractice from "@/assets/journey/young-practice.png";
import youngSmile from "@/assets/journey/young-smile.png";
import youngGlasses from "@/assets/journey/young-glasses.png";
import dedicationPiano from "@/assets/journey/dedication-piano.jpg";
import dedicationGuitarStudio from "@/assets/journey/dedication-guitar-studio.jpg";
import dedicationGuitarPerformance from "@/assets/journey/dedication-guitar-performance.png";
import professionalPerformance from "@/assets/journey/professional-performance-updated.png";
import professionalPortraitTech from "@/assets/journey/professional-portrait-tech.png";
import discoveryProfessional1 from "@/assets/journey/discovery-professional-1.png";
import discoveryProfessional2 from "@/assets/journey/discovery-professional-2.png";
import discoveryProfessional3 from "@/assets/journey/discovery-professional-3.png";
import discoveryProfessional4 from "@/assets/journey/discovery-professional-4.png";
import discoveryTeam from "@/assets/journey/discovery-team.png";
import presentDayHat from "@/assets/journey/present-day-hat.png";
import presentDaySuit from "@/assets/journey/present-day-suit.png";
import presentDayChair from "@/assets/journey/present-day-chair.png";
import coffeeWorkspace1 from "@/assets/journey/coffee-workspace-1.jpg";
import coffeeWorkspace2 from "@/assets/journey/coffee-workspace-2.jpg";
import coffeeEspresso from "@/assets/journey/coffee-espresso.jpg";
import coffeeHand from "@/assets/journey/coffee-hand.jpg";
import coffeeTable1 from "@/assets/journey/coffee-table-1.jpg";
import coffeeTable2 from "@/assets/journey/coffee-table-2.jpg";
import { useState } from "react";
export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  
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
            <p className={`font-secondary text-base md:text-lg leading-relaxed mb-6 ${!isExpanded ? "md:block" : ""}`}>
              Head of Content with <strong className="text-accent">5+ years of experience</strong> generating demand and high-quality leads in
              SaaS and B2B Tech companies. Generated <strong className="text-accent">$12M+ in client revenue</strong>, boosted email engagement
              (<strong className="text-accent">open rate +52%, CTOR +5%, registration +194%</strong>), and produced content{" "}
              <strong className="text-accent">ranking #1 and #0</strong>.
            </p>
            
            <div className={`${isExpanded ? "block" : "hidden md:block"}`}>
              <p className="font-secondary text-base md:text-lg leading-relaxed mb-6">
                Led content, email, and LinkedIn growth and strategy for startups and mid-sized firms across SaaS and B2B
                Tech from early to growth stages.
              </p>
              
              <p className="font-secondary text-base md:text-lg leading-relaxed">
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

          {/* Personal Story Section */}
          <div className="my-16 flex items-center gap-4">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <span className="font-primary text-xl md:text-2xl text-secondary pixel-border bg-card px-6 py-2">
              ◆ The Journey ◆
            </span>
            <div className="h-[2px] flex-1 bg-gradient-to-r from-secondary via-secondary to-transparent" />
          </div>

          <div className="mb-16 max-w-5xl mx-auto relative">
            {/* Connecting Thread */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-secondary via-accent to-secondary hidden md:block" style={{ transform: 'translateX(-50%)' }} />
            
            {/* Segment 1: Artistic Roots */}
            <div className="relative mb-12 md:mb-16">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="pixel-border pixel-shadow bg-card/80 p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all order-2 md:order-1">
                  <h3 className="font-primary text-xl md:text-2xl text-secondary mb-4">🎨 Artistic Roots</h3>
                  <p className="font-secondary text-base md:text-lg leading-relaxed">
                    I come from an artistic family, with my mom being a graphic designer and painter, and my dad an illustrator. 
                    Music made me thrive, so I went on to become a professional Classical and Flamenco guitar player and instructor.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 order-1 md:order-2">
                  <img src={youngGuitar1} alt="Young musician with guitar" className="pixel-border pixel-shadow w-full h-28 md:h-36 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={youngSmile} alt="Young artist" className="pixel-border pixel-shadow w-full h-28 md:h-36 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={youngPractice} alt="Practicing music" className="pixel-border pixel-shadow w-full h-28 md:h-36 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={youngGlasses} alt="Young portrait with glasses" className="pixel-border pixel-shadow w-full h-28 md:h-36 object-contain rounded-lg hover:scale-105 transition-transform" />
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-secondary pixel-border hidden md:block" style={{ transform: 'translate(50%, -50%) rotate(45deg)' }} />
            </div>

            {/* Segment 2: The Dedication */}
            <div className="relative mb-12 md:mb-16">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="grid grid-cols-3 gap-3 justify-center">
                  <img src={dedicationPiano} alt="Piano practice" className="pixel-border pixel-shadow w-full h-40 md:h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={dedicationGuitarStudio} alt="Guitar studio session" className="pixel-border pixel-shadow w-full h-40 md:h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={dedicationGuitarPerformance} alt="Guitar performance" className="pixel-border pixel-shadow w-full h-40 md:h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                </div>
                <div className="pixel-border pixel-shadow bg-card/80 p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <h3 className="font-primary text-xl md:text-2xl text-secondary mb-4">🎸 The Dedication</h3>
                  <p className="font-secondary text-base md:text-lg leading-relaxed">
                    When people were mining and buying Bitcoin, I was practicing music for well over 16 hours a day (huh ....). 
                    At some point, I realized that teaching wasn't my passion (even though I still mentor many people), so I decided 
                    to explore different paths to find out what was.
                  </p>
                </div>
              </div>
              <div className="absolute -left-4 top-1/2 w-8 h-8 bg-accent pixel-border hidden md:block" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />
            </div>

            {/* Segment 3: The Discovery */}
            <div className="relative mb-12 md:mb-16">
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="pixel-border pixel-shadow bg-accent/10 border-accent/30 p-6 md:p-8 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all order-2 md:order-1">
                  <h3 className="font-primary text-xl md:text-2xl text-accent mb-4">💡 The Discovery</h3>
                  <p className="font-secondary text-base md:text-lg leading-relaxed">
                    I discovered marketing, and content immediately caught my attention (well, I am quite the storyteller, right?). 
                    I started writing blogs, landing page and webpage copy, emails, and LinkedIn posts. The blogs started ranking #1 
                    and #0 on Google, landing page conversion rates tripled, emails started getting too many signups, and LinkedIn 
                    posts started generating leads.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  {/* Professional portraits in a creative grid */}
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <img src={discoveryProfessional1} alt="Professional portrait 1" className="pixel-border pixel-shadow w-full h-32 md:h-40 object-contain rounded-lg hover:scale-105 transition-transform" />
                    <img src={discoveryProfessional2} alt="Professional portrait 2" className="pixel-border pixel-shadow w-full h-32 md:h-40 object-contain rounded-lg hover:scale-105 transition-transform" />
                    <img src={discoveryProfessional3} alt="Professional portrait 3" className="pixel-border pixel-shadow w-full h-32 md:h-40 object-contain rounded-lg hover:scale-105 transition-transform" />
                  </div>
                  {/* Team collaboration and individual portrait */}
                  <div className="grid grid-cols-2 gap-3">
                    <img src={discoveryTeam} alt="Team collaboration" className="pixel-border pixel-shadow w-full h-32 md:h-40 object-contain rounded-lg hover:scale-105 transition-transform" />
                    <img src={discoveryProfessional4} alt="Professional portrait 4" className="pixel-border pixel-shadow w-full h-32 md:h-40 object-contain rounded-lg hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-secondary pixel-border hidden md:block" style={{ transform: 'translate(50%, -50%) rotate(45deg)' }} />
            </div>

            {/* Segment 4: Tech Immersion */}
            <div className="relative mb-12 md:mb-16">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1 pixel-border pixel-shadow bg-card/80 p-6 md:p-8 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <h3 className="font-primary text-xl md:text-2xl text-secondary mb-4">🚀 Tech Immersion</h3>
                  <p className="font-secondary text-base md:text-lg leading-relaxed">
                    My technology nerdiness allowed me to work with clients across various tech sectors, including FinTech, PropTech, 
                    SaaS, MarCom, Cloud Infrastructure, Cybersecurity, and Software Development.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  {/* Professional portraits grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <img src={professionalPortraitTech} alt="Professional portrait with hat" className="pixel-border pixel-shadow w-full h-48 md:h-56 object-contain rounded-lg hover:scale-105 transition-transform" />
                    <img src={professionalPerformance} alt="Professional portrait" className="pixel-border pixel-shadow w-full h-48 md:h-56 object-contain rounded-lg hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute -left-4 top-1/2 w-8 h-8 bg-accent pixel-border hidden md:block" style={{ transform: 'translate(-50%, -50%) rotate(45deg)' }} />
            </div>

            {/* Segment 5: Present Day */}
            <div className="relative">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-1 md:order-1 pixel-border pixel-shadow bg-secondary/10 border-secondary/30 p-6 md:p-8 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <h3 className="font-primary text-xl md:text-2xl text-secondary mb-4">📊 Present Day</h3>
                  <p className="font-secondary text-base md:text-lg leading-relaxed">
                    Recently, I have immersed myself in finance, economics, and especially Web3, blockchain, and cryptocurrency 
                    research analysis. As a former math nerd, I can connect numbers to narratives and translate data into insight 
                    and strategy.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  {/* Present day portraits in creative grid */}
                  <div className="grid grid-cols-2 gap-3">
                    <img src={presentDayHat} alt="Present day portrait with hat" className="pixel-border pixel-shadow w-full h-48 md:h-56 object-contain rounded-lg hover:scale-105 transition-transform" />
                    <img src={presentDaySuit} alt="Present day professional portrait" className="pixel-border pixel-shadow w-full h-48 md:h-56 object-contain rounded-lg hover:scale-105 transition-transform" />
                  </div>
                  <div className="mt-3">
                    <img src={presentDayChair} alt="Present day portrait with red hat" className="pixel-border pixel-shadow w-full h-48 md:h-56 object-contain rounded-lg hover:scale-105 transition-transform" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 w-8 h-8 bg-accent pixel-border hidden md:block" style={{ transform: 'translate(50%, -50%) rotate(45deg)' }} />
            </div>

            {/* Coffee & Lifestyle Section */}
            <div className="relative mt-8">
              <div className="pixel-border pixel-shadow bg-accent/10 border-accent/30 p-6 md:p-8 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                <p className="font-secondary text-base md:text-lg leading-relaxed text-accent font-medium italic border-l-4 border-accent pl-4 mb-6">
                  When I'm not working (does that even happen?), I'm sipping on too much specialty coffee and working. Yes, I'm 
                  working even when I'm not.
                </p>
                
                {/* Coffee photos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <img src={coffeeWorkspace1} alt="Workspace with coffee" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={coffeeWorkspace2} alt="Outdoor workspace" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={coffeeEspresso} alt="Espresso shot" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={coffeeHand} alt="Coffee in hand" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={coffeeTable1} alt="Coffee table setup" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                  <img src={coffeeTable2} alt="Coffee table view" className="pixel-border pixel-shadow w-full h-48 object-contain rounded-lg hover:scale-105 transition-transform" />
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid sm:grid-cols-5 grid-cols-3 mb-8 pixel-border h-auto gap-2 p-2 bg-card/50">
              <TabsTrigger
                value="experience"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-xs sm:text-sm"
              >
                <Briefcase className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-xs sm:text-sm"
              >
                <GraduationCap className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-xs sm:text-sm"
              >
                <Code className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger
                value="recognition"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-xs sm:text-sm col-span-3 sm:col-span-1"
              >
                <Award className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Recognition</span>
              </TabsTrigger>
              <TabsTrigger
                value="interests"
                className="pixel-border data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground text-xs sm:text-sm col-span-3 sm:col-span-1"
              >
                <Target className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">Interests</span>
              </TabsTrigger>
            </TabsList>

            {/* Experience Tab */}
            <TabsContent value="experience" className="space-y-6">
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <h2 className="font-primary text-lg sm:text-2xl md:text-3xl text-pixel">Professional Experience</h2>
              </div>

              <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6 mb-6">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="font-primary text-xl sm:text-2xl md:text-3xl text-secondary mb-2">5+ Years</h3>
                  <p className="font-secondary text-base sm:text-lg text-muted-foreground">of Professional Experience</p>
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
                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Head of Content</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Mar. 2023 — Nov. 2025</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">Renee Content · Remote</p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>Generated $12M+ in measurable client revenue through ROI-focused content campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Mentored and led a team of 12 writers and marketers, overseeing their deliverables and providing
                        feedback and training materials to maintain high quality, authentic voice, and brand alignment
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Content Marketing Mentor</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Mar. 2023 — Nov. 2025</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">ADPList · Remote</p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Mentored global marketers and founders through 80+ sessions totaling 2,600+ minutes of 1:1
                        guidance
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Guest Speaker</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Apr. 2025</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">ADPList's 2025 Don't Settle Conference · Remote</p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Delivered a 1-hour speech on "The $100K Side Hustle Formula: A Step-by-Step Guide to
                        Monetization"
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Senior Email Marketing Manager</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Nov. 2023 — Jan. 2025</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">
                    Roomvu · Vancouver, British Columbia, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Strategized, developed, and sent cold emails to 1M+ leads weekly and marketing emails to
                        brokerages
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>Increased weekly registration by 194%+ (from an average of 170 to an average of 500)</span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Digital Marketing Manager</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Jun. 2023 — Sep. 2023</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">
                    Citronity · Vancouver, British Columbia, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Developed and implemented comprehensive digital marketing strategies to enhance the company's brand visibility, generating qualified leads, driving customer acquisition, identifying target audiences, creating engaging campaigns, and leveraging various digital channels to maximize reach and engagement
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">
                      Product Marketing Manager & Technical Content Specialist
                    </h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground flex-shrink-0">
                      Nov. 2022 — Jun. 2023
                    </span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">Nordic Defender · Gothenburg, Sweden (Remote)</p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Initiated and conducted in-depth market analysis proactively to identify trends and competitive
                        differentiators
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>
                        Partnered with cross-functional teams to simplify complex cybersecurity concepts into white
                        papers, press releases, case studies, blogs, articles, emails, LinkedIn posts, webpages, and
                        landing pages
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Technical Content Writer</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Apr. 2022 — Sep. 2022</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">Cloudzy · Dubai, United Arab Emirates (Remote)</p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>Wrote blog posts ranking #1 and position zero on Google, with 13+ min time on page</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
                      <span>Increased webpage and landing page conversion rates by 3.7%</span>
                    </li>
                  </ul>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                    <h3 className="font-primary text-base sm:text-xl">Content Marketer & Email Marketer</h3>
                    <span className="font-secondary text-xs sm:text-sm text-muted-foreground">Sep. 2021 — Apr. 2022</span>
                  </div>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-3">
                    WatchThemLive · Toronto, Ontario, Canada (Remote)
                  </p>
                  <ul className="space-y-2 font-secondary text-sm sm:text-base text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1 flex-shrink-0">●</span>
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
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <h2 className="font-primary text-lg sm:text-2xl md:text-3xl text-pixel">Education</h2>
              </div>

              <div className="space-y-6">
                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <h3 className="font-primary text-base sm:text-xl mb-2">Kharazmi University</h3>
                  <p className="font-primary text-sm sm:text-base text-secondary mb-2">Bachelor of Arts - BA, English Language and Literature</p>
                  <p className="font-secondary text-xs sm:text-sm text-muted-foreground mb-4">2017 - 2021</p>
                  <p className="font-secondary text-sm sm:text-base text-muted-foreground">
                    Studied and analyzed major works of English literature and philosophy, history, and elementary French language.
                  </p>
                </div>
                
                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6">
                  <h3 className="font-primary text-base sm:text-xl mb-4 sm:mb-6">Professional Certifications</h3>
                  <div className="grid grid-cols-1 gap-4 font-secondary text-sm sm:text-base">
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
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Code className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <h2 className="font-primary text-lg sm:text-2xl md:text-3xl text-pixel">Skills & Expertise</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6">
                  <h3 className="font-primary text-base sm:text-xl mb-4">Finance</h3>
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

                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6">
                  <h3 className="font-primary text-base sm:text-xl mb-4">Marketing & Sales</h3>
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

                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6">
                  <h3 className="font-primary text-base sm:text-xl mb-4">Tools</h3>
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

                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6">
                  <h3 className="font-primary text-base sm:text-xl mb-4">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="pixel-border">Cross-Functional Team Leadership</Badge>
                    <Badge className="pixel-border">Stakeholder Communication</Badge>
                    <Badge className="pixel-border">Team Collaboration</Badge>
                    <Badge className="pixel-border">Adaptability</Badge>
                    <Badge className="pixel-border">Quick Learning</Badge>
                    <Badge className="pixel-border">Time Management</Badge>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6 col-span-full">
                  <h3 className="font-primary text-base sm:text-xl mb-4">Languages</h3>
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
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
                <h2 className="font-primary text-lg sm:text-2xl md:text-3xl text-pixel">Awards & Recognition</h2>
              </div>

              <div className="space-y-4">
                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-3 sm:gap-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-secondary text-sm sm:text-base">
                      <span className="font-primary">2025 — </span>
                      Guest Speaker | ADPList's Don't Settle Conference
                    </p>
                  </div>
                </div>

                <div className="pixel-border pixel-shadow bg-card p-4 sm:p-6 hover:pixel-shadow-lg hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all flex items-center gap-3 sm:gap-4">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-secondary text-sm sm:text-base">
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

              <div className="pixel-border pixel-shadow bg-card/30 p-4 sm:p-6 md:p-8">
                <h3 className="font-primary text-base sm:text-xl mb-4 sm:mb-6">Hobbies & Passions</h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Finance and Economics:  Connecting numbers to narratives, and translating data into insight and
                      strategy
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Marketing Psychology: Understanding consumer behavior, decision-making, and influence
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Entrepreneurship: Problem-solving, leadership, and high-level strategizing
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Reading: Business books, finance literature, and marketing classics
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Coffee: Exploring specialty (third-wave) coffee and different brewing methods
                    </p>
                  </div>

                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-accent text-lg sm:text-xl mt-1 flex-shrink-0">●</span>
                    <p className="font-secondary text-sm sm:text-base md:text-lg">
                      Music: Listening to Classical and Jazz music and playing Flamenco and Classical Guitar
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

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
}
