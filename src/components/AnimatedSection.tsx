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
