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
