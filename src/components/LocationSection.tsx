import React from 'react';
import { MapPin, Navigation, Clock, Phone, Sparkles, Car, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#0c0c10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Visit Us</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-[#f5f2eb]">
                In the Heart of Accra.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light">
                Conveniently situated along Jungle Road, Fugo is an intimate urban oasis for evening dining, after-work drinks, and late-night nightlife.
              </p>
            </div>

            {/* Address Details Card */}
            <div className="bg-[#121216] border border-white/10 rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-serif text-white">{RESTAURANT_INFO.name}</h4>
                  <p className="text-sm text-neutral-300 mt-0.5">{RESTAURANT_INFO.address}</p>
                  <p className="text-xs text-neutral-400">{RESTAURANT_INFO.city}, {RESTAURANT_INFO.country}</p>
                </div>
              </div>

              <div className="border-t border-neutral-800/80 pt-3 flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-neutral-400">Operating Hours</h5>
                  <p className="text-sm font-medium text-white">{RESTAURANT_INFO.hours}</p>
                  <p className="text-xs text-neutral-400">{RESTAURANT_INFO.hoursDetail}</p>
                </div>
              </div>

              <div className="border-t border-neutral-800/80 pt-3 flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-xs uppercase tracking-wider text-neutral-400">Direct Inquiries</h5>
                  <a
                    href={RESTAURANT_INFO.phoneDial}
                    className="text-sm font-mono font-medium text-[#d4af37] hover:underline"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Arrival & Parking Amenities */}
            <div className="grid grid-cols-2 gap-3 text-xs text-neutral-400">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#14141a] border border-neutral-800">
                <Car className="w-4 h-4 text-[#d4af37]" />
                <span>On-Site Guest Parking</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#14141a] border border-neutral-800">
                <ShieldCheck className="w-4 h-4 text-[#d4af37]" />
                <span>Dedicated Security</span>
              </div>
            </div>

            {/* Map action button */}
            <div>
              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#d4af37] hover:bg-[#e5c365] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/15"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Interactive Styled Map Block */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#111116] min-h-[380px] sm:min-h-[460px] flex flex-col justify-between p-6 sm:p-8">
              {/* Architectural Dark Map Canvas Graphic */}
              <div className="absolute inset-0 bg-[#0d0d12] opacity-95">
                {/* SVG vector stylized map grid of Accra urban road layout */}
                <svg
                  className="w-full h-full opacity-35"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 800 600"
                >
                  <defs>
                    <pattern id="urbanGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2a2a38" strokeWidth="0.8" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#urbanGrid)" />
                  {/* Major Arterial Roads */}
                  <path d="M -50 220 Q 250 200 420 300 T 850 320" fill="none" stroke="#d4af37" strokeWidth="3" opacity="0.4" />
                  <path d="M 180 -50 L 260 650" fill="none" stroke="#4a121a" strokeWidth="4" opacity="0.6" />
                  <path d="M 380 -50 L 410 650" fill="none" stroke="#c5a059" strokeWidth="2.5" opacity="0.5" />
                  <path d="M -50 420 L 850 380" fill="none" stroke="#333346" strokeWidth="2.5" />
                  <path d="M 550 -50 Q 520 280 620 650" fill="none" stroke="#2c2c3c" strokeWidth="2" />
                  
                  {/* Surrounding Landmarks Text */}
                  <text x="280" y="160" fill="#66667a" fontSize="12" fontFamily="sans-serif">Jungle Road</text>
                  <text x="440" y="270" fill="#66667a" fontSize="11" fontFamily="sans-serif">1st Christian Centre Link</text>
                  <text x="120" y="380" fill="#555566" fontSize="11" fontFamily="sans-serif">Accra East Corridors</text>
                </svg>
              </div>

              {/* Central Map Pin Lockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center pointer-events-none">
                {/* Radar pulse rings */}
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full bg-[#d4af37]/15 animate-ping" />
                  <div className="absolute w-14 h-14 rounded-full bg-[#d4af37]/25 animate-pulse" />
                  
                  {/* Glowing Pin Bubble */}
                  <div className="relative w-12 h-12 rounded-full bg-gradient-to-tr from-[#d4af37] to-[#e5c365] text-[#0a0a0c] flex items-center justify-center shadow-xl shadow-[#d4af37]/40 border-2 border-white">
                    <MapPin className="w-6 h-6 fill-current" />
                  </div>
                </div>

                {/* Location Callout Card */}
                <div className="mt-3 bg-[#0a0a0c]/95 border border-[#d4af37]/50 rounded-xl px-4 py-2 text-center shadow-2xl backdrop-blur-md">
                  <p className="text-xs font-serif font-bold text-white tracking-wider">FUGO BAR & RESTAURANT</p>
                  <p className="text-[10px] text-[#d4af37] mt-0.5">14 Jungle Road, Accra</p>
                </div>
              </div>

              {/* Map UI Header Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                  Accra, Ghana
                </span>
                <span className="text-xs text-[#d4af37] bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 font-mono">
                  5.6037° N, 0.1870° W
                </span>
              </div>

              {/* Map UI Bottom Card */}
              <div className="relative z-10 bg-[#0e0e14]/90 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-400">Easy navigation from anywhere in Accra</p>
                  <p className="text-sm font-medium text-white">Tap below for turn-by-turn directions</p>
                </div>
                <a
                  href={RESTAURANT_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 bg-[#d4af37] text-[#0a0a0c] text-xs font-semibold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Launch Map</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
