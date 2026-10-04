import React from "react";
import { notFound } from "next/navigation";
import { Shield, AlertCircle } from "lucide-react";
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
    title: isHindi ? "गोपनीयता नीति (Privacy Policy) — RS.BSC" : "Privacy Policy — RS.BSC",
    description: isHindi
      ? "RS.BSC गोपनीयता नीति: हम आपकी संपर्क जानकारी की सुरक्षा कैसे करते हैं और उसे कैसे संसाधित करते हैं।"
      : "RS.BSC Privacy Policy: How we handle contact inquiries, safeguard correspondence, and respect user privacy.",
    path: "/privacy",
    locale,
  });
}

/**
 * LEGAL COMPLIANCE NOTE:
 * The text below constitutes standard operational disclosures for RS.BSC.
 * Prior to formal public enterprise launch, this text should be audited by
 * accredited legal counsel according to applicable jurisdiction laws.
 */
export default async function PrivacyPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale].legal.privacy;
  const isHindi = locale === "hi";

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: isHindi ? "होम" : "Home", url: `${COMPANY_CONFIG.siteUrl}/${locale}` },
    { name: dict.title, url: `${COMPANY_CONFIG.siteUrl}/${locale}/privacy` },
  ]);

  return (
    <div className="py-12 sm:py-16">
      <JsonLd data={breadcrumbSchema} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{isHindi ? "डेटा सुरक्षा एवं पारदर्शिता" : "Data Protection & Transparency"}</span>
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
