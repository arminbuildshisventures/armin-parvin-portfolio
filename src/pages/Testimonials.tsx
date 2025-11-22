import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Quote } from "lucide-react";
import { PixelCard } from "@/components/PixelCard";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import testimonialsBg from "@/assets/testimonials-bg-pixel.png";
import trinaMoitra from "@/assets/testimonials/trina-moitra.png";
import parandSh from "@/assets/testimonials/parand-sh.png";
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
import lorenzoLogo from "@/assets/clients/LorenzoLogo.png";
import rahmaniniaLogo from "@/assets/clients/Rahmaninia Logo 1.png";
import wtlLogo from "@/assets/clients/WTL.png";
import bsuiteLogo from "@/assets/clients/bsuite-logo.svg";
import citronityLogo from "@/assets/clients/citronity.svg";
import cloudzyLogo from "@/assets/clients/cloudzy.svg";
import convertLogo from "@/assets/clients/convert.svg";
import nordicLogo from "@/assets/clients/nordic.svg";
import roomvuLogo from "@/assets/clients/roomvu.svg";
import veronalabsLogo from "@/assets/clients/veronalabs.png";
import wpsmsLogo from "@/assets/clients/wpsms.png";
const Testimonials = () => {
  const clientLogos = [
    {
      src: lorenzoLogo,
      alt: "Lorenzo CPA",
    },
    {
      src: rahmaniniaLogo,
      alt: "Mehdi Rahmaninia",
    },
    {
      src: wtlLogo,
      alt: "WatchThemLive",
    },
    {
      src: bsuiteLogo,
      alt: "BSuite",
    },
    {
      src: citronityLogo,
      alt: "Citronity",
    },
    {
      src: cloudzyLogo,
      alt: "Cloudzy",
    },
    {
      src: convertLogo,
      alt: "Convert",
    },
    {
      src: nordicLogo,
      alt: "Nordic Defender",
    },
    {
      src: roomvuLogo,
      alt: "Roomvu",
    },
    {
      src: veronalabsLogo,
      alt: "Verona Labs",
    },
    {
      src: wpsmsLogo,
      alt: "WP SMS",
    },
  ];
  const featuredTestimonials = [
    {
      name: "Trina Moitra",
      role: "CMO, Convert.com",
      content:
        "Armin impressed me with his attention to detail & his knowledge of the industry from day 1. We needed someone to take on the production of bottom-of-the-funnel focused content and to seed Convert's name in the SERPs for our brand new features. Our collaboration was very pleasant. Renee Content has a good process and they really give 110% to understand your requirements. Thank you for being such consummate professionals!",
      rating: 5,
      avatar: trinaMoitra,
      caseStudyUrl: "#",
    },
    {
      name: "Parand Sh.",
      role: "Business Owner",
      content:
        "The result speaks for itself really. The content has helped me connect with my target audience, boost my website traffic by 38%, and improve the conversion rate by 23%. The quality of the delivered content has been excellent. It has definitely exceeded my expectations. Our collaboration has been an absolute pleasure, a decision I would make over and over again. They made sure that all my requirements were understood fully and executed flawlessly.",
      rating: 5,
      avatar: parandSh,
      caseStudyUrl: "#", // Placeholder for case study link
    },
  ];

  const regularTestimonials = [
    {
      name: "Mehdi Rahmaninia",
      role: "Founder, CEO, and Marketing Management Consultant",
      content: "They really deliver what they are promising. I had an increased traffic since the contents were rich in terms of SEO, and the copy was good too. So, in the articles that were targeting my bottom funnel, the content and copy were converting pretty well. The overall experience of working with Renée Content was pretty great, and I was confident that they understood what I needed from them every step of the way.",
      rating: 5,
      avatar: avatar3,
      caseStudyUrl: "#",
    },
    {
      name: "Niloofar Sh.",
      role: "Founder and CEO, Digital Marketing Agency",
      content: "The quality of the content they provided was simply outstanding. It perfectly captured my brand's voice and style, and their attention to detail exceeded my expectations. They went above and beyond to deliver content that genuinely resonated with my audience and contributed to our overall business growth and success.",
      rating: 5,
      avatar: avatar6,
      caseStudyUrl: "#",
    },
    {
      name: "Negar Farazmand",
      role: "Business Design Expert, UI/UX Designer, Digital Marketer",
      content: "Armin is smart and a fast learner. His knowledge in many fields helps him find his way in almost any role you give him. Moreover, Armin's ambition and enthusiasm are absolutely remarkable, which lead him to achieve continued progress. His technical skills, coding knowledge, and brilliant ideas were a great help to the team. Working with Armin on the same team was a great experience.",
      rating: 5,
      avatar: avatar7,
      caseStudyUrl: "#",
    },
    {
      name: "Mahmoud Valanejad",
      role: "Media Creation Company Owner, MV Production",
      content: "I think they really care more about your business than you do. They are really experienced and they have a great customer support. You know, you can leave your business to them without any concern, and that's the point.",
      rating: 5,
      avatar: avatar9,
      caseStudyUrl: "#",
    },
    {
      name: "Shadi V.",
      role: "Business Owner, Boutique",
      content: "In fact, our results were beyond my wildest dreams. Our website traffic skyrocketed, and we witnessed an impressive 3-fold increase in leads. Our content was engaging, informative, and perfectly aligned with our brand's message.",
      rating: 5,
      avatar: shadiAvatar,
      caseStudyUrl: "#",
    },
    {
      name: "Ines Cid Blasco",
      role: "VP of Sales, Sales for Good",
      content: "Absolutely loved my session with Armin. You can tell he really knows his stuff: content writing. And on top of that, he genuinely wants to help. He has a very reciprocal approach to business, meaning he is as keen to give value as he is to receive it. Would highly recommend working with Armin!",
      rating: 5,
      avatar: avatar1,
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
      name: "AmirAli Piroozbakhsh",
      role: "Creative Director",
      content: "My mentorship session with Armin Parvin was incredibly insightful. It illuminated aspects I had overlooked, lighting up the path I thought I already knew.",
      rating: 5,
      avatar: avatar10,
    },
    {
      name: "Luis Acoltzi",
      role: "Founder & Art Director/Designer, Pixel Hangar",
      content: "Armin was great at advising on my content strategy and how to approach new business. I really appreciate the time and I look forward to the next session.",
      rating: 5,
      avatar: avatar13,
    },
    {
      name: "Masoud Rezaei",
      role: "Social Media Specialist",
      content: "Conversation was great. Armin has very high and rich knowledge and experience in the fields of content, copywriting and marketing. And as I expected, it helped and clarified my work path.",
      rating: 5,
      avatar: masoudRezaei,
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

        <main className="relative container mx-auto px-4 pt-32 pb-16">
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
          <h1 className="text-4xl md:text-6xl font-primary text-center mb-4 text-pixel">Testimonials</h1>
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-12 font-secondary max-w-2xl mx-auto">
            What clients say about working with me
          </p>

          {/* Client Logos Carousel */}
          <div className="mb-16 pixel-border bg-zinc-800 backdrop-blur-sm p-8 rounded-lg relative">
            <p className="text-center text-zinc-400 font-secondary mb-6">Trusted by leading brands</p>
            <div className="relative w-full overflow-hidden">
              <div className="flex">
                {[...Array(3)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 flex-shrink-0 animate-marquee">
                    {clientLogos.map((logo, index) => (
                      <div
                        key={`${setIndex}-${index}`}
                        className={`flex items-center justify-center h-20 w-52 flex-shrink-0 hover:scale-110 transition-transform duration-300 ${
                          logo.alt === "WP SMS" || logo.alt === "Lorenzo CPA" ? "px-10" : ""
                        }`}
                      >
                        <img src={logo.src} alt={logo.alt} className="h-14 w-auto object-contain brightness-0 invert" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* Fade overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-800 to-transparent pointer-events-none rounded-l-lg" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-zinc-800 to-transparent pointer-events-none rounded-r-lg" />
          </div>

          {/* Featured Testimonials */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-primary text-center mb-8 text-accent">Client Success Stories</h2>
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
                  <PixelCard className="h-full flex flex-col p-8 bg-gradient-to-br from-card via-card to-accent/10">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-20 h-20 pixel-border">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-primary font-bold text-lg text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground font-secondary">{testimonial.role}</p>
                        <div className="flex gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-accent text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quote className="w-10 h-10 text-accent mb-4 opacity-50" />
                    <p className="text-foreground text-base leading-relaxed flex-grow font-secondary">"{testimonial.content}"</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
                <PixelCard className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-16 h-16 pixel-border">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-primary font-bold text-foreground">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground font-secondary">{testimonial.role}</p>
                      <div className="flex gap-1 mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-accent text-sm">
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-accent mb-3 opacity-50" />
                  <p className="text-foreground mb-4 flex-grow font-secondary text-sm">"{testimonial.content}"</p>
                  {testimonial.caseStudyUrl && (
                    <a 
                      href={testimonial.caseStudyUrl}
                      className="mt-3 inline-block text-accent hover:text-accent/80 font-primary text-xs font-semibold transition-colors"
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
