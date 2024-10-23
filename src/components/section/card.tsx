import { Badge } from '@/components/section';
import Link from 'next/link';
import { WiDirectionUpRight } from 'react-icons/wi';

export type CardProps = {
  jobTitle: string;
  timeline: string;
  company: string;
  href: string;
  description: string;
  srText: string;
  techStack: string[];
};

export const Card = ({
  jobTitle,
  timeline,
  company,
  href,
  description,
  srText,
  techStack,
}: CardProps) => {
  return (
    <div className='lg:relative lg:z-[1] flex md:flex-row flex-col md:justify-between md:items-baseline gap-1.5 lg:gap-5 lg:hover:shadow-md lg:focus-within:shadow-md lg:p-4 lg:pb-5 lg:border lg:border-transparent lg:focus-within:border-border lg:hover:border-border rounded-md transition-all group'>
      <Link
        href={href}
        aria-hidden
        target='_blank'
        tabIndex={-1}
        className='lg:block z-[3] absolute inset-0 hidden size-full'
      />
      <h6 className='md:w-[22.5%] text-accent-foreground text-xs uppercase'>
        {timeline}
      </h6>
      <div className='flex flex-col gap-1.5 md:w-[78.5%]'>
        <h3>
          <Link
            href={href}
            className='rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:text-primary transition-colors focus-visible:outline-none lg:group-hover:text-primary lg:focus-visible:text-primary'
            target='_blank'
          >
            <span
              aria-hidden
              className='font-semibold'
            >
              {jobTitle} • {company}
              {''}
              <WiDirectionUpRight className='inline size-5' />
            </span>
            <span className='sr-only'>{srText}</span>
          </Link>
        </h3>
        <p className='text-sm leading-normal'>{description}</p>
        <ul
          className='flex flex-wrap gap-2 pt-2'
          aria-label='Technologies used.'
        >
          {techStack.map((tech, i) => (
            <Badge key={i}>{tech}</Badge>
          ))}
        </ul>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
