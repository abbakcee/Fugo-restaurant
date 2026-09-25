import React, { useState } from 'react';
import { Sparkles, Users, Wine, Heart, Moon, Compass } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface ExperienceSectionProps {
  onOpenCallModal: () => void;
  onOpenImage: (image: string, title: string, category: string, caption: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  onOpenCallModal,
  onOpenImage,
}) => {
  const [activeTab, setActiveTab] = useState<'social' | 'lounge' | 'datenight' | 'groups'>('social');

  const experienceItems = {
    social: {
      title: 'Social Dining',
      subtitle: 'Shared plates, vibrant conversations',
      description:
        'A buzzing dining room where lively laughter, great music, and generous shared plates naturally bring people together.',
      image: IMAGES.social,
      accent: 'Golden hour into night',
      icon: Users,
    },
    lounge: {
      title: 'Lounge Atmosphere',
      subtitle: 'Subtle lighting, curated soundscapes',
      description:
        'Settle into plush velvet booths with artisanal cocktails, ambient lighting, and an effortless mood designed for unwinding in style.',
      image: IMAGES.lounge,
      accent: 'Atmospheric nightlife sanctuary',
      icon: Moon,
    },
    datenight: {
      title: 'Date-Night Energy',
      subtitle: 'Intimate, magnetic & unforgettable',
      description:
        'Flattering candlelit corners, bespoke mixology, and delicate tasting dishes that turn an ordinary date into a memorable occasion.',
      image: IMAGES.cocktail,
      accent: 'Bespoke cocktail pairings',
      icon: Heart,
    },
    groups: {
      title: 'Elevated Group Hangouts',
      subtitle: 'Celebrate with your inner circle',
      description:
        'Whether marking a milestone, birthday, or weekend reunion, our expansive tables accommodate groups with tailored hospitality.',
      image: IMAGES.plating,
      accent: 'Culinary sharing platters',
      icon: Wine,
    },
  };

  const activeExp = experienceItems[activeTab];
  const IconComponent = activeExp.icon;

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4a121a]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Fugo Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f5f2eb] leading-tight text-balance">
            Designed for dining, drinks and good company.
          </h2>
          <p className="mt-4 text-base text-neutral-400 font-light max-w-xl mx-auto">
            From relaxed early dinners to high-energy late-night lounge sessions, every moment at Fugo is crafted with intention.
          </p>
        </div>

        {/* Experience Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-[#14141a] rounded-xl border border-neutral-800 overflow-x-auto no-scrollbar max-w-full">
            {(
              [
                { key: 'social', label: 'Social Dining' },
                { key: 'lounge', label: 'Lounge Atmosphere' },
                { key: 'datenight', label: 'Date-Night Energy' },
                { key: 'groups', label: 'Group Hangouts' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.key
                    ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#0a0a0c] font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#121216]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          {/* Visual Showcase */}
          <div className="lg:col-span-7">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#d4af37]/25 group cursor-pointer"
              onClick={() =>
                onOpenImage(
                  activeExp.image,
                  activeExp.title,
                  'Experience',
                  activeExp.subtitle
                )
              }
            >
              <img
                src={activeExp.image}
                alt={activeExp.title}
                referrerPolicy="no-referrer"
                className="w-full aspect-[16/10] sm:aspect-[16/9] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[#d4af37]">
                  {activeExp.accent}
                </span>
                <span className="text-white/80 italic text-[11px] hidden sm:inline">
                  Click to expand photo
                </span>
              </div>
            </div>
          </div>

          {/* Copy Showcase */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="w-12 h-12 rounded-xl bg-[#1a1a24] border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
              <IconComponent className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Atmosphere & Mood
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif text-[#f5f2eb] mt-1">
                {activeExp.title}
              </h3>
              <p className="text-sm font-light text-[#f3e7c4] mt-1 italic">
                {activeExp.subtitle}
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              {activeExp.description}
            </p>

            <div className="pt-4 border-t border-neutral-800 flex items-center gap-4">
              <button
                onClick={onOpenCallModal}
                className="px-6 py-3 bg-[#d4af37] hover:bg-[#e5c365] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-[#d4af37]/20 flex items-center gap-2"
              >
                <span>Reserve for Tonight</span>
              </button>
              <a
                href={RESTAURANT_INFO.phoneDial}
                className="text-xs text-neutral-400 hover:text-[#d4af37] transition-colors"
              >
                Line: {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
