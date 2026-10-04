import { COMPANY_CONFIG } from "./company";

export type Locale = "en" | "hi";

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  iconName: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ContentDictionary {
  locale: Locale;
  localeName: string;
  otherLocale: Locale;
  otherLocaleName: string;

  nav: {
    home: string;
    product: string;
    services: string;
    about: string;
    contact: string;
    talkToUs: string;
    mobileMenu: string;
    closeMenu: string;
  };

  hero: {
    tagline: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    exploreProduct: string;
    startConversation: string;
    countryLabel: string;
    countryValue: string;
    badgeText: string;
    metrics: {
      engineeringPillar: string;
      engineeringDesc: string;
      specializationPillar: string;
      specializationDesc: string;
      infrastructurePillar: string;
      infrastructureDesc: string;
    };
  };

  whatWeBuild: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: FeatureItem[];
  };

  flagshipProduct: {
    sectionTag: string;
    title: string;
    productName: string;
    description: string;
    statusBadge: string;
    featuresTitle: string;
    features: {
      title: string;
      desc: string;
      icon: string;
    }[];
    conceptDisclaimer: string;
    requestInfoCta: string;
    viewProductDetails: string;
  };

  servicesOverview: {
    sectionTag: string;
    title: string;
    subtitle: string;
    dualModelNotice: {
      title: string;
      desc: string;
    };
    items: ServiceItem[];
    viewAllServices: string;
  };

  realtimeTech: {
    sectionTag: string;
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      desc: string;
      detail: string;
    }[];
  };

  trustSafety: {
    sectionTag: string;
    title: string;
    subtitle: string;
    pillars: {
      title: string;
      desc: string;
    }[];
  };

  leadership: {
    sectionTag: string;
    title: string;
    subtitle: string;
    name: string;
    role: string;
    country: string;
    description: string;
  };

  contactCta: {
    title: string;
    subtitle: string;
    formButton: string;
    whatsappButton: string;
    callButton: string;
  };

  productPage: {
    heroTag: string;
    title: string;
    subtitle: string;
    tagline: string;
    overviewTitle: string;
    overviewText: string;
    capabilitiesTitle: string;
    capabilities: {
      title: string;
      desc: string;
      details: string[];
    }[];
    conceptHeading: string;
    conceptSubheading: string;
    ctaHeading: string;
    ctaSubheading: string;
    ctaButton: string;
  };

  servicesPage: {
    heroTag: string;
    title: string;
    subtitle: string;
    modelComparison: {
      productTitle: string;
      productDesc: string;
      customTitle: string;
      customDesc: string;
    };
    processTitle: string;
    processSubtitle: string;
    processSteps: WorkflowStep[];
    servicesDetailTitle: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  aboutPage: {
    heroTag: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyP1: string;
    storyP2: string;
    storyP3: string;
    valuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
    leadershipTitle: string;
    leadershipText: string;
    locationTitle: string;
    locationDesc: string;
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };

  contactPage: {
    heroTag: string;
    title: string;
    subtitle: string;
    form: {
      fullName: string;
      fullNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      subject: string;
      subjectPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submitBtn: string;
      submittingBtn: string;
      successTitle: string;
      successMessage: string;
      errorMessage: string;
      validationErrors: {
        nameRequired: string;
        emailInvalid: string;
        subjectRequired: string;
        messageRequired: string;
      };
    };
    directChannelsTitle: string;
    whatsappLabel: string;
    phoneLabel: string;
    countryLabel: string;
    availabilityLabel: string;
    availabilityText: string;
  };

  legal: {
    privacy: {
      title: string;
      lastUpdated: string;
      disclaimer: string;
      sections: {
        heading: string;
        body: string;
      }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      disclaimer: string;
      sections: {
        heading: string;
        body: string;
      }[];
    };
  };

  footer: {
    companyDesc: string;
    navigationHeader: string;
    solutionsHeader: string;
    contactHeader: string;
    rightsReserved: string;
    privacyPolicy: string;
    termsOfService: string;
    madeInIndia: string;
  };

  common: {
    skipToContent: string;
    whatsappFloatingTooltip: string;
    openInNewTab: string;
    badgeConcept: string;
  };
}

export const CONTENT: Record<Locale, ContentDictionary> = {
  en: {
    locale: "en",
    localeName: "English",
    otherLocale: "hi",
    otherLocaleName: "हिन्दी",

    nav: {
      home: "Home",
      product: "Product",
      services: "Services",
      about: "About",
      contact: "Contact",
      talkToUs: "Talk to Us",
      mobileMenu: "Open main menu",
      closeMenu: "Close menu",
    },

    hero: {
      tagline: "Technology Company • India",
      headline: "Building Real-Time Products That",
      headlineHighlight: "Bring People Together",
      subheadline:
        "RS.BSC is an Indian technology company specializing in building proprietary digital products and engineering custom live chat, streaming, and real-time backend systems for clients worldwide.",
      exploreProduct: "Explore Our Product",
      startConversation: "Start a Conversation",
      countryLabel: "Engineering Origin",
      countryValue: "India",
      badgeText: "Real-Time Infrastructure & Social Technology",
      metrics: {
        engineeringPillar: "Dual Engineering Model",
        engineeringDesc: "Proprietary Products & Custom Client Solutions",
        specializationPillar: "Core Focus",
        specializationDesc: "Low-Latency Live Chat, Audio & Video Systems",
        infrastructurePillar: "System Reliability",
        infrastructureDesc: "High Concurrency & Scalable Architectures",
      },
    },

    whatWeBuild: {
      sectionTag: "Core Specialization",
      title: "Engineered for Live Interaction",
      subtitle:
        "We build scalable real-time systems from the protocol layer to responsive client applications.",
      items: [
        {
          id: "live-chat",
          title: "Live Chat Applications",
          description:
            "Instant messaging architectures capable of supporting heavy concurrent room conversations with sub-second delivery.",
          iconName: "MessageSquare",
        },
        {
          id: "audio-video",
          title: "Live Audio & Video",
          description:
            "Multi-party audio spaces, real-time video broadcasting, and interactive streaming powered by WebRTC edge relays.",
          iconName: "Radio",
        },
        {
          id: "mobile-apps",
          title: "Mobile Applications",
          description:
            "Performant, native-grade mobile experiences for iOS and Android optimized for fluid touch interactions and network resilience.",
          iconName: "Smartphone",
        },
        {
          id: "backend-apis",
          title: "Backend Systems & APIs",
          description:
            "Microservices, WebSocket gateways, and high-throughput databases designed for zero-downtime scalability.",
          iconName: "Server",
        },
        {
          id: "admin-dashboards",
          title: "Admin Dashboards",
          description:
            "Comprehensive management portals giving operators total control over system health, live rooms, and analytics.",
          iconName: "LayoutDashboard",
        },
        {
          id: "moderation",
          title: "Moderation Systems",
          description:
            "Structured workflows for community reporting, user protection, room enforcement, and platform trust & safety.",
          iconName: "ShieldCheck",
        },
      ],
    },

    flagshipProduct: {
      sectionTag: "Flagship Product",
      title: "Our In-House Digital Innovation",
      productName: COMPANY_CONFIG.flagshipProduct.name,
      description:
        "RS.BSC Live is our proprietary social and live broadcasting platform, engineered to connect people through synchronous real-time audio rooms, low-latency live streaming, and high-volume interactive chat.",
      statusBadge: "Active Development & Production",
      featuresTitle: "Core Architectural Capabilities",
      features: [
        {
          title: "Real-Time Messaging",
          desc: "Sub-second delivery with receipt tracking and concurrent room broadcasting.",
          icon: "Zap",
        },
        {
          title: "Live Audio & Video Rooms",
          desc: "Multi-seat audio stages and crystal-clear low-latency live broadcasting.",
          icon: "Headphones",
        },
        {
          title: "Multilingual Communication",
          desc: "Engineered from the ground up to support diverse linguistic communities seamlessly.",
          icon: "Globe",
        },
        {
          title: "Secure Account & Moderation",
          desc: "Granular administrative tools, tokenized sessions, and active reporting tools.",
          icon: "Shield",
        },
        {
          title: "Scalable Infrastructure",
          desc: "Distributed server meshes designed to withstand peak traffic spikes without packet loss.",
          icon: "Cpu",
        },
        {
          title: "Mobile-First Experience",
          desc: "Ultra-responsive touch interfaces optimized for battery life and low network bandwidth.",
          icon: "Smartphone",
        },
      ],
      conceptDisclaimer:
        "Conceptual interface visualization. Official application binaries, store listings, and live screenshots will be published upon verified release.",
      requestInfoCta: "Request Product Information",
      viewProductDetails: "View Full Product Architecture",
    },

    servicesOverview: {
      sectionTag: "Client Solutions",
      title: "Custom Technology Engineering",
      subtitle:
        "In addition to building our own platforms, we partner with visionary businesses to develop custom real-time software systems.",
      dualModelNotice: {
        title: "Two Dedicated Engineering Branches",
        desc: "1. RS.BSC Owned Products: We conceptualize, build, and operate proprietary digital platforms.\n2. Bespoke Client Solutions: We design, engineer, and deploy mission-critical software for your business.",
      },
      items: [
        {
          id: "custom-live-chat",
          title: "Custom Live Chat Development",
          tagline: "High-concurrency chat systems tailored to your brand.",
          description:
            "Custom-built chat infrastructure supporting private 1-on-1 messaging, group rooms, multimedia attachments, and real-time read receipts.",
          deliverables: [
            "WebSocket & MQTT Protocols",
            "Message History & Offline Sync",
            "Push Notification Pipelines",
            "Custom Chat UI Components",
          ],
          iconName: "MessageCircle",
        },
        {
          id: "social-platforms",
          title: "Social Platform Development",
          tagline: "Community and networking platforms built to scale.",
          description:
            "End-to-end social platforms featuring user profiles, dynamic interaction feeds, community groups, and synchronous real-time events.",
          deliverables: [
            "Relationship Graphs & Feeds",
            "Interactive Engagement Modules",
            "Event Notification Systems",
            "Robust Role-Based Access",
          ],
          iconName: "Users",
        },
        {
          id: "mobile-development",
          title: "Mobile App Development",
          tagline: "Native-grade iOS & Android applications.",
          description:
            "Cross-platform and native mobile applications engineered for smooth 60fps performance, offline resilience, and intuitive ergonomics.",
          deliverables: [
            "iOS & Android Codebases",
            "Hardware Acceleration",
            "Low-Bandwidth Optimization",
            "Secure Local Storage",
          ],
          iconName: "Smartphone",
        },
        {
          id: "backend-apis",
          title: "Backend & API Development",
          tagline: "High-throughput servers and resilient APIs.",
          description:
            "Cloud-native microservices, GraphQL and REST endpoints, distributed database clustering, and authentication systems built to endure.",
          deliverables: [
            "Microservices Architecture",
            "High-Throughput Caching",
            "Automated Scaling Policies",
            "API Documentation & SDKs",
          ],
          iconName: "Database",
        },
        {
          id: "realtime-infra",
          title: "Real-Time Infrastructure",
          tagline: "Low-latency streaming & messaging foundations.",
          description:
            "Turnkey edge deployment, WebRTC selective forwarding units (SFU), media relays, and distributed pub/sub clusters.",
          deliverables: [
            "WebRTC & RTMP Pipelines",
            "Edge Server Routing",
            "Latency Optimization",
            "Real-Time Analytics Dashboards",
          ],
          iconName: "Activity",
        },
        {
          id: "support-evolution",
          title: "Support & Product Evolution",
          tagline: "Long-term partnership and system maintenance.",
          description:
            "Dedicated post-launch observability, proactive performance profiling, database tuning, and architectural upgrades.",
          deliverables: [
            "24/7 Monitoring & Alerting",
            "Security Patching",
            "Database Optimization",
            "Iterative Feature Upgrades",
          ],
          iconName: "LifeBuoy",
        },
      ],
      viewAllServices: "Explore Full Services & Development Process",
    },

    realtimeTech: {
      sectionTag: "Engineering Principles",
      title: "Built on Low-Latency Architecture",
      subtitle:
        "Every line of code and protocol selection is calibrated for speed, data integrity, and high concurrent loads.",
      pillars: [
        {
          title: "Low-Latency Communication",
          desc: "Engineered with modern WebSocket and WebRTC protocols to minimize packet flight time across global networks.",
          detail: "Optimized connection handshakes and packet serialization.",
        },
        {
          title: "Scalable Architecture",
          desc: "Horizontally scalable node clusters that expand effortlessly during high-traffic room events.",
          detail: "Stateless connection brokers backed by distributed state caches.",
        },
        {
          title: "Reliable Backend Systems",
          desc: "Resilient fault-tolerant architectures with automatic failover, database replication, and zero data degradation.",
          detail: "Continuous health checking and automated node recovery.",
        },
        {
          title: "Monitoring & Performance",
          desc: "Deep instrumentation tracking latency, connection stability, memory allocation, and packet throughput in real time.",
          detail: "Instant telemetry alerts for rapid operational response.",
        },
        {
          title: "Cross-Platform Delivery",
          desc: "Unified engineering patterns ensuring identical reliability and responsiveness across mobile, desktop, and web.",
          detail: "Consistent client-side caching and socket reconnection logic.",
        },
      ],
    },

    trustSafety: {
      sectionTag: "Platform Integrity",
      title: "Trust & Safety by Design",
      subtitle:
        "We consider platform safety, privacy, and community wellbeing foundational requirements, not afterthoughts.",
      pillars: [
        {
          title: "Structured Moderation Workflows",
          desc: "Multi-tiered administrative tools allowing human operators to review flagged content, mute violators, or terminate compromised rooms.",
        },
        {
          title: "Transparent Reporting Pipelines",
          desc: "Intuitive user reporting flows that categorize incidents and route them directly to prioritized queue handlers.",
        },
        {
          title: "Account Protection & Integrity",
          desc: "Rigorous token management, rate limiting, and anomalous activity detection protecting user accounts from brute-force intrusions.",
        },
        {
          title: "Privacy-Aware Product Design",
          desc: "Strict principle of data minimization: we store only necessary interaction records and safeguard all private session metadata.",
        },
        {
          title: "Safe Community Standards",
          desc: "Proactive tooling to enforce community terms, protect vulnerable participants, and maintain constructive live interactions.",
        },
      ],
    },

    leadership: {
      sectionTag: "Leadership",
      title: "Guided by Strategic Vision",
      subtitle:
        "Directing technical excellence, disciplined product development, and long-term value creation.",
      name: COMPANY_CONFIG.ceo.name,
      role: COMPANY_CONFIG.ceo.title,
      country: COMPANY_CONFIG.country,
      description: COMPANY_CONFIG.ceo.bioEn,
    },

    contactCta: {
      title: "Let's Discuss Your Real-Time Project",
      subtitle:
        "Whether you are exploring RS.BSC Live or need an engineering partner to build a bespoke communication solution, our team is ready to assist.",
      formButton: "Send an Inquiry",
      whatsappButton: "Chat on WhatsApp",
      callButton: "Call " + COMPANY_CONFIG.contact.phoneDisplay,
    },

    productPage: {
      heroTag: "Proprietary Product",
      title: "RS.BSC Live",
      subtitle:
        "A next-generation real-time social ecosystem built for instant voice, video, and community interaction.",
      tagline: COMPANY_CONFIG.flagshipProduct.taglineEn,
      overviewTitle: "Engineered for Immersive Live Interaction",
      overviewText:
        "RS.BSC Live represents our vision for modern synchronous digital connection. Engineered from the ground up, the platform couples ultra-responsive client applications with a resilient distributed backend to deliver fluid conversations across varying network qualities.",
      capabilitiesTitle: "Platform Pillars & Capabilities",
      capabilities: [
        {
          title: "Low-Latency Real-Time Audio & Video",
          desc: "Crystal-clear voice stages and synchronized live video broadcast rooms with dynamic bitrate adjustment.",
          details: [
            "Multi-speaker interactive stages",
            "Adaptive bitrate streaming for weak networks",
            "Synchronized room events and reactions",
          ],
        },
        {
          title: "High-Capacity Concurrent Chat",
          desc: "Engineered to deliver high message throughput during busy live events without dropped packets.",
          details: [
            "Sub-second delivery guarantees",
            "Optimistic message sending with offline queues",
            "Room broadcast channels and private messaging",
          ],
        },
        {
          title: "Trust, Safety & Moderation Controls",
          desc: "Operational consoles giving community managers real-time authority over safety and policy enforcement.",
          details: [
            "Instant room mute and expulsion controls",
            "Categorized user reporting workflows",
            "Session anomaly detection and rate throttling",
          ],
        },
        {
          title: "Multilingual & Cross-Border Architecture",
          desc: "Designed with internationalization at its core, enabling localized experiences across regions.",
          details: [
            "Native Unicode & Devanagari script support",
            "Multi-region server distribution",
            "Localized date, time, and currency formats",
          ],
        },
      ],
      conceptHeading: "Interface Architecture & Design Language",
      conceptSubheading:
        "A sneak preview of the ergonomic layout, dark luxury aesthetics, and live control panels powering RS.BSC Live.",
      ctaHeading: "Interested in RS.BSC Live?",
      ctaSubheading:
        "Connect with our leadership team for architectural inquiries, enterprise integrations, or demonstration requests.",
      ctaButton: "Request Product Information",
    },

    servicesPage: {
      heroTag: "Engineering Services",
      title: "Custom Technology Solutions",
      subtitle:
        "We engineer robust live chat applications, mobile platforms, and distributed real-time backends for companies requiring enterprise reliability.",
      modelComparison: {
        productTitle: "Our In-House Products",
        productDesc:
          "Proprietary platforms like RS.BSC Live developed, maintained, and operated completely by our internal teams.",
        customTitle: "Custom Client Engineering",
        customDesc:
          "Tailored end-to-end development services where we build bespoke software systems according to your exact specifications.",
      },
      processTitle: "Our Structured Engineering Lifecycle",
      processSubtitle:
        "From technical scoping to long-term operational support, we follow a disciplined milestone-driven process.",
      processSteps: [
        {
          step: "01",
          title: "Discovery & Technical Scoping",
          description:
            "Deep-dive analysis into your system requirements, concurrency estimates, compliance constraints, and technology stack selection.",
        },
        {
          step: "02",
          title: "Product Planning & Architecture",
          description:
            "Drafting detailed database schemas, API specifications, real-time protocol designs, and security boundaries.",
        },
        {
          step: "03",
          title: "UI/UX Design & High-Performance Engineering",
          description:
            "Iterative implementation of fluid client interfaces, robust backend services, and low-latency communication relays.",
        },
        {
          step: "04",
          title: "Rigorous Testing & Production Launch",
          description:
            "Conducted load testing, packet loss simulation, penetration assessments, and controlled deployment with monitoring.",
        },
        {
          step: "05",
          title: "Continuous Support & Scalability Evolution",
          description:
            "Post-launch telemetry, proactive performance tuning, security maintenance, and iterative feature development.",
        },
      ],
      servicesDetailTitle: "Complete Services Catalog",
      ctaTitle: "Ready to Build Your Custom Platform?",
      ctaSubtitle:
        "Share your requirements with us. Our engineering team will review your specifications and schedule a direct consultation.",
      ctaButton: "Start a Consultation",
    },

    aboutPage: {
      heroTag: "About RS.BSC",
      title: "Pioneering Real-Time Technology",
      subtitle:
        "An Indian technology product and engineering company committed to building dependable systems that empower real-time human connection.",
      storyTitle: "Our Mission & Technical Focus",
      storyP1:
        "RS.BSC is a technology company founded in India with a clear, singular focus: engineering real-time digital communication platforms that are fast, reliable, and secure.",
      storyP2:
        "In an interconnected world, delayed communication breaks user trust. We believe that live interactions—whether written messages, audio streams, or video rooms—require specialized architectures built from first principles.",
      storyP3:
        "By simultaneously developing our own proprietary platforms (such as RS.BSC Live) and crafting custom software for forward-thinking clients, we continuously sharpen our engineering capabilities against real-world scale and operational demands.",
      valuesTitle: "Core Operating Principles",
      values: [
        {
          title: "Uncompromising Reliability",
          desc: "We design every service with fault tolerance, failover redundancy, and zero-loss message pipelines as non-negotiable standards.",
        },
        {
          title: "Trust & Safety by Design",
          desc: "Safety is not an afterthought. We build moderation tools, privacy protections, and reporting workflows into every architecture.",
        },
        {
          title: "Clarity & Honesty",
          desc: "We speak frankly about system capabilities, timelines, and technical constraints. No fabricated claims, no exaggerated buzzwords.",
        },
        {
          title: "Long-Term Product Thinking",
          desc: "We build sustainable, maintainable architectures designed to evolve smoothly over years, not quick throwaway code.",
        },
      ],
      leadershipTitle: "Executive Leadership",
      leadershipText:
        "RS.BSC is guided by executive leadership that prioritizes technical diligence, disciplined execution, and long-term technological partnerships.",
      locationTitle: "Engineering Headquarters",
      locationDesc:
        "Headquartered in India, RS.BSC combines deep technical talent with a global engineering outlook, serving digital communities and enterprise clients worldwide.",
      ctaTitle: "Connect With Our Team",
      ctaSubtitle:
        "Learn more about our technology stack, proprietary products, or collaboration opportunities.",
      ctaButton: "Get in Touch",
    },

    contactPage: {
      heroTag: "Get in Touch",
      title: "Start a Conversation",
      subtitle:
        "Have a technical question, want to explore RS.BSC Live, or need a custom engineering partner? Contact us directly.",
      form: {
        fullName: "Full Name",
        fullNamePlaceholder: "e.g. John Doe",
        email: "Email Address",
        emailPlaceholder: "name@company.com",
        phone: "Phone Number (Optional)",
        phonePlaceholder: "+1 (555) 000-0000",
        company: "Company Name (Optional)",
        companyPlaceholder: "Your organization name",
        subject: "Subject",
        subjectPlaceholder: "Project inquiry, Demo request, etc.",
        message: "Your Message",
        messagePlaceholder:
          "Describe your project requirements, goals, or questions in detail...",
        submitBtn: "Send Message",
        submittingBtn: "Transmitting...",
        successTitle: "Message Delivered Successfully",
        successMessage:
          "Thank you for contacting RS.BSC. Our team has received your message and will review your inquiry promptly.",
        errorMessage:
          "Unable to send your message right now. Please verify your connection or reach out directly via WhatsApp or phone.",
        validationErrors: {
          nameRequired: "Please enter your full name.",
          emailInvalid: "Please enter a valid email address.",
          subjectRequired: "Please specify a subject for your inquiry.",
          messageRequired: "Please enter your message (at least 10 characters).",
        },
      },
      directChannelsTitle: "Direct Communication Channels",
      whatsappLabel: "Instant WhatsApp Chat",
      phoneLabel: "Telephone Call",
      countryLabel: "Country & Origin",
      availabilityLabel: "Response Standard",
      availabilityText:
        "Our team reviews all inquiries during standard business hours and responds with technical clarity.",
    },

    legal: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "October 2026",
        disclaimer:
          "Important Legal Note: This privacy policy describes the general data practices of RS.BSC. It is intended for informational clarity and is subject to official corporate and regulatory legal review prior to commercial deployment.",
        sections: [
          {
            heading: "1. Information We Collect",
            body: "When you interact with our website or submit an inquiry through our contact form, we collect the details you voluntarily provide: your name, email address, optional phone number, company name, subject, and message content.",
          },
          {
            heading: "2. Purpose of Data Processing",
            body: "The information you provide is used solely to evaluate your technical inquiry, respond to your questions, coordinate communication regarding RS.BSC Live or our custom engineering services, and maintain correspondence records.",
          },
          {
            heading: "3. Email & Third-Party Infrastructure",
            body: "Inquiries submitted via our contact forms are transmitted securely via authorized transactional email infrastructure (such as Resend) to our designated corporate inboxes. We do not sell, rent, or lease your personal contact details to third parties or advertising brokers.",
          },
          {
            heading: "4. Data Retention & Security",
            body: "We implement reasonable administrative and technological safeguards to prevent unauthorized access, disclosure, alteration, or destruction of communications stored within our mail servers.",
          },
          {
            heading: "5. Your Rights & Data Deletion",
            body: "You may request the review, correction, or deletion of your contact correspondence at any time by reaching out through our official communication channels.",
          },
          {
            heading: "6. Cookies & Analytics",
            body: "This website does not employ invasive cross-site tracking cookies. Basic session and performance logs may be collected by server infrastructure solely to maintain system stability and prevent abuse.",
          },
          {
            heading: "7. Updates to This Policy",
            body: "RS.BSC reserves the right to revise this Privacy Policy to reflect changes in our operational procedures or applicable laws. Continued use of our site after revisions indicates acceptance of the updated terms.",
          },
        ],
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "October 2026",
        disclaimer:
          "Important Legal Note: These terms govern the use of the RS.BSC website. They are provided as an operational baseline and are subject to formal legal review before definitive commercial execution.",
        sections: [
          {
            heading: "1. Acceptance of Terms",
            body: "By accessing or using the RS.BSC website, you agree to comply with and be bound by these Terms of Service and all applicable laws and regulations in India and your jurisdiction.",
          },
          {
            heading: "2. Intellectual Property",
            body: "All content, code, logos, visual designs, brand names, and structural elements on this site are the proprietary intellectual property of RS.BSC and are protected by applicable copyright, trademark, and unfair competition laws.",
          },
          {
            heading: "3. Permitted Website Use",
            body: "You are granted a limited, non-exclusive license to view the materials on this website for informational and evaluation purposes. You may not reverse-engineer, scrape, mirror, or exploit the website for unauthorized commercial purposes.",
          },
          {
            heading: "4. Proprietary Products & Services",
            body: "Mentions of proprietary products such as RS.BSC Live are for informational and conceptual presentation. Formal agreements governing software licensing, access, or bespoke engineering services require signed commercial contracts.",
          },
          {
            heading: "5. Limitation of Liability",
            body: "In no event shall RS.BSC, its directors, or its affiliates be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the materials or forms on this site.",
          },
          {
            heading: "6. External Links & Communications",
            body: "Our website includes direct links to third-party communication services (such as WhatsApp). We do not control and are not responsible for the privacy practices or terms of external platforms.",
          },
          {
            heading: "7. Governing Law",
            body: "These Terms of Service are governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.",
          },
        ],
      },
    },

    footer: {
      companyDesc:
        "RS.BSC is a technology product and solutions company based in India. We engineer proprietary real-time platforms and build custom low-latency live chat, audio, and video systems for modern enterprises.",
      navigationHeader: "Navigation",
      solutionsHeader: "Offerings",
      contactHeader: "Get in Touch",
      rightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      madeInIndia: "Engineered in India",
    },

    common: {
      skipToContent: "Skip to main content",
      whatsappFloatingTooltip: "Chat with RS.BSC on WhatsApp",
      openInNewTab: "(opens in new tab)",
      badgeConcept: "UI Concept Preview",
    },
  },

  hi: {
    locale: "hi",
    localeName: "हिन्दी",
    otherLocale: "en",
    otherLocaleName: "English",

    nav: {
      home: "होम",
      product: "उत्पाद",
      services: "सेवाएं",
      about: "हमारे बारे में",
      contact: "संपर्क",
      talkToUs: "बातचीत शुरू करें",
      mobileMenu: "मुख्य मेनू खोलें",
      closeMenu: "मेनू बंद करें",
    },

    hero: {
      tagline: "प्रौद्योगिकी कंपनी • भारत",
      headline: "लोगों को करीब लाने वाले",
      headlineHighlight: "रियल-टाइम उत्पादों का निर्माण",
      subheadline:
        "RS.BSC भारत की एक अग्रणी प्रौद्योगिकी कंपनी है जो अपने स्वयं के डिजिटल उत्पादों का निर्माण करती है और दुनिया भर के उद्यमों के लिए लाइव चैट, स्ट्रीमिंग एवं स्केलेबल रियल-टाइम बैकएंड सिस्टम विकसित करती है।",
      exploreProduct: "हमारे उत्पाद देखें",
      startConversation: "बातचीत शुरू करें",
      countryLabel: "इंजीनियरिंग मूल",
      countryValue: "भारत",
      badgeText: "रियल-टाइम इंफ्रास्ट्रक्चर एवं सोशल टेक्नोलॉजी",
      metrics: {
        engineeringPillar: "दोहरा इंजीनियरिंग मॉडल",
        engineeringDesc: "स्वामित्व वाले उत्पाद एवं कस्टम ग्राहक समाधान",
        specializationPillar: "मुख्य विशेषज्ञता",
        specializationDesc: "लो-लेटेंसी लाइव चैट, ऑडियो और वीडियो सिस्टम",
        infrastructurePillar: "सिस्टम विश्वसनीयता",
        infrastructureDesc: "उच्च समवर्ती भार एवं स्केलेबल आर्किटेक्चर",
      },
    },

    whatWeBuild: {
      sectionTag: "मुख्य विशेषज्ञता",
      title: "सजीव इंटरैक्शन के लिए विशेष रूप से निर्मित",
      subtitle:
        "हम प्रोटोकॉल स्तर से लेकर सहज क्लाइंट एप्लिकेशन तक संपूर्ण रियल-टाइम सिस्टम का निर्माण करते हैं।",
      items: [
        {
          id: "live-chat",
          title: "लाइव चैट एप्लिकेशन्स",
          description:
            "सैकड़ों समवर्ती उपयोगकर्ताओं के बीच बिना किसी देरी के त्वरित संदेश वितरण करने में सक्षम चैट आर्किटेक्चर।",
          iconName: "MessageSquare",
        },
        {
          id: "audio-video",
          title: "लाइव ऑडियो और वीडियो",
          description:
            "मल्टी-पार्टी ऑडियो रूम्स, रियल-टाइम वीडियो ब्रॉडकास्टिंग और WebRTC द्वारा संचालित इंटरैक्टिव स्ट्रीमिंग।",
          iconName: "Radio",
        },
        {
          id: "mobile-apps",
          title: "मोबाइल एप्लिकेशन्स",
          description:
            "iOS और Android के लिए उच्च-प्रदर्शन वाले मूल एप्लिकेशन जो न्यूनतम नेटवर्क में भी निर्बाध चलते हैं।",
          iconName: "Smartphone",
        },
        {
          id: "backend-apis",
          title: "बैकएंड सिस्टम्स और APIs",
          description:
            "माइक्रोसर्विसेज, वेबसॉकेट गेटवे और अत्यधिक ट्रैफ़िक को संभालने वाले जीरो-डाउनटाइम डेटाबेस सिस्टम।",
          iconName: "Server",
        },
        {
          id: "admin-dashboards",
          title: "एडमिन डैशबोर्ड्स",
          description:
            "सिस्टम स्वास्थ्य, लाइव रूम्स और एनालिटिक्स पर व्यवस्थापकों को पूर्ण नियंत्रण देने वाले विस्तृत पोर्टल।",
          iconName: "LayoutDashboard",
        },
        {
          id: "moderation",
          title: "मॉडरेशन सिस्टम्स",
          description:
            "कम्युनिटी रिपोर्टिंग, उपयोगकर्ता सुरक्षा और सुरक्षित माहौल बनाए रखने के लिए संरचित कार्यप्रणाली।",
          iconName: "ShieldCheck",
        },
      ],
    },

    flagshipProduct: {
      sectionTag: "प्रमुख उत्पाद",
      title: "हमारा इन-हाउस डिजिटल इनोवेशन",
      productName: COMPANY_CONFIG.flagshipProduct.name,
      description:
        "RS.BSC Live हमारा प्रमुख सोशल और लाइव ब्रॉडकास्टिंग प्लेटफॉर्म है, जिसे सिंक्रोनस रियल-टाइम ऑडियो रूम्स, लो-लेटेंसी स्ट्रीमिंग और उच्च-मात्रा वाली चैट के माध्यम से लोगों को जोड़ने के लिए बनाया गया है।",
      statusBadge: "सक्रिय विकास एवं उत्पादन",
      featuresTitle: "प्रमुख तकनीकी क्षमताएं",
      features: [
        {
          title: "रियल-टाइम मैसेजिंग",
          desc: "सब-सेकंड संदेश वितरण, पावती ट्रैकिंग और निरंतर समवर्ती रूम ब्रॉडकास्टिंग।",
          icon: "Zap",
        },
        {
          title: "लाइव ऑडियो और वीडियो रूम्स",
          desc: "मल्टी-स्पीकर ऑडियो स्टेज और क्रिस्टल-क्लियर लो-लेटेंसी लाइव वीडियो स्ट्रीमिंग।",
          icon: "Headphones",
        },
        {
          title: "बहुभाषी संचार",
          desc: "विविध भाषाई समुदायों को बिना किसी भाषा बाधा के सहजता से जोड़ने के लिए तैयार।",
          icon: "Globe",
        },
        {
          title: "सुरक्षित खाता एवं मॉडरेशन",
          desc: "विस्तृत प्रशासनिक उपकरण, टोकनाइज़्ड सुरक्षा सत्र और सक्रिय रिपोर्टिंग समाधान।",
          icon: "Shield",
        },
        {
          title: "स्केलेबल इंफ्रास्ट्रक्चर",
          desc: "अचानक बढ़ते ट्रैफ़िक को बिना किसी रुकावट के संभालने के लिए वितरित सर्वर नेटवर्क।",
          icon: "Cpu",
        },
        {
          title: "मोबाइल-प्रथम अनुभव",
          desc: "कम बैटरी खपत और सीमित इंटरनेट बैंडविड्थ में भी सहज संचालन के लिए अनुकूलित।",
          icon: "Smartphone",
        },
      ],
      conceptDisclaimer:
        "अवधारणात्मक इंटरफ़ेस पूर्वावलोकन। आधिकारिक एप्लिकेशन फ़ाइलें, स्टोर लिस्टिंग और वास्तविक स्क्रीनशॉट अंतिम रिलीज के बाद उपलब्ध कराए जाएंगे।",
      requestInfoCta: "उत्पाद जानकारी का अनुरोध करें",
      viewProductDetails: "पूर्ण उत्पाद वास्तुकला देखें",
    },

    servicesOverview: {
      sectionTag: "ग्राहक समाधान",
      title: "कस्टम प्रौद्योगिकी इंजीनियरिंग",
      subtitle:
        "अपने स्वयं के उत्पादों के अलावा, हम व्यवसायों के लिए उच्च-स्तरीय रियल-टाइम सॉफ्टवेयर और प्लेटफॉर्म का निर्माण करते हैं।",
      dualModelNotice: {
        title: "दो समर्पित इंजीनियरिंग शाखाएं",
        desc: "1. RS.BSC के अपने उत्पाद: हम अपने स्वयं के डिजिटल प्लेटफॉर्म विकसित और संचालित करते हैं।\n2. कस्टम ग्राहक समाधान: हम आपके व्यवसाय की आवश्यकताओं के अनुसार महत्वपूर्ण सॉफ्टवेयर तैयार करते हैं।",
      },
      items: [
        {
          id: "custom-live-chat",
          title: "कस्टम लाइव चैट डेवलपमेंट",
          tagline: "आपके ब्रांड के अनुरूप उच्च-समवर्ती चैट सिस्टम।",
          description:
            "व्यक्तिगत वन-ऑन-वन मैसेजिंग, ग्रुप रूम्स, मीडिया शेयरिंग और रियल-टाइम डिलीवरी स्टेटस के लिए विशेष चैट इंफ्रास्ट्रक्चर।",
          deliverables: [
            "वेबसॉकेट एवं MQTT प्रोटोकॉल",
            "मैसेज हिस्ट्री एवं ऑफलाइन सिंक",
            "पुश नोटिफिकेशन पाइपलाइन",
            "कस्टम चैट यूआई कंपोनेंट्स",
          ],
          iconName: "MessageCircle",
        },
        {
          id: "social-platforms",
          title: "सोशल प्लेटफॉर्म डेवलपमेंट",
          tagline: "बड़े पैमाने पर विस्तार करने वाले कम्युनिटी प्लेटफॉर्म।",
          description:
            "यूज़र प्रोफाइल, इंटरेक्टिव फीड, कम्युनिटी ग्रुप्स और रियल-टाइम इवेंट्स से युक्त संपूर्ण सोशल प्लेटफॉर्म्स।",
          deliverables: [
            "रिलेशनशिप ग्राफ और एक्टिविटी फीड",
            "इंटरैक्टिव एंगेजमेंट मॉड्यूल",
            "इवेंट नोटिफिकेशन सिस्टम",
            "मजबूत भूमिका-आधारित एक्सेस",
          ],
          iconName: "Users",
        },
        {
          id: "mobile-development",
          title: "मोबाइल ऐप डेवलपमेंट",
          tagline: "iOS और Android के लिए मूल-स्तरीय एप्लिकेशन।",
          description:
            "60fps स्मूथ परफॉर्मेंस, ऑफलाइन स्थिरता और सहज अनुभव देने वाले क्रॉस-प्लेटफॉर्म और नेटिव मोबाइल ऐप्स।",
          deliverables: [
            "iOS और Android कोडबेस",
            "हार्डवेयर एक्सेलेरेशन",
            "लो-बैंडविड्थ ऑप्टिमाइजेशन",
            "सुरक्षित लोकल स्टोरेज",
          ],
          iconName: "Smartphone",
        },
        {
          id: "backend-apis",
          title: "बैकएंड एवं API डेवलपमेंट",
          tagline: "उच्च क्षमता वाले सर्वर और मजबूत APIs।",
          description:
            "क्लाउड-नेटिव माइक्रोसर्विसेज, GraphQL और REST एंडपॉइंट्स और उच्च ट्रैफ़िक को संभालने वाले डेटाबेस क्लस्टर्स।",
          deliverables: [
            "माइक्रोसर्विसेज आर्किटेक्चर",
            "हाई-थ्रूपुट कैशिंग सिस्टम",
            "ऑटो-स्केलिंग नीतियां",
            "API दस्तावेज़ीकरण और SDKs",
          ],
          iconName: "Database",
        },
        {
          id: "realtime-infra",
          title: "रियल-टाइम इंफ्रास्ट्रक्चर",
          tagline: "लो-लेटेंसी स्ट्रीमिंग और मैसेजिंग आधारशिला।",
          description:
            "टर्नकी एज डिप्लॉयमेंट, WebRTC SFU इकाइयां, मीडिया रिले और वितरित पब-सब क्लस्टर्स।",
          deliverables: [
            "WebRTC और RTMP पाइपलाइन",
            "एज सर्वर रूटिंग",
            "लेटेंसी अनुकूलन",
            "रियल-टाइम एनालिटिक्स डैशबोर्ड",
          ],
          iconName: "Activity",
        },
        {
          id: "support-evolution",
          title: "सपोर्ट एवं उत्पाद विकास",
          tagline: "दीर्घकालिक साझेदारी और सिस्टम का निरंतर रखरखाव।",
          description:
            "लॉन्च के बाद निरंतर निगरानी, प्रदर्शन अनुकूलन, डेटाबेस ट्यूनिंग और आधुनिक तकनीकी अपग्रेड।",
          deliverables: [
            "24/7 मॉनिटरिंग और अलर्ट",
            "सुरक्षा पैचिंग",
            "डेटाबेस ट्यूनिंग",
            "निरंतर फीचर अपग्रेड",
          ],
          iconName: "LifeBuoy",
        },
      ],
      viewAllServices: "सभी सेवाएं एवं कार्यप्रणाली देखें",
    },

    realtimeTech: {
      sectionTag: "इंजीनियरिंग सिद्धांत",
      title: "अत्यल्प-विलंबता वास्तुकला पर आधारित",
      subtitle:
        "कोड की प्रत्येक पंक्ति और प्रोटोकॉल का चयन गति, डेटा शुद्धता और भारी लोड को संभालने के लिए किया जाता है।",
      pillars: [
        {
          title: "लो-लेटेंसी संचार",
          desc: "वैश्विक नेटवर्क पर डेटा के आदान-प्रदान में लगने वाले समय को न्यूनतम करने के लिए आधुनिक वेबसॉकेट और WebRTC प्रोटोकॉल।",
          detail: "अनुकूलित कनेक्शन हैंडशेक और पैकेट क्रमांकन।",
        },
        {
          title: "स्केलेबल आर्किटेक्चर",
          desc: "क्षैतिज रूप से विस्तार करने वाले नोड क्लस्टर्स जो चरम ट्रैफ़िक के दौरान बिना किसी समस्या के बढ़ जाते हैं।",
          detail: "वितरित स्थिति कैश द्वारा समर्थित स्टेटलेस कनेक्शन ब्रोकर्स।",
        },
        {
          title: "विश्वसनीय बैकएंड सिस्टम",
          desc: "स्वचालित रिकवरी, डेटाबेस प्रतिकृति और शून्य डेटा हानि के साथ दोष-सहिष्णु वास्तुकला।",
          detail: "निरंतर स्वास्थ्य जांच और स्वचालित नोड रिकवरी।",
        },
        {
          title: "मॉनिटरिंग और परफॉर्मेंस",
          desc: "लेटेंसी, कनेक्शन स्थिरता और मेमोरी आवंटन को वास्तविक समय में ट्रैक करने वाले विस्तृत टूल्स।",
          detail: "त्वरित कार्रवाई के लिए तत्काल टेलीमेट्री अलर्ट।",
        },
        {
          title: "क्रॉस-प्लेटफॉर्म डिलीवरी",
          desc: "मोबाइल, डेस्कटॉप और वेब पर समान विश्वसनीयता और उत्तरदायित्व सुनिश्चित करने वाले एकीकृत मानक।",
          detail: "निरंतर क्लाइंट-साइड कैशिंग और सॉकेट पुनः संयोजन तर्क।",
        },
      ],
    },

    trustSafety: {
      sectionTag: "प्लेटफॉर्म सुरक्षा",
      title: "आरंभ से ही विश्वसनीयता एवं सुरक्षा",
      subtitle:
        "हम उपयोगकर्ता सुरक्षा, गोपनीयता और समुदाय की गरिमा को बाद का विचार नहीं, बल्कि अनिवार्य आधारशिला मानते हैं।",
      pillars: [
        {
          title: "संरचित मॉडरेशन वर्कफ़्लो",
          desc: "उल्लंघनकर्ताओं को म्यूट करने या संदिग्ध लाइव रूम को तत्काल बंद करने के लिए व्यवस्थापकों हेतु बहुस्तरीय नियंत्रण।",
        },
        {
          title: "पारदर्शी रिपोर्टिंग प्रक्रिया",
          desc: "सहज रिपोर्टिंग विकल्प जो घटनाओं को वर्गीकृत करके सीधे प्राथमिकता प्राप्त कतार में भेजते हैं।",
        },
        {
          title: "खाता सुरक्षा एवं अखंडता",
          desc: "अनधिकृत पहुंच और हमलों से उपयोगकर्ता खातों की रक्षा के लिए टोकन प्रबंधन और असामान्य गतिविधि का पता लगाना।",
        },
        {
          title: "गोपनीयता-सचेत उत्पाद डिज़ाइन",
          desc: "डेटा न्यूनीकरण का सख्त सिद्धांत: हम केवल आवश्यक रिकॉर्ड संग्रहीत करते हैं और संवेदनशील डेटा की रक्षा करते हैं।",
        },
        {
          title: "सुरक्षित सामुदायिक मानक",
          desc: "नियमों को लागू करने, उपयोगकर्ताओं की रक्षा करने और स्वस्थ लाइव बातचीत बनाए रखने के लिए सक्रिय उपकरण।",
        },
      ],
    },

    leadership: {
      sectionTag: "नेतृत्व",
      title: "रणनीतिक दृष्टि द्वारा निर्देशित",
      subtitle:
        "तकनीकी उत्कृष्टता, अनुशासित उत्पाद विकास और दीर्घकालिक मूल्य निर्माण का नेतृत्व।",
      name: COMPANY_CONFIG.ceo.name,
      role: COMPANY_CONFIG.ceo.titleHindi,
      country: "भारत",
      description: COMPANY_CONFIG.ceo.bioHi,
    },

    contactCta: {
      title: "आइए अपने रियल-टाइम प्रोजेक्ट पर चर्चा करें",
      subtitle:
        "चाहे आप RS.BSC Live के बारे में जानना चाहते हों या कस्टम कम्युनिकेशन समाधान तैयार करना चाहते हों, हमारी टीम तैयार है।",
      formButton: "संदेश भेजें",
      whatsappButton: "WhatsApp पर चैट करें",
      callButton: "कॉल करें: " + COMPANY_CONFIG.contact.phoneDisplay,
    },

    productPage: {
      heroTag: "स्वामित्व उत्पाद",
      title: "RS.BSC Live",
      subtitle:
        "त्वरित आवाज, वीडियो और सामुदायिक जुड़ाव के लिए अगली पीढ़ी का रियल-टाइम सोशल इकोसिस्टम।",
      tagline: COMPANY_CONFIG.flagshipProduct.taglineHi,
      overviewTitle: "सजीव इंटरैक्शन के लिए तैयार",
      overviewText:
        "RS.BSC Live आधुनिक डिजिटल जुड़ाव के लिए हमारी सोच को दर्शाता है। इसे विभिन्न नेटवर्क स्थितियों में भी सहज बातचीत प्रदान करने के लिए एक मजबूत बैकएंड और तेज़ मोबाइल ऐप्स के साथ तैयार किया गया है।",
      capabilitiesTitle: "प्लेटफॉर्म की मुख्य क्षमताएं",
      capabilities: [
        {
          title: "लो-लेटेंसी रियल-टाइम ऑडियो और वीडियो",
          desc: "क्रिस्टल-क्लियर वॉइस स्टेज और डायनामिक बिटरेट एडजस्टमेंट के साथ सिंक्रोनाइज़्ड लाइव वीडियो रूम्स।",
          details: [
            "मल्टी-स्पीकर इंटरैक्टिव स्टेज",
            "कमज़ोर नेटवर्क के लिए अनुकूली बिटरेट स्ट्रीमिंग",
            "सिंक्रोनाइज़्ड रूम रिएक्शन्स और इवेंट्स",
          ],
        },
        {
          title: "उच्च-क्षमता वाली समवर्ती चैट",
          desc: "व्यस्त लाइव इवेंट्स के दौरान बिना किसी संदेश हानि के भारी मैसेज ट्रैफ़िक को संभालने में सक्षम।",
          details: [
            "सब-सेकंड संदेश डिलीवरी गारंटी",
            "ऑफलाइन कतार के साथ तत्काल संदेश प्रेषण",
            "ब्रॉडकास्ट चैनल और सुरक्षित निजी संदेश",
          ],
        },
        {
          title: "विश्वास, सुरक्षा और मॉडरेशन नियंत्रण",
          desc: "कम्युनिटी प्रबंधकों को सुरक्षा और नीति प्रवर्तन पर वास्तविक समय में पूर्ण अधिकार देने वाले कंसोल।",
          details: [
            "तत्काल रूम म्यूट और निष्कासन नियंत्रण",
            "वर्गीकृत यूज़र रिपोर्टिंग वर्कफ़्लो",
            "असामान्य गतिविधि पहचान और दर सीमा",
          ],
        },
        {
          title: "बहुभाषी और सीमा-रहित वास्तुकला",
          desc: "क्षेत्रीय सीमाओं से परे सभी उपयोगकर्ताओं को उनकी स्थानीय भाषा में सहज अनुभव देने के लिए निर्मित।",
          details: [
            "देवनागरी लिपि और स्थानीय यूनिकोड का पूर्ण समर्थन",
            "मल्टी-रीजन सर्वर वितरण",
            "स्थानीयकृत दिनांक, समय और प्रारूप",
          ],
        },
      ],
      conceptHeading: "इंटरफ़ेस वास्तुकला एवं डिज़ाइन भाषा",
      conceptSubheading:
        "RS.BSC Live को संचालित करने वाले एर्गोनॉमिक लेआउट, लक्ज़री डार्क थीम और लाइव नियंत्रण पैनल का पूर्वावलोकन।",
      ctaHeading: "RS.BSC Live में रुचि रखते हैं?",
      ctaSubheading:
        "तकनीकी जानकारी, एकीकरण या डेमो अनुरोध के लिए हमारी नेतृत्व टीम से सीधे संपर्क करें।",
      ctaButton: "उत्पाद जानकारी का अनुरोध करें",
    },

    servicesPage: {
      heroTag: "इंजीनियरिंग सेवाएं",
      title: "कस्टम प्रौद्योगिकी समाधान",
      subtitle:
        "हम उन व्यवसायों के लिए मजबूत लाइव चैट एप्लिकेशन, मोबाइल प्लेटफॉर्म और स्केलेबल रियल-टाइम बैकएंड तैयार करते हैं जिन्हें उच्चतम विश्वसनीयता की आवश्यकता होती है।",
      modelComparison: {
        productTitle: "हमारे अपने उत्पाद",
        productDesc:
          "RS.BSC Live जैसे मालिकाना प्लेटफॉर्म जिन्हें पूरी तरह से हमारी आंतरिक टीम द्वारा विकसित और संचालित किया जाता है।",
        customTitle: "कस्टम ग्राहक इंजीनियरिंग",
        customDesc:
          "विशेष रूप से आपकी व्यावसायिक आवश्यकताओं और तकनीकी विनिर्देशों के अनुसार तैयार किए गए सॉफ्टवेयर समाधान।",
      },
      processTitle: "हमारी अनुशासित इंजीनियरिंग कार्यप्रणाली",
      processSubtitle:
        "तकनीकी आवश्यकताओं के विश्लेषण से लेकर दीर्घकालिक परिचालन सहायता तक, हम एक संरचित प्रक्रिया का पालन करते हैं।",
      processSteps: [
        {
          step: "01",
          title: "विश्लेषण एवं तकनीकी दायरा",
          description:
            "आपकी सिस्टम आवश्यकताओं, अनुमानित ट्रैफ़िक, सुरक्षा सीमाओं और सही तकनीक के चयन का गहन अध्ययन।",
        },
        {
          step: "02",
          title: "उत्पाद योजना एवं वास्तुकला",
          description:
            "डेटाबेस स्कीमा, API स्पेसिफिकेशन्स, रियल-टाइम प्रोटोकॉल डिज़ाइन और सुरक्षा मानकों का निर्माण।",
        },
        {
          step: "03",
          title: "UI/UX डिज़ाइन एवं हाई-परफॉर्मेंस इंजीनियरिंग",
          description:
            "सहज इंटरफ़ेस, मजबूत बैकएंड सेवाओं और लो-लेटेंसी संचार रिले का चरणबद्ध विकास।",
        },
        {
          step: "04",
          title: "सख्त परीक्षण एवं उत्पादन रिलीज",
          description:
            "लोड टेस्टिंग, पैकेट लॉस सिमुलेशन, सुरक्षा मूल्यांकन और निगरानी के साथ सुरक्षित डिप्लॉयमेंट।",
        },
        {
          step: "05",
          title: "निरंतर सहायता एवं स्केलेबिलिटी विस्तार",
          description:
            "रिलीज के बाद प्रदर्शन ट्यूनिंग, सुरक्षा रखरखाव और व्यवसाय के विस्तार के साथ निरंतर तकनीकी अपग्रेड।",
        },
      ],
      servicesDetailTitle: "संपूर्ण सेवा सूची",
      ctaTitle: "क्या आप अपना कस्टम प्लेटफॉर्म बनाने के लिए तैयार हैं?",
      ctaSubtitle:
        "अपनी आवश्यकताएं हमारे साथ साझा करें। हमारी इंजीनियरिंग टीम आपकी योजना की समीक्षा करेगी और प्रत्यक्ष परामर्श आयोजित करेगी।",
      ctaButton: "परामर्श शुरू करें",
    },

    aboutPage: {
      heroTag: "RS.BSC के बारे में",
      title: "रियल-टाइम तकनीक में अग्रणी",
      subtitle:
        "भारत में स्थित एक तकनीकी उत्पाद और इंजीनियरिंग कंपनी जो लोगों के बीच लाइव जुड़ाव को सशक्त बनाने वाले विश्वसनीय सिस्टम का निर्माण करती है।",
      storyTitle: "हमारा उद्देश्य एवं तकनीकी दृष्टिकोण",
      storyP1:
        "RS.BSC की स्थापना भारत में एक स्पष्ट और केंद्रित उद्देश्य के साथ की गई थी: ऐसे रियल-टाइम डिजिटल प्लेटफॉर्म तैयार करना जो तेज़, विश्वसनीय और सुरक्षित हों।",
      storyP2:
        "डिजिटल युग में, धीमी बातचीत से यूज़र का भरोसा टूटता है। हमारा मानना है कि लाइव संवाद—चाहे लिखित संदेश हों, ऑडियो रूम हों या लाइव वीडियो—विशेष रूप से तैयार की गई वास्तुकला की मांग करते हैं।",
      storyP3:
        "अपने स्वयं के उत्पादों (जैसे RS.BSC Live) को संचालित करने और साथ ही दूरदर्शी ग्राहकों के लिए कस्टम सॉफ्टवेयर बनाने के माध्यम से, हम वास्तविक परिस्थितियों में अपनी इंजीनियरिंग क्षमताओं को लगातार निखारते रहते हैं।",
      valuesTitle: "हमारे मार्गदर्शक सिद्धांत",
      values: [
        {
          title: "अटूट विश्वसनीयता",
          desc: "हम प्रत्येक सेवा को बिना किसी डेटा हानि और निरंतर उपलब्धता के उच्चतम मानकों के साथ डिज़ाइन करते हैं।",
        },
        {
          title: "शुरुआत से ही सुरक्षा और विश्वास",
          desc: "सुरक्षा कोई अतिरिक्त विकल्प नहीं है। हम हर सिस्टम के मूल में मॉडरेशन टूल्स और गोपनीयता सुरक्षा को शामिल करते हैं।",
        },
        {
          title: "स्पष्टता और ईमानदारी",
          desc: "हम सिस्टम की वास्तविक क्षमताओं, समय-सीमा और तकनीकी सीमाओं के बारे में बिना किसी बढ़ा-चढ़ा कर बात करते हैं।",
        },
        {
          title: "दीर्घकालिक उत्पाद सोच",
          desc: "हम ऐसे टिकाऊ आर्किटेक्चर बनाते हैं जो वर्षों तक बिना किसी रुकावट के विकसित होते रहें, न कि अल्पकालिक कोड।",
        },
      ],
      leadershipTitle: "कार्यकारी नेतृत्व",
      leadershipText:
        "RS.BSC का मार्गदर्शन ऐसे नेतृत्व द्वारा किया जाता है जो तकनीकी अनुशासन, सुदृढ़ क्रियान्वयन और दीर्घकालिक साझेदारी को प्राथमिकता देता है।",
      locationTitle: "इंजीनियरिंग मुख्यालय",
      locationDesc:
        "भारत में मुख्यालय के साथ, RS.BSC समृद्ध तकनीकी प्रतिभा और वैश्विक दृष्टिकोण को जोड़कर दुनिया भर के उपयोगकर्ताओं और उद्यमों की सेवा करता है।",
      ctaTitle: "हमारी टीम से जुड़ें",
      ctaSubtitle:
        "हमारी तकनीक, उत्पादों या साझेदारी के अवसरों के बारे में अधिक जानने के लिए हमसे संपर्क करें।",
      ctaButton: "संपर्क करें",
    },

    contactPage: {
      heroTag: "संपर्क में रहें",
      title: "बातचीत शुरू करें",
      subtitle:
        "क्या आपका कोई तकनीकी प्रश्न है, RS.BSC Live को समझना चाहते हैं, या कस्टम समाधान बनाना चाहते हैं? हमसे सीधे संपर्क करें।",
      form: {
        fullName: "पूरा नाम",
        fullNamePlaceholder: "जैसे: राहुल शर्मा",
        email: "ईमेल पता",
        emailPlaceholder: "name@company.com",
        phone: "फ़ोन नंबर (वैकल्पिक)",
        phonePlaceholder: "+91 98765 43210",
        company: "कंपनी का नाम (वैकल्पिक)",
        companyPlaceholder: "आपकी संस्था या कंपनी का नाम",
        subject: "विषय",
        subjectPlaceholder: "प्रोजेक्ट पूछताछ, डेमो अनुरोध, आदि",
        message: "आपका संदेश",
        messagePlaceholder:
          "अपने प्रोजेक्ट की आवश्यकताओं, लक्ष्यों या प्रश्नों का विवरण लिखें...",
        submitBtn: "संदेश भेजें",
        submittingBtn: "भेजा जा रहा है...",
        successTitle: "संदेश सफलतापूर्वक भेज दिया गया",
        successMessage:
          "RS.BSC से संपर्क करने के लिए धन्यवाद। हमारी टीम को आपका संदेश प्राप्त हो गया है और हम शीघ्र ही उत्तर देंगे।",
        errorMessage:
          "वर्तमान में संदेश भेजने में असमर्थ हैं। कृपया अपना इंटरनेट कनेक्शन जांचें या WhatsApp/फ़ोन द्वारा सीधे संपर्क करें।",
        validationErrors: {
          nameRequired: "कृपया अपना पूरा नाम दर्ज करें।",
          emailInvalid: "कृपया एक मान्य ईमेल पता दर्ज करें।",
          subjectRequired: "कृपया अपने अनुरोध का विषय दर्ज करें।",
          messageRequired: "कृपया अपना संदेश दर्ज करें (कम से कम 10 अक्षर)।",
        },
      },
      directChannelsTitle: "सीधे संपर्क के माध्यम",
      whatsappLabel: "त्वरित WhatsApp चैट",
      phoneLabel: "टेलीफ़ोन कॉल",
      countryLabel: "देश एवं संचालन",
      availabilityLabel: "प्रतिक्रिया मानक",
      availabilityText:
        "हमारी टीम कार्य दिवसों के दौरान सभी पूछताछ की समीक्षा करती है और स्पष्ट तकनीकी जानकारी के साथ उत्तर देती है।",
    },

    legal: {
      privacy: {
        title: "गोपनीयता नीति (Privacy Policy)",
        lastUpdated: "अक्टूबर 2026",
        disclaimer:
          "महत्वपूर्ण कानूनी सूचना: यह गोपनीयता नीति RS.BSC की सामान्य डेटा प्रथाओं का विवरण प्रस्तुत करती है। यह केवल सूचनात्मक स्पष्टता के लिए है और व्यावसायिक कार्यान्वयन से पहले आधिकारिक कानूनी समीक्षा के अधीन है।",
        sections: [
          {
            heading: "1. हमारे द्वारा एकत्रित की जाने वाली जानकारी",
            body: "जब आप हमारी वेबसाइट का उपयोग करते हैं या संपर्क फ़ॉर्म के माध्यम से संदेश भेजते हैं, तो हम आपके द्वारा स्वेच्छा से प्रदान की गई जानकारी एकत्र करते हैं: आपका नाम, ईमेल पता, वैकल्पिक फ़ोन नंबर, कंपनी का नाम, विषय और संदेश।",
          },
          {
            heading: "2. डेटा प्रसंस्करण का उद्देश्य",
            body: "आपके द्वारा प्रदान की गई जानकारी का उपयोग केवल आपकी तकनीकी पूछताछ का मूल्यांकन करने, आपके प्रश्नों का उत्तर देने, RS.BSC Live या हमारी सेवाओं के संबंध में बातचीत करने और संचार रिकॉर्ड बनाए रखने के लिए किया जाता है।",
          },
          {
            heading: "3. ईमेल और तृतीय-पक्ष इंफ्रास्ट्रक्चर",
            body: "संपर्क फ़ॉर्म के माध्यम से भेजे गए संदेश सुरक्षित ट्रांसेक्शनल ईमेल इंफ्रास्ट्रक्चर (जैसे Resend) के माध्यम से हमारे आधिकारिक कॉर्पोरेट इनबॉक्स में भेजे जाते हैं। हम आपकी व्यक्तिगत संपर्क जानकारी किसी भी तीसरे पक्ष या विज्ञापनदाता को नहीं बेचते हैं।",
          },
          {
            heading: "4. डेटा सुरक्षा और संरक्षण",
            body: "हम अपने सर्वर में संग्रहीत संचार को अनधिकृत पहुंच, प्रकटीकरण, परिवर्तन या विनाश से बचाने के लिए उचित तकनीकी और प्रशासनिक सुरक्षा उपायों को लागू करते हैं।",
          },
          {
            heading: "5. आपके अधिकार और डेटा विलोपन",
            body: "आप किसी भी समय हमारे आधिकारिक संपर्क माध्यमों से संपर्क करके अपने संदेश विवरण की समीक्षा, संशोधन या विलोपन का अनुरोध कर सकते हैं।",
          },
          {
            heading: "6. कुकीज़ और एनालिटिक्स",
            body: "यह वेबसाइट किसी भी आक्रामक क्रॉस-साइट ट्रैकिंग कुकीज़ का उपयोग नहीं करती है। बुनियादी सर्वर लॉग केवल सिस्टम स्थिरता बनाए रखने और सुरक्षा उल्लंघनों को रोकने के लिए उपयोग किए जा सकते हैं।",
          },
          {
            heading: "7. नीति में परिवर्तन",
            body: "RS.BSC को अपनी परिचालन प्रक्रियाओं या लागू कानूनों के अनुसार इस गोपनीयता नीति को संशोधित करने का अधिकार सुरक्षित है। परिवर्तनों के बाद वेबसाइट का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।",
          },
        ],
      },
      terms: {
        title: "सेवा की शर्तें (Terms of Service)",
        lastUpdated: "अक्टूबर 2026",
        disclaimer:
          "महत्वपूर्ण कानूनी सूचना: ये शर्तें RS.BSC वेबसाइट के उपयोग को नियंत्रित करती हैं। यह परिचालन आधार रेखा के रूप में प्रदान की गई हैं और औपचारिक कानूनी समीक्षा के अधीन हैं।",
        sections: [
          {
            heading: "1. शर्तों की स्वीकृति",
            body: "RS.BSC वेबसाइट का उपयोग करके, आप इन सेवा शर्तों और भारत तथा आपके अधिकार क्षेत्र के सभी लागू कानूनों और विनियमों का पालन करने के लिए सहमत होते हैं।",
          },
          {
            heading: "2. बौद्धिक संपदा अधिकार",
            body: "इस वेबसाइट की सभी सामग्री, कोड, लोगो, डिज़ाइन, ब्रांड नाम और संरचनात्मक तत्व RS.BSC की स्वामित्व वाली बौद्धिक संपदा हैं और लागू कॉपीराइट और ट्रेडमार्क कानूनों द्वारा संरक्षित हैं।",
          },
          {
            heading: "3. वेबसाइट का अनुमत उपयोग",
            body: "आपको केवल सूचनात्मक और मूल्यांकन उद्देश्यों के लिए इस वेबसाइट की सामग्री को देखने का सीमित अधिकार दिया गया है। आप किसी भी अनधिकृत व्यावसायिक उद्देश्य के लिए वेबसाइट को रिवर्स-इंजीनियर या स्क्रैप नहीं कर सकते हैं।",
          },
          {
            heading: "4. मालिकाना उत्पाद और सेवाएं",
            body: "RS.BSC Live जैसे उत्पादों का उल्लेख सूचनात्मक और अवधारणात्मक प्रस्तुति के लिए है। सॉफ्टवेयर लाइसेंसिंग या कस्टम इंजीनियरिंग सेवाओं के लिए हस्ताक्षरित व्यावसायिक अनुबंध आवश्यक हैं।",
          },
          {
            heading: "5. देयता की सीमा",
            body: "किसी भी परिस्थिति में RS.BSC या उसके निदेशक इस वेबसाइट या इसके फ़ॉर्म के उपयोग से उत्पन्न होने वाले किसी भी अप्रत्यक्ष, आकस्मिक या परिणामी नुकसान के लिए उत्तरदायी नहीं होंगे।",
          },
          {
            heading: "6. बाहरी लिंक और संचार",
            body: "हमारी वेबसाइट में तृतीय-पक्ष संचार सेवाओं (जैसे WhatsApp) के सीधे लिंक शामिल हैं। हम बाहरी प्लेटफ़ॉर्म की गोपनीयता नीतियों या शर्तों के लिए ज़िम्मेदार नहीं हैं।",
          },
          {
            heading: "7. शासी कानून और क्षेत्राधिकार",
            body: "ये सेवा शर्तें भारत के कानूनों के अनुसार शासित और व्याख्यायित की जाएंगी।",
          },
        ],
      },
    },

    footer: {
      companyDesc:
        "RS.BSC भारत स्थित एक तकनीकी उत्पाद और समाधान कंपनी है। हम मालिकाना रियल-टाइम प्लेटफॉर्म विकसित करते हैं और आधुनिक उद्यमों के लिए लो-लेटेंसी लाइव चैट, ऑडियो और वीडियो सिस्टम का निर्माण करते हैं।",
      navigationHeader: "नेविगेशन",
      solutionsHeader: "प्रस्ताव",
      contactHeader: "संपर्क करें",
      rightsReserved: "सर्वाधिकार सुरक्षित।",
      privacyPolicy: "गोपनीयता नीति",
      termsOfService: "सेवा की शर्तें",
      madeInIndia: "भारत में निर्मित",
    },

    common: {
      skipToContent: "मुख्य सामग्री पर जाएं",
      whatsappFloatingTooltip: "WhatsApp पर RS.BSC से चैट करें",
      openInNewTab: "(नई विंडो में खुलता है)",
      badgeConcept: "यूआई कॉन्सेप्ट पूर्वावलोकन",
    },
  },
};
