# Combined Codebase: My Country Water Site

This file contains the complete source code and configuration for the "My Country Water Site" project.

## Table of Contents
1. [package.json](#packagejson)
2. [next.config.mjs](#nextconfigmjs)
3. [tailwind.config.ts](#tailwindconfigts)
4. [tsconfig.json](#tsconfigjson)
5. [src/app/globals.css](#srcappglobalscss)
6. [src/app/layout.tsx](#srcapplayouttsx)
7. [src/app/page.tsx](#srcapppagetsx)
8. [src/app/not-found.tsx](#srcappnot-foundtsx)
9. [src/app/about/page.tsx](#srcappaboutpagetsx)
10. [src/app/contact/page.tsx](#srcappcontactpagetsx)
11. [src/app/services/page.tsx](#srcappservicespagetsx)
12. [src/app/shop/page.tsx](#srcappshoppagetsx)
13. [src/components/AnimatedSection.tsx](#srccomponentsanimatedsectiontsx)
14. [src/components/Footer.tsx](#srccomponentsfootertsx)
15. [src/components/HeroScroll.tsx](#srccomponentsheroscrolltsx)
16. [src/components/MarketSplit.tsx](#srccomponentsmarketsplittsx)
17. [src/components/Navbar.tsx](#srccomponentsnavbartsx)
18. [src/components/PurityInfrastructure.tsx](#srccomponentspurityinfrastructuretsx)
19. [src/components/WaterComposition.tsx](#srccomponentswatercompositiontsx)

---

## package.json
```json
{
  "name": "my-country-water-site",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@gsap/react": "^2.1.2",
    "@vercel/speed-insights": "^2.0.0",
    "clsx": "^2.1.0",
    "framer-motion": "^12.38.0",
    "gsap": "^3.14.2",
    "lucide-react": "^0.363.0",
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "tailwind-merge": "^2.2.2"
  },
  "devDependencies": {
    "@types/node": "^20.11.30",
    "@types/react": "^18.2.73",
    "@types/react-dom": "^18.2.22",
    "autoprefixer": "^10.4.19",
    "eslint": "^8.57.0",
    "eslint-config-next": "14.2.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.4.3"
  }
}
```

## next.config.mjs
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimization for high-performance canvas scrubbing
  reactStrictMode: true,
  images: {
    unoptimized: true, // Since images are in public/frames
  },
};

export default nextConfig;
```

## tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
```

## tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## src/app/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #081f46;
  --primary: #379eff;
  --navy: #001428;
  --glass: rgba(255, 255, 255, 0.7);
}

[data-theme='dark'] {
  --background: #001428;
  --foreground: #ffffff;
  --glass: rgba(0, 20, 40, 0.7);
}

body {
  color: var(--foreground);
  background: var(--background);
  margin: 0;
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
}

@layer components {
  .glassmorphic {
    @apply backdrop-blur-md border border-white/20 shadow-xl;
    background: var(--glass);
  }
  
  .vibrant-heading {
    @apply font-bold tracking-tight text-[#081f46] dark:text-white leading-tight;
  }

  .bento-card {
    @apply rounded-3xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1;
    background: var(--background);
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
}
```

## src/app/layout.tsx
```tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Water | The Mwananchi Water",
  description: "High-quality, affordable bottled and bulk water delivery in Kenya. Sourced from Ndakaini Dam, purified with 7-stage technology.",
  keywords: ["Country Water", "Mwananchi Water", "Water Delivery Kenya", "Bottled Water Kenya", "Athi River Water", "Pure Drinking Water"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} selection:bg-[#379eff]/30`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## src/app/page.tsx
```tsx
import HeroScroll from '@/components/HeroScroll';
import WaterComposition from '@/components/WaterComposition';

export default function Home() {
  return (
    <main className="bg-[#001428] min-h-screen selection:bg-cyan-500/30">
      {/* 1. Immersive Cinematic Hero Scrubber */}
      <HeroScroll />

      {/* 2. Water Composition Section */}
      <WaterComposition />
    </main>
  );
}
```

## src/app/not-found.tsx
```tsx
import React from 'react';
import Link from 'next/link';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#379eff]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#379eff]/5 blur-[150px]" />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="bg-[#f0f7ff] p-8 rounded-[40px] shadow-2xl shadow-[#379eff]/10 animate-bounce">
            <Ghost className="text-[#379eff]" size={80} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-8xl md:text-[12rem] font-black text-[#081f46] tracking-tighter leading-none mb-4">
          404.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#379eff] tracking-tight uppercase mb-8">
          LIQUID SILENCE.
        </h2>
        
        <p className="text-xl text-[#081f46]/40 font-medium mb-12 max-w-md mx-auto">
          It seems this stream has run dry. The page you are looking for has evaporated or moved to a new source.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link 
            href="/"
            className="w-full md:w-auto bg-[#379eff] hover:bg-[#2b8cee] text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-widest"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
          
          <Link 
            href="/contact"
            className="w-full md:w-auto bg-[#081f46] hover:bg-[#001428] text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 transition-all duration-300 active:scale-95 uppercase tracking-widest"
          >
            <ArrowLeft size={20} />
            <span>Report Issue</span>
          </Link>
        </div>

        <div className="mt-24 pt-12 border-t border-black/5">
          <p className="text-[#081f46]/20 text-[10px] font-black uppercase tracking-[0.4em]">
            Country Water | The Mwananchi Spirit
          </p>
        </div>
      </div>
    </main>
  );
}
```

## src/app/about/page.tsx
```tsx
'use client';

import React from 'react';
import { ShieldCheck, Zap, Droplets, FlaskConical } from 'lucide-react';
import AnimatedSection from '@/components/AnimatedSection';


const AboutPage = () => {
  const composition = [
    { element: 'Calcium Ca2+', value: '240 mg/L', desc: 'Crucial for bone and dental health.' },
    { element: 'Magnesium Mg2+', value: '42 mg/L', desc: 'Essential for muscle and nerve function.' },
    { element: 'Sodium Na+', value: '5.2 mg/L', desc: 'A key electrolyte for hydration balance.' },
    { element: 'Sulfate SO4(2-)', value: '400 mg/L', desc: 'Critical macronutrient for cells.' },
    { element: 'Bicarbonate', value: '384 mg/L', desc: 'Natural antacid for digestive balance.' },
    { element: 'Nitrate NO3-', value: '4.4 mg/L', desc: 'Maintaining levels under 10 mg/L for safety.' },
  ];

  return (
    <main className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <AnimatedSection direction="down" delay={0.2} className="mb-24 text-center">
          <h1 className="text-6xl md:text-8xl font-black text-[#081f46] tracking-tighter mb-8 leading-[0.9]">
            THE <span className="text-[#379eff]">MWANANCHI</span> <br /> 
            MISSION.
          </h1>
          <p className="text-xl text-[#081f46]/60 max-w-2xl mx-auto font-medium">
            Country Water was built with a single goal: provide the highest quality water at a price every citizen can afford. Sourced from the pristine Ndakaini Dam.
          </p>
        </AnimatedSection>

        {/* 7-Stage Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {[
            { icon: FlaskConical, title: 'Multi-Filtration', desc: 'Eliminating all sediment and odors.' },
            { icon: Zap, title: 'Reverse Osmosis', desc: 'Microscopic level purification.' },
            { icon: Droplets, title: 'UV Sterilized', desc: 'Bacteria-free guaranteed purity.' },
            { icon: ShieldCheck, title: 'Ozonated', desc: 'Final chemical-free oxygen disinfection.' },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * i} direction="up" className="bento-card bg-[#f8fbff] flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                <item.icon className="text-[#379eff]" size={32} />
              </div>
              <h3 className="font-bold text-[#081f46] text-xl mb-2">{item.title}</h3>
              <p className="text-[#081f46]/50 text-sm font-medium">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>


        {/* Composition Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-black text-[#081f46] mb-6 leading-tight">
              SCIENTIFIC <br /> 
              <span className="text-[#379eff]">COMPOSITION.</span>
            </h2>
            <p className="text-[#081f46]/60 mb-8 max-w-lg font-medium leading-relaxed">
              We extract our water with precision, ensuring that the natural mineral balance is preserved while removing all harmful particulates. Here is what's inside every bottle of Country Water.
            </p>
            <div className="bg-[#001428] text-white p-8 rounded-[40px] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#379eff]/20 blur-[100px] group-hover:bg-[#379eff]/40 transition-colors duration-500" />
              <h4 className="text-4xl font-black mb-2 leading-none">VIBRANTLY</h4>
              <h4 className="text-4xl font-black text-[#379eff] leading-none mb-4">PURE</h4>
              <p className="text-white/50 text-sm font-bold uppercase tracking-widest">Ndakaini Dam Source</p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            {composition.map((item, i) => (
              <div key={i} className="bg-[#f0f7ff] p-6 rounded-3xl border border-[#379eff]/10 hover:border-[#379eff]/30 transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-[#081f46] text-lg">{item.element}</span>
                  <span className="bg-[#379eff] text-white text-xs font-black px-3 py-1 rounded-full">{item.value}</span>
                </div>
                <p className="text-[#081f46]/40 text-sm font-medium leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
```

## src/app/contact/page.tsx
```tsx
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';

const ContactPage = () => {
  return (
    <main className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <h1 className="text-6xl md:text-8xl font-black text-[#081f46] tracking-tighter mb-8 leading-[0.9]">
              LET'S <br /> 
              <span className="text-[#379eff]">CONNECT.</span>
            </h1>
            <p className="text-xl text-[#081f46]/60 mb-12 font-medium max-w-md">
              Have a question about our delivery network or need a custom quote for an event? We're here to help.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Call Us', value: '0721 350 275', sub: '24/7 Support for Bulk Orders' },
                { icon: Mail, label: 'Email', value: 'info@countrywater.co.ke', sub: 'General Enquiries' },
                { icon: MapPin, label: 'Location', value: 'Athi River, Kenya', sub: 'Martinice Villa, Ground Floor, Athi River Rd' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6 p-6 rounded-[30px] bg-[#f8fbff] hover:bg-[#f0f7ff] transition-colors border border-black/5 hover:border-[#379eff]/10">
                  <div className="bg-white p-4 rounded-2xl shadow-sm text-[#379eff]">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-[#081f46]/40 text-xs font-black uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-[#081f46] font-bold text-lg leading-tight mb-1">{item.value}</p>
                    <p className="text-[#081f46]/40 text-xs font-medium">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12 flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-[#081f46] text-white flex items-center justify-center rounded-2xl hover:bg-[#379eff] transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-[#001428] rounded-[60px] p-10 md:p-16 relative overflow-hidden text-white">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#379eff]/10 blur-[100px]" />
             
             <h2 className="text-4xl font-black mb-8 tracking-tight uppercase leading-none">
               SEND A <br /> <span className="text-[#379eff]">MESSAGE</span>
             </h2>

             <form className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-4">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Mwananchi" 
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-4">Phone Number</label>
                    <input 
                      type="text" 
                      placeholder="07XX XXX XXX" 
                      className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-4">Subject</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 text-white focus:border-[#379eff]/50 outline-none transition-all appearance-none cursor-pointer">
                    <option className="bg-[#001428]">Bulk Order Enquiry</option>
                    <option className="bg-[#001428]">Special Event Branding</option>
                    <option className="bg-[#001428]">Residential Delivery</option>
                    <option className="bg-[#001428]">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-4">Your Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your needs..." 
                    className="w-full bg-white/5 border border-white/10 rounded-[30px] px-6 py-4 text-white focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>

                <button className="bg-[#379eff] hover:bg-[#2b8cee] text-white w-full py-5 rounded-[30px] font-black flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-widest">
                  <span>Send Message</span>
                  <Send size={18} />
                </button>
             </form>
          </div>

        </div>

        {/* Support Banner */}
        <div className="mt-20 bento-card bg-gradient-to-r from-[#f0f7ff] to-white flex flex-col md:flex-row items-center justify-between p-12 border border-[#379eff]/10">
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
             <div className="w-16 h-16 bg-[#379eff] rounded-3xl flex items-center justify-center text-white shadow-xl shadow-[#379eff]/20">
               <MessageCircle size={32} />
             </div>
             <div>
               <h3 className="text-3xl font-black text-[#081f46] tracking-tighter leading-none mb-1 uppercase">NEED FAST HELP?</h3>
               <p className="text-[#081f46]/40 font-bold uppercase tracking-widest text-xs">Chat with our delivery team on WhatsApp</p>
             </div>
          </div>
          <a 
            href="https://wa.me/254721350275" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 rounded-full font-black text-lg transition-all duration-300 shadow-2xl shadow-[#25D366]/20 uppercase tracking-tighter"
          >
            WhatsApp Delivery
          </a>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;
```

## src/app/services/page.tsx
```tsx
import React from 'react';
import { Truck, Calendar, Clock, PartyPopper, Heart, Building2, Store } from 'lucide-react';

const ServicesPage = () => {
  const deliveryFeatures = [
    { icon: Calendar, title: '7 Days a Week', desc: 'Consistent delivery even on weekends and holidays.' },
    { icon: Clock, title: '8:00 – 23:00', desc: 'Flexible delivery slots from morning till late night.' },
    { icon: Truck, title: 'Free Delivery', desc: 'No extra charges for local Athi River home deliveries.' },
  ];

  const serviceCategories = [
    { 
      icon: PartyPopper, 
      title: 'Events & Celebrations', 
      desc: 'Customized branded water for weddings, funerals, birthdays, and anniversaries. We make your milestones memorable.', 
      items: ['Custom Labels', 'Bulk Discount', 'Fast Turnaround'] 
    },
    { 
      icon: Building2, 
      title: 'Corporate & Offices', 
      desc: 'Reliable 18.9L dispenser water for your team. Keep your office hydrated with mineral-rich purity.', 
      items: ['Bi-Monthly Billing', 'Scheduled Delivery', 'Cooler Maintenance'] 
    },
    { 
      icon: Store, 
      title: 'Residential Subscriptions', 
      desc: 'Never run out of water again. Set up a doorstep subscription and we will handle the rest.', 
      items: ['Doorstep Delivery', 'Empty Bottle Swaps', 'Priority Support'] 
    },
  ];

  return (
    <main className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-24">
          <h1 className="text-6xl md:text-8xl font-black text-[#081f46] tracking-tighter mb-8 leading-[0.9]">
            RELIABLE <br /> 
            <span className="text-[#379eff]">NETWORK.</span>
          </h1>
          <p className="text-xl text-[#081f46]/60 max-w-2xl font-medium">
            From the Athi River plant to your doorstep, our delivery network is optimized for speed, precision, and the Mwananchi spirit.
          </p>
        </div>

        {/* Delivery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {deliveryFeatures.map((item, i) => (
            <div key={i} className="bento-card bg-[#f8fbff] flex flex-col justify-between h-64 border border-[#379eff]/10 hover:border-[#379eff]/40 group">
              <div className="bg-[#379eff] w-12 h-12 flex items-center justify-center rounded-2xl group-hover:rotate-12 transition-transform duration-300">
                <item.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-[#081f46] text-xl mb-1">{item.title}</h3>
                <p className="text-[#081f46]/50 text-sm font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specialized Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {serviceCategories.map((service, i) => (
            <div key={i} className="bg-white border rounded-[40px] p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 border-black/5 hover:-translate-y-2">
              <div>
                <service.icon className="text-[#379eff] mb-8" size={48} strokeWidth={1.5} />
                <h3 className="text-3xl font-black text-[#081f46] mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-[#081f46]/60 font-medium mb-8 leading-relaxed">{service.desc}</p>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-3 text-sm font-bold text-[#081f46]/80 bg-[#f8fbff] px-4 py-3 rounded-2xl">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#379eff]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Brand Focus Banner */}
        <div className="bg-[#001428] rounded-[60px] p-12 md:p-20 relative overflow-hidden text-center group">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#379eff]/10 blur-[150px] group-hover:bg-[#379eff]/20 transition-colors duration-500" />
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
            CUSTOM <span className="text-[#379eff]">LABELS</span> <br /> 
            FOR YOUR BIG DAY.
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 font-bold uppercase tracking-widest">
            We specialize in personalized branding for any event in Kenya.
          </p>
          <button className="bg-[#379eff] hover:bg-[#2b8cee] text-white px-10 py-5 rounded-full text-lg font-black transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-tighter">
            Request Custom Branded Water
          </button>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
```

## src/app/shop/page.tsx
```tsx
import React from 'react';
import { ShoppingCart, Heart, ArrowRight, Droplets, FlaskConical, Truck } from 'lucide-react';

const ShopPage = () => {
  const products = [
    { 
      id: 1, 
      name: 'Mwananchi Standard (500ml)', 
      price: 'KSh 35', 
      desc: 'Our everyday hydration. 7-stage purified mineral water.', 
      category: 'Bottled', 
      badge: 'Bestseller' 
    },
    { 
      id: 2, 
      name: 'Family Pack (10L)', 
      price: 'KSh 250', 
      desc: 'Ideal for home use. Convenient large-volume container.', 
      category: 'Bulk', 
      badge: 'Top Value' 
    },
    { 
      id: 3, 
      name: 'Dispenser Series (18.9L)', 
      price: 'KSh 450', 
      desc: 'Standard size for office and corporate dispensers.', 
      category: 'Corporate', 
      badge: 'Essential' 
    },
    { 
      id: 4, 
      name: 'Personalized Labels', 
      price: 'Quote on Request', 
      desc: 'Your branding on our premium water for your events.', 
      category: 'Custom', 
      badge: 'Unique Service' 
    },
  ];

  return (
    <main className="pt-32 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Shop Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between space-y-8 md:space-y-0">
          <div>
            <h1 className="text-6xl md:text-9xl font-black text-[#081f46] tracking-tighter leading-[0.8] mb-4">
              THE <br /> 
              <span className="text-[#379eff]">SHOP.</span>
            </h1>
            <p className="text-xl text-[#081f46]/60 font-medium">
              Pure, fresh, and delivered with the Country Water promise.
            </p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-black/5 hover:bg-black/10 text-[#081f46] px-8 py-4 rounded-3xl font-bold transition-all duration-300">
              Filter By Type
            </button>
            <div className="bg-[#379eff] text-white p-4 rounded-3xl shadow-xl shadow-[#379eff]/20">
              <ShoppingCart size={24} />
            </div>
          </div>
        </div>

        {/* Product Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {products.map((product) => (
            <div key={product.id} className="bg-[#f0f7ff] rounded-[40px] p-8 group border border-[#379eff]/5 hover:border-[#379eff]/30 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-[#379eff] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                    {product.badge}
                  </span>
                  <button className="text-[#081f46]/20 hover:text-[#379eff] transition-colors">
                    <Heart size={20} fill="currentColor" />
                  </button>
                </div>
                
                <div className="aspect-square bg-white rounded-3xl shadow-sm mb-8 flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500 overflow-hidden relative">
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#379eff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                   <Droplets size={64} className="text-[#379eff]/20 group-hover:text-[#379eff] transition-colors" />
                </div>
                
                <h3 className="text-xl font-black text-[#081f46] tracking-tight leading-tight mb-2">
                  {product.name}
                </h3>
                <p className="text-[#081f46]/40 text-sm font-medium mb-8">
                  {product.desc}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[#081f46] font-black text-xl tracking-tighter">
                    {product.price}
                  </span>
                  <button className="bg-white hover:bg-[#379eff] text-[#379eff] hover:text-white p-3 rounded-2xl shadow-sm transition-all duration-300 border border-[#379eff]/20">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-[#001428] rounded-[60px] p-12 md:p-16 text-white group flex flex-col justify-between">
            <div>
              <Truck size={48} className="text-[#379eff] mb-8" />
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none uppercase">
                BULK <br /> <span className="text-[#379eff]">ORDERS</span>
              </h2>
              <p className="text-white/40 text-lg font-medium max-w-sm mb-12">
                Need water for an office complex or a construction site? We provide bulk deliveries with scheduled refills.
              </p>
            </div>
            <button className="bg-white hover:bg-[#379eff] text-[#001428] hover:text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 w-fit">
              Order Bulk Today
            </button>
          </div>

          <div className="bg-[#f8fbff] rounded-[60px] p-12 md:p-16 border border-black/5 group flex flex-col justify-between">
            <div>
              <FlaskConical size={48} className="text-[#379eff] mb-8" />
              <h2 className="text-4xl md:text-5xl font-black text-[#081f46] tracking-tighter mb-4 leading-none uppercase">
                SUBSCRIPTION <br /> <span className="text-[#379eff]">SERVICES</span>
              </h2>
              <p className="text-[#081f46]/40 text-lg font-medium max-w-sm mb-12">
                Save 15% on monthly home deliveries with our "Pioneer Mwananchi" subscription plan.
              </p>
            </div>
            <button className="bg-[#081f46] hover:bg-[#379eff] text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 w-fit">
              Explore Subscriptions
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
```

## src/components/AnimatedSection.tsx
```tsx
'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const AnimatedSection = ({ children, delay = 0, direction = 'up', className = '' }: Props) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let x = 0;
    let y = 0;

    if (direction === 'up') y = 50;
    else if (direction === 'down') y = -50;
    else if (direction === 'left') x = 50;
    else if (direction === 'right') x = -50;

    gsap.fromTo(
      el,
      { opacity: 0, x, y },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [direction, delay]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;
```

## src/components/Footer.tsx
```tsx
import React from 'react';
import Link from 'next/link';
import { Droplets, Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001428] text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#379eff]/5 blur-[150px]" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center space-x-2 group mb-8">
              <div className="bg-[#379eff] p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Droplets className="text-white" size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase">
                Country <span className="text-[#379eff]">Water</span>
              </span>
            </Link>
            <p className="text-white/40 font-medium leading-relaxed max-w-sm mb-10">
              The Mwananchi Water. Sourcing from Ndakaini Dam, processing in Athi River, and delivering purity at an affordable price across Kenya.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-xl hover:bg-[#379eff] hover:border-transparent transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#379eff] mb-8">Company</h4>
            <ul className="space-y-4">
              {['Home', 'Our Mission', 'Services', 'The Shop', 'Contact'].map((item, i) => (
                <li key={i}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-white font-bold transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#379eff] mb-8">24/7 Hotline</h4>
            <div className="space-y-2 mb-8">
              <p className="text-2xl font-black tracking-tighter">0721 350 275</p>
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest">Athi River, Kenya</p>
            </div>
            <a href="mailto:info@countrywater.co.ke" className="flex items-center space-x-2 text-white/60 hover:text-[#379eff] transition-colors group">
              <span className="font-bold">info@countrywater.co.ke</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* CTA Banner */}
          <div className="lg:col-span-3 bg-[#379eff] rounded-[40px] p-8 text-center flex flex-col justify-between items-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl group-hover:bg-white/20 transition-colors" />
            <h3 className="text-xl font-black leading-none mb-6">READY TO DRINK THE BEST?</h3>
            <button className="bg-white text-[#379eff] px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-tighter shadow-xl shadow-white/10 active:scale-95 transition-all">
              Order Now
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] font-black uppercase tracking-[0.2em] space-y-4 md:space-y-0">
          <p>© 2026 Country Water - All Rights Reserved</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
```

## src/components/HeroScroll.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP Plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * HeroScroll Component
 * Synchronizes a 240-frame bottle sequence with cinematic typography using GSAP ScrollTrigger.
 */
export default function HeroScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240;

  // Phase 1: Preload the 240 JPG Frames
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`; 
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frameCount) {
          setImages([...loadedImages]);
        }
      };
      loadedImages[i - 1] = img; // maintain order
    }
  }, []);

  // Phase 2: Canvas Rendering Function
  const renderFrame = (index: number) => {
    if (!canvasRef.current || images.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (ctx && images[index]) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);
    }
  };

  // Phase 3: GSAP Cinematic Timeline & ScrollTrigger
  useGSAP(() => {
    if (images.length !== frameCount) return;

    // Initial frame render
    renderFrame(0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5, // Slightly slower scrub for smoother text entries
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
          renderFrame(frameIndex);
        },
      },
    });

    // Sequence: Entry and Exit animations triggered by scroll
    tl.to({}, { duration: 1 }) // Start with just the bottle
      
      // Stage 1: "COUNTRY WATER" fades in
      .to(mainTextRef.current, { opacity: 1, y: 0, duration: 3, ease: "power2.out" })
      
      // Stage 2: "The Mwananchi Water" quote fades in
      .to(quoteRef.current, { opacity: 1, y: 0, duration: 3, ease: "power2.out" })
      
      // Stage 3: Title and Quote fade OUT as Buttons fade IN
      .to([mainTextRef.current, quoteRef.current], { 
          opacity: 0, 
          y: -30, 
          duration: 2, 
          ease: "power2.in" 
      })
      .to(buttonsRef.current, { 
          opacity: 1, 
          y: 0, 
          duration: 3, 
          ease: "power3.out" 
      }, "-=1"); // Start slightly early for a seamless transition

  }, { scope: scrollContainerRef, dependencies: [images] });

  return (
    <div ref={scrollContainerRef} className="relative h-[400vh] bg-[#001428]">
      
      {/* The Locked Hero (Pinned 100vh Viewport) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Background Ambience */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000a14] via-[#001428] to-[#011428]">
          <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-[#00FFFF]/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-blue-600/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Synchronized 240-Frame Canvas (TRULY FULL SCREEN) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-screen opacity-90 overflow-hidden">
          <canvas
              ref={canvasRef}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
        </div>

        {/* Core UI Content (Centered text/buttons) */}
        <div className="relative z-30 flex flex-col items-center justify-center w-full h-full max-w-7xl mx-auto px-6">
          
          <h1 
            ref={mainTextRef}
            className="absolute text-7xl md:text-[8rem] font-black text-white tracking-tighter z-30 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-none text-center opacity-0 translate-y-10"
          >
            COUNTRY WATER
          </h1>

          <div 
            ref={quoteRef}
            className="absolute mt-32 md:mt-48 flex flex-col items-center z-30 text-center opacity-0 translate-y-10"
          >
            <h2 className="text-xl md:text-3xl font-light text-cyan-50 leading-tight tracking-wide max-w-3xl px-4">
              Pure hydration, engineered for the people.<br/>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-blue-500 uppercase tracking-widest text-sm md:text-xl">
                The Mwananchi Water
              </span>
            </h2>
          </div>

          <div 
            ref={buttonsRef}
            className="absolute mt-[40vh] flex flex-col md:flex-row gap-6 opacity-0 translate-y-12 z-40 items-center"
          >
            <button className="group relative px-10 py-5 bg-[#00FFFF] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.4)]">
              <span className="relative z-10 text-[#001f3f] font-bold tracking-widest uppercase text-sm">Order Today</span>
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>

            <button className="px-10 py-5 bg-transparent border border-white/20 backdrop-blur-md rounded-full text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all">
              About Us
            </button>
          </div>

        </div>

        {/* Global Quality Indicators */}
        <div className="absolute bottom-10 right-10 flex items-center gap-4 z-40">
           <div className="flex flex-col items-end opacity-60">
              <span className="text-[#00FFFF] text-[10px] font-bold tracking-widest uppercase">7-Stage RO System</span>
              <span className="text-white text-[9px] uppercase tracking-tighter">KEBS Certified Purity</span>
           </div>
        </div>
      </div>
    </div>
  );
}
```

## src/components/MarketSplit.tsx
```tsx
'use client';

export default function MarketSplit() {
  return (
    <section className="relative w-full min-h-screen bg-[#001428] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background African Futurist Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-mint-900/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Select Your Supply Chain
          </h2>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto opacity-80">
            From residential hydration to heavy industrial construction. Precision logistics for every volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Track 1: B2C Fresh Water */}
          <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/10">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M12 20V4"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Mwananchi Hydration</h3>
                <p className="text-cyan-100/70 mb-6 line-clamp-3">
                  7-stage Reverse Osmosis purification, UV treated, and ozonated. From 500ml event bottles to 20L residential refills.
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-cyan-200/80">
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> Real-time M-Pesa Checkout</li>
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> Free Doorstep Delivery</li>
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> 3D Event Label Customizer</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">
                Order Residential
              </button>
            </div>
          </div>

          {/* Track 2: B2B Industrial Bulk */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#001428]/60 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/20 shadow-2xl">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-600 to-blue-800 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Industrial Logistics</h3>
                <p className="text-slate-300 mb-6 line-clamp-3">
                  Heavy-duty dispatch for Athi River's construction sector. High-capacity lorries delivering salty construction water and bulk RO potable water.
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> 5,000L to 20,000L Bowsers</li>
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> GPS Fleet Tracking</li>
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> Food-Grade Stainless Steel Transport</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-blue-600 text-blue-400 font-semibold tracking-wide hover:bg-blue-600 hover:text-white transition-colors">
                Request Bulk Dispatch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/Navbar.tsx
```tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we scroll down, hide navbar. If we scroll up, show navbar.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Mission', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        lastScrollY > 20 || isOpen
          ? 'py-4 backdrop-blur-md bg-white/5 border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-[#379eff] p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Droplets className="text-white" size={24} />
          </div>
          <span className={`text-xl font-black tracking-tighter uppercase transition-colors duration-500 ${
            lastScrollY > 20 || pathname !== '/' ? 'text-[#081f46] dark:text-white' : 'text-white'
          }`}>
            Country <span className="text-[#379eff]">Water</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#379eff] ${
                pathname === link.href
                  ? 'text-[#379eff]'
                  : lastScrollY > 20 || pathname !== '/'
                  ? 'text-[#081f46]/70 dark:text-white/70'
                  : 'text-white/70'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#379eff] hover:bg-[#2b8cee] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-[#379eff]/20 active:scale-95">
            Order Now
          </button>
        </div>


        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-[#081f46] dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glassmorphic border-t border-white/10 overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-6 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-bold transition-colors ${
                pathname === link.href
                  ? 'text-[#379eff]'
                  : 'text-[#081f46] dark:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#379eff] text-white w-full py-4 rounded-2xl font-bold shadow-xl shadow-[#379eff]/20">
            Order Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

## src/components/PurityInfrastructure.tsx
```tsx
'use client';

import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-triggered animations
function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return isIntersecting;
}

// Reusable Tree Node Component
const TreeNode = ({ number, title, desc, delay }: { number: string, title: string, desc: string, delay: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  return (
    <div 
      ref={ref}
      className={`relative pl-12 md:pl-0 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${delay}`}
    >
      {/* Desktop: Alternating Layout. Mobile: Left aligned */}
      <div className={`md:flex items-center justify-between w-full ${parseInt(number) % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
        
        {/* Connector Line/Dot */}
        <div className="absolute left-0 md:left-1/2 w-10 h-10 -translate-x-[5px] md:-translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)] flex items-center justify-center z-10">
          <span className="text-white font-bold text-sm">{number}</span>
        </div>

        {/* Content Box */}
        <div className="md:w-[45%] bg-white rounded-2xl p-6 shadow-xl border border-blue-50 hover:shadow-2xl hover:border-blue-200 transition-all">
          <h4 className="text-xl font-bold text-[#0033A0] mb-2">{title}</h4>
          <p className="text-slate-600 leading-relaxed text-sm">{desc}</p>
        </div>
        
        {/* Empty space for alternative side on desktop */}
        <div className="hidden md:block md:w-[45%]"></div>
      </div>
    </div>
  );
};

export default function PurityInfrastructure() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderVisible = useOnScreen(headerRef);

  return (
    <section className="relative w-full bg-white py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Clean Blue Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-blue-100 blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-cyan-50 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-24 max-w-3xl mx-auto transition-all duration-1000 transform ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold tracking-wide text-sm uppercase">
            Engineered Purity
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#001428] mb-6 tracking-tight">
            We don't just filter water; <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">we reconstruct it.</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Our facility utilizes a rigorous 7-stage Reverse Osmosis process to eliminate high Total Dissolved Solids (TDS) prevalent in local boreholes. Combined with UV biological treatment and advanced ozonation, we guarantee a sparkling, pristine taste.
          </p>
        </div>

        {/* The Scroll Tree */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Stem Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-300 to-white -translate-x-1/2 rounded-full"></div>

          <div className="space-y-16 py-8">
            <TreeNode 
              number="1"
              title="Reverse Osmosis"
              desc="Molecular-level filtration removing heavy metals and impurities."
              delay="delay-[100ms]"
            />
            <TreeNode 
              number="2"
              title="UV & Ozonation"
              desc="Biological sterilization for extended shelf-life and crisp taste."
              delay="delay-[200ms]"
            />
            <TreeNode 
              number="3"
              title="KEBS Certified"
              desc="Strict adherence to KS 459-1:2007 microbiological safety standards."
              delay="delay-[300ms]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
```

## src/components/WaterComposition.tsx
```tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WATER_SPECS = [
  { id: 'calcium', title: 'Calcium Ca2+', value: '240 mg/L', description: 'About 99% of the calcium in our bodies is in our bones and teeth.', position: 'top-left' },
  { id: 'sodium', title: 'Sodium Na+', value: '5.2 mg/L', description: 'It\'s an important component for proper muscle and nerve function.', position: 'mid-left' },
  { id: 'nitrate', title: 'Nitrate NO3-', value: '4.4 mg/L', description: 'It\'s great for health to drink water with levels of nitrate under 10 mg/L.', position: 'bottom-left' },
  { id: 'magnesium', title: 'Magnesium Mg2+', value: '42 mg/L', description: 'Magnesium is a nutrient that the body needs to stay healthy.', position: 'top-right' },
  { id: 'sulfate', title: 'Sulfate SO4(2-)', value: '400 mg/L', description: 'Sulfate is among the most important macronutrients in cells.', position: 'mid-right' },
  { id: 'bicarbonate', title: 'Bicarbonate', value: '384 mg/L', description: 'Bicarbonate is an antacid used to relieve heartbeat and acid indigestion.', position: 'bottom-right' },
];

export default function WaterComposition() {
  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center py-24 overflow-hidden">

      {/* Background Accents (Clean Style) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Brand Header */}
      <div className="text-center mb-24 z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            WATER <span className="text-sky-500">COMPOSITION</span>
          </h2>
          <p className="text-[10px] tracking-[0.4em] text-slate-500 uppercase font-bold mt-6">What&apos;s Inside?</p>
        </motion.div>
      </div>

      {/* Main Interactive Hub */}
      <div className="relative flex items-center justify-center w-full max-w-7xl px-4 min-h-[600px]">

        {/* Animated Glass Asset */}
        <motion.div
          className="relative w-[280px] h-[280px] md:w-[480px] md:h-[480px] z-20"
          initial={{ rotate: -8 }}
          animate={{ rotate: 8 }}
          transition={{
            duration: 5,          // Sustaining the slow, premium speed
            ease: "easeInOut",     // Smoother transition at the peaks
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          {/* Very Subtle Glow */}
          <div className="absolute inset-0 bg-sky-500/5 rounded-full blur-3xl" />

          <Image
            src="/assets/rotating-glass-mask.png"
            alt="Country Water Purified Glass"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Technical Specification Labels (Desktop Layout) */}
        <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none">
          {WATER_SPECS.map((spec, index) => (
            <SpecLabel
              key={spec.id}
              spec={spec}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Layout for Labels */}
        <div className="lg:hidden w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 z-30">
          {WATER_SPECS.map((spec) => (
            <motion.div
              key={spec.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest">{spec.title}</h4>
                <p className="text-xl font-black text-white">{spec.value}</p>
              </div>
              <p className="text-[10px] text-gray-400 leading-relaxed max-w-[200px]">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certification Footer */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-24 z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full border border-sky-500/30 flex items-center justify-center mb-4 bg-sky-500/5 backdrop-blur-sm">
            <span className="text-2xl font-black text-sky-500">7</span>
          </div>
          <p className="text-[10px] tracking-[0.4em] text-slate-500 uppercase font-bold text-center leading-relaxed">
            7-Stage RO <br /> Purification Standards
          </p>
        </div>

        <div className="h-[1px] w-24 bg-slate-200 hidden md:block" />

        <div className="flex flex-col items-center">
          <div className="px-6 py-3 rounded-full border border-slate-200 bg-slate-50 backdrop-blur-sm mb-4">
            <p className="text-sm font-black text-slate-900 tracking-widest uppercase italic">KEBS CERTIFIED</p>
          </div>
          <p className="text-[10px] tracking-[0.4em] text-slate-500 uppercase font-bold text-center leading-relaxed">
            Kenya Bureau of Standards <br /> Compliance Verified
          </p>
        </div>
      </motion.div>

    </section>
  );
}

function SpecLabel({ spec, index }: { spec: typeof WATER_SPECS[0], index: number }) {
  const isRight = spec.position.includes('right');

  const getPositionStyles = () => {
    switch (spec.position) {
      case 'top-left': return 'top-[5%] left-[10%]';
      case 'mid-left': return 'top-[42%] left-[2%]';
      case 'bottom-left': return 'bottom-[5%] left-[10%]';
      case 'top-right': return 'top-[5%] right-[10%]';
      case 'mid-right': return 'top-[42%] right-[2%]';
      case 'bottom-right': return 'bottom-[5%] right-[10%]';
      default: return '';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`absolute ${getPositionStyles()} pointer-events-auto z-30 flex flex-col ${isRight ? 'items-end text-right' : 'items-start text-left'} max-w-[280px] group`}
    >
      {/* Water Drop Shape Behind (CSS Shape or SVG) */}
      <div className={`absolute inset-0 -z-10 bg-sky-50/40 rounded-full blur-2xl group-hover:bg-sky-100/60 transition-colors duration-500`} />

      <div className="relative z-10 flex flex-col">
        <h4 className="text-sm font-bold text-slate-800 mb-1">{spec.title}</h4>
        <p className="text-xl font-black text-sky-500 mb-3">{spec.value}</p>

        <div className={`flex ${isRight ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>
          <div className="w-[2px] h-full bg-sky-500 self-stretch opacity-60" />
          <p className="text-[12px] text-slate-500 leading-relaxed font-medium">
            {spec.description}
          </p>
        </div>
      </div>

      {/* Droplet Background Asset (Simulated with div for lightness) */}
      <div className={`absolute top-0 ${isRight ? '-right-12' : '-left-12'} w-32 h-32 opacity-10 pointer-events-none`}>
        <svg viewBox="0 0 100 120" className="w-full h-full fill-sky-200">
          <path d="M50 0 C50 0 100 50 100 80 C100 110 75 120 50 120 C25 120 0 110 0 80 C0 50 50 0 50 0Z" />
        </svg>
      </div>
    </motion.div>
  );
}
```
