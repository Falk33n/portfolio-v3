import Link from 'next/link';
import type { IconType } from 'react-icons';

type NavLinkProps = {
  href: string;
  srText: string;
  Icon: IconType;
  target?: '_blank' | '_self' | '_parent' | '_top';
};

export const NavLink = ({
  href,
  srText,
  Icon,
  target = '_blank',
}: NavLinkProps) => {
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

NavLink.displayName = 'NavLink';
