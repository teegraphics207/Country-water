'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mainTextRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Use a Ref instead of State. This prevents 240 background React re-renders.
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const frameCount = 64; 

  const CDN_BASE_URL = 'https://ajowfcfqurjwvppnwyex.supabase.co/storage/v1/object/public/country-water-assets/frames';

  const renderFrame = (index: number) => {
    if (!canvasRef.current || imagesRef.current.length === 0) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[index];
    
    // Only draw if the specific frame has successfully downloaded
    if (ctx && img) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
  };

  // Phase 1: Progressive Background Loading (Zero Blocking)
  useEffect(() => {
    // Pre-fill the array with empty slots
    imagesRef.current = new Array(frameCount).fill(null);

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `${CDN_BASE_URL}/frame-${frameNum}.webp`; 

      img.onload = () => {
        imagesRef.current[i - 1] = img;
        // Instantly draw frame 1 as soon as it arrives so the user sees it
        if (i === 1) {
          renderFrame(0); 
        }
      };
    }
  }, []);

  // Phase 2: GSAP ScrollTrigger (Starts instantly)
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));
          
          // Fire the render function. It will only paint if the frame exists.
          renderFrame(frameIndex);
        },
      },
    });

    tl.to({}, { duration: 1 }) 
      .to(mainTextRef.current, { opacity: 1, y: 0, duration: 3, ease: "power2.out" })
      .to(quoteRef.current, { opacity: 1, y: 0, duration: 3, ease: "power2.out" })
      .to([mainTextRef.current, quoteRef.current], { opacity: 0, y: -30, duration: 2, ease: "power2.in" })
      .to(buttonsRef.current, { opacity: 1, y: 0, duration: 3, ease: "power3.out" }, "-=1");

  }, { scope: scrollContainerRef });

  return (
    <div ref={scrollContainerRef} className="relative h-[400vh] bg-[#001428]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#000a14] via-[#001428] to-[#011428]">
          <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-[#00FFFF]/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-[#379eff]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 mix-blend-screen opacity-90 overflow-hidden">
          <canvas
              ref={canvasRef}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
        </div>

        <div className="relative z-30 flex flex-col items-center justify-center w-full h-full max-w-7xl mx-auto px-6">
          <h1 ref={mainTextRef} className="absolute text-7xl md:text-[8rem] font-black text-white tracking-tighter z-30 drop-shadow-[0_0_40px_rgba(255,255,255,0.1)] leading-none text-center opacity-0 translate-y-10">
            COUNTRY WATER
          </h1>
          <div ref={quoteRef} className="absolute mt-32 md:mt-48 flex flex-col items-center z-30 text-center opacity-0 translate-y-10">
            <h2 className="text-xl md:text-3xl font-light text-cyan-50 leading-tight tracking-wide max-w-3xl px-4">
              Pure hydration, engineered for the people.<br/>
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#379eff] to-blue-500 uppercase tracking-widest text-sm md:text-xl">
                The Mwananchi Water
              </span>
            </h2>
          </div>
          <div ref={buttonsRef} className="absolute mt-[40vh] flex flex-col md:flex-row gap-6 opacity-0 translate-y-12 z-40 items-center">
            <button className="group relative px-10 py-5 bg-[#379eff] rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(55,158,255,0.4)]">
              <span className="relative z-10 text-white font-bold tracking-widest uppercase text-sm">Order Today</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
            <button className="px-10 py-5 bg-transparent border border-white/20 backdrop-blur-md rounded-full text-white font-semibold tracking-widest uppercase text-sm hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
