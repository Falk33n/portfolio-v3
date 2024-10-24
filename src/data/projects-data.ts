import type { CardProps } from '@/components/section';

export const projectsData: CardProps[] = [
  {
    img: {
      src: '/gello.png',
      alt: 'test alt',
      width: 200,
      height: 200,
    },
    title: 'Test',
    description:
      'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ',
    ariaLabel: 'Aria testing',
    href: '',
    techStack: [{ariaLabel: 'test aria', tech: 'test'}],
  },
];
