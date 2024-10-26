import { InlineLink, type CardProps } from '@/components/section';

export const experienceData: CardProps[] = [
  {
    timeline: (
      <>
        <time dateTime='2023-08'>
          <span className='sr-only'>August</span> 2023
        </time>
        {' — '} Present
      </>
    ),
    title: 'Web Developer, Student',
    company: 'TUC University College',
    description: (
      <>
        <p>
          By <time dateTime='2025-04'>April 2025</time>, I will have completed
          my degree, gaining strong skills in web development, teamwork, and
          communication. At{' '}
          <InlineLink
            href='https://www.tucsweden.se/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk1MssazM3SpAeBeotKwLmbpMmzpbxSW3qUSrjtlS1wX5PbkajQqCD8aAo9jEALw_wcB'
            ariaLabel='TUC University College, Visit their swedish website, opens in a new tab'
          >
            TUC University College
          </InlineLink>
          , I developed a passion for creating user-friendly websites and
          excelled in courses like{' '}
          <InlineLink
            href='https://html.spec.whatwg.org'
            ariaLabel='HyperText Markup Language, a programming language, Visit their website, opens in a new tab'
          >
            HTML
          </InlineLink>
          ,{' '}
          <InlineLink
            href='https://www.w3.org/Style/CSS/Overview.en.html'
            ariaLabel='Cascading Style Sheets, a design programming language, Visit their website, opens in a new tab'
          >
            CSS
          </InlineLink>
          ,{' '}
          <InlineLink
            href='https://www.javascript.com'
            ariaLabel='JavaScript, a programming language, Visit their website, opens in a new tab'
          >
            JavaScript
          </InlineLink>
          ,{' '}
          <InlineLink
            href='https://dotnet.microsoft.com/en-us'
            ariaLabel='.NET, a C# framework, Visit their website, opens in a new tab'
          >
            .NET
          </InlineLink>
          , UX design, and Agile methods.
        </p>
        <p>
          These experiences, along with a completed internship and an upcoming
          one, have prepared me for a successful career in web development.
        </p>
      </>
    ),
    ariaLabel:
      'I am a Web developer student at TUC University College. Visit their website, opens in a new tab',
    href: 'https://www.tucsweden.se/?gad_source=1&gclid=Cj0KCQjwmt24BhDPARIsAJFYKk1MssazM3SpAeBeotKwLmbpMmzpbxSW3qUSrjtlS1wX5PbkajQqCD8aAo9jEALw_wcB',
    target: '_blank',
    techStack: [
      { ariaLabel: 'React, a JavaScript framework', tech: 'React' },
      { ariaLabel: 'Angular, a JavaScript framework', tech: 'Angular' },
      { ariaLabel: 'Next.js, a React framework', tech: 'Next.js' },
      {
        ariaLabel: 'TypeScript, a typed extension of JavaScript',
        tech: 'TypeScript',
      },
      { ariaLabel: 'Git, a version control system', tech: 'Git' },
      { ariaLabel: 'Scrum, a project management method', tech: 'Scrum' },
      { ariaLabel: 'Agile, a method of project management', tech: 'Agile' },
      { ariaLabel: '.NET, a C# framework', tech: '.NET' },
      { ariaLabel: 'C#, a programming language', tech: 'C#' },
      { ariaLabel: 'Razor Pages, a C# framework', tech: 'Razor Pages' },
      {
        ariaLabel: 'Umbraco, a .NET content management solution',
        tech: 'Umbraco',
      },
      {
        ariaLabel:
          'Accessibility, a standard to make the website available for people with disabilities',
        tech: 'Accessibility',
      },
      {
        ariaLabel: 'WordPress, a PHP content management solution',
        tech: 'WordPress',
      },
      { ariaLabel: 'Figma, a design tool', tech: 'Figma' },
    ],
  },
  {
    timeline: (
      <>
        <time dateTime='2024-04'>
          April <span className='sr-only'>2024</span>
        </time>
        {' — '} <time dateTime='2024-06'>June 2024</time>
      </>
    ),
    title: 'Fullstack, Internship',
    company: 'Combitech',
    description: (
      <>
        <p>
          I collaborated with another intern to develop a chatbot similar to{' '}
          <InlineLink
            href='https://chatgpt.com'
            ariaLabel='ChatGPT, a chatbot, Visit their website, opens in a new tab'
          >
            ChatGPT
          </InlineLink>
          . I handled the entire frontend, including managing chat logs,
          formatting responses, and creating an &apos;Agent Creator&apos; that
          customizes bots based on user input. I also assisted with backend
          troubleshooting and gained experience with{' '}
          <InlineLink
            href='https://www.docker.com'
            ariaLabel='Docker, a container developing platform, Visit their website, opens in a new tab'
          >
            Docker
          </InlineLink>{' '}
          and{' '}
          <InlineLink
            href='https://dotnet.microsoft.com/en-us'
            ariaLabel='.NET, a C# framework, Visit their website, opens in a new tab'
          >
            .NET
          </InlineLink>
          .
        </p>
      </>
    ),
    ariaLabel:
      'I had an intership at Combitech as a Fullstack developer, Visit their website, opens in a new tab',
    href: 'https://www.combitech.se',
    target: '_blank',
    techStack: [
      { ariaLabel: 'Next.js, a React framework', tech: 'Next.js' },
      { ariaLabel: 'React, a JavaScript framework', tech: 'React' },
      {
        ariaLabel: 'Tailwind CSS, a utility-first CSS framework',
        tech: 'Tailwind CSS',
      },
      { ariaLabel: 'Docker, a container developing platform', tech: 'Docker' },
      { ariaLabel: 'ShadCn, a React component library', tech: 'ShadCn' },
      {
        ariaLabel: 'TypeScript, a typed extension of JavaScript',
        tech: 'TypeScript',
      },
      { ariaLabel: 'Git, a version control system', tech: 'Git' },
      { ariaLabel: 'Scrum, a project management method', tech: 'Scrum' },
      { ariaLabel: 'Agile, a method of project management', tech: 'Agile' },
      { ariaLabel: '.NET, a C# framework', tech: '.NET' },
      { ariaLabel: 'C#, a programming language', tech: 'C#' },
      {
        ariaLabel:
          'Accessibility, a standard to make the website available for people with disabilities',
        tech: 'Accessibility',
      },
    ],
  },
];
