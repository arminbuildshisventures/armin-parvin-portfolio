import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { PixelButton } from "@/components/PixelButton";
import { Mail, Linkedin, Twitter } from "lucide-react";
import { Cursor } from "@/components/ui/inverted-cursor";
export default function Contact() {
  return <div className="min-h-screen">
      <Cursor />
      <Header />

      <section className="py-24 px-4 pt-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Get In Touch</h1>

          <PixelCard>
            <div className="text-center space-y-6">
              <p className="font-secondary text-lg">
                Ready to elevate your content and drive real results?
Let's discuss how I can help your business grow.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-6">
                <PixelButton variant="primary" onClick={() => window.open("mailto:4rminp4rvin@gmail.com", "_blank")}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me
                </PixelButton>
                <PixelButton variant="accent" onClick={() => window.open("https://linkedin.com/in/arminparvin/", "_blank")}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </PixelButton>
                <PixelButton variant="secondary">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </PixelButton>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-primary text-lg mb-4">What to Expect</h3>
                <ul className="font-secondary text-sm space-y-3 text-left max-w-md mx-auto">
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Free initial consultation to discuss your needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Detailed proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2">•</span>
                    <span>Collaborative approach to ensure your vision comes to life</span>
                  </li>
                </ul>
              </div>
            </div>
          </PixelCard>
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
    </div>;
}