import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet preload prefetch"
        />
        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
          rel="stylesheet preload prefetch"
        />
        <meta name="theme-color" content="black" />
        <Head />
        <body>
          <link
            itemProp="thumbnailUrl"
            href="https://www.srijansrivastava.tech/media/ms-icon-256x256.png"
          />
          <span
            itemProp="thumbnail"
            itemScope
            itemType="http://schema.org/ImageObject"
          >
            <link
              itemProp="url"
              href="https://www.srijansrivastava.tech/media/ms-icon-256x256.png"
            />
          </span>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
