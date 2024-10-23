import { cn } from '@/lib';
import type { ReactNode } from 'react';

export type SectionId = 'about' | 'experience' | 'projects';

type SectionProps = {
  id: SectionId;
  children: ReactNode;
};

const getAriaLabel = (id: SectionId) => {
  switch (id) {
    case 'projects':
      return 'Projects section.';
    case 'about':
      return 'About section.';
    default:
      return 'Experience section.';
  }
};

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section
      id={id}
      aria-label={getAriaLabel(id)}
      className={cn(id === 'about' ? 'lg:px-4' : '', 'scroll-mt-20')}
    >
      <h3 className='top-0 sticky lg:hidden bg-background/75 backdrop-blur-sm mb-4 py-4 font-bold text-sm uppercase'>
        {id}
      </h3>
      {children}
    </section>
  );
};

Section.displayName = 'Section';
