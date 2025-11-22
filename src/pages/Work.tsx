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
import watchthemLiveResults1 from "@/assets/work/watchthemlive-results-1.jpg";
import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
import mehdiRahmaninia from "@/assets/testimonials/avatar-3.png";
import niloofar from "@/assets/testimonials/avatar-6.png";
import avatar7 from "@/assets/testimonials/avatar-7.png";
import { Star } from "lucide-react";

interface CaseStudy {
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

export default function Work() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [showFullInterview, setShowFullInterview] = useState(false);

  const caseStudies: CaseStudy[] = [
    {
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
      description: "Cloudzy is a VPS and Cloud Service Provider serving hundreds of thousands of users worldwide. Developed technical blog content, knowledge base, and landing pages to maximize conversion rates and website visitors.",
      results: "Technical Articles Written: 23+ | Minutes Time on Page: 13+ | Landing Pages Copy Developed: 37+ | Better SERP Position: 7X | #1 Rankings and Featured Snippets Achieved | Conversion Rates: 5X | Users Acquired: 2,360+",
      challenge: "Cloudzy is a VPS and Cloud Service Provider serving hundreds of thousands of users worldwide. They needed to improve their organic search visibility and conversion rates in a competitive cloud hosting market. I was responsible for developing their technical blog content, knowledge base, and landing pages and webpages copy to ensure the maximum conversion rate.",
      process: "I used winning copywriting and storytelling techniques to maximize Cloudzy's website visitors, conversion rates, and added revenue. Researched high-value keywords with commercial intent and created in-depth technical blog posts that provided genuine value to readers while incorporating SEO best practices. Focused on comprehensive coverage of topics, proper heading structure, internal linking, and user experience. Ensured technical accuracy while maintaining readability. Developed landing page copy optimized for conversions.",
      outcome: "Achieved significant improvements across all metrics: wrote 23+ technical articles with an average time on page of 13+ minutes, developed copy for 37+ landing pages and webpages, improved SERP position by 7X with multiple articles achieving #1 rankings and featured snippets (position zero) on Google, increased conversion rates by 5X, and helped acquire 2,360+ new users. The technical blog posts became valuable resources frequently shared within the cloud hosting community.",
      images: [],
    },
    {
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
      title: "Digital Marketing Agency",
      category: "Content Marketing",
      description: "Executed content marketing strategy to establish thought leadership and drive client acquisition.",
      results: "Leads and Revenue Increase: 480% | Improved Brand Visibility | Enhanced Personal Brand",
      challenge: "The agency founder struggled to consistently produce engaging content that truly resonated with her audience. As a digital marketing agency owner, she knew the importance of having a strong online presence but needed support with LinkedIn ghostwriting, copywriting, and content writing services to establish thought leadership and drive client acquisition.",
      process: "Developed comprehensive content strategy focusing on LinkedIn ghostwriting, copywriting, and content writing. Created engaging thought leadership content that perfectly captured the brand's voice and style. Implemented consistent publishing schedule across LinkedIn and website. Crafted in-depth articles and insights that resonated with the target audience. Focused on building both personal brand visibility and agency growth through strategic content that contributed to overall business success.",
      outcome: "The results were incredible. Working with Renée Content not only improved the founder's personal brand visibility on LinkedIn, but it also had a significant impact on the agency's growth, achieving a remarkable 480% increase in leads and revenue. The quality of content exceeded expectations, perfectly capturing the brand's voice while significantly strengthening the online presence.",
      images: ["/placeholder.svg"],
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
      <Dialog open={!!selectedCaseStudy} onOpenChange={() => {
        setSelectedCaseStudy(null);
        setShowFullInterview(false);
      }}>
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
