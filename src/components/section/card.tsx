import { Badge } from '@/components/section';
import { cn } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { WiDirectionUpRight } from 'react-icons/wi';

export type CardProps = {
  title: string;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  timeline?: ReactNode;
  company?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  href: string;
  description: ReactNode;
  ariaLabel: string;
  techStack: { ariaLabel: string; tech: string }[];
};

export const Card = ({
  title,
  timeline,
  company,
  href,
  description,
  ariaLabel,
  techStack,
  target = '_self',
  img,
}: CardProps) => {
  return (
    <div className='lg:relative flex sm:flex-row flex-col sm:justify-between sm:items-baseline gap-1.5 lg:gap-5 lg:hover:shadow-md lg:focus-within:shadow-md lg:p-4 lg:pb-5 lg:border lg:border-transparent lg:focus-within:border-border lg:hover:border-border rounded-md break-words transition-all group'>
      <Link
        href={href}
        aria-hidden
        target='_blank'
        tabIndex={-1}
        className='lg:block absolute inset-0 hidden size-full'
      />
      {img && (
        <figure className='md:w-[22.5%]'>
          <Image
            className='w-fit text-accent-foreground text-xs uppercase'
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        </figure>
      )}
      {timeline && (
        <h4 className='sm:w-[22.5%] text-accent-foreground text-xs uppercase'>
          {timeline}
        </h4>
      )}
      <div className='flex flex-col gap-1.5 sm:w-[78.5%]'>
        <h5>
          <Link
            href={href}
            className='lg:group-[:hover:not(:has(.inlineLink:hover))]:text-primary inline-flex rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:focus-visible:text-primary hover:text-primary transition-colors focus-visible:outline-none'
            target='_blank'
            aria-label={ariaLabel}
          >
            <span
              aria-hidden
              className='font-semibold text-pretty'
            >
              {title}{' '}
              <span
                aria-hidden
                className='inline'
              >
                {company && <>{`@ ${company}`}</>}{' '}
                <WiDirectionUpRight
                  aria-hidden
                  className={cn(
                    'inline size-6',
                    target === '_self' && 'rotate-45'
                  )}
                />
              </span>
            </span>
          </Link>
        </h5>
        <div className='flex flex-col gap-2 text-pretty text-sm leading-normal'>
          {description}
        </div>
        <ul
          className='flex flex-wrap gap-2 pt-2'
          aria-label='Technologies used.'
        >
          {techStack.map((data, i) => (
            <Badge
              ariaLabel={data.ariaLabel}
              key={i}
            >
              {data.tech}
            </Badge>
          ))}
        </ul>
      </div>
    </div>
  );
};

Card.displayName = 'Card';
