import Link from 'next/link';
import type { IconType } from 'react-icons';

export type NavIconProps = {
  href: string;
  ariaLabel: string;
  Icon: IconType;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const NavIcon = ({
  href,
  ariaLabel,
  Icon,
  target = '_blank',
}: NavIconProps) => {
  return (
    <Link
      href={href}
      target={target}
      aria-label={ariaLabel}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className='inline-flex bg-accent hover:bg-primary p-2.5 rounded-full hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
    >
      <Icon
        aria-hidden
        className='size-5'
      />
    </Link>
  );
};

NavIcon.displayName = 'NavIcon';
