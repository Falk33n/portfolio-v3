import Link from 'next/link';
import type { IconType } from 'react-icons';

export type NavIconProps = {
  href: string;
  srText: string;
  Icon: IconType;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const NavIcon = ({
  href,
  srText,
  Icon,
  target = '_blank',
}: NavIconProps) => {
  return (
    <li role='menuitem'>
      <Link
        href={href}
        target={target}
        className='inline-flex bg-accent hover:bg-primary p-2.5 rounded-full hover:text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
      >
        <Icon
          aria-hidden
          className='size-5'
        />
        <span className='sr-only'>{srText}</span>
      </Link>
    </li>
  );
};

NavIcon.displayName = 'NavIcon';
