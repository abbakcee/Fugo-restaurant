import React from 'react';
import { Phone, MapPin, Clock, Instagram, Sparkles, ArrowUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenCallModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCallModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/10 text-neutral-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          {/* Brand lockup */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-3xl font-serif text-[#f5f2eb] tracking-wide">
              {RESTAURANT_INFO.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-sm font-light leading-relaxed">
              A premier dining and lounge destination in Accra, where elevated flavors, artisanal mixology, and atmospheric nightlife energy converge.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenCallModal}
                className="px-5 py-2.5 bg-[#d4af37] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call to Reserve</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About the Lounge
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-white transition-colors">
                  Curated Menu Preview
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  The Experience
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Visual Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location & Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              Connect & Visit
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {RESTAURANT_INFO.address}, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={RESTAURANT_INFO.phoneDial} className="text-neutral-300 hover:text-[#d4af37] transition-colors font-mono">
                  {RESTAURANT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span className="text-neutral-300">
                  {RESTAURANT_INFO.hours}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a
                  href={RESTAURANT_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-[#d4af37] transition-colors"
                >
                  {RESTAURANT_INFO.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Subtle Note */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-neutral-500">
            <span>© {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.</span>
            <span>·</span>
            <span>Accra, Ghana</span>
          </div>

          {/* Mandatory subtle footer note */}
          <div className="flex items-center gap-2 bg-[#121218] border border-[#d4af37]/30 px-3 py-1.5 rounded-full text-[#d4af37]">
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            <span className="font-medium tracking-wide">
              Website concept by {RESTAURANT_INFO.conceptCreator}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-full bg-[#14141a] text-neutral-400 hover:text-white border border-neutral-800 hover:border-[#d4af37]/50 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
