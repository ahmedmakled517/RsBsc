import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark text-slate-200 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-gold/10 blur-[120px] pointer-events-none" />

      <div className="max-w-md w-full text-center space-y-6 luxury-card p-8 sm:p-10 rounded-3xl border-brand-gold/30 relative z-10">
        {/* Logo */}
        <div className="relative w-16 h-16 mx-auto rounded-full overflow-hidden border border-brand-gold/50 shadow-gold-glow">
          <Image
            src="/logo.webp"
            alt="RS.BSC Emblem"
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="space-y-2">
          <span className="text-4xl sm:text-5xl font-mono font-extrabold text-brand-gold">
            404
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Page Not Found / पृष्ठ नहीं मिला
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            The page you are looking for does not exist or has been moved.
            <br />
            जिस पृष्ठ को आप खोज रहे हैं वह उपलब्ध नहीं है।
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/en"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-gold-glow hover:from-amber-400 hover:to-brand-gold transition-all"
          >
            <Home className="w-4 h-4" />
            <span>English Home</span>
          </Link>

          <Link
            href="/hi"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-brand-surface border border-brand-border text-slate-200 hover:text-white hover:border-brand-gold/40 transition-all"
          >
            <span>मुख्य पृष्ठ (हिन्दी)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
