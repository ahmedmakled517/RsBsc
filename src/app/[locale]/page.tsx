import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  MessageSquare,
  Radio,
  Smartphone,
  Server,
  LayoutDashboard,
  ShieldCheck,
  Zap,
  Headphones,
  Globe,
  Shield,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Activity,
  Layers,
  MapPin,
  CheckCircle,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";

import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { constructPageMetadata, getProductSchema } from "@/lib/seo";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductShowcase } from "@/components/ProductShowcase";
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
    title: isHindi
      ? "रियल-टाइम संचार एवं स्केलेबल प्लेटफॉर्म टेक्नोलॉजीज"
      : "Real-Time Communication & Scalable Platform Technologies",
    description: isHindi
      ? "RS.BSC भारत स्थित एक तकनीकी कंपनी है जो अपने स्वयं के डिजिटल उत्पाद बनाती है और वैश्विक उद्यमों के लिए लाइव चैट, स्ट्रीमिंग एवं बैकएंड इंफ्रास्ट्रक्चर विकसित करती है।"
      : "RS.BSC is a technology product and solutions company based in India. Engineering proprietary real-time platforms and custom low-latency live chat, audio, and video systems.",
    path: "/",
    locale,
  });
}

export default async function HomePage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale];
  const isHindi = locale === "hi";
  const productSchema = getProductSchema(locale);

  // Icon mapping for What We Build
  const iconMap: Record<string, React.ElementType> = {
    MessageSquare,
    Radio,
    Smartphone,
    Server,
    LayoutDashboard,
    ShieldCheck,
  };

  return (
    <div className="relative overflow-hidden">
      {/* Structured data for flagship product */}
      <JsonLd data={productSchema} />

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Subtle Luxury Radial Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-brand-gold/10 blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-brand-blue/10 blur-[130px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Country & Category Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-surface border border-brand-gold/40 text-brand-gold shadow-gold-glow">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                <span>{dict.hero.tagline}</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                {dict.hero.headline}{" "}
                <span className="text-gold-gradient block sm:inline">
                  {dict.hero.headlineHighlight}
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {dict.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href={`/${locale}/product`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold via-amber-400 to-amber-500 text-brand-dark shadow-gold-glow hover:shadow-amber-500/40 hover:from-amber-400 hover:to-brand-gold transition-all duration-300 transform active:scale-98"
                >
                  <span>{dict.hero.exploreProduct}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs text-slate-200 hover:text-white bg-brand-surface/80 border border-brand-border hover:border-brand-gold/50 transition-all duration-300"
                >
                  <span>{dict.hero.startConversation}</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold" />
                </Link>
              </div>

              {/* Country & Trust Indicator Banner */}
              <div className="pt-6 border-t border-brand-border/60 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
                <div className="p-3 rounded-xl bg-brand-surface/40 border border-brand-border/60">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    {dict.hero.countryLabel}
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                    <span>{dict.hero.countryValue}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-brand-surface/40 border border-brand-border/60">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    {isHindi ? "इंजीनियरिंग मॉडल" : "Architecture"}
                  </div>
                  <div className="text-sm font-bold text-slate-200 mt-0.5 truncate">
                    {isHindi ? "उत्पाद + समाधान" : "Owned + Bespoke"}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-brand-surface/40 border border-brand-border/60">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400 font-medium">
                    {isHindi ? "कोर लेटेंसी लक्ष्य" : "Target Latency"}
                  </div>
                  <div className="text-sm font-bold text-emerald-400 font-mono mt-0.5">
                    &lt; 50ms Real-Time
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Emblem Showcase (5 Cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
                {/* Decorative rotating/glowing concentric luxury rings */}
                <div className="absolute inset-0 rounded-full border border-brand-gold/20 animate-pulse-slow pointer-events-none" />
                <div className="absolute -inset-4 rounded-full border border-brand-blue/20 pointer-events-none" />
                <div className="absolute -inset-8 rounded-full border border-brand-gold/10 pointer-events-none" />

                {/* Central Emblem Housing */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-brand-gold/40 via-brand-dark to-brand-blue/30 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-brand-gold/60 shadow-gold-glow bg-brand-dark flex items-center justify-center">
                    <Image
                      src="/logo.webp"
                      alt="RS.BSC Brand Luxury Emblem"
                      fill
                      priority
                      sizes="(max-width: 640px) 256px, 320px"
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Floating Architectural Status Badges */}
                <div className="absolute -top-2 -left-2 sm:-left-4 px-3 py-1.5 rounded-xl bg-brand-surface/90 border border-brand-gold/40 text-[11px] text-slate-200 font-medium shadow-xl flex items-center gap-2 backdrop-blur-md">
                  <Zap className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Real-Time Engine</span>
                </div>

                <div className="absolute -bottom-2 -right-2 sm:-right-4 px-3 py-1.5 rounded-xl bg-brand-surface/90 border border-brand-blue/40 text-[11px] text-slate-200 font-medium shadow-xl flex items-center gap-2 backdrop-blur-md">
                  <Activity className="w-3.5 h-3.5 text-brand-blue-light" />
                  <span>Live Audio &amp; Video</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. WHAT WE BUILD
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-brand-navy/40 border-y border-brand-border/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.whatWeBuild.sectionTag}
            title={dict.whatWeBuild.title}
            subtitle={dict.whatWeBuild.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dict.whatWeBuild.items.map((item) => {
              const Icon = iconMap[item.iconName] || MessageSquare;
              return (
                <div
                  key={item.id}
                  className="luxury-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/30 text-brand-gold flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-brand-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-brand-border/60 flex items-center text-xs font-semibold text-brand-gold">
                    <span className="tracking-wider uppercase">
                      {isHindi ? "विस्तारित वास्तुकला" : "Engineered Standard"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FLAGSHIP PRODUCT SECTION (RS.BSC Live)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.flagshipProduct.sectionTag}
            title={dict.flagshipProduct.title}
            subtitle={dict.flagshipProduct.description}
          />

          {/* Interactive UI Concept Showcase Component */}
          <ProductShowcase locale={locale} />

          {/* Core Architectural Capabilities Grid */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.flagshipProduct.features.map((feature, idx) => {
              const icons = [Zap, Headphones, Globe, Shield, Cpu, Smartphone];
              const IconComp = icons[idx % icons.length];
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-brand-surface/40 border border-brand-border/70 hover:border-brand-gold/40 transition-all flex items-start gap-4"
                >
                  <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. SERVICES & DUAL-MODEL SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-navy/50 border-y border-brand-border/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.servicesOverview.sectionTag}
            title={dict.servicesOverview.title}
            subtitle={dict.servicesOverview.subtitle}
          />

          {/* Dual Engine Clarification Banner */}
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-brand-surface via-brand-navy to-brand-surface border border-brand-gold/30 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{dict.servicesOverview.dualModelNotice.title}</span>
                </div>
                <p className="text-sm sm:text-base text-slate-300 whitespace-pre-line leading-relaxed max-w-3xl">
                  {dict.servicesOverview.dualModelNotice.desc}
                </p>
              </div>

              <Link
                href={`/${locale}/services`}
                className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-brand-surface border border-brand-border text-slate-200 hover:text-white hover:border-brand-gold transition-all"
              >
                <span>{dict.servicesOverview.viewAllServices}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </Link>
            </div>
          </div>

          {/* 6 Client Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {dict.servicesOverview.items.map((service) => (
              <div
                key={service.id}
                className="luxury-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-gold font-medium mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-brand-border/60">
                    {service.deliverables.map((del, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-slate-400"
                      >
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <Link
                    href={`/${locale}/contact?subject=Service+Inquiry:+${encodeURIComponent(
                      service.title
                    )}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-brand-gold uppercase tracking-wider transition-colors"
                  >
                    <span>{isHindi ? "समाधान पर चर्चा करें" : "Discuss Solution"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. REAL-TIME TECHNOLOGY & ARCHITECTURE
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.realtimeTech.sectionTag}
            title={dict.realtimeTech.title}
            subtitle={dict.realtimeTech.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.realtimeTech.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-surface/60 border border-brand-border hover:border-brand-gold/40 transition-all"
              >
                <div className="text-xs font-mono font-bold text-brand-gold mb-2">
                  0{idx + 1} // ARCHITECTURE
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {pillar.desc}
                </p>
                <div className="text-[11px] text-slate-400 font-mono bg-brand-dark/60 p-2.5 rounded-lg border border-brand-border/60">
                  {pillar.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. TRUST & SAFETY SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-brand-navy/60 border-y border-brand-border/70 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.trustSafety.sectionTag}
            title={dict.trustSafety.title}
            subtitle={dict.trustSafety.subtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dict.trustSafety.pillars.map((item, idx) => (
              <div
                key={idx}
                className="luxury-card p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. LEADERSHIP SECTION (Mr. Aarav, CEO)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag={dict.leadership.sectionTag}
            title={dict.leadership.title}
            subtitle={dict.leadership.subtitle}
          />

          <div className="max-w-2xl mx-auto luxury-card p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden border-brand-gold/30">
            {/* Ambient luxury glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-brand-gold/15 blur-[60px] pointer-events-none" />

            {/* CEO Initials Avatar */}
            <div className="relative w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-tr from-brand-gold to-amber-600 p-0.5 shadow-gold-glow">
              <div className="w-full h-full rounded-full bg-brand-dark flex items-center justify-center font-display font-extrabold text-2xl text-brand-gold">
                MA
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              {dict.leadership.name}
            </h3>

            <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-gold">
              {dict.leadership.role} • {dict.leadership.country}
            </div>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {dict.leadership.description}
            </p>

            <div className="mt-8 pt-6 border-t border-brand-border/60 flex items-center justify-center gap-4">
              <Link
                href={`/${locale}/about`}
                className="text-xs font-bold text-brand-gold hover:underline uppercase tracking-wider flex items-center gap-1"
              >
                <span>{isHindi ? "कंपनी दृष्टिकोण पढ़ें" : "Read Company Vision"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. CONTACT CALL TO ACTION
          ───────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-b from-brand-navy to-brand-dark border-t border-brand-border relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>{isHindi ? "सीधा संचार" : "Direct Engagement"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {dict.contactCta.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {dict.contactCta.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-gold-glow hover:from-amber-400 hover:to-brand-gold transition-all duration-300 transform active:scale-98"
            >
              <span>{dict.contactCta.formButton}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={COMPANY_CONFIG.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 hover:text-white hover:bg-emerald-900 transition-all duration-300 shadow-lg"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
              <span>{dict.contactCta.whatsappButton}</span>
            </a>

            <a
              href={COMPANY_CONFIG.contact.phoneTel}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-xs bg-brand-surface border border-brand-border text-slate-300 hover:text-white hover:border-brand-gold/40 transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>{dict.contactCta.callButton}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
