import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            const isDarkMode = localStorage.theme === 'dark' || (!('theme' in localStorage) && prefersDark);

            document.documentElement.classList.toggle('dark', isDarkMode);
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
