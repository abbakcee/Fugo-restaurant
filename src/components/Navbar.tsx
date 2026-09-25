import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone, Clock, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenCallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCallModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0c]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-lg shadow-black/50 py-3'
          : 'bg-gradient-to-b from-[#0a0a0c]/90 to-transparent py-4 sm:py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-serif tracking-wider text-[#f5f2eb] hover:text-[#d4af37] transition-colors whitespace-nowrap"
        >
          FUGO
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#d4af37] transition-colors tracking-wide relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#d4af37] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCallModal}
            className="px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium tracking-wide uppercase text-[#0a0a0c] bg-gradient-to-r from-[#d4af37] via-[#e5c365] to-[#c5a059] rounded-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-md shadow-[#d4af37]/20 whitespace-nowrap"
          >
            Reserve a Table
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#0e0e12]/98 border-b border-[#d4af37]/20 shadow-2xl backdrop-blur-xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-serif text-[#f5f2eb] hover:text-[#d4af37] transition-colors py-1 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="mt-6 pt-5 border-t border-neutral-800 space-y-3 text-xs text-neutral-400">
            <div className="flex items-center gap-2 text-neutral-300">
              <Phone className="w-4 h-4 text-[#d4af37]" />
              <a href={RESTAURANT_INFO.phoneDial} className="hover:text-[#d4af37]">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>{RESTAURANT_INFO.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>{RESTAURANT_INFO.address}, Accra</span>
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCallModal();
              }}
              className="w-full py-3 bg-[#d4af37] text-[#0a0a0c] font-semibold text-sm rounded-xl tracking-wide uppercase hover:brightness-110 transition-all text-center block"
            >
              Call to Reserve ({RESTAURANT_INFO.phone})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
