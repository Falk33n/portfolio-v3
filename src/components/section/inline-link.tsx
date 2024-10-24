import { cn } from '@/lib';
import Link from 'next/link';
import type { ReactNode } from 'react';

type InlineLinkProps = {
  href: string;
  srText: string;
  children: ReactNode;
  target?: '_blank' | '_self' | '_parent' | '_top';
  className?: string;
};

export const InlineLink = ({
  href,
  srText,
  children,
  className,
  target = '_blank',
}: InlineLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary underline underline-offset-2 transition-colors focus-visible:outline-none',
        className
      )}
      target={target}
    >
      <span aria-hidden>{children}</span>
      <span className='sr-only'>{srText}</span>
    </Link>
  );
};

InlineLink.displayName = 'InlineLink';
