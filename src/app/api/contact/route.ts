import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
  locale?: string;
  website?: string; // Honeypot field
}

// Basic HTML sanitization to prevent injection
function sanitizeString(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .trim();
}

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export async function POST(request: NextRequest) {
  try {
    const body: ContactRequestBody = await request.json();

    const {
      name,
      email,
      phone,
      company,
      subject,
      message,
      locale = "en",
      website,
    } = body;

    const isHindi = locale === "hi";

    // 1. Honeypot check: If the hidden 'website' field is populated, silently reject spam bots
    if (website && website.trim().length > 0) {
      console.warn("[Contact API] Bot submission blocked via honeypot field:", { ip: request.headers.get("x-forwarded-for") });
      // Return 200 so bots think they succeeded without actually sending email
      return NextResponse.json({
        success: true,
        message: isHindi ? "संदेश प्राप्त हुआ।" : "Inquiry received.",
      });
    }

    // 2. Presence validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "कृपया सभी आवश्यक फ़ील्ड (नाम, ईमेल, विषय, संदेश) भरें।"
            : "Please fill in all required fields (name, email, subject, message).",
        },
        { status: 400 }
      );
    }

    // 3. String sanitation & length verification
    const cleanName = sanitizeString(name);
    const cleanEmail = sanitizeString(email).toLowerCase();
    const cleanSubject = sanitizeString(subject);
    const cleanMessage = sanitizeString(message);
    const cleanPhone = phone ? sanitizeString(phone) : "";
    const cleanCompany = company ? sanitizeString(company) : "";
    const cleanLocale = locale === "hi" ? "hi" : "en";

    if (cleanName.length < 2 || cleanName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "नाम 2 से 100 वर्णों के बीच होना चाहिए।"
            : "Name must be between 2 and 100 characters.",
        },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(cleanEmail) || cleanEmail.length > 120) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "कृपया एक वैध ईमेल पता दर्ज करें।"
            : "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    if (cleanSubject.length < 3 || cleanSubject.length > 150) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "विषय 3 से 150 वर्णों के बीच होना चाहिए।"
            : "Subject must be between 3 and 150 characters.",
        },
        { status: 400 }
      );
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "संदेश कम से कम 10 और अधिकतम 3000 वर्णों का होना चाहिए।"
            : "Message must be between 10 and 3,000 characters.",
        },
        { status: 400 }
      );
    }

    if (cleanPhone && cleanPhone.length > 30) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "फ़ोन नंबर अधिकतम 30 वर्णों का हो सकता है।"
            : "Phone number cannot exceed 30 characters.",
        },
        { status: 400 }
      );
    }

    if (cleanCompany && cleanCompany.length > 100) {
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "कंपनी का नाम अधिकतम 100 वर्णों का हो सकता है।"
            : "Company name cannot exceed 100 characters.",
        },
        { status: 400 }
      );
    }

    // 4. Validate Environment Variables for Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL || "RS.BSC Contact <inquiries@rsbsc.com>";

    if (!resendApiKey || !contactToEmail) {
      console.error(
        "[Contact API Server Configuration Error]: RESEND_API_KEY or CONTACT_TO_EMAIL is missing in environment variables. Email cannot be delivered."
      );

      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "ईमेल प्रेषण सेवा वर्तमान में सर्वर पर कॉन्फ़िगर नहीं है। कृपया हमसे सीधे WhatsApp (+91 81399 48217) पर संपर्क करें।"
            : "Contact service is currently not configured on this server. Please reach out directly via WhatsApp (+91 81399 48217).",
        },
        { status: 503 }
      );
    }

    // 5. Send message via Resend SDK
    const resend = new Resend(resendApiKey);

    const emailResult = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: cleanEmail,
      subject: `[RS.BSC Website Inquiry] ${cleanSubject}`,
      text: `New contact submission received from RS.BSC website:\n
Name: ${cleanName}
Email: ${cleanEmail}
Phone: ${cleanPhone || "Not provided"}
Company: ${cleanCompany || "Not provided"}
Language: ${cleanLocale.toUpperCase()}
Subject: ${cleanSubject}

Message:
${cleanMessage}
\n---
Timestamp: ${new Date().toISOString()}
Origin: ${request.headers.get("referer") || "Direct API"}
`,
    });

    if (emailResult.error) {
      console.error("[Contact API Resend Delivery Error]:", emailResult.error);
      return NextResponse.json(
        {
          success: false,
          error: isHindi
            ? "संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें या WhatsApp का उपयोग करें।"
            : "Failed to dispatch email. Please try again later or contact us on WhatsApp.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: isHindi
          ? "आपका संदेश सफलतापूर्वक प्राप्त हो गया है। हमारी टीम शीघ्र ही संपर्क करेगी।"
          : "Your message has been delivered successfully. Our team will review your inquiry promptly.",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("[Contact API Internal Exception]:", err);
    return NextResponse.json(
      {
        success: false,
        error: "An internal server error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
