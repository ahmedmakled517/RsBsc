import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";
import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface FooterProps {
  locale: Locale;
}

export const Footer: React.FC<FooterProps> = ({ locale }) => {
  const dict = CONTENT[locale];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-brand-border/70 text-slate-400 text-sm mt-auto relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-gold/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-brand-border/50">
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-brand-gold/50 shadow-gold-glow bg-brand-dark">
                <Image
                  src="/logo.webp"
                  alt="RS.BSC Emblem"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="font-display font-extrabold text-xl text-white tracking-wider">
                RS<span className="text-brand-gold">.BSC</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {dict.footer.companyDesc}
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs text-slate-300 font-medium">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
              <span>{dict.footer.madeInIndia} • {COMPANY_CONFIG.country}</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-200">
              {dict.footer.navigationHeader}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href={`/${locale}`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/product`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {dict.nav.product}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/about`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/contact`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Product */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-200">
              {dict.footer.solutionsHeader}
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href={`/${locale}/product`}
                  className="text-slate-400 hover:text-brand-gold transition-colors flex items-center gap-1.5"
                >
                  <span>{COMPANY_CONFIG.flagshipProduct.name}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-gold/15 text-brand-gold font-bold">
                    PROD
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services#custom-live-chat`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  Live Chat Systems
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services#audio-video`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  Audio & Video Streaming
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services#realtime-infra`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  Real-Time Edge Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/services#moderation`}
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  Trust & Safety Systems
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Language */}
          <div className="space-y-3">
            <h3 className="font-semibold text-xs uppercase tracking-wider text-slate-200">
              {dict.footer.contactHeader}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={COMPANY_CONFIG.contact.phoneTel}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-brand-gold transition-colors font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>WhatsApp Direct</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li className="pt-2">
                <LanguageSwitcher currentLocale={locale} />
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar: Legal, Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} {COMPANY_CONFIG.name}. {dict.footer.rightsReserved}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href={`/${locale}/privacy`}
              className="hover:text-brand-gold transition-colors"
            >
              {dict.footer.privacyPolicy}
            </Link>
            <span className="text-slate-700">•</span>
            <Link
              href={`/${locale}/terms`}
              className="hover:text-brand-gold transition-colors"
            >
              {dict.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
