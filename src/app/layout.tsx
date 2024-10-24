import { Footer } from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.scss';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'Tim Falks Portfolio | Full-Stack Developer',
  description:
    'Tim Falk is a full-stack developer showcasing expertise in both front-end and back-end development with technologies like React, TypeScript, Node.js, tRPC, .NET and Prisma.',
  keywords:
    'Tim Falk, full-stack developer, web developer, React, Node.js, TypeScript, .NET, C#, Next.js, Tailwind CSS, Prisma, tRPC',
  openGraph: {
    type: 'website',
    url: 'https://timfalk.dev',
    title: "Tim Falk's Full-Stack Developer Portfolio",
    description:
      "Explore Tim Falk's full-stack development projects, highlighting expertise in front-end (React, Next.js) and back-end (Node.js, Prisma, tRPC, .NET).",
    images: [
      {
        url: '/images/authors-body.png',
        width: 356,
        height: 701,
        alt: "Tim Falk's Full-Stack Developer Portfolio",
      },
    ],
    siteName: 'Tim Falk Full-Stack Developer Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@falk33n',
    title: "Tim Falk's Full-Stack Developer Portfolio",
    description:
      "Check out Tim Falk's portfolio showcasing full-stack web development expertise in React, Node.js, TypeScript, .NET, Prisma and more.",
    images: '/images/authors-body.png',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className='scroll-smooth'
    >
      <head>
        <link
          rel='canonical'
          href='https://timfalk.dev'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicon/favicon-48x48.png'
          sizes='48x48'
        />
        <link
          rel='icon'
          type='image/svg+xml'
          href='/favicon/favicon.svg'
        />
        <link
          rel='shortcut icon'
          href='/favicon/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <meta
          name='apple-mobile-web-app-title'
          content='falk33n'
        />
        <link
          rel='manifest'
          href='/favicon/site.webmanifest'
        />
      </head>
      <body
        className={`${inter.className} antialiased lg:flex lg:flex-wrap lg:justify-between lg:gap-4 w-full px-6 md:px-12 lg:px-20 py-12 md:py-20 lg:py-24 xl:w-[1280px] xl:mx-auto`}
      >
        <Sidebar />
        <main
          id='main-content'
          className='flex flex-col lg:flex-shrink-0 lg:flex-1 gap-16 my-20 lg:mt-0 lg:w-1/2'
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
