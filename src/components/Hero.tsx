import React from 'react';
import { ArrowUpRight, Clock, MapPin, Compass } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroProps {
  onOpenCallModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCallModal }) => {
  return (
    <section className="relative min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
      {/* Background Image Container with Measured Cinematic Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Fugo Bar & Restaurant interior lounge at night in Accra"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Multi-layered dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/70 to-[#0a0a0c]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0c]/50 to-[#0a0a0c]/90" />
        <div className="absolute inset-0 bg-[#4a121a]/20 mix-blend-color" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Subtle Location & Vibe Tag */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-[#d4af37] font-medium mb-6">
          <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Accra, Ghana</span>
          <span className="text-neutral-500">·</span>
          <span>Restaurant & Lounge</span>
        </div>

        {/* Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal text-[#f5f2eb] tracking-tight leading-[1.08] max-w-4xl text-balance">
          Where Great Food <br className="hidden sm:inline" />
          <span className="italic font-light text-[#f3e7c4]">Meets Great Vibes.</span>
        </h1>

        {/* Supporting text */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed text-balance">
          {RESTAURANT_INFO.subTagline}
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenCallModal}
            className="w-full sm:w-auto px-8 py-3.5 text-sm uppercase tracking-wider font-semibold text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c365] to-[#c5a059] rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#d4af37]/25 flex items-center justify-center gap-2"
          >
            <span>Reserve a Table</span>
            <ArrowUpRight className="w-4 h-4 text-[#0a0a0c]" />
          </button>

          <a
            href="#experience"
            className="w-full sm:w-auto px-8 py-3.5 text-sm uppercase tracking-wider font-medium text-[#f5f2eb] bg-[#121216]/80 hover:bg-[#1f1f26] border border-[#d4af37]/30 hover:border-[#d4af37]/70 rounded-xl transition-all backdrop-blur-md flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-[#d4af37]" />
            <span>View the Experience</span>
          </a>
        </div>

        {/* Operational Highlights Ticker */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full max-w-2xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#d4af37]" />
            <span>Open Daily <strong className="text-white font-medium">08:00 – 02:00</strong></span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#d4af37]" />
            <span>14 Jungle Road, Accra</span>
          </div>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Nightlife & Dining</span>
          </div>
        </div>
      </div>

      {/* Subtle down indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <a
          href="#about"
          className="text-neutral-500 hover:text-[#d4af37] transition-colors p-2 flex flex-col items-center gap-1 text-[11px] uppercase tracking-widest"
          aria-label="Scroll to About section"
        >
          <span>Discover</span>
          <div className="w-4 h-7 rounded-full border border-neutral-600 flex items-start justify-center p-1">
            <div className="w-1 h-1.5 bg-[#d4af37] rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};
