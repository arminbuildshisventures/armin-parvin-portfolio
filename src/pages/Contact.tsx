import { Header } from "@/components/Header";
import { PixelCard } from "@/components/PixelCard";
import { ClientLogos } from "@/components/ClientLogos";
import { PixelButton } from "@/components/PixelButton";
import { Mail, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import contactBg from "@/assets/contact-bg-pixel.png";
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});
export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: values,
      });
      if (error) {
        throw error;
      }
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      form.reset();
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email me directly at 4rminp4rvin@gmail.com",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section 
        className="flex-grow py-24 px-4 pt-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${contactBg})`,
          imageRendering: 'pixelated'
        }}
      >
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-primary text-3xl md:text-5xl mb-12 text-center text-pixel">Get In Touch</h1>

          <PixelCard>
            <div className="space-y-6">
              <p className="font-secondary text-lg text-center">
                Ready to elevate your content and drive real results? <br />
                Let's discuss how I can help your business grow.
              </p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-primary">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="pixel-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-primary">Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            className="pixel-border"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-primary">Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="What's this about?" {...field} className="pixel-border" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-primary">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="pixel-border min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <PixelButton type="submit" variant="primary" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </PixelButton>
                </form>
              </Form>

              <div className="pt-6 border-t border-border">
                <p className="font-secondary text-center mb-4">Or connect with me here:</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <PixelButton variant="primary" onClick={() => window.open("mailto:4rminp4rvin@gmail.com", "_blank")}>
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </PixelButton>
                  <PixelButton
                    variant="accent"
                    onClick={() => window.open("https://linkedin.com/in/arminparvin/", "_blank")}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </PixelButton>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="font-primary text-lg mb-4 text-center">What to Expect</h3>
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
