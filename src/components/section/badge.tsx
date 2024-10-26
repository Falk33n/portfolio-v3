import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  ariaLabel: string;
};

export const Badge = ({ children, ariaLabel }: BadgeProps) => {
  return (
    <li
      className='bg-accent px-3 py-1.5 rounded-full font-semibold text-accent-foreground text-xs transition-colors'
      aria-label={ariaLabel}
    >
      {children}
    </li>
  );
};

Badge.displayName = 'Badge';
