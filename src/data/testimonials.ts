import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import alirezaKhorshidi from "@/assets/testimonials/alireza-khorshidi.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
import shadiAvatar from "@/assets/testimonials/shadi-avatar.png";
import avatar1 from "@/assets/testimonials/avatar-1.png";
import manaBehzad from "@/assets/testimonials/mana-behzad.png";
import avatar2 from "@/assets/testimonials/avatar-2.png";
import avatar3 from "@/assets/testimonials/avatar-3.png";
import avatar4 from "@/assets/testimonials/avatar-4.png";
import avatar5 from "@/assets/testimonials/avatar-5.png";
import avatar6 from "@/assets/testimonials/avatar-6.png";
import avatar7 from "@/assets/testimonials/avatar-7.png";
import avatar8 from "@/assets/testimonials/avatar-8.png";
import avatar9 from "@/assets/testimonials/avatar-9.png";
import avatar10 from "@/assets/testimonials/avatar-10.png";
import avatar11 from "@/assets/testimonials/avatar-11.png";
import masoudRezaei from "@/assets/testimonials/masoud-rezaei.png";
import avatar13 from "@/assets/testimonials/avatar-13.png";
import gabbieSanchez from "@/assets/testimonials/gabbie-sanchez.png";
import cissyZhao from "@/assets/testimonials/cissy-zhao.png";
import abbyNduta from "@/assets/testimonials/abby-nduta.png";

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  featured: boolean;
  caseStudyUrl?: string;
}

export const testimonials: Testimonial[] = [
  // Featured Testimonials
  {
    name: "Trina Moitra",
    role: "CMO, Convert.com",
    content:
      "Armin impressed me with his attention to detail & his knowledge of the industry from day 1. We needed someone to take on the production of bottom-of-the-funnel focused content and to seed Convert's name in the SERPs for our brand new features. Our collaboration was very pleasant. Renee Content has a good process and they really give 110% to understand your requirements. Thank you for being such consummate professionals!",
    rating: 5,
    avatar: trinaMoitra,
    featured: true,
    caseStudyUrl: "/work?case=convert",
  },
  {
    name: "Alireza Khorshidi",
    role: "Head of Growth & Lifecycle Marketing, Roomvu",
    content:
      "Armin is a highly effective strategic copywriter. I managed him at Roomvu, where he ran our cold email outbound, and strong results consistently backed his performance. He doesn't just write; he leverages the power of content within a specific, results-driven strategy. While his focus was cold email with us, I know he is also very capable of driving multi-channel content strategies (across email, LinkedIn, and X). He's a professional, clear communicator and brings a valuable creative perspective (he's also a professional guitar player!). I strongly recommend him to any team.",
    rating: 5,
    avatar: alirezaKhorshidi,
    featured: true,
    caseStudyUrl: "/work?case=roomvu",
  },
  // Regular Testimonials
  {
    name: "Parand Sh.",
    role: "Founder, Influencer Marketing Agency",
    content:
      "The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%. The quality of the delivered content has been excellent. It has definitely exceeded my expectations. Our collaboration has been an absolute pleasure, a decision I would make over and over again. They made sure that all my requirements were understood fully and executed flawlessly.",
    rating: 5,
    avatar: parandSh,
    featured: false,
    caseStudyUrl: "/work?case=influencer-marketing-business",
  },
  {
    name: "Negar Farazmand",
    role: "Content and SEO Manager, WatchThemLive",
    content:
      "Armin is smart and a fast learner. His knowledge in many fields helps him find his way in almost any role you give him. Moreover, Armin's ambition and enthusiasm are absolutely remarkable, which lead him to achieve continued progress. His technical skills, coding knowledge, and brilliant ideas were a great help to the team. Working with Armin on the same team was a great experience.",
    rating: 5,
    avatar: avatar7,
    featured: false,
    caseStudyUrl: "/work?case=watchthemlive",
  },
  {
    name: "Mehdi Rahmaninia",
    role: "Head of Marketing, WatchThemLive",
    content:
      "They really deliver what they are promising. I had an increased traffic since the contents were rich in terms of SEO, and the copy was good too. So, in the articles that were targeting my bottom funnel, the content and copy were converting pretty well. The overall experience of working with Renée Content was pretty great, and I was confident that they understood what I needed from them every step of the way.",
    rating: 5,
    avatar: avatar3,
    featured: false,
    caseStudyUrl: "/work?case=rahmaninia-digital-marketing",
  },
  {
    name: "Shadi V.",
    role: "Founder, Boutique",
    content:
      "In fact, our results were beyond my wildest dreams. Our website traffic skyrocketed, and we witnessed an impressive 3-fold increase in leads. Our content was engaging, informative, and perfectly aligned with our brand's message.",
    rating: 5,
    avatar: shadiAvatar,
    featured: false,
    caseStudyUrl: "/work?case=boutique",
  },
  {
    name: "Niloofar Sh.",
    role: "Founder and CEO, Digital Marketing Agency",
    content:
      "The quality of the content they provided was simply outstanding. It perfectly captured my brand's voice and style, and their attention to detail exceeded my expectations. They went above and beyond to deliver content that genuinely resonated with my audience and contributed to our overall business growth and success.",
    rating: 5,
    avatar: avatar6,
    featured: false,
    caseStudyUrl: "/work?case=digital-marketing-agency",
  },
  {
    name: "Mahmoud Valanejad",
    role: "Founder, Media Creation Company",
    content:
      "I think they really care more about your business than you do. They are really experienced and they have a great customer support. You know, you can leave your business to them without any concern, and that's the point.",
    rating: 5,
    avatar: avatar9,
    featured: false,
    caseStudyUrl: "/work?case=mv-production",
  },
  {
    name: "Gabbie Sanchez",
    role: "Founder, Leverato",
    content:
      "Armin is the most encouraging and enthusiastic mentor there is. He made me believe in myself, which is hard for someone with imposter syndrome. He made me believe that my skills are indeed highly in-demand and all I need is the right push to get myself out there. He is the push that I have been searching for all these years. Truly grateful that I get to call someone so insightful and positive as my mentor!",
    rating: 5,
    avatar: gabbieSanchez,
    featured: false,
  },
  {
    name: "Cissy Zhao",
    role: "Founder, Cissy Zhao Consulting",
    content:
      "During our session, Armin took the time to understand my goals and challenges and even extended the call just to make sure all my questions were answered I left the session with a fresh perspective, actionable next steps, and a renewed sense of clarity and motivation. If you’re looking for a mentor who truly cares and brings both expertise and empathy to the table, I couldn’t recommend Armin more!",
    rating: 5,
    avatar: cissyZhao,
    featured: false,
  },
  {
    name: "Luis Acoltzi",
    role: "Founder & Art Director/Designer, Pixel Hangar",
    content:
      "Armin was great at advising on my content strategy and how to approach new business. I really appreciate the time and I look forward to the next session.",
    rating: 5,
    avatar: avatar13,
    featured: false,
  },
  {
    name: "Ines Cid Blasco",
    role: "VP of Sales, Sales for Good",
    content:
      "Absolutely loved my session with Armin. You can tell he really knows his stuff: content writing. And on top of that, he genuinely wants to help. He has a very reciprocal approach to business, meaning he is as keen to give value as he is to receive it. Would highly recommend working with Armin!",
    rating: 5,
    avatar: avatar1,
    featured: false,
  },
  {
    name: "Mana Behzad",
    role: "Multidisciplinary Creative",
    content:
      "Armin was incredibly generous, practical, and patient during our session. Drawing from his entrepreneurial background, he helped me better position my skills in areas that were unfamiliar to me. He encouraged me to stay open to possibilities I hadn't considered and equipped me with a range of valuable resources to take advantage of moving forward.",
    rating: 5,
    avatar: manaBehzad,
    featured: false,
  },
  {
    name: "Julia Doronina",
    role: "Chief Marketing & Growth Leader, G-71",
    content:
      "The session went great! Armin shared many insights and was very helpful in my research, also suggested solutions to the problem and assisted with evaluating the product's functionality.",
    rating: 5,
    avatar: avatar2,
    featured: false,
  },
  {
    name: "Aria Sadeghian",
    role: "CEO, Mirex Technologies",
    content:
      "It was a great honor to meet Armin about the barriers in our company, his sense of giving hints for solving your issues will cheer you up. Thanks, Armin for your support and time.",
    rating: 5,
    avatar: avatar4,
    featured: false,
  },
  {
    name: "Uju Okoye",
    role: "Content Writer, Invoice.ng",
    content:
      "Armin was well-prepared and knowledgeable about content marketing. He was able to answer all of my questions and provided practical advice. He was patient and understanding. He took the time to listen to my goals and concerns, and he tailored his advice to my specific needs. Honestly, he was very helpful, he provided me with lots of resources to aid my learning and career, and offered to help more should the need be. Overall his session was absolutely awesome. Thank you, Armin.",
    rating: 5,
    avatar: avatar5,
    featured: false,
  },
  {
    name: "Mojtaba Tavazo",
    role: "Founder and CEO, Casco Salon",
    content:
      "I'm very happy to meet Armin, and the mentoring session was enjoyable for me because Armin very professionally answered all my questions, examined the hidden aspects of my product, and gave me the best advice for it. I like to keep in touch with him in the future.",
    rating: 5,
    avatar: avatar8,
    featured: false,
  },
  {
    name: "Mohammad Akhlaghi",
    role: "Product Manager, Cafe Bazaar",
    content:
      "Armin is a great person with great experience in Copywriting and SEO. I had a good meeting with him. I like to keep in touch with him in the future.",
    rating: 5,
    avatar: avatar11,
    featured: false,
  },
  {
    name: "Abby Nduta",
    role: "Developer, Technical Writer",
    content:
      "This is probably one of the best spent one hour of my life. Armin understands what it takes to build a personal brand and shares valuable techniques and strategies patiently and systematically. He is also positive and friendly. Amazing vibe. Thank you so much for this.",
    rating: 5,
    avatar: abbyNduta,
    featured: false,
  },
  {
    name: "Masoud Rezaei",
    role: "Social Media Specialist",
    content:
      "Conversation was great. Armin has very high and rich knowledge and experience in the fields of content, copywriting and marketing. And as I expected, it helped and clarified my work path.",
    rating: 5,
    avatar: masoudRezaei,
    featured: false,
  },
  {
    name: "AmirAli Piroozbakhsh",
    role: "Creative Director",
    content:
      "My mentorship session with Armin Parvin was incredibly insightful. It illuminated aspects I had overlooked, lighting up the path I thought I already knew.",
    rating: 5,
    avatar: avatar10,
    featured: false,
  },
];

// Export formatted for marquee component
export const marqueeTestimonials = testimonials.map((t) => ({
  author: {
    name: t.name,
    handle: t.role,
    avatar: t.avatar,
  },
  text: t.content,
}));
