import React from 'react';
import Link from 'next/link';
import { Ghost, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-32 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#379eff]/5 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#379eff]/5 blur-[150px]" />
      
      <div className="max-w-2xl w-full text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="bg-[#f0f7ff] p-8 rounded-[40px] shadow-2xl shadow-[#379eff]/10 animate-bounce">
            <Ghost className="text-[#379eff]" size={80} strokeWidth={1.5} />
          </div>
        </div>

        <h1 className="text-8xl md:text-[12rem] font-black text-[#081f46] tracking-tighter leading-none mb-4">
          404.
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-black text-[#379eff] tracking-tight uppercase mb-8">
          LIQUID SILENCE.
        </h2>
        
        <p className="text-xl text-[#081f46]/40 font-medium mb-12 max-w-md mx-auto">
          It seems this stream has run dry. The page you are looking for has evaporated or moved to a new source.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Link 
            href="/"
            className="w-full md:w-auto bg-[#379eff] hover:bg-[#2b8cee] text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 transition-all duration-300 shadow-2xl shadow-[#379eff]/20 active:scale-95 uppercase tracking-widest"
          >
            <Home size={20} />
            <span>Return Home</span>
          </Link>
          
          <Link 
            href="/contact"
            className="w-full md:w-auto bg-[#081f46] hover:bg-[#001428] text-white px-10 py-5 rounded-full font-black flex items-center justify-center space-x-3 transition-all duration-300 active:scale-95 uppercase tracking-widest"
          >
            <ArrowLeft size={20} />
            <span>Report Issue</span>
          </Link>
        </div>

        <div className="mt-24 pt-12 border-t border-black/5">
          <p className="text-[#081f46]/20 text-[10px] font-black uppercase tracking-[0.4em]">
            Country Water | The Mwananchi Spirit
          </p>
        </div>
      </div>
    </main>
  );
}
