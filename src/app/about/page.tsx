'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Droplets, Factory, ShieldCheck, Truck, ArrowRight, Leaf, Filter, Zap, Activity } from 'lucide-react';

const purificationStages = [
  { id: 1, title: 'Sediment Filtration', desc: 'Raw water enters. We strip out large particulates, silt, and rust using high-capacity sand filters.', icon: Filter },
  { id: 2, title: 'Activated Carbon', desc: 'Chlorine, volatile organic compounds (VOCs), and foul odors are absorbed and eradicated.', icon: Activity },
  { id: 3, title: 'Carbon Block Polish', desc: 'A dense micron filter ensures absolute clarity, preparing the water for the delicate RO membrane.', icon: Filter },
  { id: 4, title: 'Reverse Osmosis (RO)', desc: 'The heavy lifter. Microscopic heavy metals, fluoride, and dissolved solids are stripped at the molecular level.', icon: Droplets },
  { id: 5, title: 'Post-Carbon Taste', desc: 'Water is routed through a final coconut-shell carbon filter to crisp up the taste profile.', icon: Leaf },
  { id: 6, title: 'UV Sterilization', desc: 'High-intensity ultraviolet light destroys 99.99% of bacteria and biological contaminants.', icon: Zap },
  { id: 7, title: 'Ozonation', desc: 'A final blast of O3 gas acts as a chemical-free disinfectant, extending shelf life and ensuring absolute purity.', icon: ShieldCheck },
];

const stats = [
  { value: '7', label: 'Purification Stages' },
  { value: '10K+', label: 'Litres/Day Capacity' },
  { value: '500+', label: 'Clients Served' },
  { value: '99.99%', label: 'Bacteria Elimination' },
];

export default function AboutPage() {
  const roadmapRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: roadmapRef,
    offset: ["start center", "end center"]
  });

  const trackHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans pt-20 pb-20">

      {/* ── 1. EDITORIAL HERO ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-[#379eff] font-bold uppercase tracking-widest text-xs mb-4"
            >
              The Mwananchi Mandate
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.9] text-slate-900 mb-4"
            >
              PURE WATER. <br />
              <span className="text-[#379eff]">LIMITLESS SCALE.</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 pb-2"
          >
            <p className="text-base text-slate-600 leading-relaxed font-medium">
              Sourced from the Ndakaini watershed and engineered in Athi River. We bridge the gap between premium residential hydration and heavy-duty industrial logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 2. ANIMATED STATS BAR ── */}
      <section className="bg-[#081f46] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-black text-[#379eff] tracking-tighter mb-1">{stat.value}</p>
              <p className="text-white/50 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. MISSION SPLIT ── */}
      <section className="bg-slate-50 py-16 rounded-[2rem] mx-4 md:mx-12 mt-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Facility Image */}
            <div className="relative aspect-[4/3] bg-blue-100 rounded-[1.5rem] overflow-hidden border-4 border-white shadow-2xl group">
              <Image 
                src="/assets/facility-ops.png" 
                alt="Country Water Athi River Facility"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Mission Text */}
            <div>
              <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-6">
                We believe water is both a <span className="text-[#379eff]">human right</span> and an <span className="text-[#379eff]">industrial engine</span>.
              </h2>
              <div className="space-y-4 text-base text-slate-600 leading-relaxed">
                <p>
                  At Country Water, we don't just bottle water — we construct reliable supply chains. Born in Athi River, our mission was simple: eliminate the friction in acquiring pure water for both homes and construction sites.
                </p>
                <p>
                  Through our state-of-the-art 7-stage RO purification plant and our dedicated fleet of GPS-tracked bowsers, we ensure that whether you are drinking a 500ml bottle or mixing concrete with 10,000 liters, quality and reliability remain absolute.
                </p>
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-4 border-[#379eff] pl-5">
                <p className="text-lg font-black italic text-slate-800">&ldquo;Water should never be a privilege. We made it a guarantee.&rdquo;</p>
                <cite className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-2 block">— Country Water Founders</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THE 7-STAGE JOURNEY ── */}
      <section className="py-20 overflow-hidden bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4"
            >
              The <span className="text-[#379eff]">7-Stage</span> Journey
            </motion.h2>
            <p className="text-base text-slate-500 font-medium">
              Scroll down to track our fleet as raw Ndakaini water is transformed into KEBS-certified Mwananchi hydration.
            </p>
          </div>

          {/* Timeline Container */}
          <div ref={roadmapRef} className="relative max-w-4xl mx-auto pb-16">
            
            {/* Background track line */}
            <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-0.5 bg-slate-100 rounded-full -translate-x-1/2" />
            
            {/* Active track (blue fill) */}
            <motion.div 
              style={{ height: trackHeight }} 
              className="absolute top-0 left-8 md:left-1/2 w-0.5 bg-gradient-to-b from-[#379eff] to-[#0d3575] rounded-full -translate-x-1/2 origin-top" 
            />

            {/* Driving Lorry */}
            <motion.div 
              style={{ top: trackHeight }}
              className="absolute left-8 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-lg shadow-[#379eff]/30 flex items-center justify-center border-2 border-[#379eff] relative">
                <div className="absolute -top-3 w-6 h-6 bg-[#379eff]/20 rounded-full blur-md animate-pulse" />
                <Truck className="text-[#379eff] w-6 h-6 relative z-10" />
              </div>
            </motion.div>

            {/* Stages */}
            <div className="space-y-16 relative z-20">
              {purificationStages.map((stage, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={stage.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:block md:w-5/12" />
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-2 border-slate-200 rounded-full -translate-x-1/2 z-10" />
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="w-full pl-16 md:pl-0 md:w-5/12"
                    >
                      <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-lg shadow-slate-200/40 hover:shadow-xl hover:border-[#379eff]/20 transition-all duration-300 group">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-blue-50 text-[#379eff] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#379eff] group-hover:text-white transition-all duration-300 shrink-0">
                            <stage.icon size={20} />
                          </div>
                          <span className="text-[#379eff] font-black text-xl">0{stage.id}</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-900 mb-2">{stage.title}</h4>
                        <p className="text-slate-500 text-sm font-medium leading-relaxed">{stage.desc}</p>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── 5. DUAL OPERATIONS GRID ── */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 border-t border-slate-100">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tight text-slate-900 mb-2">
              Our Infrastructure
            </h2>
            <p className="text-base text-slate-500 max-w-2xl">
              Precision logistics divided into two specialized divisions to serve Athi River and beyond.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Fresh Water Card */}
          <div className="group bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[360px]">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Droplets className="text-[#379eff] w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3">The Fresh Reserve</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Premium drinking water engineered for human performance. We supply 500ml, 1L, and 1.5L bottles, alongside 18.9L dispenser jugs for offices and residential subscriptions.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center text-sm font-bold text-slate-700"><ArrowRight size={14} className="text-[#379eff] mr-2 shrink-0" /> UV Sterilized & Ozonated</li>
              <li className="flex items-center text-sm font-bold text-slate-700"><ArrowRight size={14} className="text-[#379eff] mr-2 shrink-0" /> Custom Event Branding Available</li>
            </ul>
          </div>

          {/* Industrial Logistics Card */}
          <div className="group relative rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[360px] border border-slate-800">
            <Image 
              src="/assets/industrial-lorry.jpeg" 
              alt="Country Water Bowser Fleet"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10" />

            <div className="relative z-20 p-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <Factory className="text-blue-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Industrial Logistics</h3>
              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Powering the construction sector. We deploy high-capacity bowser trucks delivering both saline construction water and bulk RO potable water directly to your site.
              </p>
            </div>
            <ul className="space-y-2 relative z-20 p-8 pt-0">
              <li className="flex items-center text-sm font-bold text-white"><ArrowRight size={14} className="text-blue-400 mr-2 shrink-0" /> 5,000L to 20,000L Capacities</li>
              <li className="flex items-center text-sm font-bold text-white"><ArrowRight size={14} className="text-blue-400 mr-2 shrink-0" /> GPS Fleet Tracking & Timely Dispatch</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── 6. THE PROMISE ── */}
      <section className="bg-[#379eff] text-white py-16 rounded-[2rem] mx-4 md:mx-12 mb-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-4">Why Partner With Us?</h2>
            <p className="text-blue-100 text-sm">
              We built our operations on three non-negotiable pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShieldCheck, title: 'Absolute Purity', desc: 'Rigorous lab testing and a multi-stage RO process guarantee every drop is chemically balanced and safe.' },
              { icon: Truck, title: 'Relentless Reliability', desc: 'From scheduled office refills to urgent construction site dispatches, our fleet is always on the move.' },
              { icon: Leaf, title: 'Sustainable Action', desc: 'Implementing bottle recycling programs and optimizing delivery routes to reduce our carbon footprint.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white hover:text-[#379eff] transition-colors duration-300 cursor-pointer group">
                  <Icon size={28} className="group-hover:text-[#379eff] text-white transition-colors" />
                </div>
                <h4 className="text-base font-bold mb-2">{title}</h4>
                <p className="text-blue-100/80 leading-relaxed text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
