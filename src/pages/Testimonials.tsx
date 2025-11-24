import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { ClientLogos } from "@/components/ClientLogos";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialsBg from "@/assets/testimonials-bg-pixel.png";
import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
import alirezaKhorshidi from "@/assets/testimonials/alireza-khorshidi.png";
import avatar1 from "@/assets/testimonials/avatar-1.png";
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
import avatar12 from "@/assets/testimonials/avatar-12.png";
import avatar13 from "@/assets/testimonials/avatar-13.png";
import masoudRezaei from "@/assets/testimonials/masoud-rezaei.png";
import shadiAvatar from "@/assets/testimonials/shadi-avatar.png";
import gabbieSanchez from "@/assets/testimonials/gabbie-sanchez.png";
import manaBehzad from "@/assets/testimonials/mana-behzad.png";
import abbyNduta from "@/assets/testimonials/abby-nduta.png";
import cissyZhao from "@/assets/testimonials/cissy-zhao.png";
const Testimonials = () => {
  const featuredTestimonials = [
    {
      name: "Trina Moitra",
      role: "CMO, Convert.com",
      content:
        "Armin impressed me with his attention to detail & his knowledge of the industry from day 1. We needed someone to take on the production of bottom-of-the-funnel focused content and to seed Convert's name in the SERPs for our brand new features. Our collaboration was very pleasant. Renee Content has a good process and they really give 110% to understand your requirements. Thank you for being such consummate professionals!",
      rating: 5,
      avatar: trinaMoitra,
      caseStudyUrl: "/work?case=convert",
    },
    {
      name: "Alireza Khorshidi",
      role: "Head of Growth & Lifecycle Marketing, Roomvu",
      content:
        "Armin is a highly effective strategic copywriter. I managed him at Roomvu, where he ran our cold email outbound, and strong results consistently backed his performance. He doesn't just write; he leverages the power of content within a specific, results-driven strategy. While his focus was cold email with us, I know he is also very capable of driving multi-channel content strategies (across email, LinkedIn, and X). He's a professional, clear communicator and brings a valuable creative perspective (he's also a professional guitar player!). I strongly recommend him to any team.",
      rating: 5,
      avatar: alirezaKhorshidi,
      caseStudyUrl: "/work?case=roomvu",
    },
  ];

  const regularTestimonials = [
    // Testimonials with case studies first
    {
      name: "Parand Sh.",
      role: "Founder, Influencer Marketing Agency",
      content:
        "The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%. The quality of the delivered content has been excellent. It has definitely exceeded my expectations. Our collaboration has been an absolute pleasure, a decision I would make over and over again. They made sure that all my requirements were understood fully and executed flawlessly.",
      rating: 5,
      avatar: parandSh,
      caseStudyUrl: "/work?case=influencer-marketing-business",
    },
    {
      name: "Mehdi Rahmaninia",
      role: "Head of Marketing, WatchThemLive",
      content: "They really deliver what they are promising. I had an increased traffic since the contents were rich in terms of SEO, and the copy was good too. So, in the articles that were targeting my bottom funnel, the content and copy were converting pretty well. The overall experience of working with Renée Content was pretty great, and I was confident that they understood what I needed from them every step of the way.",
      rating: 5,
      avatar: avatar3,
      caseStudyUrl: "/work?case=rahmaninia-digital-marketing",
    },
    {
      name: "Niloofar Sh.",
      role: "Founder and CEO, Digital Marketing Agency",
      content: "The quality of the content they provided was simply outstanding. It perfectly captured my brand's voice and style, and their attention to detail exceeded my expectations. They went above and beyond to deliver content that genuinely resonated with my audience and contributed to our overall business growth and success.",
      rating: 5,
      avatar: avatar6,
      caseStudyUrl: "/work?case=digital-marketing-agency",
    },
    {
      name: "Negar Farazmand",
      role: "Content and SEO Manager, WatchThemLive",
      content: "Armin is smart and a fast learner. His knowledge in many fields helps him find his way in almost any role you give him. Moreover, Armin's ambition and enthusiasm are absolutely remarkable, which lead him to achieve continued progress. His technical skills, coding knowledge, and brilliant ideas were a great help to the team. Working with Armin on the same team was a great experience.",
      rating: 5,
      avatar: avatar7,
      caseStudyUrl: "/work?case=watchthemlive",
    },
    {
      name: "Mahmoud Valanejad",
      role: "Founder, Media Creation Company",
      content: "I think they really care more about your business than you do. They are really experienced and they have a great customer support. You know, you can leave your business to them without any concern, and that's the point.",
      rating: 5,
      avatar: avatar9,
      caseStudyUrl: "/work?case=mv-production",
    },
    {
      name: "Shadi V.",
      role: "Founder, Boutique",
      content: "In fact, our results were beyond my wildest dreams. Our website traffic skyrocketed, and we witnessed an impressive 3-fold increase in leads. Our content was engaging, informative, and perfectly aligned with our brand's message.",
      rating: 5,
      avatar: shadiAvatar,
      caseStudyUrl: "/work?case=boutique",
    },
    {
      name: "Gabbie Sanchez",
      role: "Founder, Leverato",
      content: "Armin is the most encouraging and enthusiastic mentor there is. He made me believe in myself, which is hard for someone with imposter syndrome. He made me believe that my skills are indeed highly in-demand and all I need is the right push to get myself out there. He is the push that I have been searching for all these years. Truly grateful that I get to call someone so insightful and positive as my mentor!",
      rating: 5,
      avatar: gabbieSanchez,
    },
    {
      name: "Cissy Zhao",
      role: "Founder, Cissy Zhao Consulting",
      content: "This is probably one of the best spent one hour of my life. Armin understands what it takes to build a personal brand and shares valuable techniques and strategies patiently and systematically. He is also positive and friendly. Amazing vibe. Thank you so much for this.",
      rating: 5,
      avatar: cissyZhao,
    },
    {
      name: "Luis Acoltzi",
      role: "Founder & Art Director/Designer, Pixel Hangar",
      content: "Armin was great at advising on my content strategy and how to approach new business. I really appreciate the time and I look forward to the next session.",
      rating: 5,
      avatar: avatar13,
    },
    // Testimonials without case studies
    {
      name: "Ines Cid Blasco",
      role: "VP of Sales, Sales for Good",
      content: "Absolutely loved my session with Armin. You can tell he really knows his stuff: content writing. And on top of that, he genuinely wants to help. He has a very reciprocal approach to business, meaning he is as keen to give value as he is to receive it. Would highly recommend working with Armin!",
      rating: 5,
      avatar: avatar1,
    },
    {
      name: "Mana Behzad",
      role: "Multidisciplinary Creative",
      content: "Armin was incredibly generous, practical, and patient during our session. Drawing from his entrepreneurial background, he helped me better position my skills in areas that were unfamiliar to me. He encouraged me to stay open to possibilities I hadn't considered and equipped me with a range of valuable resources to take advantage of moving forward.",
      rating: 5,
      avatar: manaBehzad,
    },
    {
      name: "Julia Doronina",
      role: "Chief Marketing & Growth Leader, G-71",
      content: "The session went great! Armin shared many insights and was very helpful in my research, also suggested solutions to the problem and assisted with evaluating the product's functionality.",
      rating: 5,
      avatar: avatar2,
    },
    {
      name: "Aria Sadeghian",
      role: "CEO, Mirex Technologies",
      content: "It was a great honor to meet Armin about the barriers in our company, his sense of giving hints for solving your issues will cheer you up. Thanks, Armin for your support and time.",
      rating: 5,
      avatar: avatar4,
    },
    {
      name: "Uju Okoye",
      role: "Content Writer, Invoice.ng",
      content: "Armin was well-prepared and knowledgeable about content marketing. He was able to answer all of my questions and provided practical advice. He was patient and understanding. He took the time to listen to my goals and concerns, and he tailored his advice to my specific needs. Honestly, he was very helpful, he provided me with lots of resources to aid my learning and career, and offered to help more should the need be. Overall his session was absolutely awesome. Thank you, Armin.",
      rating: 5,
      avatar: avatar5,
    },
    {
      name: "Mojtaba Tavazo",
      role: "Founder and CEO, Casco Salon",
      content: "I'm very happy to meet Armin, and the mentoring session was enjoyable for me because Armin very professionally answered all my questions, examined the hidden aspects of my product, and gave me the best advice for it. I like to keep in touch with him in the future.",
      rating: 5,
      avatar: avatar8,
    },
    {
      name: "Mohammad Akhlaghi",
      role: "Product Manager, Cafe Bazaar",
      content: "Armin is a great person with great experience in Copywriting and SEO. I had a good meeting with him. I like to keep in touch with him in the future.",
      rating: 5,
      avatar: avatar11,
    },
    {
      name: "Masoud Rezaei",
      role: "Social Media Specialist",
      content: "Conversation was great. Armin has very high and rich knowledge and experience in the fields of content, copywriting and marketing. And as I expected, it helped and clarified my work path.",
      rating: 5,
      avatar: masoudRezaei,
    },
    {
      name: "Abby Nduta",
      role: "Developer, Technical Writer",
      content: "I can tell Armin's a professional and the approach of the lesson was helpful and memorable. He has helped me A LOT in understanding the basics of copy and improve my storytelling. Thank you Armin, I will forever be grateful!",
      rating: 5,
      avatar: abbyNduta,
    },
    {
      name: "AmirAli Piroozbakhsh",
      role: "Creative Director",
      content: "My mentorship session with Armin Parvin was incredibly insightful. It illuminated aspects I had overlooked, lighting up the path I thought I already knew.",
      rating: 5,
      avatar: avatar10,
    },
  ];
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-grow relative">
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url(${testimonialsBg})`,
            backgroundSize: 'auto',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}
        />
        <Header />

        <main className="relative container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-primary text-center mb-3 sm:mb-4 text-pixel">Testimonials</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center mb-8 sm:mb-10 md:mb-12 font-secondary max-w-2xl mx-auto px-4">
            What clients say about working with me
          </p>

          {/* Featured Testimonials */}
          <div className="mb-12 sm:mb-14 md:mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-primary text-center mb-6 sm:mb-8 text-accent">Client Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {featuredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                >
                  <PixelCard className="h-full flex flex-col p-4 sm:p-6 md:p-8 bg-gradient-to-br from-card via-card to-accent/10">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <Avatar className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 pixel-border flex-shrink-0">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="min-w-0">
                        <p className="font-primary font-bold text-sm sm:text-base md:text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground font-secondary leading-tight">{testimonial.role}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-accent text-sm sm:text-base md:text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent mb-3 sm:mb-4 opacity-50" />
                    <p className="text-foreground text-sm sm:text-base leading-relaxed flex-grow font-secondary">"{testimonial.content}"</p>
                    {testimonial.caseStudyUrl && (
                      <a 
                        href={testimonial.caseStudyUrl}
                        className="mt-4 inline-block text-accent hover:text-accent/80 font-primary text-sm font-semibold transition-colors"
                      >
                        Read Case Study →
                      </a>
                    )}
                  </PixelCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Regular Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index + 2) * 0.1,
                }}
              >
                <PixelCard className="flex flex-col h-full p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Avatar className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 pixel-border flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="min-w-0">
                      <p className="font-primary font-bold text-sm sm:text-base text-foreground">{testimonial.name}</p>
                      <p className="text-[10px] sm:text-xs text-muted-foreground font-secondary leading-tight">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-xs sm:text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-accent mb-2 sm:mb-3 opacity-50" />
                  <p className="text-foreground mb-3 sm:mb-4 font-secondary text-xs sm:text-sm leading-relaxed flex-grow">"{testimonial.content}"</p>
                  {testimonial.caseStudyUrl && (
                    <a 
                      href={testimonial.caseStudyUrl}
                      className="mt-auto inline-block text-accent hover:text-accent/80 font-primary text-xs font-semibold transition-colors"
                    >
                      Read Case Study →
                    </a>
                  )}
                </PixelCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </main>
      </div>

      {/* Client Logos Section */}
      <ClientLogos />

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
export default Testimonials;
