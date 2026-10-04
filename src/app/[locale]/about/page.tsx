import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Sparkles,
  MapPin,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Compass,
  Cpu,
  Layers,
} from "lucide-react";

import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { constructPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
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
    title: isHindi ? "हमारे बारे में — RS.BSC" : "About RS.BSC — Real-Time Product & Technology Company",
    description: isHindi
      ? "RS.BSC के बारे में जानें: भारत में स्थापित रियल-टाइम संचार और स्केलेबल सॉफ्टवेयर इंजीनियरिंग कंपनी।"
      : "Learn about RS.BSC: An Indian technology company engineering proprietary real-time products and high-performance communication systems.",
    path: "/about",
    locale,
  });
}

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].aboutPage;
  const isHindi = locale === "hi";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: isHindi ? "हमारे बारे में" : "About", url: `${COMPANY_CONFIG.siteUrl}/${locale}/about` },
  ]);

  return (
    <div className="py-12 sm:py-16">
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

        <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {dict.subtitle}
        </p>
      </section>

      {/* Origin, Mission & Technical Philosophy */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base border-brand-gold/20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {dict.storyTitle}
          </h2>
          <p>{dict.storyP1}</p>
          <p>{dict.storyP2}</p>
          <p>{dict.storyP3}</p>

          <div className="pt-6 border-t border-brand-border/60 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-200">
              <MapPin className="w-4 h-4 text-brand-gold" />
              <span>{dict.locationTitle}: {COMPANY_CONFIG.country}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <Layers className="w-4 h-4 text-brand-gold" />
              <span>{isHindi ? "स्वामित्व वाले उत्पाद + क्लाइंट सॉल्यूशंस" : "Proprietary Products & Bespoke Engineering"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag={isHindi ? "मार्गदर्शक सिद्धांत" : "Core Values"}
          title={dict.valuesTitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dict.values.map((val, idx) => (
            <div
              key={idx}
              className="luxury-card p-6 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl text-center border-brand-gold/30 relative overflow-hidden">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-brand-gold to-amber-600 p-0.5 shadow-gold-glow">
            <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center font-display font-extrabold text-2xl text-brand-gold">
              MA
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-white">
            {COMPANY_CONFIG.ceo.name}
          </h2>

          <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
            {isHindi ? COMPANY_CONFIG.ceo.titleHindi : COMPANY_CONFIG.ceo.title} • {COMPANY_CONFIG.country}
          </div>

          <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {isHindi ? COMPANY_CONFIG.ceo.bioHi : COMPANY_CONFIG.ceo.bioEn}
          </p>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl text-center border-brand-border">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {dict.ctaTitle}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            {dict.ctaSubtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
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
