'use client';

import { useEffect, useState } from 'react';

export type SectionId = 'about' | 'experience' | 'projects';

export const useScrollPosition = (id: SectionId) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(id);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const visibleHeight =
        Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      const visibleRatio =
        visibleHeight > 0 ? visibleHeight / sectionHeight : 0;

      setIsInView(visibleRatio >= 0.65);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [id]);

  return isInView;
};
