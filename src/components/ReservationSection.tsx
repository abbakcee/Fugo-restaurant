import React, { useState } from 'react';
import { Phone, Navigation, Clock, MapPin, Sparkles, MessageSquare, Calendar, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  onOpenCallModalWithPrefill: (party: string, date: string, time: string) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  onOpenCallModalWithPrefill,
}) => {
  const [partySize, setPartySize] = useState('2 Guests');
  const [selectedDate, setSelectedDate] = useState('Tonight');
  const [selectedTime, setSelectedTime] = useState('8:00 PM');

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenCallModalWithPrefill(partySize, selectedDate, selectedTime);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Warm ambient wine/gold glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#4a121a]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#14141c] via-[#101016] to-[#0d0d12] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Table & Lounge Reservations</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#f5f2eb]">
              Plan your next night out.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-400 font-light">
              Reserve your table for casual evening dining, group celebrations, or late-night cocktails. Connect directly with our host team in Accra.
            </p>
          </div>

          {/* Quick Party Selector (Generates direct inquiry to restaurant without fake automated booking) */}
          <form onSubmit={handleInquiry} className="bg-[#0a0a0c]/80 border border-neutral-800 rounded-2xl p-5 sm:p-6 mb-8">
            <div className="text-xs uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>Quick Table Inquiry Assistant</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Party Size
                </label>
                <select
                  value={partySize}
                  onChange={(e) => setPartySize(e.target.value)}
                  className="w-full bg-[#14141a] border border-neutral-700 text-sm text-white rounded-xl px-3.5 py-2.5 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="1 Guest">1 Guest (Bar counter)</option>
                  <option value="2 Guests">2 Guests (Intimate table)</option>
                  <option value="3-4 Guests">3–4 Guests (Dining booth)</option>
                  <option value="5-8 Guests">5–8 Guests (Lounge banquette)</option>
                  <option value="8+ Guests (Event)">8+ Guests (Celebration)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Date
                </label>
                <select
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full bg-[#14141a] border border-neutral-700 text-sm text-white rounded-xl px-3.5 py-2.5 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="Tonight">Tonight</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Friday">This Friday Night</option>
                  <option value="This Saturday">This Saturday Night</option>
                  <option value="This Sunday">This Sunday</option>
                  <option value="Upcoming Date">Upcoming Date</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-neutral-400 mb-1.5 uppercase tracking-wider">
                  Preferred Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full bg-[#14141a] border border-neutral-700 text-sm text-white rounded-xl px-3.5 py-2.5 focus:border-[#d4af37] focus:outline-none"
                >
                  <option value="1:00 PM">1:00 PM (Lunch)</option>
                  <option value="6:00 PM">6:00 PM (Sunset)</option>
                  <option value="7:30 PM">7:30 PM (Dinner)</option>
                  <option value="8:30 PM">8:30 PM (Peak Dinner)</option>
                  <option value="10:00 PM">10:00 PM (Lounge & Cocktails)</option>
                  <option value="11:30 PM">11:30 PM (Late-Night Flow)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-500">
                Direct phone & WhatsApp verification ensures personal host confirmation.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#d4af37] hover:bg-[#e5c365] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
              >
                Inquire for {partySize}
              </button>
            </div>
          </form>

          {/* Key Facts & Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
            {/* Primary Call Action */}
            <div className="p-6 rounded-2xl bg-[#0e0e14] border border-[#d4af37]/20 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  Direct Line
                </div>
                <div className="text-3xl font-mono font-medium text-white mt-1">
                  {RESTAURANT_INFO.phone}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Speak directly with our front desk host daily from 08:00 to 02:00.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={RESTAURANT_INFO.phoneDial}
                  className="flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] to-[#b38f28] text-[#0a0a0c] font-semibold text-xs uppercase tracking-wider rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call to Reserve</span>
                </a>

                <a
                  href={RESTAURANT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 bg-[#1b1b22] border border-white/10 hover:border-[#d4af37]/40 text-white font-medium text-xs rounded-xl hover:bg-[#23232c] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Location & Directions */}
            <div className="p-6 rounded-2xl bg-[#0e0e14] border border-white/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  Location & Hours
                </div>
                <div className="text-base font-serif text-[#f5f2eb] mt-1 leading-snug">
                  {RESTAURANT_INFO.address}, Accra
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-2">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Hours: <strong>{RESTAURANT_INFO.hours}</strong></span>
                </div>
              </div>

              <a
                href={RESTAURANT_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-[#16161e] border border-neutral-700 hover:border-[#d4af37] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#d4af37]" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
