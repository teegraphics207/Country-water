'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Truck, Calendar, Clock, PartyPopper, Building2, Store, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const deliveryFeatures = [
  { icon: Calendar, title: '7 Days a Week', desc: 'Consistent delivery even on weekends and public holidays.' },
  { icon: Clock, title: '8:00 – 23:00', desc: 'Flexible delivery slots from morning till late night.' },
  { icon: Truck, title: 'Free Delivery', desc: 'No extra charges for local Athi River home deliveries.' },
];

const serviceCategories = [
  { 
    icon: PartyPopper, 
    title: 'Events & Celebrations', 
    desc: 'Customized branded water for weddings, funerals, birthdays, and anniversaries.', 
    items: ['Custom Labels', 'Bulk Discount', 'Fast Turnaround'],
    color: 'from-violet-500 to-violet-600',
  },
  { 
    icon: Building2, 
    title: 'Corporate & Offices', 
    desc: 'Reliable 18.9L dispenser water for your team. Keep your office hydrated.',
    items: ['Bi-Monthly Billing', 'Scheduled Delivery', 'Cooler Maintenance'],
    color: 'from-[#379eff] to-[#0d5fd4]',
  },
  { 
    icon: Store, 
    title: 'Residential Subscriptions', 
    desc: 'Never run out of water again. Set up a doorstep subscription plan.', 
    items: ['Doorstep Delivery', 'Empty Bottle Swaps', 'Priority Support'],
    color: 'from-emerald-500 to-emerald-600',
  },
];

const pricingTiers = [
  {
    name: 'Residential',
    price: 'KSh 35',
    unit: '/ 500ml bottle',
    features: ['7-stage RO purified', 'KEBS certified', 'Doorstep delivery', 'Flexible orders'],
    cta: 'Order Now',
    highlight: false,
  },
  {
    name: 'Corporate',
    price: 'KSh 450',
    unit: '/ 18.9L jug',
    features: ['Bi-monthly billing', 'Scheduled refills', 'Cooler maintenance', 'Priority support', 'Bulk discounts'],
    cta: 'Get a Quote',
    highlight: true,
  },
  {
    name: 'Industrial',
    price: 'KSh 3,500',
    unit: '/ 5,000L bowser',
    features: ['GPS-tracked fleet', 'Construction-grade', 'Same-day dispatch', '24/7 availability'],
    cta: 'Contact Team',
    highlight: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="mb-14 pt-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#379eff] mb-3"
          >
            <Zap size={12} /> Our Network
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#081f46] tracking-tighter mb-4 leading-tight"
          >
            RELIABLE <span className="text-[#379eff]">NETWORK.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#081f46]/60 max-w-xl font-medium"
          >
            From the Athi River plant to your doorstep, our delivery network is optimized for speed, precision, and the Mwananchi spirit.
          </motion.p>
        </div>

        {/* ── LIVE BADGE ── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black px-4 py-2 rounded-full mb-12 uppercase tracking-widest"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Delivering Now — Athi River & Surroundings
        </motion.div>

        {/* ── DELIVERY FEATURE CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {deliveryFeatures.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#f8fbff] rounded-2xl p-6 border border-[#379eff]/10 hover:border-[#379eff]/40 hover:shadow-lg group transition-all duration-300"
            >
              <div className="bg-[#379eff] w-10 h-10 flex items-center justify-center rounded-xl mb-5 group-hover:rotate-12 transition-transform duration-300">
                <item.icon className="text-white" size={20} />
              </div>
              <h3 className="font-bold text-[#081f46] text-lg mb-1">{item.title}</h3>
              <p className="text-[#081f46]/50 text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── SERVICE CATEGORIES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {serviceCategories.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white border rounded-3xl p-8 flex flex-col hover:shadow-2xl transition-all duration-500 border-black/5 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="text-white" size={22} />
              </div>
              <h3 className="text-xl font-black text-[#081f46] mb-3 uppercase tracking-tighter">{service.title}</h3>
              <p className="text-[#081f46]/60 font-medium mb-6 leading-relaxed text-sm flex-1">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-2 text-sm font-bold text-[#081f46]/80">
                    <CheckCircle size={14} className="text-[#379eff] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ── PRICING TIERS ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-black text-[#081f46] tracking-tighter mb-3">Transparent Pricing</h2>
            <p className="text-[#081f46]/50 text-sm font-medium">No hidden charges. No surprises. Just pure value.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-3xl p-8 flex flex-col border transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-[#081f46] text-white border-[#379eff] shadow-2xl shadow-[#379eff]/10 scale-[1.02]'
                    : 'bg-white text-[#081f46] border-slate-200 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {tier.highlight && (
                  <span className="bg-[#379eff] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest w-fit mb-4">Most Popular</span>
                )}
                <h3 className={`text-lg font-black mb-1 uppercase tracking-tight ${tier.highlight ? 'text-white' : 'text-[#081f46]'}`}>{tier.name}</h3>
                <p className={`text-3xl font-black tracking-tighter mb-0.5 ${tier.highlight ? 'text-[#379eff]' : 'text-[#081f46]'}`}>{tier.price}</p>
                <p className={`text-xs font-medium mb-6 ${tier.highlight ? 'text-white/40' : 'text-slate-400'}`}>{tier.unit}</p>
                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm font-medium ${tier.highlight ? 'text-white/80' : 'text-[#081f46]/70'}`}>
                      <CheckCircle size={14} className={tier.highlight ? 'text-[#379eff]' : 'text-emerald-500'} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`text-center py-3 rounded-2xl font-black text-sm transition-all duration-300 active:scale-95 ${
                    tier.highlight
                      ? 'bg-[#379eff] text-white hover:bg-[#2b8cee] shadow-lg shadow-[#379eff]/30'
                      : 'bg-[#081f46] text-white hover:bg-[#379eff]'
                  }`}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CUSTOM LABELS BANNER ── */}
        <div className="bg-[#001428] rounded-3xl p-10 md:p-16 relative overflow-hidden text-center group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#379eff]/10 blur-[120px] group-hover:bg-[#379eff]/20 transition-colors duration-500" />
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6 leading-none">
            CUSTOM <span className="text-[#379eff]">LABELS</span> <br />FOR YOUR BIG DAY.
          </h2>
          <p className="text-white/50 text-sm max-w-xl mx-auto mb-8 font-bold uppercase tracking-widest">
            We specialize in personalized branding for any event in Kenya.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-[#379eff] hover:bg-[#2b8cee] text-white px-8 py-4 rounded-full text-base font-black transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-tighter group/btn"
          >
            Request Custom Branded Water
            <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </main>
  );
}
