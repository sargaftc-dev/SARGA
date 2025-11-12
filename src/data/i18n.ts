export type Locale = 'en' | 'hi' | 'te'

export const locales: Record<Locale, string> = {
  en: 'English',
  hi: 'हिंदी',
  te: 'తెలుగు',
}

const t = <T extends Record<Locale, string>>(strings: T) => strings

export const copy = {
  nav: {
    approach: t({ en: 'Approach', hi: 'दृष्टिकोण', te: 'విధానం' }),
    practice: t({ en: 'Practice Areas', hi: 'कानूनी क्षेत्र', te: 'ప్రాక్టీస్ విభాగాలు' }),
    reach: t({ en: 'Reach', hi: 'उपस्थिति', te: 'ఉన్నతిని' }),
    workWithUs: t({ en: 'Work with us', hi: 'हमारे साथ काम करें', te: 'మాతో పని చేయండి' }),
  },
  hero: {
    title: t({
      en: 'Legal strategy engineered for bold outcomes.',
      hi: 'साहसिक परिणामों के लिए तैयार की गई कानूनी रणनीति।',
      te: 'ధైర్యవంతమైన ఫలితాల కోసం రూపొందించిన న్యాయ వ్యూహం.',
    }),
    description: t({
      en: 'SARGA unites legal precision and go-to-market insight so founders and enterprises can launch, scale, and protect what they build across India.',
      hi: 'सर्गा कानूनी सटीकता और कारोबारी अंतर्दृष्टि को जोड़ता है ताकि संस्थापक और उद्यम भारत भर में जो बनाते हैं उसे लॉन्च, विस्तार और सुरक्षित कर सकें।',
      te: 'సర్గా న్యాయ శాస్త్రాన్నీ మార్కెట్ అవగాహననూ కలిపి దేశవ్యాప్తంగా మీ సృష్టిని ప్రారంభించేందుకు, పెంచేందుకు, రక్షించేందుకు తోడ్పడుతుంది.',
    }),
    ctaPrimary: t({ en: 'Book a strategic consult', hi: 'रणनीतिक परामर्श बुक करें', te: 'స్ట్రాటజీ కన్సల్ట్ బుక్ చేయండి' }),
    ctaSecondary: t({ en: 'Explore practice areas', hi: 'प्रैक्टिस क्षेत्रों को देखें', te: 'ప్రాక్టీస్ విభాగాలను చూడండి' }),
    aboutBadge: t({ en: 'Legal partners who expand your reach.', hi: 'आपके विस्तार का कानूनी साथी', te: 'మీ పరిధిని పెంచే న్యాయ భాగస్వాములు' }),
  },
  practiceHeader: {
    headline: t({ en: 'Precision teams for every critical matter.', hi: 'हर अहम मामले के लिए सटीक टीम्स।', te: 'ప్రతీ కీలక వ్యవహారానికి కచ్చితమైన బృందాలు.' }),
    subcopy: t({
      en: 'From filings to crisis response, each practice squad combines specialist counsel, embedded advisors, and playbooks that keep timelines and outcomes predictable.',
      hi: 'फाइलिंग से संकट प्रबंधन तक, हर प्रैक्टिस टीम विशेषज्ञ सलाह, अंतर्निहित सलाहकार और ऐसी योजना देती है जिससे समयसीमा व परिणाम स्पष्ट रहें।',
      te: 'ఫైలింగ్ నుండి సంక్షోభ స్పందన వరకు, ప్రతి బృందం నిపుణ న్యాయవాదులు, అంతర్గత సలహాదారులు, స్పష్టం టైమ్‌లైన్‌లతో నడుస్తుంది.',
    }),
    cta: t({ en: 'Brief us', hi: 'हमें बताएं', te: 'మాకి చెప్పండి' }),
  },
  partners: {
    badge: t({ en: 'Partner leadership', hi: 'कानूनी नेतृत्व', te: 'న్యాయ నాయకత్వం' }),
    headline: t({ en: 'Strategic thinkers. Trusted advocates. Legal leaders.', hi: 'रणनीतिक सोच, भरोसेमंद वकील, कानूनी नेता।', te: 'రణనీతిజ్ఞులు. నమ్మదగిన న్యాయవాదులు. న్యాయ నాయకులు.' }),
    subcopy: t({
      en: 'Each partner aligns legal insight with commercial traction, protecting what clients create while driving engagements toward decisive results.',
      hi: 'प्रत्येक साझेदार कानूनी समझ को व्यावसायिक गतिशीलता से जोड़ता है ताकि परिणाम निर्णायक हों और क्लाइंट की रचनाएँ सुरक्षित रहें।',
      te: 'ప్రతి భాగస్వామి న్యాయ పరిజ్ఞానాన్ని వ్యాపార వేగంతో కలిపి, క్లయింట్లు సృష్టించినదాన్ని రక్షిస్తూ నిర్ణయాత్మక ఫలితాలకు దారి తీస్తారు.',
    }),
    quoteLabel: t({ en: 'Advisory', hi: 'सलाह', te: 'సలహా' }),
    cta: (name: string, locale: Locale) =>
      ({
        en: `Collaborate with ${name}`,
        hi: `${name} के साथ साझेदारी करें`,
        te: `${name} తో కలిసి పని చేయండి`,
      }[locale] ?? `Collaborate with ${name}`),
  },
  reach: {
    headline: t({ en: 'Regional depth, national reach.', hi: 'स्थानीय गहराई, राष्ट्रीय पहुंच।', te: 'ప్రాంతీయ లోతు, జాతీయ పరిజ్ఞానం.' }),
    subcopy: t({
      en: 'Embedded counsels and senior advocates operate as one field team, giving clients on-the-ground intelligence, faster escalations, and stronger stakeholder engagement.',
      hi: 'स्थानीय वकील और वरिष्ठ अधिवक्ता एक ही टीम की तरह काम करते हैं, जिससे तेज़ कार्रवाई और बेहतर समन्वय हासिल होता है।',
      te: 'అంతర్గత సలహాదారులు, సీనియర్ న్యాయవాదులు ఒక్క బృందంలా పనిచేసి వేగమైన చర్య, బలమైన సమన్వయాన్ని అందిస్తారు.',
    }),
  },
  contact: {
    headline: t({ en: 'Let’s co-design the legal layer of your next move.', hi: 'आपके अगले कदम के कानूनी पक्ष को साथ मिलकर बनाएं।', te: 'మీ తదుపరి అడుగుకి న్యాయ వ్యవస్థను కలిసి రూపొందిద్దాం.' }),
    subcopy: t({
      en: 'Share your growth targets, launch timelines, and priority regions. We activate the right mix of in-house counsel and senior advocates so every engagement stays confidential, responsive, and results driven. NDAs and secure channels are available on request.',
      hi: 'अपने विकास लक्ष्य, लॉन्च टाइमलाइन और प्राथमिक क्षेत्र साझा करें। हम गोपनीय और तेज़ समाधान के लिए सही टीम बनाते हैं।',
      te: 'మీ లక్ష్యాలు, కాలక్రమం, ప్రాధాన్య ప్రాంతాలు చెప్పండి. గోప్యతతో, స్పందనతో పని చేసే బృందాన్ని మేము అందిస్తాం.',
    }),
    details: {
      address: t({ en: 'Address', hi: 'पता', te: 'చిరునామా' }),
      phone: t({ en: 'Phone', hi: 'फ़ोन', te: 'ఫోన్' }),
      email: t({ en: 'Email', hi: 'ईमेल', te: 'ఈమెయిల్' }),
      linkedIn: t({ en: 'LinkedIn', hi: 'लिंक्डइन', te: 'లింక్డిన్' }),
    },
    actions: {
      email: t({ en: 'Email our team', hi: 'टीम को ईमेल करें', te: 'మా టీమ్‌కి మెయిల్ చేయండి' }),
      review: t({ en: 'Review capabilities', hi: 'क्षमताएँ देखें', te: 'సామర్థ్యాలను చూడండి' }),
    },
  },
}
