import React, { useState } from 'react';
import { Sparkles, Info, Phone, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SAMPLE_MENU, RESTAURANT_INFO, IMAGES } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuPreviewProps {
  onOpenCallModal: () => void;
}

export const MenuPreview: React.FC<MenuPreviewProps> = ({ onOpenCallModal }) => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'mains' | 'cocktails' | 'desserts'>('starters');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories = [
    { key: 'starters', label: 'Starters & Small Plates', count: 4 },
    { key: 'mains', label: 'Main Dishes & Grill', count: 4 },
    { key: 'cocktails', label: 'Signature Cocktails', count: 4 },
    { key: 'desserts', label: 'Desserts & Sweets', count: 3 },
  ] as const;

  const currentItems = SAMPLE_MENU.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 sm:py-28 bg-[#0c0c10] relative overflow-hidden border-t border-white/5">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#4a121a]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taste & Mixology</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f5f2eb]">
              Curated Menu Preview
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
              A sample glimpse into Fugo’s dining & cocktail philosophy—blending vibrant Ghanaian ingredients with international culinary technique.
            </p>
          </div>

          {/* Transparent Concept Note */}
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#14141a] border border-[#d4af37]/25 text-xs text-neutral-300 max-w-md shrink-0">
            <Info className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>
              <strong>Sample Preview:</strong> Layout structured for easy updates with Fugo’s official printed & seasonal menu.
            </span>
          </div>
        </div>

        {/* Category Segmented Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#14141a] rounded-xl border border-neutral-800 overflow-x-auto no-scrollbar mb-10 max-w-2xl">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0a0a0c] shadow-md font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group p-6 rounded-2xl bg-[#121216]/90 border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:bg-[#16161c] cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top indicator bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-xl font-serif text-[#f5f2eb] group-hover:text-[#f3e7c4] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#d4af37] font-medium whitespace-nowrap shrink-0 pt-0.5">
                    {item.signature ? 'Signature' : 'Sample Item'}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-4">
                  {item.description}
                </p>
              </div>

              {/* Unboxed Metadata (Zero-pill discipline) */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  {item.tags?.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span>{tag}</span>
                      {idx < (item.tags?.length || 0) - 1 && <span aria-hidden="true" className="text-neutral-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
                <span className="text-neutral-500 italic text-[11px] group-hover:text-[#d4af37] transition-colors">
                  Tap to preview
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14141c] via-[#1b151a] to-[#14141c] border border-[#d4af37]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-serif text-white">Join us for lunch, dinner or late-night cocktails</h4>
            <p className="text-xs text-neutral-400">
              Kitchen open daily with fresh daily selections and full bar service until 02:00.
            </p>
          </div>
          <button
            onClick={onOpenCallModal}
            className="px-6 py-3 bg-[#d4af37] hover:bg-[#e5c365] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2 shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Inquire / Reserve</span>
          </button>
        </div>
      </div>

      {/* Item Detail Modal Preview */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-[#14141a] border border-[#d4af37]/35 rounded-2xl p-6 sm:p-7 max-w-lg w-full text-[#f5f2eb] relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Menu Concept Preview
              </span>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-neutral-400 hover:text-white p-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <h3 className="text-2xl font-serif text-[#f3e7c4]">{selectedItem.name}</h3>

            <p className="mt-3 text-sm text-neutral-300 leading-relaxed font-light">
              {selectedItem.description}
            </p>

            <div className="mt-5 p-3 rounded-lg bg-[#0a0a0c] border border-neutral-800 text-xs text-neutral-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Prepared fresh to order in Fugo kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#d4af37]" />
                <span>Pairing recommendations available from the bar staff</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedItem(null);
                  onOpenCallModal();
                }}
                className="flex-1 py-2.5 bg-[#d4af37] text-[#0a0a0c] font-medium text-xs uppercase tracking-wider rounded-lg hover:brightness-110 transition-all text-center"
              >
                Reserve a Table to Taste
              </button>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-4 py-2.5 bg-[#1f1f26] text-neutral-300 text-xs rounded-lg hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
