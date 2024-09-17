'use client';

import '@/app/ui/global.css';
import Nav from '@/components/nav/nav';
import { opensans } from '@/app/ui/fonts';
import { ThemeProvider } from '@/context/ThemeContext';


export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="fr" className='transition-all duration-400'>
      <head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Portfolio de Mael Belliard. Développeur Full Stack"/>
        <meta name="keywords" content="développeur, fullstack, frontend, backend, junior"/>
        <meta name="author" content="Mael Belliard"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Portfolio | Mael</title>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
        <body className={`${opensans.className} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50`}>
          <ThemeProvider>
            <Nav />
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}