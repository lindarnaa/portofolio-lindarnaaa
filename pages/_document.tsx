import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        <meta name="description" content="Fullstack Developer Portfolio — Merancang & membangun produk digital dari nol." />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="Your Name — Fullstack Developer" />
        <meta property="og:description" content="Portfolio Fullstack Developer — React, Next.js, Node.js" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
