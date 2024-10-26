import { cn } from '@/lib';
import Link from 'next/link';
import type { ReactNode } from 'react';

type InlineLinkProps = {
  href: string;
  ariaLabel: string;
  children: ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
};

export const InlineLink = ({
  href,
  ariaLabel,
  children,
  className,
  target = '_blank',
}: InlineLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'inline rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary underline underline-offset-2 transition-colors focus-visible:outline-none inlineLink lg:relative lg:z-[5]',
        className
      )}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      target={target}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

InlineLink.displayName = 'InlineLink';
