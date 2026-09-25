import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

interface ImageLightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const nextItem = items[(currentIndex + 1) % items.length];
        onSelect(nextItem);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = items.findIndex((i) => i.id === item.id);
        const prevItem = items[(currentIndex - 1 + items.length) % items.length];
        onSelect(prevItem);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onSelect]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevItem = items[(currentIndex - 1 + items.length) % items.length];
    onSelect(prevItem);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextItem = items[(currentIndex + 1) % items.length];
    onSelect(nextItem);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-20 text-neutral-300 hover:text-white p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 transition-all"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {items.length > 1 && (
        <button
          onClick={handlePrev}
          className="absolute left-4 z-20 text-neutral-300 hover:text-white p-3 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 transition-all hidden sm:flex items-center justify-center"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {items.length > 1 && (
        <button
          onClick={handleNext}
          className="absolute right-4 z-20 text-neutral-300 hover:text-white p-3 rounded-full bg-black/60 border border-white/10 hover:bg-black/80 transition-all hidden sm:flex items-center justify-center"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Modal content */}
      <div
        className="relative max-w-4xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-xl overflow-hidden border border-[#d4af37]/30 shadow-2xl bg-[#0a0a0c]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />
        </div>

        <div className="mt-4 text-center px-4 max-w-lg">
          <div className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
            {item.category}
          </div>
          <h4 className="text-lg sm:text-xl font-serif text-[#f5f2eb] mt-1">{item.title}</h4>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">{item.caption}</p>
          <div className="text-[11px] text-neutral-500 mt-2">
            {currentIndex + 1} of {items.length} · Fugo Bar & Restaurant Concept
          </div>
        </div>
      </div>
    </div>
  );
};
