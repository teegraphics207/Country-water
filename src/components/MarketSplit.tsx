'use client';

export default function MarketSplit() {
  return (
    <section className="relative w-full min-h-screen bg-[#001428] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background African Futurist Gradient Orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-cyan-900/20 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-mint-900/10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Select Your Supply Chain
          </h2>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto opacity-80">
            From residential hydration to heavy industrial construction. Precision logistics for every volume.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Track 1: B2C Fresh Water */}
          <div className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/10">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4M12 20V4"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Mwananchi Hydration</h3>
                <p className="text-cyan-100/70 mb-6 line-clamp-3">
                  7-stage Reverse Osmosis purification, UV treated, and ozonated. From 500ml event bottles to 20L residential refills.
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-cyan-200/80">
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> Real-time M-Pesa Checkout</li>
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> Free Doorstep Delivery</li>
                <li className="flex items-center"><span className="mr-2 text-cyan-400">✓</span> 3D Event Label Customizer</li>
              </ul>
              <button className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold tracking-wide hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-shadow">
                Order Residential
              </button>
            </div>
          </div>

          {/* Track 2: B2B Industrial Bulk */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#001428]/60 border border-white/5 backdrop-blur-md transition-all duration-500 hover:border-blue-500/50 hover:bg-blue-900/20 shadow-2xl">
            <div className="p-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-600 to-blue-800 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">Industrial Logistics</h3>
                <p className="text-slate-300 mb-6 line-clamp-3">
                  Heavy-duty dispatch for Athi River's construction sector. High-capacity lorries delivering salty construction water and bulk RO potable water.
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-slate-400">
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> 5,000L to 20,000L Bowsers</li>
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> GPS Fleet Tracking</li>
                <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> Food-Grade Stainless Steel Transport</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-blue-600 text-blue-400 font-semibold tracking-wide hover:bg-blue-600 hover:text-white transition-colors">
                Request Bulk Dispatch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
