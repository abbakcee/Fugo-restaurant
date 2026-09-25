import React, { useState } from 'react';
import { Sparkles, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { GalleryItem } from '../types';

interface GallerySectionProps {
  onSelectItem: (item: GalleryItem) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onSelectItem }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const filters = [
    { key: 'all', label: 'All Moments' },
    { key: 'ambiance', label: 'Interior & Bar' },
    { key: 'cocktails', label: 'Craft Drinks' },
    { key: 'cuisine', label: 'Plated Dishes' },
    { key: 'lounge', label: 'Social Vibes' },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0c0c10] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Atmospheric Visuals</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f5f2eb]">
              Moments at Fugo
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-light">
              An intimate look into our dining room, craft bar, plated culinary creations, and the magnetic nightlife energy that defines us.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-[#14141a] rounded-xl border border-neutral-800 overflow-x-auto no-scrollbar">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeFilter === f.key
                    ? 'bg-[#d4af37] text-[#0a0a0c] font-semibold shadow'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            // Give first item or prominent item wide span when viewing all
            const isWide = activeFilter === 'all' && (index === 0 || index === 3);

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className={`group relative rounded-2xl overflow-hidden bg-[#14141a] border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 cursor-pointer ${
                  isWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                {/* Image */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Dark Scrim overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Expand hover icon */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[11px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-serif text-[#f5f2eb] mt-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-light line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500">
            High-resolution visual concept prepared for Fugo Bar & Restaurant by {RESTAURANT_INFO.conceptCreator}.
          </p>
        </div>
      </div>
    </section>
  );
};
