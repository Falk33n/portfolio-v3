import { NavLink } from '@/components';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';

export const Sidebar = () => {
  return (
    <nav
      aria-label='Main navigation.'
      className='flex flex-col gap-7 max-w-[300px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]'
    >
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
        <p>
          I create awesome, accessible websites with a focus on usability and
          seamless user experiences.
        </p>
      </header>
      <ul
        className='flex flex-wrap items-center gap-6'
        role='menu'
      >
        <NavLink
          Icon={FaGithub}
          href='https://github.com/falk33n/'
          srText='Go to my GitHub page.'
        />
        <NavLink
          Icon={FaLinkedin}
          href='https://www.linkedin.com/in/timfalkwebbdev/'
          srText='Go to my LinkedIn page.'
        />
        <NavLink
          Icon={MdMail}
          href='mailto:tim.falk00@gmail.com'
          srText='Send an email to me.'
          target='_self'
        />
        <NavLink
          Icon={IoDocumentText}
          href=''
          srText='Go to my resume.'
        />
      </ul>
    </nav>
  );
};

Sidebar.displayName = 'Sidebar';
