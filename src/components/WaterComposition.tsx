'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const WATER_SPECS = [
  { id: 'calcium', title: 'Calcium Ca2+', value: '240 mg/L', description: 'About 99% of the calcium in our bodies is in our bones and teeth.', position: 'top-left' },
  { id: 'sodium', title: 'Sodium Na+', value: '5.2 mg/L', description: 'It\'s an important component for proper muscle and nerve function.', position: 'mid-left' },
  { id: 'nitrate', title: 'Nitrate NO3-', value: '4.4 mg/L', description: 'It\'s great for health to drink water with levels of nitrate under 10 mg/L.', position: 'bottom-left' },
  { id: 'magnesium', title: 'Magnesium Mg2+', value: '42 mg/L', description: 'Magnesium is a nutrient that the body needs to stay healthy.', position: 'top-right' },
  { id: 'sulfate', title: 'Sulfate SO4(2-)', value: '400 mg/L', description: 'Sulfate is among the most important macronutrients in cells.', position: 'mid-right' },
  { id: 'bicarbonate', title: 'Bicarbonate', value: '384 mg/L', description: 'Bicarbonate is an antacid used to relieve heartburn and acid indigestion.', position: 'bottom-right' },
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
