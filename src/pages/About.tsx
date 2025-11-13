import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { Cursor } from "@/components/ui/inverted-cursor";

export default function About() {
  return (
    <div className="min-h-screen">
      <Cursor />
      <Header />
      
      <section className="py-24 px-4 pt-32">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">About Me</h1>
          <PixelCard>
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
          </PixelCard>
        </div>
      </section>
    </div>
  );
}
