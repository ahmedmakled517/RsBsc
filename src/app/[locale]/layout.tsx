import React from "react";
import { notFound } from "next/navigation";
import { Locale, CONTENT } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SkipLink } from "@/components/SkipLink";
import { JsonLd } from "@/components/JsonLd";
import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "hi" }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;

  if (locale !== "en" && locale !== "hi") {
    notFound();
  }

  const dict = CONTENT[locale];
  const orgSchema = getOrganizationSchema();
  const webSiteSchema = getWebsiteSchema(locale);

  return (
    <div className="flex flex-col min-h-screen relative bg-brand-dark text-slate-200">
      {/* Accessible skip link for keyboard users */}
      <SkipLink label={dict.common.skipToContent} />

      {/* Global structured data schemas */}
      <JsonLd data={orgSchema} />
      <JsonLd data={webSiteSchema} />

      {/* Persistent luxury header */}
      <Header locale={locale} />

      {/* Main content body with smooth top padding */}
      <main id="main-content" className="flex-1 pt-20 focus:outline-none">
        {children}
      </main>

      {/* Persistent luxury footer */}
      <Footer locale={locale} />

      {/* Floating accessible WhatsApp communication button */}
      <WhatsAppButton locale={locale} />
    </div>
  );
}
