'use client';

import type { SectionId } from '@/components/section';
import { useEffect, useState } from 'react';

/**
 * The hook determines which section of the page is most visible based on scroll position.
 * It updates the active section as the user scrolls through the page.
 *
 * The sections monitored are:
 * - 'about'
 * - 'experience'
 * - 'projects'
 *
 * If no section is highly visible, it defaults to the 'about' section.
 *
 * @returns {SectionId} The ID of the currently active section based on scroll position.
 */

export const useScrollPosition = (): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 0 && window.scrollY <= 100) {
        setActiveSection('about');
        return;
      }

      const sections: SectionId[] = ['about', 'experience', 'projects'];
      let currentSection: SectionId | null = null;
      let highestVisibleRatio = 0;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionHeight = rect.height;
        const visibleHeight =
          Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
        const visibleRatio =
          visibleHeight > 0 ? visibleHeight / sectionHeight : 0;

        if (visibleRatio > highestVisibleRatio) {
          highestVisibleRatio = visibleRatio;
          currentSection = id;
        } else if (visibleRatio >= 0.7) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection || 'about');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
};
