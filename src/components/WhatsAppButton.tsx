"use client";

import React from "react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { COMPANY_CONFIG } from "@/data/company";
import { Locale } from "@/data/content";

interface WhatsAppButtonProps {
  locale: Locale;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ locale }) => {
  const tooltip =
    locale === "hi"
      ? "WhatsApp पर RS.BSC से संपर्क करें"
      : "Chat with RS.BSC on WhatsApp";

  return (
    <aside
      aria-label="WhatsApp quick contact"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip on hover */}
      <span
        className="hidden md:block mr-3 px-3 py-1.5 rounded-lg bg-brand-surface/95 text-xs text-slate-200 font-medium border border-brand-border shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
      >
        {tooltip}
      </span>

      <a
        href={COMPANY_CONFIG.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tooltip}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-lg hover:shadow-green-500/30 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-green-400"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping -z-10" />

        <WhatsAppIcon className="w-7 h-7 fill-white" />
      </a>
    </aside>
  );
};
