/**
 * RS.BSC Centralized Company & Configuration Data
 * 
 * Keep all authoritative company facts, leadership information,
 * contact details, and product configuration centralized here.
 * Easily swappable for future updates (domains, emails, store links, screenshots).
 */

export const COMPANY_CONFIG = {
  name: "RS.BSC",
  fullName: "RS.BSC Technologies",
  legalName: "RS.BSC",
  country: "India",
  location: "India",
  
  // Leadership
  ceo: {
    name: "Mr. Aarav",
    title: "Chief Executive Officer",
    titleHindi: "मुख्य कार्यकारी अधिकारी (CEO)",
    company: "RS.BSC",
    location: "India",
    bioEn: "Mr. Aarav leads RS.BSC with a strategic vision for real-time communication technologies, high-throughput digital platforms, and resilient system engineering.",
    bioHi: "श्री आरव रियल-टाइम संचार प्रौद्योगिकियों, उच्च-क्षमता वाले डिजिटल प्लेटफॉर्म और विश्वसनीय सिस्टम इंजीनियरिंग की रणनीतिक दृष्टि के साथ RS.BSC का नेतृत्व करते हैं।",
    image: null, // Placeholder ready for future executive portrait
  },

  // Contact & Channels
  contact: {
    phone: "+91 81399 48217",
    phoneTel: "tel:+918139948217",
    phoneDisplay: "+91 81399 48217",
    whatsappNumber: "918139948217",
    whatsappDefaultText: "Hello RS.BSC, I would like to discuss a technology project.",
    whatsappUrl: "https://wa.me/918139948217?text=Hello%20RS.BSC%2C%20I%20would%20like%20to%20discuss%20a%20technology%20project.",
    emailPlaceholder: "contact@rsbsc.com",
    addressPlaceholder: "India",
  },

  // Brand URLs & Social (placeholders ready for updates)
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://rsbsc.com",
  socialLinks: {
    linkedin: null,
    github: null,
    twitter: null,
  },

  // Flagship Product: RS.BSC Live
  flagshipProduct: {
    name: "RS.BSC Live",
    taglineEn: "Enterprise Real-Time Social & Live Streaming Platform",
    taglineHi: "एंटरप्राइज रियल-टाइम सोशल और लाइव स्ट्रीमिंग प्लेटफॉर्म",
    descriptionEn: "A high-performance live communication platform engineered for ultra-low latency audio/video broadcasting, interactive group rooms, real-time messaging, and multi-tier moderation.",
    descriptionHi: "अल्ट्रा-लो लेटेंसी ऑडियो/वीडियो ब्रॉडकास्टिंग, इंटरैक्टिव ग्रुप रूम, रियल-टाइम मैसेजिंग और मल्टी-टियर मॉडरेशन के लिए तैयार किया गया उच्च-प्रदर्शन लाइव कम्युनिकेशन प्लेटफॉर्म।",
    status: "Active Production",
    storeLinks: {
      appStore: null, // Will be updated once live links are provided
      googlePlay: null, // Will be updated once live links are provided
      webApp: null,
    },
    // Visual concept showcase placeholders (not real screenshots)
    uiConcepts: [
      {
        id: "realtime-streaming",
        titleEn: "Ultra-Low Latency Live Rooms",
        titleHi: "अल्ट्रा-लो लेटेंसी लाइव रूम्स",
        descEn: "High-definition multi-guest audio and video channels powered by distributed WebRTC and edge relays.",
        descHi: "डिस्ट्रिब्यूटेड WebRTC और एज रिले द्वारा संचालित हाई-डेफिनिशन मल्टी-गेस्ट ऑडियो और वीडियो चैनल।",
        type: "concept",
      },
      {
        id: "realtime-chat",
        titleEn: "Instant Concurrent Messaging",
        titleHi: "इंस्टेंट समवर्ती मैसेजिंग",
        descEn: "Resilient publish-subscribe architecture capable of sustaining hundreds of thousands of concurrent room messages.",
        descHi: "सैकड़ों हजारों समवर्ती संदेशों को बिना किसी रुकावट के प्रोसेस करने में सक्षम मजबूत पब-सब आर्किटेक्चर।",
        type: "concept",
      },
      {
        id: "moderation-shield",
        titleEn: "Trust & Safety Command Center",
        titleHi: "ट्रस्ट एवं सेफ्टी कमांड सेंटर",
        descEn: "Comprehensive operator dashboards for reporting escalation, account security, and room compliance.",
        descHi: "रिपोर्टिंग एस्केलेशन, अकाउंट सुरक्षा और रूम कम्प्लायंस के लिए व्यापक ऑपरेटर डैशबोर्ड।",
        type: "concept",
      },
    ],
  },

  // Core capabilities
  capabilities: [
    "Live Chat Applications",
    "Social Communication Platforms",
    "Real-time Messaging",
    "Live Audio and Video",
    "Mobile Applications",
    "Backend Systems",
    "Admin Dashboards",
    "Real-time Infrastructure",
    "Moderation and Trust & Safety",
  ],
} as const;

export type CompanyConfig = typeof COMPANY_CONFIG;
