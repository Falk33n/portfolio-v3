import type { SectionId } from '@/hooks';
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
    >
      <h3 className='lg:hidden mb-8 font-bold text-sm uppercase'>{id}</h3>
      {children}
    </section>
  );
};

Section.displayName = 'Section';
