'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On inner pages: always show frosted white bar
  // On home page: transparent until scrolled
  const showSolidBg = !isHomePage || scrolled || isOpen;

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
        showSolidBg
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="bg-[#379eff] p-2 rounded-xl group-hover:scale-110 transition-transform duration-300">
            <Droplets className="text-white" size={20} />
          </div>
          <span className={`text-lg font-black tracking-tighter uppercase transition-colors duration-300 ${
            showSolidBg ? 'text-[#081f46]' : 'text-white'
          }`}>
            Country <span className="text-[#379eff]">Water</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-all duration-300 hover:text-[#379eff] ${
                pathname === link.href
                  ? 'text-[#379eff]'
                  : showSolidBg
                  ? 'text-[#081f46]/70'
                  : 'text-white/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/shop"
            className="bg-[#379eff] hover:bg-[#2b8cee] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg shadow-[#379eff]/30 active:scale-95 hover:shadow-[#379eff]/50"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-xl transition-colors ${showSolidBg ? 'text-[#081f46]' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-slate-100 flex flex-col space-y-1 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`py-3 px-4 rounded-xl text-base font-semibold transition-colors ${
                pathname === link.href
                  ? 'text-[#379eff] bg-blue-50'
                  : 'text-[#081f46] hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setIsOpen(false)}
            className="mt-2 bg-[#379eff] text-white text-center py-3 rounded-2xl font-bold shadow-xl shadow-[#379eff]/20"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
