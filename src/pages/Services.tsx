import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { Mail, FileText, PenTool, Target, TrendingUp, Users } from "lucide-react";
import { Cursor } from "@/components/ui/inverted-cursor";

export default function Services() {
  const services = [
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Engaging email campaigns that convert subscribers into customers.",
    },
    {
      icon: FileText,
      title: "Content Writing",
      description: "SEO-optimized content that ranks and resonates with your audience.",
    },
    {
      icon: PenTool,
      title: "Copywriting",
      description: "Persuasive copy that drives action and boosts conversions.",
    },
    {
      icon: Target,
      title: "Content Strategy",
      description: "Data-driven content plans that align with your business goals.",
    },
    {
      icon: TrendingUp,
      title: "Conversion Optimization",
      description: "Strategic improvements to turn more visitors into customers.",
    },
    {
      icon: Users,
      title: "Ghostwriting",
      description: "Professional ghostwriting that captures your unique voice and vision.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Cursor />
      <Header />
      
      <section className="flex-grow py-24 px-4 pt-32">
        <div className="container mx-auto max-w-6xl">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <PixelCard key={index}>
                  <Icon className="w-12 h-12 mb-4 text-accent" />
                  <h3 className="font-primary text-lg mb-3">{service.title}</h3>
                  <p className="font-secondary text-sm">{service.description}</p>
                </PixelCard>
              );
            })}
          </div>
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
