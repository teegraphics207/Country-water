'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Twitter, Facebook } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="pt-20 pb-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className="pt-8 mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-[#379eff] text-xs font-black uppercase tracking-widest mb-3"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[#081f46] tracking-tighter mb-3 leading-tight"
          >
            LET&apos;S <span className="text-[#379eff]">CONNECT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base text-[#081f46]/60 mb-0 font-medium max-w-md"
          >
            Have a question about delivery or need a custom event quote? We&apos;re here to help.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── CONTACT INFO ── */}
          <div className="lg:col-span-5">
            <div className="space-y-4 mb-8">
              {[
                { icon: Phone, label: 'Call Us', value: '0721 350 275', sub: '24/7 Support for Bulk Orders' },
                { icon: Mail, label: 'Email', value: 'info@countrywater.co.ke', sub: 'General Enquiries' },
                { icon: MapPin, label: 'Location', value: 'Athi River, Kenya', sub: 'Martinice Villa, Ground Floor, Athi River Rd' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4 p-5 rounded-2xl bg-[#f8fbff] hover:bg-[#f0f7ff] transition-colors border border-black/5 hover:border-[#379eff]/10"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm text-[#379eff] shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[#081f46]/40 text-[10px] font-black uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-[#081f46] font-bold text-base leading-tight mb-0.5">{item.value}</p>
                    <p className="text-[#081f46]/40 text-xs font-medium">{item.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f0f7ff] rounded-2xl p-6 border border-[#379eff]/10 mb-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 opacity-10">
                {/* Decorative grid lines */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="absolute w-full h-px bg-[#379eff]" style={{ top: `${i * 20}%` }} />
                ))}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="absolute h-full w-px bg-[#379eff]" style={{ left: `${i * 14}%` }} />
                ))}
              </div>
              <div className="relative z-10 text-center py-6">
                <div className="w-10 h-10 bg-[#379eff] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-[#379eff]/30 animate-pulse">
                  <MapPin size={18} className="text-white" />
                </div>
                <p className="font-black text-[#081f46] text-sm">Athi River, Kenya</p>
                <p className="text-[#081f46]/50 text-xs mt-1">Martinice Villa, Ground Floor</p>
                <a
                  href="https://maps.google.com/?q=Athi+River+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#379eff] text-xs font-black underline underline-offset-2"
                >
                  Open in Google Maps →
                </a>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-[#081f46] text-white flex items-center justify-center rounded-xl hover:bg-[#379eff] transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── CONTACT FORM ── */}
          <div className="lg:col-span-7 bg-[#001428] rounded-3xl p-8 md:p-12 relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#379eff]/10 blur-[80px]" />

            <h2 className="text-2xl md:text-3xl font-black mb-8 tracking-tight uppercase leading-none">
              SEND A <span className="text-[#379eff]">MESSAGE</span>
            </h2>

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-1">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Mwananchi"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="07XX XXX XXX"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-1">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-[#379eff]/50 outline-none transition-all appearance-none cursor-pointer">
                  <option className="bg-[#001428]">Bulk Order Enquiry</option>
                  <option className="bg-[#001428]">Special Event Branding</option>
                  <option className="bg-[#001428]">Residential Delivery</option>
                  <option className="bg-[#001428]">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest ml-1">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your needs..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white text-sm focus:border-[#379eff]/50 outline-none transition-all placeholder:text-white/20 resize-none"
                />
              </div>

              <button className="bg-[#379eff] hover:bg-[#2b8cee] text-white w-full py-4 rounded-2xl font-black flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-widest text-sm">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        {/* ── SUPPORT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 bg-gradient-to-r from-[#f0f7ff] to-white rounded-3xl flex flex-col md:flex-row items-center justify-between p-8 md:p-10 border border-[#379eff]/10 gap-6"
        >
          <div className="flex items-center space-x-5">
            <div className="w-14 h-14 bg-[#379eff] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#379eff]/20 shrink-0">
              <MessageCircle size={26} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#081f46] tracking-tighter leading-none mb-1 uppercase">Need Fast Help?</h3>
              <p className="text-[#081f46]/40 font-bold uppercase tracking-widest text-xs">Chat with our delivery team on WhatsApp</p>
            </div>
          </div>
          <a
            href="https://wa.me/254721350275"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-full font-black text-sm transition-all duration-300 shadow-2xl shadow-[#25D366]/20 uppercase tracking-tighter shrink-0"
          >
            WhatsApp Us Now
          </a>
        </motion.div>

      </div>

      {/* ── FLOATING WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/254721350275"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl shadow-[#25D366]/40 hover:scale-110 transition-transform duration-300 animate-bounce"
        style={{ animationDuration: '3s' }}
        title="WhatsApp Us"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

    </main>
  );
}
