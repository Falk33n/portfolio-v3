import { InlineLink } from '@/components/section';

export const Footer = () => {
  return (
    <footer className='lg:flex lg:[flex-basis:100%] lg:justify-end lg:-mb-4'>
      <div className='lg:pr-4 lg:pl-6 lg:w-1/2 max-w-[370px] sm:max-w-[415px] md:max-w-[500px] lg:max-w-[50%]'>
        <p className='max-w-full lg:max-w-[400px] text-sm'>
          Created in{' '}
          <InlineLink
            href='https://code.visualstudio.com'
            ariaLabel='VS Code, Visit the Visual Studio website, a code editor, opens in a new tab'
          >
            VS Code
          </InlineLink>{' '}
          by me. Built using{' '}
          <InlineLink
            href='https://tailwindcss.com'
            ariaLabel='Tailwind CSS, Visit the Tailwind CSS website, a utility-first CSS framework, opens in a new tab'
          >
            Tailwind CSS
          </InlineLink>{' '}
          and{' '}
          <InlineLink
            href='https://nextjs.org'
            ariaLabel='Next.js, Visit the Next.js website, a React framework, opens in a new tab'
          >
            Next.js
          </InlineLink>{' '}
          , with colors from{' '}
          <InlineLink
            href='https://ui.shadcn.com'
            ariaLabel='ShadCn, Visit the ShadCn website, a component library, opens in a new tab'
          >
            ShadCn
          </InlineLink>{' '}
          . All text is set in the{' '}
          <InlineLink
            href='https://rsms.me/inter'
            ariaLabel='Inter, Visit the Inter typeface website, opens in a new tab'
          >
            Inter
          </InlineLink>{' '}
          typeface.
        </p>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
