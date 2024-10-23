import type { NavIconProps, NavLinkProps } from '@/components/sidebar';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import { MdMail } from 'react-icons/md';

export const navLinkData: NavLinkProps[] = [
  {
    href: '#about',
    srText: 'Go to about me.',
    describes: 'about',
    children: 'About',
  },
  {
    href: '#experience',
    srText: 'Go to my experience.',
    describes: 'experience',
    children: 'Experience',
  },
  {
    href: '#projects',
    srText: 'Go to my projects.',
    describes: 'projects',
    children: 'Projects',
  },
];

export const navIconData: NavIconProps[] = [
  {
    href: 'https://github.com/falk33n',
    srText: 'Go to my GitHub page.',
    Icon: FaGithub,
  },
  {
    href: 'https://www.linkedin.com/in/timfalkwebbdev',
    srText: 'Go to my LinkedIn page.',
    Icon: FaLinkedin,
  },
  {
    href: 'mailto:tim.falk00@gmail.com',
    target: '_self',
    srText: 'Send an email to me.',
    Icon: MdMail,
  },
  {
    href: '',
    srText: 'Go to my résumé.',
    Icon: IoDocumentText,
  },
];
