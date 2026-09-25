import React, { useState } from 'react';
import { Phone, BookOpen, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface MobileQuickBarProps {
  onOpenCallModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ onOpenCallModal }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      aria-label="Quick actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0a0c]/95 border-t border-[#d4af37]/30 backdrop-blur-xl transition-all duration-300 shadow-[0_-10px_30px_rgba(0,0,0,0.8)] pb-safe"
    >
      {/* Toggle button to collapse for clean screenshotting */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="w-full flex items-center justify-center py-1 text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#121218] border-b border-white/5 gap-1"
        aria-label={collapsed ? 'Show quick actions' : 'Minimize for screenshots'}
      >
        <span>{collapsed ? 'Quick Actions' : 'Fugo · Accra'}</span>
        {collapsed ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
      </button>

      {!collapsed && (
        <div className="px-3 py-2.5 max-w-lg mx-auto flex items-center gap-2">
          {/* Primary Action: Call to Reserve */}
          <button
            onClick={onOpenCallModal}
            className="flex-1 min-h-[44px] bg-gradient-to-r from-[#d4af37] to-[#b38f28] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-[#d4af37]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call to Reserve</span>
          </button>

          {/* Quick Menu anchor */}
          <a
            href="#menu"
            className="min-h-[44px] min-w-[44px] px-3 bg-[#15151c] border border-white/10 text-[#f5f2eb] rounded-xl flex items-center justify-center gap-1.5 text-xs font-medium active:scale-95 transition-transform"
            aria-label="View Menu"
          >
            <BookOpen className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[11px]">Menu</span>
          </a>

          {/* Quick Directions anchor */}
          <a
            href={RESTAURANT_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] min-w-[44px] px-3 bg-[#15151c] border border-white/10 text-[#f5f2eb] rounded-xl flex items-center justify-center gap-1.5 text-xs font-medium active:scale-95 transition-transform"
            aria-label="Open Map"
          >
            <Navigation className="w-4 h-4 text-[#d4af37]" />
            <span className="text-[11px]">Map</span>
          </a>
        </div>
      )}
    </aside>
  );
};
