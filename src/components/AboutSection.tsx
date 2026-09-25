import React from 'react';
import { Sparkles, GlassWater, UtensilsCrossed, Moon } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#4a121a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative gold hairline frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#d4af37]/25 -rotate-1 pointer-events-none" />

              {/* Main Image */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl bg-[#121216] border border-white/10 group">
                <img
                  src={IMAGES.lounge}
                  alt="Atmospheric boutique lounge interior at Fugo Bar & Restaurant Accra"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent opacity-80" />

                {/* Floating image caption */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-[#0e0e12]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">Lounge & Dining</p>
                    <p className="text-sm font-serif text-white">14 Jungle Road, Accra</p>
                  </div>
                  <span className="text-xs text-neutral-400 font-mono">08:00 – 02:00</span>
                </div>
              </div>

              {/* Secondary corner accent badge */}
              <div className="absolute -top-4 -right-4 bg-[#14141a] border border-[#d4af37]/40 rounded-xl p-3 shadow-xl backdrop-blur-md hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="text-xs font-serif text-[#f5f2eb]">Vibrant Urban Energy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Fugo</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#f5f2eb] leading-tight text-balance">
              More than a meal.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
              Fugo is where bold culinary flavors, curated mixology, and high-energy lounge culture meet in the heart of Accra.
            </p>

            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Designed for memorable afternoons and magnetic late nights, we bring together flavorful dining, signature cocktails, and an intimate urban aesthetic that turns every dinner into a celebration.
            </p>

            {/* Hallmarks grid */}
            <div className="mt-8 pt-8 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#14141a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-[#f5f2eb]">Social Dining</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Elevated comfort plates and sharing dishes created for lively tables.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#14141a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <GlassWater className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-[#f5f2eb]">Craft Mixology</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  House-infused spirits, smoked bitters, and vibrant signature serves.
                </p>
              </div>

              <div className="space-y-2">
                <div className="w-9 h-9 rounded-lg bg-[#14141a] border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]">
                  <Moon className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-medium text-[#f5f2eb]">Late-Night Pulse</h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Open daily until 02:00 for evening drinks, music, and after-hours energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
