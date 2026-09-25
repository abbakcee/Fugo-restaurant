import React, { useState } from 'react';
import { Phone, MessageSquare, Clock, MapPin, X, Copy, Check, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  preferredParty?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  preferredParty,
  preferredDate,
  preferredTime,
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(RESTAURANT_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const dynamicWhatsAppMessage = encodeURIComponent(
    `Hello Fugo Bar & Restaurant, I'd like to reserve a table${
      preferredParty ? ` for ${preferredParty}` : ''
    }${preferredDate ? ` on ${preferredDate}` : ''}${preferredTime ? ` at ${preferredTime}` : ''}.`
  );
  const dynamicWhatsAppUrl = `https://wa.me/233533306391?text=${dynamicWhatsAppMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#121216] border border-[#d4af37]/30 rounded-2xl p-6 sm:p-7 shadow-2xl text-[#f5f2eb]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
            Table & Lounge Inquiries
          </span>
          <h3 className="text-2xl font-serif mt-1 text-[#f5f2eb]">
            Reserve at {RESTAURANT_INFO.shortName}
          </h3>
          <p className="text-xs text-neutral-400 mt-1.5 max-w-xs mx-auto">
            Reservations are arranged directly with our host team to ensure the best table placement for your night.
          </p>
        </div>

        {/* Primary Call Action */}
        <div className="space-y-3 mb-6">
          <a
            href={RESTAURANT_INFO.phoneDial}
            className="w-full flex items-center justify-center gap-3 py-3.5 px-5 bg-gradient-to-r from-[#d4af37] to-[#b38f28] text-[#0a0a0c] font-semibold rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-[#d4af37]/15"
          >
            <Phone className="w-5 h-5" />
            <span>Call {RESTAURANT_INFO.phone}</span>
          </a>

          <a
            href={dynamicWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 py-3 px-5 bg-[#1b1b22] border border-[#d4af37]/20 text-[#f5f2eb] font-medium rounded-xl hover:bg-[#252530] hover:border-[#d4af37]/40 active:scale-[0.98] transition-all text-sm"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Inquire via WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 ml-auto" />
          </a>
        </div>

        {/* Copy Phone helper */}
        <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0c] border border-neutral-800 text-xs mb-5">
          <div className="flex items-center gap-2">
            <span className="text-neutral-400">Direct Line:</span>
            <span className="font-mono font-medium text-[#d4af37]">{RESTAURANT_INFO.phone}</span>
          </div>
          <button
            onClick={handleCopy}
            className="text-neutral-300 hover:text-white flex items-center gap-1 py-1 px-2.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Operating Hours & Location Meta */}
        <div className="border-t border-neutral-800/80 pt-4 space-y-2 text-xs text-neutral-400">
          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>Operating Hours: <strong className="text-neutral-200">{RESTAURANT_INFO.hours}</strong></span>
          </div>
          <div className="flex items-center gap-2.5">
            <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span>{RESTAURANT_INFO.address}, Accra</span>
          </div>
        </div>

        {/* Concept note footer */}
        <div className="mt-5 text-center">
          <span className="text-[11px] text-neutral-500">
            Concept Presentation by {RESTAURANT_INFO.conceptCreator}
          </span>
        </div>
      </div>
    </div>
  );
};
