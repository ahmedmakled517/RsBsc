"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { Locale } from "@/data/content";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  currentLocale,
  className = "",
}) => {
  const pathname = usePathname();

  // Compute equivalent target path in other language
  const targetLocale: Locale = currentLocale === "en" ? "hi" : "en";
  let targetPath = `/${targetLocale}`;

  if (pathname) {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0 && (segments[0] === "en" || segments[0] === "hi")) {
      segments[0] = targetLocale;
      targetPath = `/${segments.join("/")}`;
    } else {
      targetPath = `/${targetLocale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
    }
  }

  const label = targetLocale === "hi" ? "हिन्दी में पढ़ें" : "Read in English";
  const displayTarget = targetLocale === "hi" ? "हिन्दी" : "English";

  return (
    <Link
      href={targetPath}
      aria-label={`Switch language to ${displayTarget}`}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
        currentLocale === "en"
          ? "border-brand-border bg-brand-surface/60 text-slate-300 hover:text-brand-gold hover:border-brand-gold/40"
          : "border-brand-border bg-brand-surface/60 text-slate-200 hover:text-brand-gold hover:border-brand-gold/40"
      } ${className}`}
      title={label}
    >
      <Globe className="w-3.5 h-3.5 text-brand-gold" />
      <span className="font-medium text-slate-400">
        {currentLocale === "en" ? "EN" : "HI"}
      </span>
      <span className="text-slate-600">/</span>
      <span className="text-brand-gold font-bold">
        {displayTarget}
      </span>
    </Link>
  );
};
