import React, { useState } from 'react';
import { Sparkles, Eye, Camera, Phone, X, Check } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface PitchConceptBarProps {
  onOpenCallModal: () => void;
}

export const PitchConceptBar: React.FC<PitchConceptBarProps> = ({ onOpenCallModal }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [copied, setCopied] = useState(false);

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        className="fixed bottom-20 right-4 z-40 bg-[#16161c] text-[#d4af37] border border-[#d4af37]/30 text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 hover:bg-[#1f1f26] transition-colors"
        title="Show concept note"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Concept by {RESTAURANT_INFO.conceptCreator}</span>
      </button>
    );
  }

  const copyPitchSummary = () => {
    const text = `Fugo Bar & Restaurant Website Concept by ${RESTAURANT_INFO.conceptCreator}\nFeaturing: Modern dining & lounge aesthetic, Accra nightlife energy, call-to-reserve integration (053 330 6391), sample menu preview, and location at 14 Jungle Road.`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#121216]/95 border-b border-[#d4af37]/25 text-[#f5f2eb] px-4 py-2 text-xs backdrop-blur-md relative z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 font-semibold text-[#d4af37] uppercase tracking-wider text-[11px]">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Website Concept
          </span>
          <span className="hidden sm:inline text-neutral-400">·</span>
          <span className="text-neutral-300">
            Crafted by <strong className="text-white font-medium">{RESTAURANT_INFO.conceptCreator}</strong> for{' '}
            <span className="text-[#f3e7c4] font-medium">{RESTAURANT_INFO.name}</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-[10px] bg-[#d4af37]/15 text-[#f3e7c4] px-2 py-0.5 rounded border border-[#d4af37]/30">
            Accra, Ghana
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={copyPitchSummary}
            className="text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
            title="Copy concept summary for pitch"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Camera className="w-3 h-3" />
                <span className="hidden sm:inline">Pitch Ready</span>
              </>
            )}
          </button>
          <a
            href={RESTAURANT_INFO.phoneDial}
            onClick={(e) => {
              e.preventDefault();
              onOpenCallModal();
            }}
            className="text-[#d4af37] hover:underline flex items-center gap-1 font-medium"
          >
            <Phone className="w-3 h-3" />
            <span>{RESTAURANT_INFO.phone}</span>
          </a>
          <button
            onClick={() => setIsDismissed(true)}
            className="text-neutral-500 hover:text-neutral-300 p-0.5 ml-1 transition-colors"
            aria-label="Hide bar"
            title="Hide concept banner for clean screenshots"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
