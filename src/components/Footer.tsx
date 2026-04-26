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
