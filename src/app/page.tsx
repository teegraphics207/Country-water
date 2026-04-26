'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight, Star, Zap } from 'lucide-react';
import HeroScroll from '@/components/HeroScroll';
import WaterComposition from '@/components/WaterComposition';

const featuredProducts = [
  {
    id: 1,
    name: 'Mwananchi 500ml',
    subtitle: 'Daily Hydration',
    price: 'KSh 35',
    oldPrice: null,
    badge: 'Bestseller',
    badgeColor: 'bg-[#379eff]',
    image: '/assets/fresh-reserve-bottle.png',
    stars: 5,
    desc: '7-stage purified. KEBS certified. The everyday water for every Kenyan.',
  },
  {
    id: 2,
    name: 'Family Pack 10L',
    subtitle: 'Home & Family',
    price: 'KSh 250',
    oldPrice: 'KSh 300',
    badge: 'Top Value',
    badgeColor: 'bg-emerald-500',
    image: '/assets/family-pack-10l.png',
    stars: 5,
    desc: 'The smart choice for home use. Large volume, long-lasting freshness.',
  },
  {
    id: 3,
    name: 'Dispenser Series 18.9L',
    subtitle: 'Office & Corporate',
    price: 'KSh 450',
    oldPrice: null,
    badge: 'Corporate Favourite',
    badgeColor: 'bg-violet-500',
    image: '/assets/dispenser-18l.png',
    stars: 5,
    desc: 'Standard office dispenser refill. Bulk discounts available for subscriptions.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <main className="bg-[#001428] min-h-screen selection:bg-cyan-500/30">
      {/* 1. Immersive Cinematic Hero Scrubber */}
      <HeroScroll />

      {/* 2. Water Composition Section */}
      <WaterComposition />

      {/* 3. Featured Products Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#379eff] mb-3">
                <Zap size={12} /> Our Products
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-[#081f46] tracking-tighter leading-tight">
                Pure Water, <br />
                <span className="text-[#379eff]">Every Format.</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 bg-[#081f46] hover:bg-[#379eff] text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 shadow-lg w-fit"
            >
              View Full Shop
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Promo Banner */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.95 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#081f46] to-[#0d3575] rounded-2xl px-6 py-4 mb-10 flex items-center gap-4"
          >
            <span className="bg-[#379eff] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest shrink-0">🎉 Offer</span>
            <p className="text-white font-semibold text-sm">FREE delivery on all orders over <span className="text-[#379eff] font-black">KSh 1,000</span> — Athi River &amp; surrounding areas.</p>
          </motion.div>

          {/* Product Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group bg-[#f8fbff] rounded-3xl overflow-hidden border border-[#379eff]/10 hover:border-[#379eff]/40 hover:shadow-2xl hover:shadow-[#379eff]/10 hover:-translate-y-2 transition-all duration-500 flex flex-col"
              >
                {/* Badge + Wish */}
                <div className="flex justify-between items-center px-5 pt-5">
                  <span className={`${product.badgeColor} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}>
                    {product.badge}
                  </span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: product.stars }).map((_, i) => (
                      <Star key={i} size={10} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Product Image */}
                <div className="relative h-52 mx-4 mt-4 bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#379eff] mb-1">{product.subtitle}</p>
                  <h3 className="text-lg font-black text-[#081f46] tracking-tight mb-1">{product.name}</h3>
                  <p className="text-[#081f46]/50 text-xs font-medium leading-relaxed mb-4 flex-1">{product.desc}</p>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                    <div>
                      <span className="text-xl font-black text-[#081f46] tracking-tighter">{product.price}</span>
                      {product.oldPrice && (
                        <span className="text-xs text-slate-400 line-through ml-2">{product.oldPrice}</span>
                      )}
                    </div>
                    <Link
                      href="/shop"
                      className="flex items-center gap-1.5 bg-[#379eff] hover:bg-[#2b8cee] text-white text-xs font-black px-4 py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#379eff]/30"
                    >
                      <ShoppingCart size={12} />
                      Order
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Big Shop CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-14 bg-gradient-to-br from-[#379eff] to-[#0d5fd4] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Glow orb */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white tracking-tighter leading-tight mb-3">
                Ready to stock up? <br />
                <span className="text-white/70 font-medium text-lg md:text-2xl">Order from our full catalogue.</span>
              </h3>
              <p className="text-white/60 text-sm font-medium max-w-sm">
                Bottles, jugs, bulk bowser orders, and custom-branded event water — all in one place.
              </p>
            </div>

            <Link
              href="/shop"
              className="relative z-10 shrink-0 bg-white text-[#379eff] hover:bg-[#081f46] hover:text-white px-8 py-4 rounded-2xl font-black text-base transition-all duration-300 shadow-2xl shadow-black/20 active:scale-95 inline-flex items-center gap-3 group"
            >
              Go to Shop
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
