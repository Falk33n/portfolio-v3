import type { SectionId } from '@/hooks';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

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
      <h3 className='lg:hidden mb-8 font-bold text-sm uppercase'>{id}</h3>
      {children}
    </section>
  );
};

Section.displayName = 'Section';
