import Link from 'next/link';
import type { ComponentPropsWithoutRef, ElementType } from 'react';

type NavLinkProps = {
  href: string;
  srText: string;
  Icon: ElementType<ComponentPropsWithoutRef<'svg'>>;
};

export const NavLink = ({ href, srText, Icon }: NavLinkProps) => {
  return (
    <li role='menuitem'>
      <Link
        href={href}
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
