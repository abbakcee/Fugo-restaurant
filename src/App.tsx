/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PitchConceptBar } from './components/PitchConceptBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { MenuPreview } from './components/MenuPreview';
import { ExperienceSection } from './components/ExperienceSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { LocationSection } from './components/LocationSection';
import { InstagramSection } from './components/InstagramSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { CallModal } from './components/CallModal';
import { ImageLightboxModal } from './components/ImageLightboxModal';
import { GALLERY_ITEMS } from './data/restaurantData';
import { GalleryItem } from './types';

export default function App() {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [partyPrefill, setPartyPrefill] = useState<string | undefined>(undefined);
  const [datePrefill, setDatePrefill] = useState<string | undefined>(undefined);
  const [timePrefill, setTimePrefill] = useState<string | undefined>(undefined);

  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenCallModal = () => {
    setPartyPrefill(undefined);
    setDatePrefill(undefined);
    setTimePrefill(undefined);
    setCallModalOpen(true);
  };

  const handleOpenCallModalWithPrefill = (party: string, date: string, time: string) => {
    setPartyPrefill(party);
    setDatePrefill(date);
    setTimePrefill(time);
    setCallModalOpen(true);
  };

  const handleOpenLightbox = (item: GalleryItem) => {
    setActiveLightboxItem(item);
  };

  const handleOpenExperienceImage = (
    image: string,
    title: string,
    category: string,
    caption: string
  ) => {
    const customItem: GalleryItem = {
      id: 'custom-' + Date.now(),
      title,
      category: category as any,
      image,
      aspect: 'aspect-[16/9]',
      caption,
    };
    setActiveLightboxItem(customItem);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f5f2eb] selection:bg-[#d4af37]/30 selection:text-[#f5f2eb] pb-16 md:pb-0">
      {/* Concept Pitch Banner */}
      <PitchConceptBar onOpenCallModal={handleOpenCallModal} />

      {/* Top 3-Zone Sticky Navigation */}
      <Navbar onOpenCallModal={handleOpenCallModal} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenCallModal={handleOpenCallModal} />

        {/* 2. About / Brand Section */}
        <AboutSection />

        {/* 3. Menu Preview Section */}
        <MenuPreview onOpenCallModal={handleOpenCallModal} />

        {/* 4. Experience Section */}
        <ExperienceSection
          onOpenCallModal={handleOpenCallModal}
          onOpenImage={handleOpenExperienceImage}
        />

        {/* 5. Gallery Section */}
        <GallerySection onSelectItem={handleOpenLightbox} />

        {/* 6. Reservation / Contact Section */}
        <ReservationSection
          onOpenCallModalWithPrefill={handleOpenCallModalWithPrefill}
        />

        {/* 7. Location Section */}
        <LocationSection />

        {/* 8. Instagram Section */}
        <InstagramSection />
      </main>

      {/* Footer */}
      <Footer onOpenCallModal={handleOpenCallModal} />

      {/* Mobile-first Thumb Ergonomics Quick Bar */}
      <MobileQuickBar onOpenCallModal={handleOpenCallModal} />

      {/* Direct Call & Table Inquiry Modal */}
      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        preferredParty={partyPrefill}
        preferredDate={datePrefill}
        preferredTime={timePrefill}
      />

      {/* Image Lightbox Modal */}
      <ImageLightboxModal
        item={activeLightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </div>
  );
}
