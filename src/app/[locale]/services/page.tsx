import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Layers,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  GitBranch,
  ShieldCheck,
  Zap,
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
    title: isHindi ? "कस्टम प्रौद्योगिकी समाधान एवं सेवाएं" : "Custom Technology Solutions & Engineering",
    description: isHindi
      ? "RS.BSC कस्टम लाइव चैट, मोबाइल एप्लिकेशन, और स्केलेबल रियल-टाइम इंफ्रास्ट्रक्चर के विकास में विशेषज्ञता रखती है।"
      : "RS.BSC engineers custom live chat systems, mobile platforms, and high-concurrency real-time infrastructure for modern enterprises.",
    path: "/services",
    locale,
  });
}

export default async function ServicesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].servicesPage;
  const servicesOverview = CONTENT[locale].servicesOverview;
  const isHindi = locale === "hi";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: isHindi ? "सेवाएं" : "Services", url: `${COMPANY_CONFIG.siteUrl}/${locale}/services` },
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

      {/* Dual Business Model Explanation (Owned vs Custom) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* In-House Products */}
          <div className="luxury-card p-8 rounded-3xl border-brand-border/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-gold">
                {isHindi ? "इंजीनियरिंग शाखा #01" : "Engineering Branch #01"}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 mb-3">
                {dict.modelComparison.productTitle}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {dict.modelComparison.productDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <Link
                href={`/${locale}/product`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold uppercase tracking-wider hover:underline"
              >
                <span>{isHindi ? "RS.BSC Live देखें" : "Explore RS.BSC Live"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bespoke Client Engineering */}
          <div className="luxury-card p-8 rounded-3xl border-brand-blue/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-brand-blue/15 text-brand-blue-light flex items-center justify-center mb-4">
                <GitBranch className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase font-bold tracking-wider text-brand-blue-light">
                {isHindi ? "इंजीनियरिंग शाखा #02" : "Engineering Branch #02"}
              </span>
              <h2 className="text-2xl font-bold text-white mt-1 mb-3">
                {dict.modelComparison.customTitle}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {dict.modelComparison.customDesc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-border/60">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue-light uppercase tracking-wider hover:underline"
              >
                <span>{isHindi ? "परामर्श शेड्यूल करें" : "Schedule Technical Consultation"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Step Disciplined Development Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag={isHindi ? "विकास प्रक्रिया" : "Engineering Methodology"}
          title={dict.processTitle}
          subtitle={dict.processSubtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {dict.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-surface/40 border border-brand-border flex flex-col justify-between relative group hover:border-brand-gold/40 transition-all"
            >
              <div>
                <div className="text-2xl font-extrabold font-mono text-brand-gold mb-3">
                  {step.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-brand-border/60 text-[10px] text-slate-400 uppercase font-mono">
                Phase 0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <SectionHeading
          tag={isHindi ? "समाधान कैटलॉग" : "Services Catalog"}
          title={dict.servicesDetailTitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesOverview.items.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="luxury-card p-8 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-brand-gold uppercase tracking-wider block mb-1">
                  {service.tagline}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-brand-border/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {isHindi ? "प्रमुख घटक" : "Core Deliverables"}
                  </div>
                  {service.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <Link
                  href={`/${locale}/contact?subject=Service+Inquiry:+${encodeURIComponent(
                    service.title
                  )}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-brand-surface border border-brand-border text-slate-200 hover:text-white hover:border-brand-gold transition-all"
                >
                  <span>{isHindi ? "प्रोजेक्ट शुरू करें" : "Inquire for Project"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="luxury-card p-8 sm:p-12 rounded-3xl text-center border-brand-gold/30">
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
              href={COMPANY_CONFIG.contact.phoneTel}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-brand-surface border border-brand-border text-slate-200 hover:text-white hover:border-brand-gold/40 transition-all"
            >
              <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
