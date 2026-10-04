import React from "react";
import { notFound } from "next/navigation";
import {
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { constructPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  if (locale !== "en" && locale !== "hi") return {};

  const isHindi = locale === "hi";
  return constructPageMetadata({
    title: isHindi ? "संपर्क करें — RS.BSC" : "Contact RS.BSC — Engineering & Product Inquiries",
    description: isHindi
      ? "RS.BSC से संपर्क करें: अपने रियल-टाइम प्रोजेक्ट पर चर्चा करें, RS.BSC Live के बारे में जानें या सीधे WhatsApp/फ़ोन द्वारा बात करें।"
      : "Contact RS.BSC to discuss real-time systems, explore RS.BSC Live, or inquire about custom software engineering.",
    path: "/contact",
    locale,
  });
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].contactPage;
  const isHindi = locale === "hi";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: isHindi ? "संपर्क" : "Contact", url: `${COMPANY_CONFIG.siteUrl}/${locale}/contact` },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{dict.heroTag}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {dict.title}
        </h1>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {dict.subtitle}
        </p>
      </section>

      {/* Main Grid: Form (7 cols) + Direct Channels (5 cols) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm locale={locale} />
          </div>

          {/* Right: Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="luxury-card p-6 sm:p-8 rounded-2xl border-brand-gold/20">
              <h2 className="text-xl font-bold text-white mb-6">
                {dict.directChannelsTitle}
              </h2>

              <div className="space-y-4">
                {/* Telephone */}
                <a
                  href={COMPANY_CONFIG.contact.phoneTel}
                  className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border hover:border-brand-gold/50 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-gold/15 text-brand-gold flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                        {dict.phoneLabel}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">
                        {COMPANY_CONFIG.contact.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-gold" />
                </a>

                {/* WhatsApp */}
                <a
                  href={COMPANY_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-700/40 hover:border-emerald-500/60 transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                      <WhatsAppIcon className="w-5 h-5 fill-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-emerald-300 font-semibold">
                        {dict.whatsappLabel}
                      </div>
                      <div className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {COMPANY_CONFIG.contact.phoneDisplay}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                </a>

                {/* Country & Operating Base */}
                <div className="p-4 rounded-xl bg-brand-surface/50 border border-brand-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-navy border border-brand-border text-brand-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                      {dict.countryLabel}
                    </div>
                    <div className="text-sm font-bold text-white">
                      {COMPANY_CONFIG.country}
                    </div>
                  </div>
                </div>

                {/* Response SLA Note */}
                <div className="p-4 rounded-xl bg-brand-surface/40 border border-brand-border flex items-start gap-3 text-xs text-slate-300">
                  <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block mb-0.5">
                      {dict.availabilityLabel}
                    </span>
                    <span>{dict.availabilityText}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Promise Callout */}
            <div className="p-5 rounded-2xl bg-brand-navy/60 border border-brand-border/60 flex items-start gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                {isHindi
                  ? "आपकी संपर्क जानकारी सुरक्षित रखी जाती है और केवल सीधे तकनीकी संचार के लिए उपयोग की जाती है।"
                  : "Your contact details are treated with strict confidentiality and never shared with external marketers."}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
