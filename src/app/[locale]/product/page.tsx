import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Zap,
  Radio,
  Globe,
  Shield,
  Cpu,
  Smartphone,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Clock,
  Lock,
} from "lucide-react";

import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { constructPageMetadata, getProductSchema, getBreadcrumbSchema } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductShowcase } from "@/components/ProductShowcase";
import { JsonLd } from "@/components/JsonLd";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  if (locale !== "en" && locale !== "hi") return {};

  const isHindi = locale === "hi";
  return constructPageMetadata({
    title: isHindi ? "RS.BSC Live — प्रमुख डिजिटल प्लेटफॉर्म" : "RS.BSC Live — Flagship Digital Platform",
    description: isHindi
      ? "RS.BSC Live: लो-लेटेंसी ऑडियो/वीडियो रूम्स, समवर्ती चैट और मजबूत सुरक्षा टूल्स के साथ निर्मित प्रमुख रियल-टाइम संचार प्लेटफॉर्म।"
      : "RS.BSC Live: Our proprietary real-time social platform engineered for low-latency audio/video rooms, high-density chat, and enterprise trust & safety.",
    path: "/product",
    locale,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].productPage;
  const common = CONTENT[locale].common;
  const isHindi = locale === "hi";

  const productSchema = getProductSchema(locale);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: COMPANY_CONFIG.flagshipProduct.name, url: `${COMPANY_CONFIG.siteUrl}/${locale}/product` },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{dict.heroTag}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
          {dict.title}
        </h1>

        <p className="mt-3 text-base sm:text-lg font-medium text-brand-gold">
          {dict.tagline}
        </p>

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {dict.subtitle}
        </p>

        {/* Status Callout Banner */}
        <div className="mt-8 max-w-xl mx-auto p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border flex items-center justify-center gap-3 text-xs text-slate-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isHindi
              ? "प्लेटफ़ॉर्म की स्थिति: सक्रिय उत्पादन एवं एंटरप्राइज डिप्लॉयमेंट"
              : "Platform Status: Active Production & Enterprise Deployment"}
          </span>
        </div>
      </section>

      {/* Overview & Architecture Narrative */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl border-brand-gold/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {dict.overviewTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {dict.overviewText}
          </p>

          <div className="mt-8 pt-8 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {isHindi ? "प्रोटोकॉल फाउंडेशन" : "Protocol Foundation"}
              </span>
              <p className="text-sm font-bold text-white font-mono">WebRTC + WS Mesh</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {isHindi ? "समवर्ती क्षमता" : "Concurrency Architecture"}
              </span>
              <p className="text-sm font-bold text-white font-mono">Horizontal Scaling</p>
            </div>
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                {isHindi ? "सुरक्षा ढांचा" : "Safety Framework"}
              </span>
              <p className="text-sm font-bold text-emerald-400 font-mono">Proactive Guard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Concept Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag={isHindi ? "अवधारणात्मक इंटरफ़ेस" : "Interface Preview"}
          title={dict.conceptHeading}
          subtitle={dict.conceptSubheading}
        />

        <ProductShowcase locale={locale} />
      </section>

      {/* Deep Dive Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag={isHindi ? "तकनीकी क्षमताएं" : "System Capabilities"}
          title={dict.capabilitiesTitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dict.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="luxury-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cap.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-brand-border/60">
                  {cap.details.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dedicated UI Concept Gallery & Screenshots Placeholder Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-surface border border-brand-border text-slate-300 mb-3">
            <Layers className="w-3.5 h-3.5 text-brand-gold" />
            <span>{common.badgeConcept}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {isHindi ? "सिस्टम स्क्रीनशॉट एवं एसेट रिपॉजिटरी" : "Application Asset & Visual Showcase"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            {isHindi
              ? "नोट: आधिकारिक ऐप स्टोर और प्ले स्टोर लिस्टिंग प्रकाशित होने के बाद वास्तविक स्क्रीनशॉट यहां जोड़े जाएंगे।"
              : "Notice: Official store listings and binary assets will be published upon verified release."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_CONFIG.flagshipProduct.uiConcepts.map((concept) => (
            <div
              key={concept.id}
              className="p-6 rounded-2xl bg-brand-surface/40 border border-brand-border flex flex-col justify-between relative group hover:border-brand-gold/40 transition-all"
            >
              <div>
                <div className="h-44 rounded-xl bg-brand-navy border border-brand-border/70 flex flex-col items-center justify-center p-4 text-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-mesh-pattern opacity-40" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-brand-gold bg-brand-dark/80 px-3 py-1 rounded-full border border-brand-gold/30 relative z-10">
                    UI ARCHITECTURE
                  </span>
                  <p className="text-xs text-slate-400 mt-2 relative z-10">
                    {isHindi ? concept.titleHi : concept.titleEn}
                  </p>
                </div>

                <h3 className="text-base font-bold text-white mb-1.5">
                  {isHindi ? concept.titleHi : concept.titleEn}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isHindi ? concept.descHi : concept.descEn}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-brand-border/50 text-[11px] text-slate-400 font-mono">
                concept_id: {concept.id}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl text-center border-brand-gold/30 relative overflow-hidden">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-64 h-64 bg-brand-gold/15 blur-[80px] pointer-events-none" />

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {dict.ctaHeading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {dict.ctaSubheading}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact?subject=Request+Info:+RS.BSC+Live`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-gold-glow hover:from-amber-400 hover:to-brand-gold transition-all"
            >
              <span>{dict.ctaButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-brand-surface border border-brand-border text-slate-200 hover:text-white hover:border-brand-gold/40 transition-all"
            >
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
