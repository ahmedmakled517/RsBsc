"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Radio,
  MessageSquare,
  ShieldAlert,
  Cpu,
  Users,
  Mic,
  Volume2,
  Lock,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Locale, CONTENT } from "@/data/content";
import { COMPANY_CONFIG } from "@/data/company";

interface ProductShowcaseProps {
  locale: Locale;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ locale }) => {
  const dict = CONTENT[locale].flagshipProduct;
  const isHindi = locale === "hi";

  const [activeTab, setActiveTab] = useState<"audio-video" | "chat" | "moderation" | "infra">("audio-video");

  const tabs = [
    {
      id: "audio-video",
      label: isHindi ? "लाइव ऑडियो एवं वीडियो" : "Live Audio & Video",
      icon: Radio,
    },
    {
      id: "chat",
      label: isHindi ? "समवर्ती चैट इंजन" : "High-Density Chat",
      icon: MessageSquare,
    },
    {
      id: "moderation",
      label: isHindi ? "ट्रस्ट एवं मॉडरेशन" : "Trust & Safety Console",
      icon: ShieldAlert,
    },
    {
      id: "infra",
      label: isHindi ? "एज इंफ्रास्ट्रक्चर" : "Edge Infrastructure",
      icon: Cpu,
    },
  ] as const;

  return (
    <div className="w-full">
      {/* Tab Selectors */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-brand-gold text-brand-dark shadow-gold-glow scale-105"
                  : "bg-brand-surface/70 text-slate-300 hover:text-white hover:bg-brand-surface border border-brand-border"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main Concept Canvas */}
      <div className="relative rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-brand-surface/90 to-brand-navy/95 border border-brand-border/80 shadow-2xl overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Concept Disclaimer Tag */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand-blue/15 text-brand-blue-light border border-brand-blue/30">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue-light" />
            <span>
              {isHindi ? "सिस्टम वास्तुकला पूर्वावलोकन" : "System Architecture Concept Preview"}
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-medium">
            {isHindi
              ? "उत्पादन रिलीज़ के बाद वास्तविक स्क्रीनशॉट अपडेट किए जाएंगे"
              : "Live binary and store assets ready for future deployment"}
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Simulated UI Screen (7 cols) */}
          <div className="lg:col-span-7 bg-brand-dark/90 rounded-2xl border border-brand-border p-4 sm:p-6 shadow-inner relative">
            {/* Top header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-brand-border/60 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-white tracking-wide">
                  RS.BSC Live — Core Node #01
                </span>
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="text-[11px] px-2 py-0.5 rounded bg-brand-border/80 text-brand-gold font-mono">
                  &lt; 45ms LATENCY
                </span>
                <span className="text-[11px] text-emerald-400 font-mono">100% HEALTH</span>
              </div>
            </div>

            {/* Simulated Stage Visuals */}
            <div className="py-6">
              {activeTab === "audio-video" && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Host Stage", role: "Primary Speaker", active: true },
                      { name: "Guest #01", role: "Co-Host", active: true },
                      { name: "Guest #02", role: "Listener Panel", active: false },
                    ].map((speaker, idx) => (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border text-center relative transition-all ${
                          speaker.active
                            ? "bg-brand-surface/90 border-brand-gold/60 shadow-gold-glow"
                            : "bg-brand-surface/40 border-brand-border"
                        }`}
                      >
                        <div className="w-12 h-12 mx-auto rounded-full bg-brand-navy border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-2 relative">
                          <Mic className="w-5 h-5" />
                          {speaker.active && (
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-brand-dark flex items-center justify-center">
                              <Volume2 className="w-2.5 h-2.5 text-white" />
                            </span>
                          )}
                        </div>
                        <div className="text-xs font-bold text-white truncate">{speaker.name}</div>
                        <div className="text-[10px] text-slate-400 truncate">{speaker.role}</div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-surface/50 border border-brand-border text-xs text-slate-300 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Radio className="w-4 h-4 text-brand-gold" />
                      <span>{isHindi ? "WebRTC रिले सक्रिय" : "WebRTC Selective Forwarding Mesh Active"}</span>
                    </span>
                    <span className="text-brand-blue-light font-mono text-[11px]">48kHz Opus Audio</span>
                  </div>
                </div>
              )}

              {activeTab === "chat" && (
                <div className="space-y-2.5 animate-fadeIn">
                  <div className="p-3 rounded-lg bg-brand-surface/50 border border-brand-border/60 text-xs flex items-center justify-between">
                    <span className="text-slate-400">{isHindi ? "समवर्ती संदेश स्ट्रीम" : "Concurrent Room Broadcast"}</span>
                    <span className="text-emerald-400 font-mono text-[11px]">ACK &lt; 20ms</span>
                  </div>
                  {[
                    { user: "Operator_Admin", msg: isHindi ? "लाइव रूम आरंभ हो गया है।" : "Live stage broadcast initialized.", badge: "Admin" },
                    { user: "User_Alpha", msg: isHindi ? "ऑडियो बहुत स्पष्ट आ रहा है।" : "Sub-second sync verified on mobile client.", badge: "VIP" },
                    { user: "User_Beta", msg: isHindi ? "मैसेजिंग लेटेंसी शून्य के करीब है।" : "WebSocket handshake sustained under burst load.", badge: "Member" },
                  ].map((chat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-brand-surface/80 border border-brand-border/80 flex items-start gap-3 text-xs"
                    >
                      <div className="w-7 h-7 rounded-full bg-brand-navy border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-[10px] shrink-0">
                        {chat.user[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-semibold text-white">{chat.user}</span>
                          <span className="text-[9px] px-1.5 py-0.2 rounded bg-brand-gold/15 text-brand-gold font-mono">
                            {chat.badge}
                          </span>
                        </div>
                        <p className="text-slate-300">{chat.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "moderation" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border">
                      <div className="text-[11px] text-slate-400 mb-1">{isHindi ? "सक्रिय कमरे" : "Active Monitored Rooms"}</div>
                      <div className="text-lg font-bold text-white font-mono">100% HEALTHY</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-brand-surface/60 border border-brand-border">
                      <div className="text-[11px] text-slate-400 mb-1">{isHindi ? "सुरक्षा नीतियां" : "Safety Policy Mesh"}</div>
                      <div className="text-lg font-bold text-emerald-400 font-mono">ENFORCED</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-brand-surface/80 border border-brand-border flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 text-brand-gold" />
                      <span className="text-slate-200">
                        {isHindi ? "एन्क्रिप्टेड सत्र प्रमाणीकरण" : "Tokenized Session Integrity Check"}
                      </span>
                    </div>
                    <span className="text-emerald-400 font-mono text-[11px]">ACTIVE</span>
                  </div>
                </div>
              )}

              {activeTab === "infra" && (
                <div className="space-y-3 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-brand-surface/70 border border-brand-border font-mono text-xs space-y-2">
                    <div className="text-brand-blue-light font-bold">
                      &gt; cluster_status: DISTRIBUTED_PUB_SUB_READY
                    </div>
                    <div className="text-slate-300">
                      &gt; ingress_relays: WebRTC / Secure WebSocket Edge
                    </div>
                    <div className="text-slate-300">
                      &gt; replication: Active-Active Multi-Availability Zone
                    </div>
                    <div className="text-emerald-400">
                      &gt; system_availability: CONTINUOUS
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom status line */}
            <div className="pt-3 border-t border-brand-border/60 flex items-center justify-between text-[11px] text-slate-400">
              <span>{COMPANY_CONFIG.flagshipProduct.name} Engine</span>
              <span>{isHindi ? "भारत में विकसित" : "Engineered in India"}</span>
            </div>
          </div>

          {/* Details & Architecture Bullet points (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold">
                {dict.statusBadge}
              </span>
              <h3 className="text-2xl font-extrabold text-white mt-1">
                {COMPANY_CONFIG.flagshipProduct.name}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {dict.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-brand-gold/15 text-brand-gold shrink-0 mt-0.5">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {isHindi ? "मल्टी-यूज़र लाइव स्टेज" : "Multi-User Live Stages"}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isHindi
                      ? "इंटरैक्टिव स्पीकर स्टेज और श्रोता कक्ष।"
                      : "Interactive speaker stages, audio panels, and broadcasting channels."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-brand-blue/15 text-brand-blue-light shrink-0 mt-0.5">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {isHindi ? "केंद्रीकृत सुरक्षा कंसोल" : "Centralized Trust & Safety"}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {isHindi
                      ? "कम्युनिटी सुरक्षा और त्वरित मॉडरेशन उपकरण।"
                      : "Operator consoles for swift incident reporting and community protection."}
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/contact?subject=Inquiry+about+RS.BSC+Live`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-xs bg-gradient-to-r from-brand-gold to-amber-500 text-brand-dark shadow-gold-glow hover:from-amber-400 hover:to-brand-gold transition-all"
              >
                <span>{dict.requestInfoCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={`/${locale}/product`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-brand-surface border border-brand-border hover:border-brand-gold/40 transition-all"
              >
                <span>{dict.viewProductDetails}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
