import { Badge } from '@/components/section';
import { cn } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { WiDirectionUpRight } from 'react-icons/wi';

export type CardProps = {
  title: string;
  img?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  timeline?: string;
  company?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  href: string;
  description: string;
  srText: string;
  techStack: string[];
};

export const Card = ({
  title,
  timeline,
  company,
  href,
  description,
  srText,
  techStack,
  target = '_self',
  img,
}: CardProps) => {
  return (
    <div className='lg:relative lg:z-[1] flex sm:flex-row flex-col sm:justify-between sm:items-baseline gap-1.5 lg:gap-5 lg:hover:shadow-md lg:focus-within:shadow-md lg:p-4 lg:pb-5 lg:border lg:border-transparent lg:focus-within:border-border lg:hover:border-border rounded-md break-words transition-all group'>
      <Link
        href={href}
        aria-hidden
        target='_blank'
        tabIndex={-1}
        className='lg:block z-[3] absolute inset-0 hidden size-full'
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
        <h6 className='sm:w-[22.5%] text-accent-foreground text-xs uppercase'>
          {timeline}
        </h6>
      )}
      <div className='flex flex-col gap-1.5 sm:w-[78.5%]'>
        <h3>
          <Link
            href={href}
            className='lg:group-hover:text-primary inline-flex rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:focus-visible:text-primary hover:text-primary transition-colors focus-visible:outline-none'
            target='_blank'
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
            <span className='sr-only'>{srText}</span>
          </Link>
        </h3>
        <p className='text-pretty text-sm leading-normal'>{description}</p>
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
