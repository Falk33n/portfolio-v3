import { InlineLink, Section } from '@/components/section';

export const About = () => {
  return (
    <Section id='about'>
      <p>
        I started my web development journey in 2023 and quickly grew passionate
        about it. While studying at{' '}
        <InlineLink
          href='https://www.tucsweden.se/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk1MssazM3SpAeBeotKwLmbpMmzpbxSW3qUSrjtlS1wX5PbkajQqCD8aAo9jEALw_wcB'
          srText="Go to TUC University College's website."
        >
          TUC University College
        </InlineLink>{' '}
        in Jönköping, I earned top grades. During my first internship, I
        discovered the{' '}
        <InlineLink
          href='https://create.t3.gg/en/introduction'
          srText="Go to Next T3 Stack's website."
        >
          Next T3 Stack
        </InlineLink>
        , fueling my interest in TypeScript and full-stack development.
      </p>
      <p className='my-3.5'>
        I focus on building accessible, user-friendly websites. I&apos;m
        creating a component library to speed up design and improve
        accessibility. Noticing that accessibility is often overlooked, I&apos;m
        also learning more about{' '}
        <InlineLink
          href='https://www.w3.org/WAI/standards-guidelines/#wcag3'
          srText="Go to WCAG's website."
        >
          WCAG
        </InlineLink>{' '}
        in my free time.
      </p>
      <p>
        When I&apos;m not working on creating websites or studying, I usually go
        for a walk in the forest, build furniture, or explore a world full of
        blocks and creepers.
      </p>
    </Section>
  );
};

About.displayName = 'About';
