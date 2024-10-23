import type { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
};

export const Badge = ({ children }: BadgeProps) => {
  return (
    <li className='bg-accent px-3 py-1.5 rounded-full font-semibold text-accent-foreground text-xs transition-colors'>
      {children}
    </li>
  );
};

Badge.displayName = 'Badge';
