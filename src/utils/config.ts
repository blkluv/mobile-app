import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "",
  seo: {
    title: "LUMEE BOOTH:Social Network for TikTok UGC Creators",
    description: "The American TikTok Shop for Creators and Careers",
  },
  // Draws grid behind main container
  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "corporate",
  // Forces theme to be chosen above, no matter what user prefers
  forceTheme: false,
  // Shows switch to toggle between dark and light modes
  showThemeSwitch: true,
  appStoreLink: "https://app.lumeebooth.com",
  googlePlayLink:
    "https://app.lumeebooth.com/affiliate-registration/",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/google",
      facebook: "https://facebook.com/google",
      twitter: "https://x.com/google",
    },
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  topNavbar: {
    cta: "Get the app",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Features" },
      { href: "/#how-it-works", title: "How it works" },
      { href: "/#pricing", title: "Pricing" },
      { href: "/#faq", title: "FAQ" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Download Our Mobile App Today!",
    subtitle:
      "Turn your cell phone to a LUMEE BOOTH. Stay tapped in, see 100% follower updates in real time with no algorithms.",
    screenshots: [
      "/screenshots/1.jpg",
      "/screenshots/2.jpg",
      "/screenshots/3.jpg",
    ],
  },
  home: {
    seo: {
      title: "Mobile App Landing Template",
      description: "Mobile App Landing Template",
    },
    testimonials: {
      id: "testimonials",
      title: "Show N Tell",
      subtitle: "Scan QR codes to apply with 1-minute video reels",
      cards: [
      {
      qrCode: "https://app.lumeebooth.com/wp-content/uploads/2025/11/IMG_3697.png",
      company: "Open Role",
      role: "Marketing Manager",
      location: "Remote"
      },
      {
      qrCode: "https://app.lumeebooth.com/wp-content/uploads/2025/11/IMG_3699.png",
      company: "TikTok", 
      role: "TikTok Strategist",
      location: "Remote"
      },
      {
      qrCode: "https://app.lumeebooth.com/wp-content/uploads/2025/11/IMG_3700.png",
      company: "TikTok",
      role: "UGC Content Creator", 
      location: "Remote"
      }
      ],
    },
    partners: {
      title: "TikTok Official Partner",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/tiktok-marketing-agency.svg",
        "/misc/companies/google.svg",
        "/misc/companies/tiktok-shop-affiliate-agency.svg",
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "How We Work",
      subtitle:
        "Explore a step-by-step guide to understand how to turn your phone into a LUMEE BOOTH.",
      steps: [
        {
          title: "Install the App",
          subtitle:
            "Download and install the app on your device to get started quickly and easily.",
          image: "/stock/01.webp",
        },
        {
          title: "Create an Account",
          subtitle:
            "Sign up by entering your personal details and verifying your email to create a new account in just a few minutes.",
          image: "/stock/02.webp",
        },
        {
          title: "Set Up Your Profile",
          subtitle:
            "Complete your profile by adding necessary information and preferences to personalize your experience on the platform.",
          image: "/stock/03.webp",
        },
        {
          title: "Explore Features",
          subtitle:
            "Navigate through the app to discover various features and tools designed to enhance your productivity and engagement.",
          image: "/stock/04.webp",
        },
        {
          title: "Help Others Win",
          subtitle:
            "In the for purpose economy we don't compete, we help others win by leaving TikTok reviews and creating UGC fun ads.",
          image: "/stock/05.webp",
        },
      ],
    },
    features: {
      id: "features",
      title: "AI Proof Business",
      subtitle:
        "AI-proof social network with verified UGC (User-generated content) analytics. Human connections, not algorithmic manipulation for profit.",
      cards: [
        {
          title: "Proof of Service",
          subtitle:
            "We use a TikTok reel to provide proof of service.",
          icon: "/3D/video-camera-front-color.webp",
        },
        {
          title: "Proof of Review",
          subtitle:
            "TikTok UGC review video as proof of review.",
          icon: "/3D/mic-front-color.webp",
        },
        {
          title: "Proof of Pay",
          subtitle:
            "Phantom wallet app to provide proof of payments.",
          icon: "/3D/flash-front-color.webp",
        },
        {
          title: "Proof of Address",
          subtitle:
            "What3Words app to provide proof of address.",
          icon: "/3D/map-pin-front-color.webp",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Frequently Asked Questions",
      qa: [
        {
          question: "How can I create a LUMEE BOOTH account?",
          answer:
            "Sign up for free as a customer or creator using a Google account in less that 60 seconds. You have to choose a plan to be verified as a creator.",
        },
        {
          question: "How long does it take to be verified as a creator?",
          answer:
            "Currently it takes up to 48 hours to verify your account as a creator after you have signed up and chosen a plan. We review each application to ensure quality and authenticity.",
        },
        {
          question: "How long does it take to receive a TikTok ReelView Mic?",
          answer:
            "Once your verified as an creator within 48 hours, we create your TikTok ReelView Mic within 24 hours. You will receive an email notification once it's ready to use.",
        },
        {
          question: "How do I download a Phantom Wallet App?",
          answer:
            "All you have to do is go to the App Store or Google Play Store and search for 'Phantom Wallet'. Download and install the app on your mobile device. Follow the in-app instructions to set up your wallet securely.",
        },
        {
          question: "How do I download a What3Words App?",
          answer:
            "All you have to do is go to the App Store or Google Play Store and search for 'What3Words'. Download and install the app on your mobile device. Follow the in-app instructions to set up your account and start using the app.",
        },
      ],
    },
    header: {
      headline: "First Proof-of-Service Social Marketplace",
      subtitle:
        "Book creators who keep it reel with TikTok UGC reviews. They upload proof. We verify it. Payment released from escrow - instantly.",
      screenshots: [
        "/screenshots/1.jpg",
        "/screenshots/2.jpg",
        "/screenshots/3.jpg",
      ],
      rewards: ["TikTok Reviews", "Verified Purpose Impact", "UGC Analytics"],
      usersDescription: "1,000+ Reel Services Booked",
      headlineMark: [1, 3],
    },
    pricing: {
      id: "pricing",
      title: "Get Verified, Get Paid",
      subtitle: "Level up your creator game with perks that actually slap",
      actionText: "Download the app",
      plans: [
        {
          title: "🎯 Affiliate",
          price: "$9.99/month",
          rows: [
            "👑 Get that verified affiliate badge", 
            "📊 Get real UGC analytics",
            "🚀 Early access to Chief creator collabs",
          ],  
        },
        {
          title: "✨ Creator Gawd",
          price: "$99/month",
          featured: true,
          rows: [
            "🌟 Fully verified creator status",
            "🎤 Custom ReelView Mic (so fire)", 
            "🔗 Blockchain ID flex",
            "🛍️ Linktree shop feature",
            "⚡ Priority brand matching",
          ], 
        },
        {
          title: "⚡ Chief Creator", 
          price: "$222/month",
          rows: [
            "✅ All Creator Gawd perks",
            "👻 Phantom wallet verified", 
            "📱 4 TikTok posts/month",
            "🔥 TikTok ad boost",
            "👔 Dedicated success manager",
            "🏆 Affiliate challenges"
          ], 
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Privacy Policy - Mobile App Landing Template",
      description: "Privacy Policy",
    },
    content: `# Privacy Policy

**Effective Date:** [Insert Date]

## Introduction

Welcome to [Your App Name] (the "App"). [Your Company Name] ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you use our App.

## Information We Collect

### 1. Information You Provide
- **Account Information:** When you sign up for our App, we may collect your name, email address, and other contact information.
- **User Content:** We may collect any content you upload, post, or otherwise transmit through the App, including messages, photos, and other media.

### 2. Information We Collect Automatically
- **Usage Data:** We collect information about your interactions with the App, such as the features you use and the time spent on the App.
- **Device Information:** We collect information about the device you use to access the App, including IP address, device type, and operating system.

### 3. Information from Third Parties
- **Third-Party Services:** If you connect to the App through a third-party service (e.g., social media), we may collect information from that service as permitted by their privacy policies.

## How We Use Your Information

We may use the information we collect for the following purposes:
- **To Provide and Maintain Our Service:** We use your information to operate and improve the App.
- **To Communicate with You:** We may use your contact information to send you updates, notifications, and other communications related to the App.
- **To Personalize Your Experience:** We may use your information to personalize your experience with the App and to offer you content tailored to your interests.
- **For Analytics and Research:** We use the information to analyze how our users interact with the App and to improve our services.

## Sharing Your Information

We do not share your personal information with third parties except in the following circumstances:
- **With Your Consent:** We may share your information with third parties if you give us explicit consent to do so.
- **Service Providers:** We may share your information with third-party service providers who perform services on our behalf.
- **Legal Requirements:** We may disclose your information if required by law, or if we believe that such action is necessary to comply with legal obligations, protect our rights, or prevent fraud.

## Your Rights and Choices

- **Access and Correction:** You have the right to access and correct the personal information we hold about you.
- **Data Deletion:** You may request that we delete your personal information by contacting us at [Your Contact Information].
- **Opt-Out:** You may opt out of receiving promotional communications from us by following the instructions in those communications.

## Security

We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no security system is completely secure, and we cannot guarantee the absolute security of your information.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Privacy Policy.

## Contact Us

If you have any questions or concerns about this Privacy Policy, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]

`
  },
  cookiesPolicy: {
    seo: {
      title: "Cookies Policy - Mobile App Landing Template",
      description: "Cookies Policy",
    },
    content: `# Cookies Policy

**Effective Date:** [Insert Date]

## Introduction

This Cookies Policy explains how [Your Company Name] ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our app, [Your App Name] (the "App"). It explains what these technologies are and why we use them, as well as your rights to control their use.

## What Are Cookies?

Cookies are small data files that are placed on your device when you visit a website or use an app. Cookies are widely used by online service providers to facilitate and help to make the interaction between users and websites/apps faster and easier, as well as to provide reporting information.

### Types of Cookies We Use

We use the following types of cookies in our App:

1. **Strictly Necessary Cookies:**  
   These cookies are essential for you to use some of the features of our App. Without these cookies, some services cannot be provided.

2. **Performance and Analytics Cookies:**  
   These cookies collect information about how users interact with our App, including which pages are visited most often. We use this information to improve how our App works.

3. **Functionality Cookies:**  
   These cookies allow our App to remember choices you make when you use the App, such as remembering your login details or language preference.

4. **Targeting and Advertising Cookies:**  
   These cookies are used to deliver advertisements that are relevant to you. They also limit the number of times you see an ad and help measure the effectiveness of advertising campaigns.

### Cookies From Third Parties

In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the App and to deliver advertisements on and through the App.

## How We Use Cookies

We use cookies to:

- **Remember your login details and preferences.**
- **Analyze usage patterns and improve the functionality of our App.**
- **Deliver relevant content and advertisements.**
- **Understand your preferences based on previous or current App activity.**

## Your Choices Regarding Cookies

You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by adjusting the settings in your browser. Most browsers allow you to:

- **View what cookies are stored on your device and delete them individually.**
- **Block third-party cookies.**
- **Block cookies from particular websites.**
- **Block all cookies from being set.**
- **Delete all cookies when you close your browser.**

Please note that if you block or delete cookies, some features of the App may not function properly.

## Changes to This Cookies Policy

We may update this Cookies Policy from time to time. We will notify you of any changes by posting the new Cookies Policy on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Cookies Policy.

## Contact Us

If you have any questions or concerns about our use of cookies, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]

`
  },
  termsAndConditions: {
    seo: {
      title: "Terms and conditions - Mobile App Landing Template",
      description: "Terms and conditions",
    },
    content: `# Terms and Conditions

**Effective Date:** [Insert Date]

## Introduction

Welcome to [Your App Name] (the "App"). These Terms and Conditions ("Terms") govern your use of the App provided by [Your Company Name] ("we," "our," or "us"). By accessing or using our App, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the App.

## Use of the App

### 1. Eligibility
To use our App, you must be at least [Insert Age] years old and capable of entering into a legally binding agreement. By using the App, you represent and warrant that you meet these eligibility requirements.

### 2. User Accounts
- **Registration:** You may be required to create an account to access certain features of the App. You must provide accurate and complete information when creating your account.
- **Account Security:** You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
- **Account Termination:** We reserve the right to terminate or suspend your account at any time, without notice, for any reason, including if we believe you have violated these Terms.

### 3. Prohibited Conduct
You agree not to:
- Use the App for any illegal or unauthorized purpose.
- Interfere with or disrupt the operation of the App or the servers or networks used to make the App available.
- Upload or transmit any viruses, malware, or other harmful code.
- Attempt to gain unauthorized access to any part of the App or to other accounts, systems, or networks connected to the App.

## Intellectual Property

### 1. Ownership
All content and materials available on the App, including but not limited to text, graphics, logos, and software, are the property of [Your Company Name] or its licensors and are protected by intellectual property laws.

### 2. License
We grant you a limited, non-exclusive, non-transferable license to access and use the App for your personal, non-commercial use. This license is subject to your compliance with these Terms.

### 3. Restrictions
You may not:
- Reproduce, distribute, modify, or create derivative works of any content or materials on the App without our prior written consent.
- Use any data mining, robots, or similar data gathering or extraction methods on the App.

## Disclaimers and Limitation of Liability

### 1. Disclaimers
The App is provided on an "as is" and "as available" basis. We make no warranties or representations about the accuracy or completeness of the content available on or through the App. We disclaim all warranties, whether express or implied, including any warranties of merchantability, fitness for a particular purpose, and non-infringement.

### 2. Limitation of Liability
To the fullest extent permitted by law, [Your Company Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
- Your use or inability to use the App;
- Any unauthorized access to or use of our servers and/or any personal information stored therein;
- Any bugs, viruses, or other harmful code that may be transmitted to or through the App;
- Any errors or omissions in any content or for any loss or damage incurred as a result of your use of any content posted, emailed, transmitted, or otherwise made available through the App.

## Indemnification

You agree to indemnify, defend, and hold harmless [Your Company Name], its affiliates, and their respective officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including without limitation reasonable legal and accounting fees, arising out of or in any way connected with your access to or use of the App or your violation of these Terms.

## Governing Law

These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms.

## Changes to These Terms

We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page and updating the "Effective Date" above. Your continued use of the App after such changes signifies your acceptance of the revised Terms.

## Contact Us

If you have any questions or concerns about these Terms, please contact us at:

[Your Company Name]  
[Your Contact Information]  
[Email Address]  
[Phone Number (optional)]`

  }
};

export default templateConfig;