import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

// Rate limiting store
const rateLimitMap = new Map<string, number[]>();

// Schema validation
const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().email().max(255),
  subject: z.string().trim().min(3).max(200),
  message: z.string().trim().min(10).max(1000)
});

// HTML escape function to prevent XSS
const escapeHtml = (str: string): string => {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

// Rate limiting check (5 requests per hour per IP)
const checkRateLimit = (ip: string): boolean => {
  const now = Date.now();
  const requests = rateLimitMap.get(ip) || [];
  
  // Filter requests from the last hour
  const recentRequests = requests.filter(time => now - time < 3600000);
  
  if (recentRequests.length >= 5) {
    return false;
  }
  
  rateLimitMap.set(ip, [...recentRequests, now]);
  return true;
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Rate limit exceeded. Please try again later." 
        }),
        {
          status: 429,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    const body = await req.json();
    
    // Validate input server-side
    const validated = contactSchema.parse(body);
    const { name, email, subject, message } = validated;

    console.log("Sending contact email from:", escapeHtml(name), escapeHtml(email));

    // Send email using Resend REST API directly
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Contact Form <contact@arminparvin.me>",
        to: ["4rminp4rvin@gmail.com"],
        reply_to: email,
        subject: `Portfolio Contact: ${escapeHtml(subject)}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>
        `,
      }),
    });

    const emailData = await emailResponse.json();

    console.log("Email sent successfully:", emailData);

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    
    // Return user-friendly error message (don't expose internal details)
    const errorMessage = error instanceof z.ZodError 
      ? "Invalid input. Please check your form fields."
      : "Failed to send message. Please try again later.";
    
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: error instanceof z.ZodError ? 400 : 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
