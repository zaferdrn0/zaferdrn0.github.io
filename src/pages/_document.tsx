import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@300..700&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#0f0f23" />
        <meta name="description" content="Zafer Duran - Frontend Developer Portfolio. Specialized in React, Next.js, and TypeScript." />
        <meta property="og:title" content="Zafer Duran - Frontend Developer" />
        <meta property="og:description" content="Frontend Developer specialized in React, Next.js, and TypeScript. Crafting sleek, scalable digital experiences." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zafer Duran - Frontend Developer" />
        <meta name="twitter:description" content="Frontend Developer specialized in React, Next.js, and TypeScript." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
