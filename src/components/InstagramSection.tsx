import React from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

export const InstagramSection: React.FC = () => {
  const feedItems = [
    {
      id: 'ig1',
      image: IMAGES.cocktail,
      tag: '#FugoCocktails',
      caption: 'Handcrafted mixology & warm ambiance',
    },
    {
      id: 'ig2',
      image: IMAGES.hero,
      tag: '#FugoLounge',
      caption: 'Evenings on Jungle Road, Accra',
    },
    {
      id: 'ig3',
      image: IMAGES.plating,
      tag: '#FugoDining',
      caption: 'Plated culinary craft & savory delights',
    },
    {
      id: 'ig4',
      image: IMAGES.social,
      tag: '#FugoVibes',
      caption: 'Good food, great drinks & company',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
              <Instagram className="w-4 h-4 text-[#d4af37]" />
              <span>Social Pulse</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f5f2eb]">
              Follow the vibe
            </h2>
            <p className="mt-2 text-base text-[#f3e7c4] font-medium">
              {RESTAURANT_INFO.instagramHandle}
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#16161f] border border-[#d4af37]/40 text-[#f5f2eb] hover:bg-[#d4af37] hover:text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md group shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#d4af37] group-hover:text-[#0a0a0c] transition-colors" />
            <span>View Instagram</span>
            <ArrowUpRight className="w-4 h-4 ml-0.5" />
          </a>
        </div>

        {/* Social Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {feedItems.map((item) => (
            <a
              key={item.id}
              href={RESTAURANT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-[#14141a] border border-white/10 hover:border-[#d4af37]/60 transition-all duration-300 block"
            >
              <img
                src={item.image}
                alt={item.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                <Instagram className="w-6 h-6 text-[#d4af37] mb-2" />
                <span className="text-xs font-semibold text-white tracking-wide">
                  {item.tag}
                </span>
                <p className="text-[11px] text-neutral-300 mt-1 max-w-[140px] line-clamp-2">
                  {item.caption}
                </p>

                <div className="mt-3 flex items-center gap-3 text-xs text-[#d4af37]">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Tag invitation */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neutral-400">
            Tag <span className="text-[#d4af37] font-medium">{RESTAURANT_INFO.instagramHandle}</span> in your stories & photos when you visit.
          </p>
        </div>
      </div>
    </section>
  );
};
