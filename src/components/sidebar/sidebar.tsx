import { NavIcon, NavLink } from '@/components/sidebar';
import { navIconData, navLinkData } from '@/data';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <nav
      aria-label='Main navigation.'
      className='lg:top-24 lg:left-0 lg:sticky flex flex-col lg:flex-shrink-0 lg:flex-1 gap-7 lg:gap-16 lg:w-full max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[50%] lg:h-[calc(100vh-12rem)]'
    >
      <Link
        href='#main-content'
        className='-top-1 md:top-4 -left-1 fixed bg-accent hover:bg-primary pt-3 md:pt-2 pr-4 pb-2 pl-5 rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-semibold text-accent-foreground text-sm hover:text-primary-foreground uppercase transition-all -translate-x-[200px] focus-visible:translate-x-0 focus-visible:outline-none'
      >
        <span aria-hidden>Skip to content</span>
        <span className='sr-only'>Skip to the main content.</span>
      </Link>
      <header className='flex flex-col gap-2.5'>
        <h1>
          <Link
            href='/'
            className='rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 font-extrabold text-4xl sm:text-5xl focus-visible:outline-none'
          >
            <span aria-hidden>Tim Falk</span>
            <span className='sr-only'>Go to the homepage.</span>
          </Link>
        </h1>
        <h3 className='font-semibold text-xl sm:text-2xl'>
          Junior Fullstack Developer
        </h3>
        <p className='lg:max-w-[80%]'>
          I create awesome, accessible websites with a focus on usability and
          seamless user experiences.
        </p>
      </header>
      <ul
        role='menu'
        className='lg:flex flex-col gap-2.5 hidden'
      >
        {navLinkData.map((data, i) => (
          <NavLink
            key={i}
            {...data}
          />
        ))}
      </ul>
      <ul
        className='flex flex-wrap lg:flex-1 items-center lg:items-end gap-5'
        role='menu'
      >
        {navIconData.map((data, i) => (
          <NavIcon
            key={i}
            {...data}
          />
        ))}
      </ul>
    </nav>
  );
};

Sidebar.displayName = 'Sidebar';
