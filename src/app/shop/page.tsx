'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, ArrowRight, Droplets, FlaskConical, Truck, Star, Plus, Minus, Zap } from 'lucide-react';

const products = [
  { 
    id: 1, 
    name: 'Mwananchi 500ml', 
    price: 35, 
    unit: 'per bottle',
    desc: 'Our everyday hydration. 7-stage purified mineral water, KEBS certified.', 
    category: 'Bottled', 
    badge: 'Bestseller',
    badgeColor: 'bg-[#379eff]',
    image: '/assets/fresh-reserve-bottle.png',
    inStock: true,
    stars: 5,
  },
  { 
    id: 2, 
    name: 'Family Pack 10L', 
    price: 250,
    unit: 'per container',
    oldPrice: 300,
    desc: 'Ideal for home use. Convenient large-volume container with a handle.', 
    category: 'Bulk', 
    badge: 'Top Value',
    badgeColor: 'bg-emerald-500',
    image: '/assets/family-pack-10l.png',
    inStock: true,
    stars: 5,
  },
  { 
    id: 3, 
    name: 'Dispenser Series 18.9L', 
    price: 450,
    unit: 'per jug',
    desc: 'Standard size for office and corporate dispensers. Subscribe & save 15%.', 
    category: 'Corporate', 
    badge: 'Essential',
    badgeColor: 'bg-violet-500',
    image: '/assets/dispenser-18l.png',
    inStock: true,
    stars: 4,
  },
  { 
    id: 4, 
    name: 'Personalized Labels', 
    price: null,
    unit: 'custom quote',
    desc: 'Your branding on our premium water for your events, weddings, and birthdays.', 
    category: 'Custom', 
    badge: 'Unique',
    badgeColor: 'bg-amber-500',
    image: '/assets/fresh-reserve-bottle 1.png',
    inStock: true,
    stars: 5,
  },
];

function ProductCard({ product }: { product: typeof products[0] }) {
  const [qty, setQty] = useState(1);
  const [wishlist, setWishlist] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl border border-slate-100 overflow-hidden group hover:shadow-2xl hover:border-[#379eff]/20 hover:-translate-y-1 transition-all duration-500 flex flex-col"
    >
      {/* Badge + Wishlist */}
      <div className="flex justify-between items-center px-5 pt-5">
        <span className={`${product.badgeColor} text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest`}>
          {product.badge}
        </span>
        <button
          onClick={() => setWishlist(!wishlist)}
          className={`transition-colors duration-300 ${wishlist ? 'text-rose-500' : 'text-slate-200 hover:text-rose-400'}`}
        >
          <Heart size={18} fill={wishlist ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Product Image */}
      <div className="relative h-48 mx-5 mt-4 bg-slate-50 rounded-2xl overflow-hidden">
        {product.inStock && (
          <span className="absolute top-2 left-2 z-10 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
            In Stock
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-0.5">{product.category}</p>
        <h3 className="text-lg font-black text-[#081f46] tracking-tight mb-1">{product.name}</h3>

        {/* Stars */}
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={10} className={i < product.stars ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'} />
          ))}
        </div>

        <p className="text-[#081f46]/50 text-xs font-medium leading-relaxed mb-4 flex-1">{product.desc}</p>

        {/* Qty selector */}
        {product.price && (
          <div className="flex items-center gap-2 mb-4">
            <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <Minus size={12} />
            </button>
            <span className="text-sm font-black text-[#081f46] w-6 text-center">{qty}</span>
            <button onClick={() => setQty(q => q + 1)} className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <Plus size={12} />
            </button>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            {product.price ? (
              <>
                <span className="text-xl font-black text-[#081f46] tracking-tighter">
                  KSh {(product.price * qty).toLocaleString()}
                </span>
                {'oldPrice' in product && product.oldPrice && (
                  <span className="text-xs text-slate-400 line-through ml-2">KSh {product.oldPrice}</span>
                )}
                <p className="text-[10px] text-slate-400 font-medium">{product.unit}</p>
              </>
            ) : (
              <span className="text-sm font-black text-[#081f46]">Quote on Request</span>
            )}
          </div>
          <Link
            href="/contact"
            className="flex items-center gap-1.5 bg-[#379eff] hover:bg-[#2b8cee] text-white text-xs font-black px-4 py-2.5 rounded-xl transition-all duration-300 active:scale-95 shadow-md shadow-[#379eff]/30"
          >
            <ShoppingCart size={12} />
            Order
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ShopPage() {
  return (
    <main className="pt-20 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── PROMO BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#081f46] to-[#0d3575] rounded-2xl px-6 py-4 mt-8 mb-10 flex items-center gap-4"
        >
          <span className="bg-[#379eff] text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shrink-0 flex items-center gap-1">
            <Zap size={10} /> Offer
          </span>
          <p className="text-white font-semibold text-sm">
            FREE delivery on all orders over <span className="text-[#379eff] font-black">KSh 1,000</span> — Athi River &amp; surrounding areas.
          </p>
        </motion.div>

        {/* ── SHOP HEADER ── */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#379eff] mb-3"
            >
              <Droplets size={12} /> The Shop
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-black text-[#081f46] tracking-tighter leading-tight mb-2"
            >
              THE <span className="text-[#379eff]">SHOP.</span>
            </motion.h1>
            <p className="text-base text-[#081f46]/60 font-medium">
              Pure, fresh, and delivered with the Country Water promise.
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-slate-100 hover:bg-slate-200 text-[#081f46] px-5 py-2.5 rounded-2xl font-bold text-sm transition-all duration-300">
              Filter By Type
            </button>
            <div className="bg-[#379eff] text-white p-2.5 rounded-2xl shadow-xl shadow-[#379eff]/20">
              <ShoppingCart size={20} />
            </div>
          </div>
        </div>

        {/* ── PRODUCT GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* ── CORPORATE TRUST SECTION ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-[#001428] rounded-3xl p-10 text-white group flex flex-col justify-between">
            <div>
              <Truck size={36} className="text-[#379eff] mb-6" />
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-3 uppercase leading-none">
                BULK <span className="text-[#379eff]">ORDERS</span>
              </h2>
              <p className="text-white/40 text-sm font-medium max-w-sm mb-8">
                Need water for an office complex or a construction site? We provide bulk deliveries with scheduled refills and GPS tracking.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#379eff] text-[#001428] hover:text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 w-fit group/btn"
            >
              Order Bulk Today
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="bg-[#f8fbff] rounded-3xl p-10 border border-black/5 group flex flex-col justify-between">
            <div>
              <FlaskConical size={36} className="text-[#379eff] mb-6" />
              <h2 className="text-2xl md:text-3xl font-black text-[#081f46] tracking-tighter mb-3 uppercase leading-none">
                SUBSCRIPTION <span className="text-[#379eff]">SERVICES</span>
              </h2>
              <p className="text-[#081f46]/40 text-sm font-medium max-w-sm mb-8">
                Save 15% on monthly home deliveries with our "Pioneer Mwananchi" subscription plan. Set it and forget it.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#081f46] hover:bg-[#379eff] text-white px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 w-fit group/btn"
            >
              Explore Subscriptions
              <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
