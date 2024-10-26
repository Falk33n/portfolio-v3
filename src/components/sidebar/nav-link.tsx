'use client';

import type { SectionId } from '@/components/section';
import { useScrollPosition } from '@/hooks';
import { cn } from '@/lib';
import Link from 'next/link';
import type { ReactNode } from 'react';

export type NavLinkProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  htmlFor: SectionId;
};

export const NavLink = ({
  href,
  ariaLabel,
  children,
  htmlFor,
}: NavLinkProps) => {
  const activeSection = useScrollPosition();
  const isCurrent = activeSection === htmlFor;

  return (
    <Link
      href={href}
      className={cn(
        'inline-flex w-fit relative before:relative before:left-0 py-2 items-center gap-6 before:bg-foreground/50 rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 before:w-8 before:h-px font-semibold before:rounded-full text-foreground/70 text-xs hover:text-foreground focus-visible:text-foreground uppercase transition-colors focus-visible:outline-none before:transition-all',
        'data-[is-current=true]:before:bg-foreground data-[is-current=true]:before:w-20 data-[is-current=true]:before:h-[2px] data-[is-current=true]:text-foreground hover:before:bg-foreground focus-visible:before:bg-foreground hover:before:w-20 focus-visible:before:w-20 hover:before:h-[2px] focus-visible:before:h-[2px]'
      )}
      data-is-current={isCurrent}
      aria-label={ariaLabel}
      aria-current={isCurrent}
    >
      {children}
    </Link>
  );
};

NavLink.displayName = 'NavLink';
