import type { NavIconProps, NavLinkProps } from '@/components/sidebar';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';

export const navLinkData: NavLinkProps[] = [
  {
    href: '#about',
    ariaLabel: 'Skip to the about section',
    htmlFor: 'about',
    children: 'About',
  },
  {
    href: '#experience',
    ariaLabel: 'Skip to the experience section',
    htmlFor: 'experience',
    children: 'Experience',
  },
  {
    href: '#projects',
    ariaLabel: 'Skip to the projects section',
    htmlFor: 'projects',
    children: 'Projects',
  },
];

export const navIconData: NavIconProps[] = [
  {
    href: 'https://github.com/falk33n',
    ariaLabel: 'Visit my GitHub profile, opens in a new tab',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/timfalkwebbdev',
    ariaLabel: 'Visit my LinkedIn profile, opens in a new tab',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:tim.falk00@gmail.com',
    target: undefined,
    ariaLabel: 'Send an email to me',
    Icon: MdMail,
  },
  {
    href: '',
    ariaLabel: 'View my résumé in PDF-format, opens in a new tab',
    Icon: IoDocumentText,
  },
];
