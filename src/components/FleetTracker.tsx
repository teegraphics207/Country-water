'use client';

import React from 'react';
import { Truck, MapPin, Activity } from 'lucide-react';

export default function FleetTracker() {
  return (
    <section className="w-full py-24 bg-[#000a14] border-t border-[#379eff]/10 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
              Live <span className="text-cyan-500">Dispatch</span>
            </h2>
            <p className="text-white/50 tracking-widest text-sm font-bold uppercase">Athi River Industrial Sector</p>
          </div>
          <div className="flex items-center gap-3 mt-6 md:mt-0 px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">WebSocket Standby</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Tracker Shells */}
          {[
            { id: "CW-B01", status: "In Transit", loc: "Mombasa Rd", capacity: "20,000L Salty" },
            { id: "CW-B04", status: "Loading", loc: "Ndakaini Plant", capacity: "10,000L RO" },
            { id: "CW-B07", status: "Delivered", loc: "Syokimau Site", capacity: "5,000L Salty" }
          ].map((truck, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#001428] border border-white/5">
                    <Truck className="text-cyan-500" size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-black tracking-widest">{truck.id}</h4>
                    <p className={`text-xs font-bold uppercase tracking-widest ${truck.status === 'In Transit' ? 'text-cyan-400' : 'text-white/40'}`}>
                      {truck.status}
                    </p>
                  </div>
                </div>
                <Activity className="text-white/20" size={20} />
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-4">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Location</span>
                  <span className="flex items-center gap-2 text-white text-sm font-medium"><MapPin size={14} className="text-cyan-500"/> {truck.loc}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Payload</span>
                  <span className="text-white text-sm font-medium">{truck.capacity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
