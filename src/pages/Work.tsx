import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { ClientLogos } from "@/components/ClientLogos";
import { Cursor } from "@/components/ui/inverted-cursor";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import workBg from "@/assets/work-bg-pixel.png";
import roomvuResults1 from "@/assets/work/roomvu-results-1.png";
import roomvuResults2 from "@/assets/work/roomvu-results-2.jpg";
import roomvuResults3 from "@/assets/work/roomvu-results-3.jpg";
import watchthemLiveResults1 from "@/assets/work/watchthemlive-results-1.jpg";
import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import alirezaKhorshidi from "@/assets/testimonials/alireza-khorshidi.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
import mehdiRahmaninia from "@/assets/testimonials/avatar-3.png";
import niloofar from "@/assets/testimonials/avatar-6.png";
import avatar7 from "@/assets/testimonials/avatar-7.png";
import mahmoudValanejad from "@/assets/testimonials/avatar-9.png";
import shadiV from "@/assets/testimonials/shadi-avatar.png";
import { Star } from "lucide-react";

interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  description: string;
  results: string;
  challenge: string;
  process: string;
  outcome: string;
  images: string[];
  testimonial?: {
    name: string;
    title: string;
    company: string;
    avatar: string;
    rating: number;
    text: string;
  };
  interview?: {
    url: string;
    content?: string;
  };
}

interface WorkItem {
  slug?: string;
  title: string;
  description: string;
  results: string;
  workType: string[];
  industry: string[];
  format: string[];
  downloadUrl?: string;
  viewImageUrl?: string;
  externalUrl?: string;
  beforeAfterImage?: string;
}

const getButtonText = (workTypes: string[]) => {
  if (workTypes.includes("Press Release")) return "Read Press Release";
  if (workTypes.includes("Case Study")) return "Read Case Study";
  if (workTypes.includes("Blog")) return "Read Blog";
  if (workTypes.includes("Research Analysis")) return "Download PDF";
  if (workTypes.includes("LinkedIn Post")) return "View Post";
  return "Read Article";
};

export default function Work() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showFullInterview, setShowFullInterview] = useState(false);
  const [viewImageUrl, setViewImageUrl] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("case-studies");
  const [highlightedWorkSlug, setHighlightedWorkSlug] = useState<string | null>(null);
  
  // Filter states
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  
  // Dropdown states
  const [workTypeOpen, setWorkTypeOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  // Refs for click-away
  const workTypeRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (workTypeRef.current && !workTypeRef.current.contains(event.target as Node)) {
        setWorkTypeOpen(false);
      }
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setIndustryOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Utility functions for deep linking
  const findCaseStudyBySlug = (slug: string): CaseStudy | null => {
    return caseStudies.find(cs => cs.slug === slug) || null;
  };

  const findWorkItemBySlug = (slug: string): WorkItem | null => {
    return selectedWork.find(w => w.slug === slug) || null;
  };

  // Handle URL parameters for deep linking
  useEffect(() => {
    const caseSlug = searchParams.get('case');
    const workSlug = searchParams.get('work');

    if (caseSlug) {
      const caseStudy = findCaseStudyBySlug(caseSlug);
      if (caseStudy) {
        setSelectedCaseStudy(caseStudy);
        setActiveTab('case-studies');
      } else {
        // Invalid slug, clear parameter
        setSearchParams({});
      }
    } else if (workSlug) {
      // For work items, switch to tab and highlight
      const workItem = findWorkItemBySlug(workSlug);
      if (workItem) {
        setActiveTab('featured-work');
        setHighlightedWorkSlug(workSlug);
        
        // Scroll to the work item after a brief delay to ensure tab switch
        setTimeout(() => {
          const element = document.getElementById(`work-${workSlug}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 300);
        
        // Clear highlight after 3 seconds
        setTimeout(() => {
          setHighlightedWorkSlug(null);
        }, 3000);
      } else {
        // Invalid slug, clear parameter
        setSearchParams({});
      }
    }
  }, [searchParams, setSearchParams]);

  // Update click handlers to add URL param
  const handleCaseStudyClick = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    if (caseStudy.slug) {
      setSearchParams({ case: caseStudy.slug });
    }
  };

  // Update close handler to clear URL param
  const handleCaseStudyClose = () => {
    setSelectedCaseStudy(null);
    setShowFullInterview(false);
    setSearchParams({});
  };

  const caseStudies: CaseStudy[] = [
    {
      slug: "convert-com",
      title: "Convert.com",
      category: "Content Marketing",
      description: "Created bottom-of-funnel content strategy and wrote multi-perspective articles to establish brand presence in SERPs for new features.",
      results: "SERP Rankings Achieved | Organic Traffic Increased | Brand Recognition Established",
      challenge: "Convert.com needed to establish a strong brand presence in search results for their brand new features and seed Convert's name in the SERPs. The challenge was creating content that would rank well while also providing value to potential customers at the bottom of the funnel. They specifically needed multi-perspective, journalistic articles about a new space called Full-Stack Experimentation.",
      process: "Developed a comprehensive content strategy focusing on feature-specific content and Full-Stack Experimentation thought leadership. Conducted keyword research, competitor analysis, and created detailed content briefs. Worked closely with the product team to understand technical specifications and translated them into accessible, SEO-optimized content. Produced multi-perspective, journalistic articles that positioned Convert as leaders in the Full-Stack Experimentation space.",
      outcome: "Successfully established Convert.com's presence in SERPs for target keywords. The content strategy led to increased organic traffic and improved brand recognition within the industry. Content pieces consistently ranked in top positions for competitive keywords, positioning Convert as thought leaders in the Full-Stack Experimentation space.",
      images: [],
      testimonial: {
        name: "Trina Moitra",
        title: "CMO",
        company: "Convert.com",
        avatar: trinaMoitra,
        rating: 5,
        text: "Armin impressed me with his attention to detail & his knowledge of the industry from day 1. We needed someone to take on the production of bottom-of-the-funnel focused content and to seed Convert's name in the SERPs for our brand new features. Our collaboration was very pleasant. Renee Content has a good process and they really give 110% to understand your requirements. Thank you for being such consummate professionals!"
      },
    },
    {
      slug: "roomvu",
      title: "Roomvu",
      category: "Cold Email Marketing",
      description: "Roomvu is a PropTech platform offering hyper-local real estate video marketing. Through winning email marketing, copywriting, and storytelling techniques, brought them an added client base of 24,000+ users.",
      results: "Email Open Rate Increase: 10% | Email CTOR Increase: 2.5% | Emails Crafted: 1,000+ | Users Acquired: 24,000+",
      challenge: "Roomvu is a PropTech platform that offers hyper-local real estate video marketing. They acquire clients through different processes, including SEO, Cold Emails, paid ads, social media, organic, referrals, and Email Marketing. When we decided to work together, they already had a cold email marketing setup. However, the untapped potential was huge. Roomvu faced low user registration rates and needed to significantly improve conversion through their cold email marketing efforts. The existing campaigns weren't engaging enough and lacked strategic automation.",
      process: "I redesigned the entire email marketing strategy from the ground up. Implemented advanced segmentation, created hyper-personalized drip campaigns, A/B tested subject lines and copy, and developed automated workflows based on user behavior. I also optimized send times and refined messaging to resonate with the real estate professional audience.",
      outcome: "Through winning email marketing, copywriting, and storytelling techniques, I brought roomvu an added client base of 24,000+ users, increasing their weekly registrations from an average of 170 to an average of 500. Email open rate increased by 10%, email CTOR increased by 2.5%, and over 1,000+ emails were crafted throughout the engagement.",
      images: [roomvuResults2, roomvuResults3, roomvuResults1],
      testimonial: {
        name: "Alireza Khorshidi",
        title: "Head of Growth & Lifecycle Marketing",
        company: "Roomvu",
        avatar: alirezaKhorshidi,
        rating: 5,
        text: "Armin is a highly effective strategic copywriter. I managed him at Roomvu, where he ran our cold email outbound, and strong results consistently backed his performance. He doesn't just write; he leverages the power of content within a specific, results-driven strategy. While his focus was cold email with us, I know he is also very capable of driving multi-channel content strategies (across email, LinkedIn, and X). He's a professional, clear communicator and brings a valuable creative perspective (he's also a professional guitar player!). I strongly recommend him to any team."
      },
    },
    {
      slug: "nordic-defender",
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
      slug: "cloudzy",
      title: "Cloudzy",
      category: "Technical Content",
      description: "Cloudzy is a VPS and Cloud Service Provider serving hundreds of thousands of users worldwide. Developed technical blog content, knowledge base, and landing pages to maximize conversion rates and website visitors.",
      results: "Technical Articles Written: 23+ | Minutes Time on Page: 13+ | Landing Pages Copy Developed: 37+ | Better SERP Position: 7X | #1 Rankings and Featured Snippets Achieved | Conversion Rates: 5X | Users Acquired: 2,360+",
      challenge: "Cloudzy is a VPS and Cloud Service Provider serving hundreds of thousands of users worldwide. They needed to improve their organic search visibility and conversion rates in a competitive cloud hosting market. I was responsible for developing their technical blog content, knowledge base, and landing pages and webpages copy to ensure the maximum conversion rate.",
      process: "I used winning copywriting and storytelling techniques to maximize Cloudzy's website visitors, conversion rates, and added revenue. Researched high-value keywords with commercial intent and created in-depth technical blog posts that provided genuine value to readers while incorporating SEO best practices. Focused on comprehensive coverage of topics, proper heading structure, internal linking, and user experience. Ensured technical accuracy while maintaining readability. Developed landing page copy optimized for conversions.",
      outcome: "Achieved significant improvements across all metrics: wrote 23+ technical articles with an average time on page of 13+ minutes, developed copy for 37+ landing pages and webpages, improved SERP position by 7X with multiple articles achieving #1 rankings and featured snippets (position zero) on Google, increased conversion rates by 5X, and helped acquire 2,360+ new users. The technical blog posts became valuable resources frequently shared within the cloud hosting community.",
      images: [],
    },
    {
      slug: "wp-sms-pro",
      title: "WP SMS Pro",
      category: "Blog Content Writing",
      description: "WP SMS Pro is a subsidiary of VeronaLabs offering an all-in-one WordPress plugin for SMS Marketing. Developed blog content writing to increase website visitors and convert them into loyal users.",
      results: "Technical Articles Written: 24+ | Minutes Time on Page: 6.5+ | Better SERP Position: 3X | Conversion Rates: 3.2X",
      challenge: "WP SMS Pro is a subsidiary of the parent company VeronaLabs. They offer an all-in-one WordPress plugin that handles SMS Marketing for businesses, helping them grow efficiently. WP SMS Pro struggled with low brand awareness in a niche market. They needed a content strategy that would educate their target audience about SMS marketing for WordPress while driving product adoption. I was responsible for their blog content writing, increasing their website visitors, and converting the visitors into loyal users.",
      process: "I used winning copywriting and storytelling techniques to maximize the time on page and conversion rates of the users. Developed a multi-channel content strategy targeting WordPress site owners and developers. Created educational content about SMS marketing benefits, use cases, and implementation guides. Produced tutorials, comparison articles, and integration guides. Established a content calendar with consistent publishing schedule.",
      outcome: "Significantly increased brand awareness within the WordPress community. Wrote 24+ technical articles with an average time on page of 6.5+ minutes, improved SERP position by 3X, and increased conversion rates by 3.2X. Organic traffic grew steadily, and product sign-ups improved. The educational content positioned WP SMS Pro as the go-to solution for WordPress SMS integration.",
      images: [],
    },
    {
      slug: "lorenzo-cpa",
      title: "LorenzoCPA",
      category: "Copywriting",
      description: "Lorenzo Abbatiello is a Certified Public Accountant (CPA) who advises clients on tax strategy, including crypto tax. Developed blog content, X posts, and newsletters to increase website visitors and convert them into loyal users.",
      results: "Technical Articles Written: 16+ | Minutes Time on Page: 14+ | Better SERP Position: 2X | Conversion Rates: 3X",
      challenge: "Lorenzo Abbatiello is a Certified Public Accountant (CPA) who advises clients on tax strategy, including crypto tax. LorenzoCPA needed to differentiate themselves in a crowded accounting services market. Their existing website copy didn't effectively communicate their expertise or build trust with potential clients. I was responsible for their blog content writing, X and newsletter ghostwriting, increasing their website visitors, and converting the visitors into loyal users.",
      process: "I used winning copywriting and storytelling techniques to maximize the time on page and conversion rates of the users. Rewrote all website copy with a focus on establishing authority and building client trust. Created service page copy that clearly explained complex tax concepts in accessible language. Developed a professional yet approachable brand voice. Crafted compelling calls-to-action and trust-building elements throughout the site.",
      outcome: "Successfully positioned LorenzoCPA as a trusted authority in accounting and tax services. Wrote 16+ technical articles with an average time on page of 14+ minutes, improved SERP position by 2X, and increased conversion rates by 3X. The new copy improved website engagement metrics and increased consultation bookings. Client feedback indicated the website now effectively communicated the firm's expertise and professionalism.",
      images: [],
    },
    {
      slug: "citronity",
      title: "Citronity",
      category: "Digital Marketing",
      description: "citronity is a custom software development company offering software development, Team as a Service (TaaS), MVP building, product discovery, and UI/UX design. Generated and nurtured leads through email marketing to book sales calls.",
      results: "Email Open Rate Increase: 40% | Email CTOR Increase: 10% | Emails Crafted: 40+ | ROI: 4X",
      challenge: "citronity is a custom software development company that offers software development, Team as a Service (TaaS), MVP building, product discovery, and UI/UX design to businesses of all sorts. citronity lacked a cohesive digital marketing presence across channels. They needed an integrated strategy to improve brand visibility and generate quality leads across multiple platforms. I was responsible for their email marketing efforts, generating and nurturing leads, and booking sales calls.",
      process: "I set up their email marketing system and used winning copywriting and storytelling techniques to turn leads into clients. Developed a comprehensive multi-channel digital marketing strategy. Coordinated content across social media, blog, email, and paid channels. Created consistent brand messaging and visual identity. Implemented tracking and analytics to measure performance across all channels. Optimized campaigns based on data-driven insights.",
      outcome: "Established strong multi-channel presence with consistent brand messaging. Achieved 40% increase in email open rates, 10% improvement in email CTOR, crafted 40+ emails, and delivered 4X ROI. Lead generation increased across all channels with improved quality of leads. The integrated approach created synergy between channels, amplifying overall marketing effectiveness.",
      images: [],
    },
    {
      slug: "bsuite365",
      title: "BSuite365",
      category: "Technical Content",
      description: "BSUITE365 is a team of Microsoft Excel Consultants and Programmers offering tailored solutions for business efficiency and accurate reporting. Wrote technical blog content covering Excel tips, tricks, and complexities.",
      results: "Technical Articles Written: 50+ | Minutes Time on Page: 8+ | Better SERP Position: 2X | Conversion Rates: 5X",
      challenge: "BSUITE365 is a team of Microsoft Excel Consultants and Programmers that offer tailored solutions to help businesses and brands ensure efficiency and accurate reporting. BSuite365 struggled to engage enterprise clients with their existing content. They needed sophisticated B2B content that would resonate with decision-makers and demonstrate clear ROI. I was responsible for their technical blog writing that covered a wide range of topics related to Microsoft Excel tips, tricks, and complexities.",
      process: "I generated tons of website visitors, improved their SERP position and time on page, and multiplied their conversion rates. Developed enterprise-focused content strategy with emphasis on ROI and business value. Created whitepapers, case studies, and thought leadership pieces. Collaborated with sales team to understand buyer pain points and objections. Crafted content for each stage of the enterprise buying cycle.",
      outcome: "Significantly improved engagement with enterprise prospects. Wrote 50+ technical articles with an average time on page of 8+ minutes, improved SERP position by 2X, and increased conversion rates by 5X. The content assets became valuable tools for the sales team, shortening sales cycles. Multiple enterprise clients cited the content as influential in their decision-making process.",
      images: [],
    },
    {
      slug: "watchthemlive",
      title: "WatchThemLive",
      category: "Digital Marketing",
      description: "WatchThemLive is a user-tracking tool that enables business owners to watch their user behaviors through session recordings and heatmaps. Managed all marketing channels including email marketing, content marketing, technical content writing, and landing page copywriting.",
      results: "Email Open Rate Increase: 52% | Email CTOR Increase: 23% | Emails Crafted: 630+ | Blogs Written: 62+ | Landing Pages Developed: 18+ | ROI: 11X",
      challenge: "WatchThemLive is a user-tracking tool that enables business owners to watch their user behaviors through session recordings and heatmaps. WatchThemLive had low email engagement rates and struggled to convert subscribers into active users. Their email campaigns weren't delivering the expected ROI. I was responsible for all marketing channels including email marketing, content marketing, technical content writing, and landing page copywriting.",
      process: "I set up their email marketing system and used winning copywriting and storytelling techniques to bring in the clients effectively and efficiently. Completely redesigned email campaign strategy with focus on personalization and value delivery. Implemented advanced segmentation based on user behavior and preferences. A/B tested every element from subject lines to CTAs. Created compelling copy that emphasized benefits over features. Optimized email design for better mobile experience.",
      outcome: "Achieved 52% increase in email open rates and 23% improvement in click-through rates, delivering 11X ROI. Crafted 630+ emails, wrote 62+ blog posts, and developed 18+ landing pages. Email campaigns became a primary driver of user activation and retention. The improved engagement led to measurable increases in product usage and customer lifetime value.",
      images: [watchthemLiveResults1],
      testimonial: {
        name: "Negar Farazmand",
        title: "Business Design Expert, UI/UX Designer, Digital Marketer",
        company: "WatchThemLive",
        avatar: avatar7,
        rating: 5,
        text: "Armin is smart and a fast learner. His knowledge in many fields helps him find his way in almost any role you give him. Moreover, Armin's ambition and enthusiasm are absolutely remarkable, which lead him to achieve continued progress. His technical skills, coding knowledge, and brilliant ideas were a great help to the team. Working with Armin on the same team was a great experience."
      },
    },
    {
      slug: "influencer-marketing-business",
      title: "Influencer Marketing Business",
      category: "Content Marketing",
      description: "Developed content strategy and materials for influencer marketing platform launch and growth.",
      results: "Website Traffic Increase: 38% | Conversion Rate Improvement: 23%",
      challenge: "Launching a new influencer marketing platform required establishing credibility and attracting both brands and influencers to a two-sided marketplace. The platform needed content that would appeal to both audiences simultaneously.",
      process: "Developed dual-audience content strategy addressing both brands and influencers. Created launch materials including website copy, pitch decks, and educational resources. Produced thought leadership content about influencer marketing trends. Developed case studies and success stories as the platform gained traction.",
      outcome: "The content helped connect with the target audience effectively, resulting in a 38% boost in website traffic and a 23% improvement in conversion rate. Successfully launched the platform with strong initial adoption from both sides. The content effectively communicated value propositions to different audience segments, and the platform grew steadily with content serving as a key driver of user acquisition.",
      images: [],
      testimonial: {
        name: "Parand Sh.",
        title: "Business Owner",
        company: "",
        avatar: parandSh,
        rating: 5,
        text: "The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%. The quality of the delivered content has been excellent. It has definitely exceeded my expectations. Our collaboration has been an absolute pleasure, a decision I would make over and over again. They made sure that all my requirements were understood fully and executed flawlessly."
      },
      interview: {
        url: "https://www.youtube.com/watch?v=d6C_mqxejlU",
        content: `**Can you briefly introduce yourself and your business?**
Hi, this is Parand and I'm a business owner. I would like to take a moment to share my experience with Renée Content.

**What were the specific challenges or goals you had when you approached Renée Content for content writing services?**
Before I left the task of content writing to Renée Content, I was facing some challenges in my online business. What I was actually looking for was engaging content in the niche of influencer marketing, but every time I outsourced the task to freelancers, they would just disappoint because as good as they were, they just failed to capture the essence of my business or bring me any closer to my business objectives, not to mention that their content sometimes really lacked the human touch I just really wanted to see.

**How did Renée Content address those challenges or help you achieve your goals?**
When I first approached Renée Content, I shared my concerns and expectactions, and ever since, they've done everything within their means to help me overcome the obstacles.

**What results did you experience after working with Renée Content? (e.g., increase in website traffic, higher engagement, etc.)**
The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%.

**How would you describe the quality of the content provided by Renée Content? Did it meet or exceed your expectations?**
The quality of the delivered content has been excellent. It has definitely exceeded my expectations.

**How was the overall experience of working with Renée Content? Was the communication smooth and efficient?**
In general, working with Renée Content has been an absolute pleasure, a decision I would make over and over again. The communication was smooth and efficient and they made sure that all my requirements were understood fully and executed flawlessly.

**What sets Renée Content apart from other content writing service providers you have worked with in the past?**
The personalized experience alongside the highly customized content that reflected my business values and resonated with my audience really sets them apart from every other service I have tried.

**Would you recommend Renée Content to other businesses looking for content writing services?**
Given the quality of the service, I would definitely recommend Renée Content to any business seeking content writing services, and I would definitely be coming back for more.`
      },
    },
    {
      slug: "rahmaninia-digital-marketing-agency",
      title: "Rahmaninia Digital Marketing Agency",
      category: "Agency Content",
      description: "Created comprehensive content suite for digital marketing agency brand positioning.",
      results: "Increased Traffic | Improved SEO | Better Conversion Rates",
      challenge: "The agency needed to establish a strong brand identity and differentiate themselves in a competitive digital marketing landscape. They required a complete content suite that would showcase their expertise and attract high-value clients.",
      process: "Developed comprehensive brand positioning strategy and created full content suite including website copy, service descriptions, case studies, and thought leadership content. Crafted unique brand voice that balanced professionalism with approachability. Created portfolio presentations and client-facing materials.",
      outcome: "The content delivered increased website traffic with rich SEO optimization and excellent copywriting. Articles targeting the bottom funnel converted particularly well. Successfully positioned the agency with a distinct brand identity, helping attract larger, more profitable clients. Agency credibility increased significantly, leading to improved close rates and higher-value contracts.",
      images: [],
      testimonial: {
        name: "Mehdi Rahmaninia",
        title: "Founder, CEO, and Marketing Management Consultant",
        company: "",
        avatar: mehdiRahmaninia,
        rating: 5,
        text: "They really deliver what they are promising. I had an increased traffic since the contents were rich in terms of SEO, and the copy was good too. So, in the articles that were targeting my bottom funnel, the content and copy were converting pretty well. The overall experience of working with Renée Content was pretty great, and I was confident that they understood what I needed from them every step of the way."
      },
      interview: {
        url: "https://www.youtube.com/watch?v=65QF2KcEroM",
        content: `**Can you briefly introduce yourself and your business?**
Hey everybody. I'm Mehdi, and I'm a marketing consultant for micro- and small-sized businesses.

**What were the specific challenges or goals you had when you approached Renée Content for content writing services?**
So, the main challenge that I was facing when I contacted Renée agency was finding people who are both good at English and also can understand the gist of the project very well, and deliver exactly what I wanted in the first place.

**Did Renée Content address those challenges or help you achieve your goals?**
Yes, I had Renée in a few projects, and in all of them, I felt really comfortable working with them, and the end result was pretty satisfying.

**What results did you experience after working with Renée Content? (e.g., increase in website traffic, higher engagement, etc.)**
I had somehow an increased traffic since the contents were rich in terms of SEO, and the copy was good too. So, in a few articles that were targeting my bottom funnel, the content and copy were converting pretty good.

**How would you describe the quality of the content provided by Renée Content? Did it meet or exceed your expectations?**
They are a really young and talented group of people and I would be happy to work with them again in the future.

**How was the overall experience of working with Renée Content? Was the communication smooth and efficient?**
The overall experience of working with Renée was pretty great, and I was confident that they understand what I need from them in every step of the way. So, it was a really good experience for me on my side.

**What sets Renée Content apart from other content writing service providers you have worked with in the past?**
I think their pricing is pretty reasonable, and they really deliver what they are promising on their proposal stage.

**Did you feel that Renée Content truly understood your brand's voice and style?**
Yes, I'm pretty confident that they understood my tone and theme, and it actually didn't take much of a time to get it. So, that's one of the things that made me really happy about working with them.

**How has the content provided by Renée Content contributed to your overall business growth and success?**
Actually, having high-quality content not only helped my SEO and generating new visitors for my website, but also did a great job in terms of branding and creating valid content that can be looked upon as a reference, really.

**Would you recommend Renée Content to other businesses looking for content writing services? If so, why?**
I definitely recommend using Renée agency services as they give you an overally good experience of collaboration, and also they understand the needs of the clients and the needs of the project pretty well.`
      },
    },
    {
      slug: "digital-marketing-agency",
      title: "Digital Marketing Agency",
      category: "Content Marketing",
      description: "Executed content marketing strategy to establish thought leadership and drive client acquisition.",
      results: "Leads and Revenue Increase: 480% | Improved Brand Visibility | Enhanced Personal Brand",
      challenge: "The agency founder struggled to consistently produce engaging content that truly resonated with her audience. As a digital marketing agency owner, she knew the importance of having a strong online presence but needed support with LinkedIn ghostwriting, copywriting, and content writing services to establish thought leadership and drive client acquisition.",
      process: "Developed comprehensive content strategy focusing on LinkedIn ghostwriting, copywriting, and content writing. Created engaging thought leadership content that perfectly captured the brand's voice and style. Implemented consistent publishing schedule across LinkedIn and website. Crafted in-depth articles and insights that resonated with the target audience. Focused on building both personal brand visibility and agency growth through strategic content that contributed to overall business success.",
      outcome: "The results were incredible. Working with Renée Content not only improved the founder's personal brand visibility on LinkedIn, but it also had a significant impact on the agency's growth, achieving a remarkable 480% increase in leads and revenue. The quality of content exceeded expectations, perfectly capturing the brand's voice while significantly strengthening the online presence.",
      images: [],
      testimonial: {
        name: "Niloofar Sh.",
        title: "Founder and CEO",
        company: "Digital Marketing Agency",
        avatar: niloofar,
        rating: 5,
        text: "The quality of the content they provided was simply outstanding. It perfectly captured my brand's voice and style, and their attention to detail exceeded my expectations. They went above and beyond to deliver content that genuinely resonated with my audience and contributed to our overall business growth and success."
      },
      interview: {
        url: "https://www.youtube.com/watch?v=i2BPHd_y2jw",
        content: `**Can you briefly introduce yourself and your business?**
Hi there. My name is Niloofar, and I am the founder and CEO of a leading digital marketing agency. Today, I want to take a moment to share my amazing experience working with Renée Content.

**What were the specific challenges or goals you had when you approached Renée Content for content writing services?**
When I approached Renée Content, I had specific challenges I needed to overcome. As a digital marketing agency owner, I knew the importance of having a strong online presence, but I struggled to consistently produce engaging content that truly resonated with my audience. That's when I decided to try their LinkedIn ghostwriting, copywriting, and content writing services, and oh boy, was that a game-changer!

**What results did you experience after working with Renée Content? (e.g., increase in website traffic, higher engagement, etc.)**
The results were incredible. Working with Renée Content not only improved my personal brand's visibility on LinkedIn,  but it also had a significant impact on my agency's growth. We saw a remarkable 480% increase in leads and revenue.

**How would you describe the quality of the content provided by Renée Content? Did it meet or exceed your expectations?**
The quality of the contents they provided was simply outstanding. It perfectly captured my brand's voice and style, and their attention to detail exceeded my expectations.

**How was the overall experience of working with Renée Content? Was the communication smooth and efficient?**
Communication with the team was always smooth and efficient, making the entire process enjoyable and stress-free.

**What sets Renée Content apart from other content writing service providers you have worked with in the past?**
What truly sets Renée Content apart is their dedication to understanding my business's unique needs. They went above and beyond to deliver content that generally resonated with my audience and contributed to our overall business growth and success.

**How has the content provided by Renée Content contributed to your overall business growth and success?**
Thanks to Renée Content's expertise, our online presence has never been stronger. Their services have become an invaluable asset to both my personal brand and my agency.

**Would you recommend Renée Content to other businesses looking for content writing services? If so, why?**
I can't recommend Renée Content enough. If you're looking for content writing services that drive real results, look no further. Trust me, they'll take your brand to new heights. If you want to boost your online presence and experience significant growth like I did, don't hesitate; reach out to Renée Content and see the magic unfold. Thank you Renée Content for being an incredible partner in our success story.`
      },
    },
    {
      slug: "mv-production",
      title: "MV Production",
      category: "Creative Content",
      description: "Developed creative content and copy for media production company brand storytelling.",
      results: "Business Growth: 105% | Website Traffic Increased 3X | Leads Multiplied 3X",
      challenge: "MV Production, a media creation company specializing in film scores, background music, jingles, and advertisement media, faced significant challenges dealing with content creation, website traffic, and producing quality material for customers. These content and traffic issues were impacting their ability to attract and convert clients effectively.",
      process: "Leveraged deep expertise in content marketing to address the challenges with precision. Quickly identified the core issues and implemented strategic content solutions. Created engaging content that showcased MV Production's creative capabilities across film scoring, music production, and media creation. Developed content strategy focused on demonstrating their expertise and attracting the right clientele. Provided exceptional customer service support throughout the process, treating the client's business with care and attention to detail.",
      outcome: "The results were astonishing. Website traffic increased significantly, leads multiplied three times more than expected, and the business experienced 105% growth. The quality content exceeded expectations and effectively communicated MV Production's value proposition. The comprehensive content strategy successfully attracted higher-quality client inquiries and contributed to substantial business growth and success.",
      images: [],
      testimonial: {
        name: "Mahmoud Valanejad",
        title: "Media Creation Company Owner",
        company: "MV Production",
        avatar: mahmoudValanejad,
        rating: 5,
        text: "I think they really care more about your business than you do. They are really experienced and they have a great customer support. You know, you can leave your business to them without any concern, and that's the point."
      },
      interview: {
        url: "https://www.youtube.com/watch?v=-jQwk7mCeyA",
        content: `**Can you briefly introduce yourself and your business?**
My name is Mahmoud Valanejad, I'm the founder and owner of MV Production company. I have a media creation company. We do film score stuff, background music stuff, and jingles, and many other stuff in relation with media and advertisement.

**What were the specific challenges or goals you had when you approached Renée Content for content writing services?**
To be honest, it was really hard to deal with the content and with site traffic and producing good stuff for customers. And actually, these were our main issues in the company and that was why we contacted the Renée Content creation company.

**How did Renée Content address those challenges or help you achieve your goals?**
I think they're really experienced in what they're doing. Actually, they know the tricks of the rope, and they address the issues within a glance, and they will help me.

**What results did you experience after working with Renée Content? (e.g., increase in website traffic, higher engagement, etc.)**
The results were really astonishing, you know, the website traffic increased, we have a lot of more leads, and actually, they multiplied the leads and customers and traffic three times more than what we expected, and that was really great. I appreciate it.

**How would you describe the quality of the content provided by Renée Content? Did it meet or exceed your expectations?**
Briefly I can say, it was great, and yes, it exceed our expectation. They know what they're doing. That's all.

**How was the overall experience of working with Renée Content? Was the communication smooth and efficient?**
It was really pleasant, you know, the customer service support. I think they really care more about your business than you do. And that's really a great point.

**What sets Renée Content apart from other content writing service providers you have worked with in the past?**
They're really smart and responsive, and more important, they pay attention to any aspects and I think that's all you need.

**Did you feel that Renée Content truly understood your brand's voice and style?**
Of course they did. Otherwise, I wouldn't ask them for help.

**How has the content provided by Renée Content contributed to your overall business growth and success?**
It was efficient and very effective, and it encompassed our desire and every aspects that a business needs. And actually, it resulted in 105% of growth in the company, and it was great.

**Would you recommend Renée Content to other businesses looking for content writing services? If so, why?**
Definitely I recommend it, actually because they're really experienced and they have a great customer support, and, you know, you can leave your business to them without any concern. And that's the point, I think.`
      },
    },
    {
      slug: "boutique",
      title: "Boutique",
      category: "E-commerce Content",
      description: "Created content marketing strategy for online boutique specializing in trendy fashion and home decor items.",
      results: "Website Traffic Skyrocketed | Leads Increase: 3X | Revenue Increase: 60%",
      challenge: "Primary challenge was generating enough online traffic to boost sales and expand reach to connect with a larger audience of potential customers for the small online boutique specializing in trendy fashion and home decor items.",
      process: "Implemented content strategies and SEO expertise to elevate website visibility. Created well-researched, beautifully written articles and blog posts that resonated with target audience. Captured brand's voice and style flawlessly, making content genuinely authentic and appealing. Focused on driving organic traffic and increasing online presence.",
      outcome: "Website traffic skyrocketed with impressive 3-fold increase in leads. Content was engaging, informative, and perfectly aligned with brand's message, driving more conversions than ever before. Revenue increased by remarkable 60%, with business flourishing and attracting more loyal customers. Positioned business as industry leader through well-crafted content that boosted website performance.",
      images: [],
      testimonial: {
        name: "Shadi V.",
        title: "Business Owner",
        company: "Boutique",
        avatar: shadiV,
        rating: 5,
        text: "In fact, our results were beyond my wildest dreams. Our website traffic skyrocketed, and we witnessed an impressive 3-fold increase in leads. Our content was engaging, informative, and perfectly aligned with our brand's message."
      },
      interview: {
        url: "https://www.youtube.com/watch?v=UmOkyLqzXZs",
        content: `**Can you briefly introduce yourself and your business?**
Hello. I'm the proud owner of a small online boutique. We specialize in trendy fashion and home decor items that cater to our unique audience.

**What were the specific challenges or goals you had when you approached Renée Content for content writing services?**
Well, when I approached Renée Content, my primary challenge was generating enough online traffic to boost sales. I wanted to expand our reach and connect with a larger audience of potential customers.

**How did Renée Content address those challenges or help you achieve your goals?**
Renée Content worked wonders for us! Their content strategies and SEO expertise elevated our website's visibility, attracting a stream of organic traffic and increasing our online presence.

**What results did you experience after working with Renée Content?**
In fact, our results were beyond my wildest dreams. Our website traffic skyrocketed, and we witnessed an impressive 3-fold increase in leads. Our content was engaging, informative, and perfectly aligned with our brand's message, driving more conversations than ever before.

**How would you describe the quality of the content provided by Renée Content? Did it meet or exceed your expectations?**
The content provided by Renée Content was exceptional and not only met but exceeded my expectations. The articles and blog posts were well-researched, beautifully written, and resonated perfectly with our target audience.

**How was the overall experience of working with Renée Content? Was the communication smooth and efficient?**
Honestly, working with Renée Content was an absolute pleasure. Their team was professional, attentive, and always open to discussing ideas and suggestions. Well, communication was smooth and efficient, and they made the entire process effortless for us.

**What sets Renée Content apart from other content writing service providers you have worked with in the past?**
Well, what sets Renée Content apart is their deep understanding of our brand's voice and style. They captured the essence of my business flawlessly, making our content genuinely authentic and appealing to our audience.

**What was the business growth like after working with Renée Content?**
Thanks to Renée Content's efforts, our revenue increased by a remarkable 60%. We saw our business flourishing and attracting more loyal customers, leading to sustainable growth.

**How has the content provided by Renée Content contributed to your overall business growth and success?**
Actually, Renée Content played a pivotal role in our overall success. Their well-crafted content not only boosted our website's performance, but also positioned us as a leader in our industry.

**Would you recommend Renée Content to other businesses looking for content writing services? If so, why?**
Yes, I highly recommend Renée Content to fellow small business owners because their dedication, expertise, and remarkable results make them a valuable partner for a business looking to grow and thrive online. In conclusion, working with Renée Content was a game-changer for us. They delivered exceptional content that drove substantial results, and I can confidently say they are the reason behind our incredible growth and success.`
      },
    },
    {
      slug: "c-level-executives-coaches-speakers",
      title: "C-Level Executives, Coaches, and Speakers",
      category: "Ghostwriting",
      description: "Ghostwrote thought leadership content for C-level executives, coaches, and speakers to build their personal brands.",
      results: "Personal brand authority established",
      challenge: "Executives, coaches, and speakers needed to establish strong personal brands but lacked time to create consistent, high-quality content. They required authentic content that reflected their voice and expertise while maintaining professional standards.",
      process: "Conducted in-depth interviews to understand their perspectives, experiences, and unique insights. Developed content that authentically represented their voice and expertise. Created LinkedIn posts, articles, and keynote content. Maintained consistent publishing schedule while ensuring all content aligned with their brand positioning.",
      outcome: "Successfully built personal brand authority for multiple clients. Their LinkedIn following and engagement grew significantly. Several clients secured speaking opportunities and consulting contracts directly attributed to their enhanced online presence and thought leadership content.",
      images: [],
    },
  ];

  const selectedWork: WorkItem[] = [
    {
      slug: "next-gen-ptaas-roi",
      title: "Next-Gen PTaaS ROI",
      description: "Comprehensive white paper analyzing Return on Investment for Next-Gen Pentest as a Service, comparing traditional vs. next-gen pentesting with detailed cost-benefit analysis.",
      results: "35% Cost Reduction | 350% Higher ROI | Detailed ROI Framework",
      workType: ["White Paper"],
      industry: ["Cybersecurity"],
      format: ["White Paper", "ROI Analysis"],
      downloadUrl: "/work/next-gen-pentest-roi.pdf",
    },
    {
      slug: "next-gen-pentest-buyers-guide",
      title: "Next-Gen Pentest Buyer's Guide",
      description: "Educational buyer's guide helping potential clients understand penetration testing services, types of providers, and how to choose the right solution.",
      results: "14-Page Comprehensive Guide | Client Education Tool | Lead Generation Asset",
      workType: ["White Paper"],
      industry: ["Cybersecurity"],
      format: ["Buyer's Guide", "Educational Content"],
      downloadUrl: "/work/pentest-buyers-guide.pdf",
    },
    {
      slug: "kubernetes-penetration-testing",
      title: "Kubernetes Penetration Testing",
      description: "One-page service overview explaining Kubernetes penetration testing services, security assessment process, and what the testing includes.",
      results: "Service Positioning | Clear Value Proposition | Simplification",
      workType: ["White Paper"],
      industry: ["Cybersecurity"],
      format: ["Service Page", "One-Pager"],
      downloadUrl: "/work/kubernetes-penetration-testing.pdf",
    },
    {
      slug: "secdevops-vs-devsecops",
      title: "SecDevOps vs DevSecOps",
      description: "In-depth comparison of SecDevOps and DevSecOps approaches in the Systems Development Life Cycle, exploring security-first methodologies for modern software development.",
      results: "Comprehensive Analysis | Security Best Practices | SDLC Integration Guide",
      workType: ["Blog"],
      industry: ["Cybersecurity"],
      format: ["Blog"],
      externalUrl: "https://nordicdefender.com/blog/secdevops-vs-devsecops",
    },
    {
      slug: "directadmin-vs-cpanel",
      title: "DirectAdmin vs. cPanel",
      description: "Comprehensive comparison guide helping you choose the right control panel for web hosting between DirectAdmin and cPanel, analyzing features, pricing, and usability.",
      results: "Detailed Comparison | Feature Analysis | Decision Framework",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/directadmin-vs-cpanel/",
    },
    {
      slug: "protect-fivem-server-ddos",
      title: "How to Protect FiveM Server from DDoS",
      description: "Step-by-step guide explaining DDoS attacks and proven methods to protect your FiveM server from malicious traffic and maintain server availability.",
      results: "Security Implementation | DDoS Protection Strategies | Server Hardening",
      workType: ["Blog"],
      industry: ["Cybersecurity"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/protect-fivem-server-from-ddos-attack/",
    },
    {
      slug: "install-webmin-vps",
      title: "How to Install Webmin on a VPS",
      description: "Complete step-by-step installation guide for Webmin web-based system administration interface on CentOS and Ubuntu VPS servers.",
      results: "Detailed Installation Guide | System Management Setup | VPS Configuration",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/install-webmin-on-vps/",
    },
    {
      slug: "self-hosted-gitlab-alternative",
      title: "Best Self-Hosted GitLab Alternative",
      description: "Comprehensive review of top open-source DevOps tools and self-hosted GitLab alternatives for collaborative software development and version control.",
      results: "Platform Comparison | DevOps Tool Analysis | Migration Guide",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/self-hosted-gitlab-alternatives/",
    },
    {
      slug: "list-running-services-linux",
      title: "List Running Services on Linux",
      description: "Practical guide to listing and managing running services on Linux systems including Ubuntu, Debian, and CentOS distributions.",
      results: "System Administration Guide | Service Management | Linux Commands",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/list-running-services-on-linux/",
    },
    {
      slug: "trade-metatrader-4",
      title: "How to Trade Using MetaTrader 4",
      description: "Complete beginner-to-advanced guide for Forex trading using MetaTrader 4 platform, covering installation, trading strategies, and advanced features.",
      results: "Trading Guide | Platform Mastery | Strategy Implementation",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/how-to-use-metatrader-4/",
    },
    {
      slug: "nvme-vs-ssd",
      title: "NVMe vs SSD",
      description: "Detailed technical comparison of NVMe and SSD storage technologies, analyzing speed, cost, use cases, and features to help you choose the right solution.",
      results: "Hardware Comparison | Performance Analysis | Buying Guide",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/nvme-vs-ssd/",
    },
    {
      slug: "trade-on-binance",
      title: "How to Trade on Binance",
      description: "Comprehensive beginner-friendly guide to cryptocurrency trading on Binance, covering account setup, funding, and different trading types.",
      results: "Crypto Trading Guide | Platform Navigation | Trading Strategies",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      externalUrl: "https://cloudzy.com/blog/trade-on-binance/",
    },
    {
      slug: "beginners-guide-sms-marketing",
      title: "Beginner's Guide to SMS Marketing",
      description: "Complete beginner's guide to SMS marketing for WordPress, covering setup, best practices, and strategies to engage your audience.",
      results: "SMS Marketing Foundation | WordPress Integration | Engagement Strategies",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/24687/beginners-guide-sms-marketing-wordpress/",
    },
    {
      slug: "drive-traffic-sms-marketing",
      title: "Drive Traffic with SMS Marketing",
      description: "Proven strategies to drive traffic using SMS marketing campaigns, increasing website visits and customer engagement.",
      results: "Traffic Generation | SMS Campaign Strategy | Audience Growth",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/24905/drive-traffic-with-sms-marketing/",
    },
    {
      slug: "conversion-rates-sms-marketing",
      title: "Conversion Rates with SMS Marketing",
      description: "Effective techniques to boost conversion rates through targeted SMS marketing campaigns and optimized messaging.",
      results: "Conversion Optimization | Campaign Performance | Message Targeting",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/24971/conversion-rates-with-sms-marketing/",
    },
    {
      slug: "future-sms-marketing",
      title: "The Future of SMS Marketing",
      description: "Insights into emerging trends and the future landscape of SMS marketing, including automation and personalization.",
      results: "Industry Trends | Future Predictions | Marketing Innovation",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/25138/future-of-sms-marketing/",
    },
    {
      slug: "wp-sms-two-way",
      title: "WP SMS Two-Way",
      description: "Guide to implementing two-way SMS communication in WordPress for enhanced customer interaction and engagement.",
      results: "Two-Way Communication | Customer Interaction | WordPress Setup",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/25324/wp-sms-two-way/",
    },
    {
      slug: "analyzing-sms-campaign",
      title: "Analyzing SMS Campaign",
      description: "Comprehensive guide to analyzing SMS campaign performance, tracking metrics, and optimizing for better results.",
      results: "Campaign Analytics | Performance Metrics | Data-Driven Optimization",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/25425/analyzing-sms-campaign-for-blog/",
    },
    {
      slug: "text-message-marketing-practices",
      title: "Text Message Marketing Practices",
      description: "Essential best practices for text message marketing to maximize engagement, compliance, and campaign effectiveness.",
      results: "Best Practices | Compliance Guidelines | Campaign Excellence",
      workType: ["Blog"],
      industry: ["Technology"],
      format: ["Blog"],
      externalUrl: "https://wp-sms-pro.com/25486/text-message-marketing-practices/",
    },
    {
      slug: "find-accredited-nft-tax-accountant",
      title: "How to Find an Accredited NFT Tax Accountant",
      description: "Comprehensive guide to finding reliable NFT tax accountants, covering NFT taxation basics, blockchain technology, and key qualities to look for in a tax professional.",
      results: "Tax Professional Selection | NFT Compliance | Expert Guidance",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/how-to-find-accredited-nft-tax-accountant.pdf",
    },
    {
      slug: "florida-bitcoin-taxes",
      title: "How & When Should You Pay Florida Bitcoin Taxes",
      description: "Detailed guide on Florida Bitcoin tax regulations, explaining when cryptocurrency transactions are taxable and how to properly report them.",
      results: "State Tax Compliance | Bitcoin Regulations | Tax Timing Strategy",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/how-when-should-you-pay-florida-bitcoin-taxes.pdf",
    },
    {
      slug: "top-5-global-havens-bitcoin-taxes",
      title: "Top 5 Global Havens to Avoid Taxes on Bitcoin",
      description: "Analysis of five international tax havens offering favorable cryptocurrency tax treatment, helping Bitcoin investors understand legal tax optimization strategies.",
      results: "International Tax Planning | Bitcoin Tax Strategy | Global Opportunities",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/top-5-global-havens-avoid-taxes-bitcoin.pdf",
    },
    {
      slug: "characteristics-top-crypto-tax-software",
      title: "Characteristics of Top Crypto Tax Software",
      description: "In-depth review of essential features and capabilities to look for when selecting cryptocurrency tax software for accurate reporting and compliance.",
      results: "Software Evaluation | Tax Tool Selection | Compliance Technology",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/characteristics-top-crypto-tax-software.pdf",
    },
    {
      slug: "common-questions-nft-tax-accountant",
      title: "Common Questions to Ask Your NFT Tax Accountant",
      description: "Essential questions NFT holders should ask their tax accountants to ensure proper handling of NFT taxation and compliance requirements.",
      results: "NFT Tax Guidance | Accountant Selection | Tax Preparation",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/common-questions-nft-tax-accountant.pdf",
    },
    {
      slug: "which-crypto-tax-software-best",
      title: "Which Crypto Tax Software is Best",
      description: "Comprehensive comparison of leading cryptocurrency tax software platforms, evaluating features, pricing, and effectiveness for different investor needs.",
      results: "Software Comparison | Platform Analysis | Best Practices",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/which-crypto-tax-software-best.pdf",
    },
    {
      slug: "crypto-tax-software-manage-income-pro",
      title: "Crypto Tax Software: Manage Your Crypto Income Like a Pro",
      description: "Expert guide on leveraging cryptocurrency tax software to efficiently manage crypto income, track transactions, and maximize tax deductions.",
      results: "Income Management | Tax Optimization | Professional Strategies",
      workType: ["Blog"],
      industry: ["Finance"],
      format: ["Blog"],
      downloadUrl: "/work/crypto-tax-software-manage-income-pro.pdf",
    },
    {
      slug: "surety-bond-freight-brokers",
      title: "What Is a Surety Bond for Freight Brokers? Things to Know",
      description: "Essential guide covering surety bond requirements, types (BMC-84 and BMC-85), and importance for freight brokers starting their brokerage business.",
      results: "Freight Broker Education | Compliance Guide | Risk Management",
      workType: ["Blog"],
      industry: ["Professional Services"],
      format: ["Blog"],
      downloadUrl: "/work/surety-bond-freight-brokers.pdf",
    },
    {
      slug: "what-do-freight-brokers-do",
      title: "What Do Freight Brokers Do & How To Hire Them",
      description: "Comprehensive overview of freight broker responsibilities and step-by-step guide to hiring the right broker for your shipping needs.",
      results: "Industry Education | Hiring Guide | Freight Logistics",
      workType: ["Blog"],
      industry: ["Professional Services"],
      format: ["Blog"],
      downloadUrl: "/work/what-do-freight-brokers-do.pdf",
    },
    {
      slug: "what-is-load-board",
      title: "What Is a Load Board & Its Importance",
      description: "Detailed explanation of load boards and their critical role in connecting shippers with carriers in the freight industry.",
      results: "Freight Technology | Industry Education | Logistics Platform",
      workType: ["Blog"],
      industry: ["Professional Services"],
      format: ["Blog"],
      downloadUrl: "/work/what-is-load-board.pdf",
    },
    {
      slug: "freight-brokers-license-guide",
      title: "How Do I Get My Freight Broker's License? A Step-by-Step Guide",
      description: "Complete step-by-step guide to obtaining your freight broker license, covering requirements, processes, and starting your brokerage business.",
      results: "License Guide | Freight Broker Career | Compliance Process",
      workType: ["Blog"],
      industry: ["Professional Services"],
      format: ["Blog"],
      downloadUrl: "/work/freight-brokers-license-guide.pdf",
    },
    {
      slug: "investors-real-estate-marketing-companies",
      title: "4 Things Investors Look for in Real Estate Marketing Companies",
      description: "Comprehensive guide highlighting key factors investors consider when choosing real estate marketing companies, from digital expertise to ROI tracking.",
      results: "Real Estate Marketing Education | Investor Guide | Marketing Strategy",
      workType: ["Blog"],
      industry: ["Real Estate"],
      format: ["Blog"],
      downloadUrl: "/work/investors-real-estate-marketing-companies.pdf",
    },
    {
      slug: "large-cap-investment-opportunity",
      title: "Large-Cap Investment Opportunity - Short-Term Outlook (3-Months)",
      description: "In-depth cryptocurrency research analysis examining large-cap investment opportunities with comprehensive market analysis and 3-month short-term outlook projections.",
      results: "Cryptocurrency Market Research | Investment Analysis | Technical Analysis",
      workType: ["Research Analysis"],
      industry: ["Finance"],
      format: ["Research Analysis"],
      downloadUrl: "/work/large-cap-investment-opportunity.pdf",
    },
    {
      slug: "losing-leads-bad-copy-carousel",
      title: "Want to Keep Losing Leads With Bad Copy?",
      description: "LinkedIn carousel post breaking down the critical mistakes in copywriting that cause businesses to lose leads and how to fix them with proven conversion principles.",
      results: "Marketing Education | Lead Generation | Copywriting Tips",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/losing-leads-bad-copy-carousel.pdf",
    },
    {
      slug: "saas-welcome-emails-carousel",
      title: "Not All SaaS Welcome Emails Work",
      description: "LinkedIn carousel analyzing what makes SaaS welcome emails effective, with examples of common pitfalls and best practices for onboarding sequences.",
      results: "Email Marketing | SaaS Strategy | User Onboarding",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/saas-welcome-emails-carousel.pdf",
    },
    {
      slug: "saas-burn-50k-content-carousel",
      title: "Reason Most SaaS Startups Burn $50K on Content",
      description: "LinkedIn carousel revealing the costly content marketing mistakes SaaS startups make and strategic approaches to maximize content ROI.",
      results: "Content Strategy | SaaS Marketing | Budget Optimization",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/saas-burn-50k-content-carousel.pdf",
    },
    {
      slug: "content-must-have-purpose-carousel",
      title: "Content Must Have Purpose",
      description: "LinkedIn carousel exploring the fundamental principle that all effective content needs clear strategic purpose aligned with business objectives.",
      results: "Content Strategy | Marketing Philosophy | Business Goals",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/content-must-have-purpose-carousel.pdf",
    },
    {
      slug: "jasmin-alic-killer-hooks-carousel",
      title: "5 Killer Hooks Jasmin Alic Wrote to Double His Results",
      description: "LinkedIn carousel analyzing five high-performing copywriting hooks from Jasmin Alic that dramatically improved engagement and conversion rates.",
      results: "Copywriting | Hook Writing | Engagement Strategy",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/jasmin-alic-killer-hooks-carousel.pdf",
    },
    {
      slug: "future-content-marketing-carousel",
      title: "The Future of Content Marketing",
      description: "LinkedIn carousel exploring emerging trends, technologies, and strategies shaping the future landscape of content marketing.",
      results: "Industry Trends | Content Strategy | Future Planning",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/future-content-marketing-carousel.pdf",
    },
    {
      slug: "rise-storytelling-content-carousel",
      title: "The Rise of Storytelling in Content Creation",
      description: "LinkedIn carousel examining how storytelling has become essential in content marketing and techniques for crafting compelling narratives.",
      results: "Storytelling | Content Creation | Audience Engagement",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/rise-storytelling-content-carousel.pdf",
    },
    {
      slug: "convert-traffic-carousel",
      title: "Can't Convert Your Traffic?",
      description: "LinkedIn carousel addressing common conversion challenges and proven strategies to turn website visitors into customers through strategic copywriting and messaging.",
      results: "Conversion Optimization | Traffic Strategy | Sales Copy",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/convert-traffic-carousel.pdf",
    },
    {
      slug: "jessica-horkan-linkedin-revamp",
      title: "Jessica Horkan - LinkedIn Profile Revamp",
      description: "Complete LinkedIn profile transformation for Jessica Horkan, Co-Founder at empatiX Consulting. Transformed generic profile into compelling professional brand showcasing expertise in customer experience and growth strategies.",
      results: "Profile Optimization | Professional Branding | Personal Marketing",
      workType: ["LinkedIn Post"],
      industry: ["Professional Services"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/jessica-horkan-linkedin-revamp.pdf",
      beforeAfterImage: "/work/jessica-horkan-before-after.png",
    },
    {
      slug: "jamila-musayeva-linkedin-revamp",
      title: "Jamila Musayeva - LinkedIn Profile Revamp",
      description: "Strategic LinkedIn profile redesign for Jamila Musayeva, Etiquette Consultant & Author with 1M YouTube subscribers. Elevated profile to reflect expertise, elegance, and thought leadership in modern etiquette.",
      results: "Personal Brand Enhancement | Thought Leadership | Professional Positioning",
      workType: ["LinkedIn Post"],
      industry: ["Professional Services"],
      format: ["LinkedIn Post"],
      downloadUrl: "/work/jamila-musayeva-linkedin-revamp.pdf",
      beforeAfterImage: "/work/jamila-musayeva-before-after.png",
    },
    {
      slug: "copywriting-you-need-infographic",
      title: "You Don't Need vs. You Just Need - Copywriting Essentials",
      description: "LinkedIn infographic contrasting common copywriting misconceptions with what truly drives results: precise language, structured copy, and strategic messaging.",
      results: "Copywriting Principles | Marketing Strategy | Brand Voice",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      externalUrl: "/work/copywriting-you-need-infographic.png",
    },
    {
      slug: "email-marketing-tips-infographic",
      title: "8 Powerful Tips for High-Impact Marketing Emails",
      description: "LinkedIn infographic breaking down essential email marketing strategies: hyper-personalization, compelling subject lines, storytelling, A/B testing, and mobile-first design.",
      results: "Email Marketing | Conversion Optimization | Engagement Strategy",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      externalUrl: "/work/email-marketing-tips-infographic.png",
    },
    {
      slug: "content-writing-mistakes-infographic",
      title: "4 Layers of Mistakes in Content Writing",
      description: "LinkedIn infographic visualizing the hierarchy of content writing mistakes from surface-level errors to strategic misalignment, with actionable guidance for improvement.",
      results: "Content Quality | Writing Skills | Strategic Communication",
      workType: ["LinkedIn Post"],
      industry: ["Marketing"],
      format: ["LinkedIn Post"],
      externalUrl: "/work/content-writing-mistakes-infographic.png",
    },
    {
      slug: "interest-rate-forecast-email",
      title: "2025 Interest Rate Forecast: Economic Balancing Act",
      description: "Marketing email for Roomvu analyzing 2025 interest rate predictions and their impact on the US housing market. Combines economic insights with actionable guidance for real estate professionals navigating rate fluctuations.",
      results: "Market Analysis | Economic Insights | Real Estate Strategy",
      workType: ["Marketing Email"],
      industry: ["Real Estate"],
      format: ["Marketing Email"],
      downloadUrl: "/work/interest-rate-forecast-email.html",
    },
    {
      slug: "tiny-home-market-email",
      title: "Global Tiny Home Market Set for Explosive Growth",
      description: "Marketing email for Roomvu exploring the explosive growth trajectory of the tiny home market in US real estate. Highlights market trends, investment opportunities, and the shift toward minimalist living.",
      results: "Market Trends | Investment Analysis | Industry Insights",
      workType: ["Marketing Email"],
      industry: ["Real Estate"],
      format: ["Marketing Email"],
      downloadUrl: "/work/tiny-home-market-email.html",
    },
    {
      slug: "exit-realty-twitter-email",
      title: "EXIT Realty West Midtown: Twitter Lead Generation Strategy",
      description: "Marketing email for Roomvu demonstrating how EXIT Realty West Midtown leveraged Twitter/X for real estate lead generation. Showcases social media marketing tactics and engagement strategies for realtors.",
      results: "Social Media Strategy | Lead Generation | Platform Optimization",
      workType: ["Marketing Email"],
      industry: ["Real Estate"],
      format: ["Marketing Email"],
      downloadUrl: "/work/exit-realty-twitter-email.html",
    },
    {
      slug: "nordic-defender-it-sikkerhetsdagen",
      title: "Nordic Defender at IT-Sikkerhetsdagen",
      description: "Press release announcing Nordic Defender's participation at IT-Sikkerhetsdagen event in Copenhagen, showcasing cybersecurity solutions to government organizations and industry peers.",
      results: "Event Participation | Market Visibility | Industry Networking",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/nordic-defender-at-it-sikkerhetsdagen",
    },
    {
      slug: "nordic-defender-expanding-norway",
      title: "Nordic Defender Expanding to Norway",
      description: "Press release announcing Nordic Defender's expansion into Norway with a profitable cybersecurity contract, extending global reach and cementing leadership in the Nordic cybersecurity market.",
      results: "Market Expansion | International Growth | Partnership Announcement",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/nordic-defender-expanding-to-norway",
    },
    {
      slug: "securebug-rebrand",
      title: "SecureBug Announces Rebrand",
      description: "Press release announcing SecureBug's rebrand to Nordic Defender, reflecting the company's evolution from offensive to comprehensive offensive and defensive security solutions.",
      results: "Brand Evolution | Company Milestone | Strategic Positioning",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/securebug-announces-rebrand",
    },
    {
      slug: "adplist-dont-settle-conference",
      title: "ADPList Don't Settle Conference - Guest Speaker Presentation",
      description: "Guest speaker presentation at ADPList's Don't Settle Conference 2025. Shared insights on content marketing, personal branding, and professional growth strategies with the ADPList community.",
      results: "Thought Leadership | Community Education | Professional Speaking",
      workType: ["Presentation"],
      industry: ["Marketing"],
      format: ["Presentation"],
      downloadUrl: "/work/adplist-dont-settle-conference.pdf",
    },
    {
      slug: "new-ceo-vincent-heidarinia",
      title: "New CEO Vincent Heidarinia",
      description: "Press release announcing Vincent Heidarinia's appointment as CEO of Nordic Defender, highlighting his journey from founder to chief executive officer.",
      results: "Leadership Announcement | Executive Promotion | Company Growth",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/new-ceo-vincent-heidarinia",
    },
    {
      slug: "mahsima-jalooli-new-coo",
      title: "Mahsima Jalooli as New COO",
      description: "Press release announcing Mahsima Jalooli's promotion from Technical Account Manager to Chief Operating Officer, bringing operational excellence to Nordic Defender.",
      results: "Leadership Announcement | Executive Promotion | Operational Growth",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/nordic-defender-appointed-mahsima-jalooli-as-the-new-coo",
    },
    {
      slug: "new-head-marketing-kaveh-ghiassi",
      title: "New Head of Marketing Kaveh Ghiassi",
      description: "Press release announcing Kaveh Ghiassi joining Nordic Defender as Head of Marketing, bringing extensive experience to elevate the company's marketing strategies.",
      results: "Leadership Announcement | Marketing Expansion | Team Growth",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/new-head-of-marketing-kaveh-ghiassi",
    },
    {
      slug: "new-sales-manager-jim-sadjeff",
      title: "New Sales Manager Jim Sadjeff",
      description: "Press release announcing Jim Sadjeff's appointment as Head of Global Sales, bringing proven track record from Heimdal Security to drive Nordic Defender's sales growth.",
      results: "Leadership Announcement | Sales Expansion | Global Growth",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/new-sales-manager-jim-sadjeff",
    },
    {
      slug: "miro-novosel-account-executive",
      title: "Miro Novosel as Account Executive",
      description: "Press release announcing Miro Novosel's appointment as Account Executive Manager, bringing strong background in IT growth strategies to expand Nordic Defender's business.",
      results: "Team Expansion | Sales Growth | Market Development",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/nordic-defender-looks-forward-to-new-prospects-with-miro-novosel-as-account-executive",
    },
    {
      slug: "marcel-van-den-boomen-appointed",
      title: "Marcel Van Den Boomen Appointed",
      description: "Press release announcing Marcel Van Den Boomen joining as Account Executive with 24+ years sales experience, expanding Nordic Defender to Netherlands and DACH region.",
      results: "International Expansion | Sales Leadership | Regional Growth",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/marcel-van-den-boomen-appointed-account-executive",
    },
    {
      slug: "daniel-karimi-account-executive",
      title: "Daniel Karimi Joins as Account Executive",
      description: "Press release announcing Daniel Karimi joining Nordic Defender's sales team as Account Executive, adding extra power to the company's sales engine and expansion efforts.",
      results: "Team Expansion | Sales Growth | Market Development",
      workType: ["Press Release"],
      industry: ["Cybersecurity"],
      format: ["Press Release"],
      externalUrl: "https://nordicdefender.com/blog/daniel-karimi-joins-as-account-executive",
    },
    {
      slug: "customer-story-stratsys",
      title: "Customer Story: Stratsys",
      description: "Case study showcasing how Nordic Defender's Next-Gen Pentest provided Stratsys with continuous pentesting, flexible attack surface coverage, and Jira integration for seamless workflow.",
      results: "Continuous Security | Workflow Integration | Client Satisfaction",
      workType: ["Case Study"],
      industry: ["Cybersecurity"],
      format: ["Case Study"],
      externalUrl: "https://nordicdefender.com/blog/customer-story-stratsys",
    },
    {
      slug: "customer-story-aqua-robur-ab",
      title: "Customer Story: Aqua Robur AB",
      description: "Case study demonstrating how Nordic Defender ensured client compliance and data security for Aqua Robur AB's IoT devices through Next-Gen Pentest as a Service.",
      results: "Client Compliance | Data Security | Industry Adaptability",
      workType: ["Case Study"],
      industry: ["Cybersecurity"],
      format: ["Case Study"],
      externalUrl: "https://nordicdefender.com/blog/customer-story-aqua-robur-ab",
    },
    {
      slug: "customer-story-coinlocally",
      title: "Customer Story: Coinlocally",
      description: "Case study highlighting how Nordic Defender provided comprehensive security for Coinlocally cryptocurrency exchange, protecting users' data and money from cyber threats.",
      results: "Crypto Security | Real-World Threat Response | User Protection",
      workType: ["Case Study"],
      industry: ["Cybersecurity"],
      format: ["Case Study"],
      externalUrl: "https://nordicdefender.com/blog/customer-story-coinlocally",
    },
    {
      slug: "customer-story-veidec-ab",
      title: "Customer Story: Veidec AB",
      description: "Case study showing how Nordic Defender's real-time portal and Next-Gen Pentest helped Veidec AB maintain business continuity while meeting budget and timeline requirements.",
      results: "Business Continuity | Real-Time Visibility | Budget Compliance",
      workType: ["Case Study"],
      industry: ["Cybersecurity"],
      format: ["Case Study"],
      externalUrl: "https://nordicdefender.com/blog/customer-story-veidec-ab",
    },
  ];

  // Define available filter options even when no work items exist
  const allWorkTypes = ["Blog", "Case Study", "Press Release", "White Paper", "Marketing Email", "Sales Email", "LinkedIn Post", "Webpage", "Landing Page", "Research Analysis"];
  const allIndustries = ["Technology", "Real Estate", "Cybersecurity", "Finance", "Marketing", "E-commerce", "Media & Entertainment", "Professional Services"];

  // Filter logic
  const filteredWork = selectedWork.filter(item => {
    const workTypeMatch = selectedWorkTypes.length === 0 || selectedWorkTypes.some(type => item.workType.includes(type));
    const industryMatch = selectedIndustries.length === 0 || selectedIndustries.some(ind => item.industry.includes(ind));
    return workTypeMatch && industryMatch;
  });

  const toggleFilter = (value: string, selectedArray: string[], setSelectedArray: (arr: string[]) => void) => {
    if (selectedArray.includes(value)) {
      setSelectedArray(selectedArray.filter(item => item !== value));
    } else {
      setSelectedArray([...selectedArray, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedWorkTypes([]);
    setSelectedIndustries([]);
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
        
        <div className="container mx-auto max-w-6xl relative z-20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="mb-16 flex justify-center">
              <TabsList className="md:pixel-border md:bg-background/60 md:backdrop-blur-md md:p-1.5 md:pixel-shadow-lg bg-transparent flex flex-col md:flex-row gap-0 md:gap-2 w-full md:w-auto p-0 mt-8 md:mt-0 items-stretch">
                <TabsTrigger 
                  value="case-studies" 
                  className="font-primary text-base md:text-lg uppercase tracking-wider px-8 py-4 border-2 border-border data-[state=active]:border-accent data-[state=active]:bg-accent/20 data-[state=active]:text-accent md:border-0 md:pixel-border md:bg-muted/30 md:text-muted-foreground md:data-[state=active]:bg-gradient-to-br md:data-[state=active]:from-accent md:data-[state=active]:to-accent/80 md:data-[state=active]:text-background md:data-[state=active]:pixel-shadow md:hover:bg-muted/50 md:hover:-translate-y-0.5 transition-all flex-1 md:flex-none md:min-w-[220px] md:data-[state=active]:font-bold"
                >
                  Case Studies
                </TabsTrigger>
                <TabsTrigger 
                  value="featured-work" 
                  className="font-primary text-base md:text-lg uppercase tracking-wider px-8 py-4 border-2 border-border data-[state=active]:border-secondary data-[state=active]:bg-secondary/20 data-[state=active]:text-secondary md:border-0 md:pixel-border md:bg-muted/30 md:text-muted-foreground md:data-[state=active]:bg-gradient-to-br md:data-[state=active]:from-secondary md:data-[state=active]:to-secondary/80 md:data-[state=active]:text-background md:data-[state=active]:pixel-shadow md:hover:bg-muted/50 md:hover:-translate-y-0.5 transition-all flex-1 md:flex-none md:min-w-[220px] md:data-[state=active]:font-bold"
                >
                  Featured Work
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="case-studies">
              <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((project, index) => (
                <PixelCard 
                  key={index}
                  className="cursor-pointer transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:pixel-shadow-lg group relative overflow-hidden flex flex-col"
                  onClick={() => handleCaseStudyClick(project)}
                >
                  {/* Gradient accent line at top */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="inline-block pixel-border bg-gradient-to-br from-accent/30 to-accent/10 px-2 py-1 mb-4 group-hover:from-accent/40 group-hover:to-accent/20 transition-all w-fit">
                      <span className="font-primary text-[10px] uppercase tracking-wide">{project.category}</span>
                    </div>
                    <h3 className="font-primary text-xl mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="font-secondary text-sm mb-6 leading-relaxed text-foreground/90">{project.description}</p>
                    
                    {/* Bottom section - sticks to bottom */}
                    <div className="mt-auto space-y-4">
                      <div className="pixel-border bg-gradient-to-br from-secondary/30 to-secondary/10 px-4 py-3 group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all">
                        <p className="font-secondary text-xs font-semibold leading-relaxed">{project.results}</p>
                      </div>
                      <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all">
                        <span className="font-primary text-[11px] uppercase tracking-wider">View Case Study</span>
                        <span className="text-lg">→</span>
                      </div>
                    </div>
                  </div>
                </PixelCard>
              ))}
            </div>
              </div>
            </TabsContent>

            <TabsContent value="featured-work">
              <div>
            
            {/* Filter Component */}
            <div className="mb-12 space-y-4 relative z-50">
              <div className="flex flex-wrap gap-4">
                {/* Work Type Filter */}
                <div className="relative" ref={workTypeRef}>
                  <button
                    onClick={() => setWorkTypeOpen(!workTypeOpen)}
                    className="pixel-border pixel-shadow bg-card hover:bg-accent/10 hover:pixel-shadow-lg hover:-translate-x-1 hover:-translate-y-1 px-5 py-3 font-secondary text-sm flex items-center gap-3 min-w-[180px] justify-between transition-all group"
                  >
                    <span className="font-semibold">Work Type {selectedWorkTypes.length > 0 && <span className="text-accent">({selectedWorkTypes.length})</span>}</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                  {workTypeOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 pixel-border pixel-shadow-lg bg-card p-4 z-[100]">
                      {allWorkTypes.map(type => (
                        <label
                          key={type}
                          className="flex items-center gap-3 py-3 px-3 cursor-pointer hover:bg-accent/10 transition-colors rounded-sm group"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFilter(type, selectedWorkTypes, setSelectedWorkTypes);
                          }}
                        >
                          <div className={`w-5 h-5 pixel-border flex items-center justify-center transition-colors ${selectedWorkTypes.includes(type) ? 'bg-accent' : 'bg-background'}`}>
                            {selectedWorkTypes.includes(type) && <span className="text-background text-xs">✓</span>}
                          </div>
                          <span className="font-secondary text-sm group-hover:text-accent transition-colors">{type}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Industry Filter */}
                <div className="relative" ref={industryRef}>
                  <button
                    onClick={() => setIndustryOpen(!industryOpen)}
                    className="pixel-border pixel-shadow bg-card hover:bg-secondary/10 hover:pixel-shadow-lg hover:-translate-x-1 hover:-translate-y-1 px-5 py-3 font-secondary text-sm flex items-center gap-3 min-w-[180px] justify-between transition-all group"
                  >
                    <span className="font-semibold">Industry {selectedIndustries.length > 0 && <span className="text-secondary">({selectedIndustries.length})</span>}</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  </button>
                  {industryOpen && (
                    <div className="absolute top-full left-0 mt-2 w-72 pixel-border pixel-shadow-lg bg-card p-4 z-[100]">
                      {allIndustries.map(industry => (
                        <label
                          key={industry}
                          className="flex items-center gap-3 py-3 px-3 cursor-pointer hover:bg-secondary/10 transition-colors rounded-sm group"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFilter(industry, selectedIndustries, setSelectedIndustries);
                          }}
                        >
                          <div className={`w-5 h-5 pixel-border flex items-center justify-center transition-colors ${selectedIndustries.includes(industry) ? 'bg-secondary' : 'bg-background'}`}>
                            {selectedIndustries.includes(industry) && <span className="text-background text-xs">✓</span>}
                          </div>
                          <span className="font-secondary text-sm group-hover:text-secondary transition-colors">{industry}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Clear Filters Button */}
                {(selectedWorkTypes.length > 0 || selectedIndustries.length > 0) && (
                  <button
                    onClick={clearAllFilters}
                    className="pixel-border pixel-shadow bg-gradient-to-br from-secondary/30 to-secondary/10 hover:from-secondary/40 hover:to-secondary/20 hover:pixel-shadow-lg hover:-translate-x-1 hover:-translate-y-1 px-5 py-3 font-secondary text-sm flex items-center gap-2 transition-all"
                  >
                    <X className="w-4 h-4" />
                    <span className="font-semibold">Clear All</span>
                  </button>
                )}
              </div>
            </div>

            {/* Work Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWork.length === 0 ? (
                <div className="col-span-full text-center py-20">
                  <div className="pixel-border bg-muted/20 px-8 py-12 inline-block">
                    <p className="font-secondary text-muted-foreground text-lg">No matching work items found.</p>
                    <p className="font-secondary text-muted-foreground/70 text-sm mt-2">Try adjusting your filters.</p>
                  </div>
                </div>
              ) : (
                filteredWork.map((project, index) => (
                  <PixelCard 
                    key={index} 
                    id={project.slug ? `work-${project.slug}` : undefined}
                    className={`transition-all duration-300 hover:-translate-x-2 hover:-translate-y-2 hover:pixel-shadow-lg flex flex-col group relative overflow-hidden cursor-pointer ${
                      highlightedWorkSlug === project.slug ? 'ring-4 ring-accent animate-pulse' : ''
                    }`}
                    onClick={() => {
                      if (project.slug) {
                        setSearchParams({ work: project.slug });
                        setHighlightedWorkSlug(project.slug);
                        setTimeout(() => setHighlightedWorkSlug(null), 3000);
                      }
                    }}
                  >
                    {/* Gradient accent at top */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/50 via-secondary/50 to-accent/50 opacity-60 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Tags at top */}
                      <div className="mb-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.workType.map(type => (
                            <span key={type} className="pixel-border bg-gradient-to-br from-primary/20 to-primary/5 text-primary px-2 py-0.5 text-[10px] font-secondary uppercase tracking-wide">
                              {type}
                            </span>
                          ))}
                          {project.industry.map(ind => (
                            <span key={ind} className="pixel-border bg-gradient-to-br from-accent/20 to-accent/5 text-accent px-2 py-0.5 text-[10px] font-secondary uppercase tracking-wide">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>

                      <h3 className="font-primary text-xl mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
                      
                      {/* Bottom section with results and buttons - sticks to bottom */}
                      <div className="mt-auto space-y-4">
                        <div className="pixel-border bg-gradient-to-br from-secondary/30 to-secondary/10 px-4 py-3 group-hover:from-secondary/40 group-hover:to-secondary/20 transition-all">
                          <p className="font-secondary text-xs font-semibold leading-relaxed">{project.results}</p>
                        </div>

                        {/* Action Buttons */}
                        {(project.downloadUrl || project.viewImageUrl || project.externalUrl || project.beforeAfterImage) && (
                          <div className="flex gap-2">
                            {project.downloadUrl && (
                              <a
                                href={project.downloadUrl}
                                download
                                className="pixel-border bg-gradient-to-br from-accent/30 to-accent/10 text-accent px-4 py-2 text-[11px] font-secondary uppercase tracking-wide hover:from-accent/40 hover:to-accent/20 hover:pixel-shadow transition-all font-semibold"
                              >
                                {project.downloadUrl.endsWith('.html') ? 'Download HTML' : 'Download PDF'}
                              </a>
                            )}
                            {project.beforeAfterImage && (
                              <a
                                href={project.beforeAfterImage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pixel-border bg-gradient-to-br from-primary/30 to-primary/10 text-primary px-4 py-2 text-[11px] font-secondary uppercase tracking-wide hover:from-primary/40 hover:to-primary/20 hover:pixel-shadow transition-all font-semibold"
                              >
                                See Before/After
                              </a>
                            )}
                            {project.viewImageUrl && (
                              <button
                                onClick={() => setViewImageUrl(project.viewImageUrl!)}
                                className="pixel-border bg-gradient-to-br from-primary/30 to-primary/10 text-primary px-4 py-2 text-[11px] font-secondary uppercase tracking-wide hover:from-primary/40 hover:to-primary/20 hover:pixel-shadow transition-all font-semibold"
                              >
                                View Diagram
                              </button>
                            )}
                            {project.externalUrl && (
                              <a
                                href={project.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pixel-border bg-gradient-to-br from-accent/30 to-accent/10 text-accent px-4 py-2 text-[11px] font-secondary uppercase tracking-wide hover:from-accent/40 hover:to-accent/20 hover:pixel-shadow transition-all font-semibold"
                              >
                                {getButtonText(project.workType)}
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </PixelCard>
                ))
              )}
            </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Viewer Modal */}
      <Dialog open={!!viewImageUrl} onOpenChange={() => setViewImageUrl(null)}>
        <DialogContent className="max-w-6xl max-h-[90vh] pixel-border bg-background p-0">
          {viewImageUrl && (
            <div className="relative w-full h-full overflow-auto p-6">
              <img 
                src={viewImageUrl} 
                alt="Work diagram" 
                className="w-full h-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Case Study Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={handleCaseStudyClose}>
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

                {/* Testimonial Section */}
                {selectedCaseStudy.testimonial && (
                  <div className="space-y-3">
                    <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                      Testimonial
                    </h3>
                    <div className="pixel-border p-6 bg-secondary/5">
                      <div className="flex items-start gap-4 mb-4">
                        <img 
                          src={selectedCaseStudy.testimonial.avatar} 
                          alt={selectedCaseStudy.testimonial.name}
                          className="w-16 h-16 pixel-border"
                        />
                        <div className="flex-1">
                          <h4 className="font-primary text-lg mb-1">
                            {selectedCaseStudy.testimonial.name}
                          </h4>
                          <p className="font-secondary text-sm text-muted-foreground mb-2">
                            {selectedCaseStudy.testimonial.title}, {selectedCaseStudy.testimonial.company}
                          </p>
                          <div className="flex gap-1">
                            {Array.from({ length: selectedCaseStudy.testimonial.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="font-secondary text-sm leading-relaxed">
                        {selectedCaseStudy.testimonial.text}
                      </p>
                    </div>
                  </div>
                )}

                {/* Interview Section */}
                {selectedCaseStudy.interview && (
                  <div className="space-y-3">
                    <h3 className="font-primary text-xl text-accent pixel-border inline-block px-3 py-1 bg-accent/10">
                      Full Interview
                    </h3>
                    <div className="pixel-border p-6 bg-secondary/5 space-y-4">
                      <a 
                        href={selectedCaseStudy.interview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-secondary text-sm text-accent hover:underline block"
                      >
                        Watch the interview on YouTube →
                      </a>
                      {selectedCaseStudy.interview.content && (
                        <div className="space-y-3">
                          <div 
                            className={`font-secondary text-sm leading-relaxed whitespace-pre-line ${!showFullInterview ? 'line-clamp-6' : ''}`}
                            dangerouslySetInnerHTML={{
                              __html: selectedCaseStudy.interview.content.replace(
                                /\*\*(.*?)\*\*/g,
                                '<strong>$1</strong>'
                              )
                            }}
                          />
                          <button
                            onClick={() => setShowFullInterview(!showFullInterview)}
                            className="font-secondary text-sm text-accent hover:underline"
                          >
                            {showFullInterview ? 'Read Less' : 'Read More'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

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
    </div>
  );
}
