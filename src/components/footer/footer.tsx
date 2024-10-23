import { InlineLink } from '@/components/section';

export const Footer = () => {
  return (
    <footer className='lg:flex lg:[flex-basis:100%] lg:justify-end lg:-mb-4'>
      <div className='lg:pr-4 lg:pl-6 lg:w-1/2 max-w-[370px] sm:max-w-[415px] md:max-w-[500px] lg:max-w-[50%]'>
        <p className='max-w-full lg:max-w-[400px] text-sm'>
          Created in{' '}
          <InlineLink
            href='https://code.visualstudio.com'
            srText="Go to Visual Studio's website."
          >
            VS Code
          </InlineLink>{' '}
          by me. Built using{' '}
          <InlineLink
            href='https://tailwindcss.com'
            srText="Go to Tailwind CSS's website."
          >
            Tailwind CSS
          </InlineLink>{' '}
          and{' '}
          <InlineLink
            href='https://nextjs.org'
            srText="Go to Next.js's website."
          >
            Next.js
          </InlineLink>{' '}
          , with colors from{' '}
          <InlineLink
            href='https://ui.shadcn.com'
            srText="Go to ShadCn's website."
          >
            ShadCn
          </InlineLink>{' '}
          . All text is set in the{' '}
          <InlineLink
            href='https://rsms.me/inter'
            srText="Go to Inter's website."
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
