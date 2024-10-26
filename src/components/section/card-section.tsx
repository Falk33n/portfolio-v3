import {
  Card,
  type CardProps,
  Section,
  type SectionId,
} from '@/components/section';
import { cn } from '@/lib';
import Link from 'next/link';
import { WiDirectionUpRight } from 'react-icons/wi';

type CardSectionProps = {
  id: SectionId;
  dataArray: CardProps[];
  link: {
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
    ariaLabel: string;
    text: string;
  };
};

export const CardSection = ({ id, dataArray, link }: CardSectionProps) => {
  return (
    <Section id={id}>
      <div className='flex flex-col gap-12'>
        {dataArray.map((data, i) => (
          <Card
            key={i}
            {...data}
          />
        ))}
        <Link
          href={link.href}
          className='lg:group-hover:text-primary lg:mx-4 rounded focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 w-fit lg:focus-visible:text-primary hover:text-primary transition-colors focus-visible:outline-none'
          target={link.target}
          aria-label={link.ariaLabel}
        >
          <span
            aria-hidden
            className='font-semibold capitalize'
          >
            {link.text}
            {''}
            <WiDirectionUpRight
              className={cn(
                'inline size-6',
                link.target === '_self' && 'rotate-45'
              )}
            />
          </span>
        </Link>
      </div>
    </Section>
  );
};

CardSection.displayName = 'CardSection';
