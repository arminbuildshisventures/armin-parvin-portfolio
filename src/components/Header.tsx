import { Home, User, Briefcase, FileText, MessageSquare, Lightbulb, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

export function Header() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'Work', url: '/work', icon: FileText },
    { name: 'Testimonials', url: '/testimonials', icon: MessageSquare },
    { name: 'Insights', url: '/insights', icon: Lightbulb },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return <NavBar items={navItems} />;
}