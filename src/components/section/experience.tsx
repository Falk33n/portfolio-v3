import { Card, Section } from '@/components/section';
import { experienceData } from '@/lib';
import Link from 'next/link';
import { WiDirectionUpRight } from 'react-icons/wi';

export const Experience = () => {
  return (
    <Section id='experience'>
      <div className='flex flex-col gap-12'>
        {experienceData.map((data, i) => (
          <Card
            key={i}
            {...data}
          />
        ))}
        <Link
          href=''
          className='lg:group-hover:text-primary mx-4 rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit lg:focus-visible:text-primary hover:text-primary transition-colors focus-visible:outline-none'
          target='_blank'
        >
          <span
            aria-hidden
            className='font-semibold'
          >
            View full Résumé
            {''}
            <WiDirectionUpRight className='inline size-5' />
          </span>
          <span className='sr-only'>Go to my full Résumé.</span>
        </Link>
      </div>
    </Section>
  );
};

Experience.displayName = 'Experience';
