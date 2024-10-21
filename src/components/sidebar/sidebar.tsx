import { NavLink } from '@/components';
import { Github } from 'lucide-react';
import Link from 'next/link';

export const Sidebar = () => {
  return (
    <nav className='flex flex-col gap-y-6 px-6 py-10 w-full'>
      <header className='flex flex-col gap-y-2'>
        <h1>
          <Link
            href='/'
            className='font-extrabold text-4xl'
          >
            Tim Falk
          </Link>
        </h1>
        <h3 className='font-semibold text-lg'>Junior Fullstack Developer</h3>
        <p>
          I create awesome, accessible websites with a focus on usability and
          seamless user experiences.
        </p>
      </header>
      <ul
        className='flex items-center gap-x-2'
        role='menu'
      >
        <NavLink
          Icon={Github}
          href='https://github.com/falk33n'
          srText='Go to my GitHub page.'
        />
      </ul>
    </nav>
  );
};

Sidebar.displayName = 'Sidebar';
