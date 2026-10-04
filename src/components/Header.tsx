"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { WhatsAppIcon } from "./WhatsAppIcon";

interface HeaderProps {
  locale: Locale;
}

export const Header: React.FC<HeaderProps> = ({ locale }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const dict = CONTENT[locale];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/product`, label: dict.nav.product },
    { href: `/${locale}/services`, label: dict.nav.services },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === `/${locale}`) {
      return pathname === `/${locale}` || pathname === `/${locale}/`;
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/90 backdrop-blur-md border-b border-brand-border/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand Name */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg p-1"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-brand-gold/40 shadow-gold-glow group-hover:border-brand-gold transition-colors duration-300 bg-brand-dark">
              <Image
                src="/logo.webp"
                alt="RS.BSC Brand Emblem"
                fill
                priority
                sizes="44px"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-slate-100 group-hover:text-brand-gold transition-colors">
                RS<span className="text-brand-gold">.BSC</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                {locale === "hi" ? "टेक्नोलॉजीज" : "Technologies"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-brand-surface/50 border border-brand-border/60 rounded-full px-4 py-1.5 backdrop-blur-sm"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    active
                      ? "text-brand-dark bg-gradient-to-r from-amber-400 to-amber-300 font-semibold shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: Language Switcher + Talk to Us CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher currentLocale={locale} />

            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark hover:from-amber-400 hover:to-brand-gold hover:shadow-gold-glow transition-all duration-300 transform active:scale-95"
            >
              <span>{dict.nav.talkToUs}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher currentLocale={locale} className="mr-1" />

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? dict.nav.closeMenu : dict.nav.mobileMenu}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-brand-surface border border-brand-border focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-brand-dark/98 backdrop-blur-xl border-b border-brand-border p-6 overflow-y-auto flex flex-col justify-between animate-fadeIn z-50">
          <nav className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    active
                      ? "bg-brand-gold/15 text-brand-gold border border-brand-gold/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-brand-surface/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-brand-border flex flex-col gap-4 mt-6">
            <Link
              href={`/${locale}/contact`}
              className="w-full text-center py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-gold-glow"
            >
              {dict.nav.talkToUs}
            </Link>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <a
                href={COMPANY_CONFIG.contact.phoneTel}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-brand-surface border border-brand-border text-slate-300 hover:text-white"
              >
                <Phone className="w-4 h-4 text-brand-gold" />
                <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 hover:text-white"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
