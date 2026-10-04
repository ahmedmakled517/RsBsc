import React from "react";
import { notFound } from "next/navigation";
import { FileText, AlertCircle } from "lucide-react";
import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { constructPageMetadata, getBreadcrumbSchema } from "@/lib/seo";
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
    title: isHindi ? "सेवा की शर्तें (Terms of Service) — RS.BSC" : "Terms of Service — RS.BSC",
    description: isHindi
      ? "RS.BSC वेबसाइट और संबंधित डिजिटल सेवाओं के उपयोग को नियंत्रित करने वाली सेवा शर्तें।"
      : "RS.BSC Terms of Service: Legal terms governing the usage of our website and digital services.",
    path: "/terms",
    locale,
  });
}

/**
 * LEGAL COMPLIANCE NOTE:
 * The terms below provide operational guidance for RS.BSC website visitors.
 * Formal software contracts, SLAs, and commercial service agreements supersede
 * general website terms and require separate execution.
 */
export default async function TermsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].legal.terms;
  const isHindi = locale === "hi";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: dict.title, url: `${COMPANY_CONFIG.siteUrl}/${locale}/terms` },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>{isHindi ? "कानूनी अनुबंध" : "Operational Terms"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {dict.title}
          </h1>

          <p className="mt-3 text-xs sm:text-sm text-slate-400">
            {isHindi ? "अंतिम अद्यतन" : "Last revised"}: {dict.lastUpdated}
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mb-10 p-4 rounded-xl bg-amber-950/30 border border-brand-gold/30 flex items-start gap-3 text-xs text-amber-200">
          <AlertCircle className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
          <span>{dict.disclaimer}</span>
        </div>

        {/* Document Sections */}
        <div className="luxury-card p-6 sm:p-10 rounded-3xl space-y-8 text-slate-300 leading-relaxed text-sm sm:text-base border-brand-border">
          {dict.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-white">
                {section.heading}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {section.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
