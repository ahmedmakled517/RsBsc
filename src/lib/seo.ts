import { Metadata } from "next";
import { Locale } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rsbsc.com";

interface PageMetaParams {
  title: string;
  description: string;
  path: string;
  locale: Locale;
}

export function constructPageMetadata({
  title,
  description,
  path,
  locale,
}: PageMetaParams): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${SITE_URL}/${locale}${cleanPath === "/" ? "" : cleanPath}`;
  const enUrl = `${SITE_URL}/en${cleanPath === "/" ? "" : cleanPath}`;
  const hiUrl = `${SITE_URL}/hi${cleanPath === "/" ? "" : cleanPath}`;
  const defaultUrl = enUrl;

  const fullTitle = `${title} | RS.BSC`;
  const logoUrl = `${SITE_URL}/logo.webp`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        hi: hiUrl,
        "x-default": defaultUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: "RS.BSC",
      locale: locale === "hi" ? "hi_IN" : "en_US",
      type: "website",
      images: [
        {
          url: logoUrl,
          width: 800,
          height: 800,
          alt: "RS.BSC Technologies Emblem",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [logoUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png" },
        { url: "/logo.webp", type: "image/webp" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_CONFIG.name,
    legalName: COMPANY_CONFIG.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.webp`,
    telephone: COMPANY_CONFIG.contact.phone,
    address: {
      "@type": "PostalAddress",
      addressCountry: COMPANY_CONFIG.country,
    },
    founder: {
      "@type": "Person",
      name: COMPANY_CONFIG.ceo.name,
      jobTitle: COMPANY_CONFIG.ceo.title,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY_CONFIG.contact.phone,
      contactType: "customer support and engineering inquiries",
      areaServed: "Worldwide",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

export function getWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: `${SITE_URL}/${locale}`,
    name: COMPANY_CONFIG.name,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: locale === "hi" ? "hi-IN" : "en-US",
  };
}

export function getProductSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#flagship-product`,
    name: COMPANY_CONFIG.flagshipProduct.name,
    applicationCategory: "SocialNetworkingApplication",
    operatingSystem: "Android, iOS, Web",
    description:
      locale === "hi"
        ? COMPANY_CONFIG.flagshipProduct.descriptionHi
        : COMPANY_CONFIG.flagshipProduct.descriptionEn,
    url: `${SITE_URL}/${locale}/product`,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
