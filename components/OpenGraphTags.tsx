export const OpenGraphTags = ({ pageTitle, pageDesc }) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta content="en" name="Language" />
      <meta
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
        name="viewport"
      />
      {/* HTML Meta Tags */}
      <meta name="description" content={pageDesc} />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://www.srijansrivastava.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:site_name" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:type" content="website" />
      <meta property="fb:app_id" content="991880091543584" />
      {/* Image Tags */}
      {/* MS Tile - for Microsoft apps */}
      <meta name="msapplication-TileImage" content="/media/preview.jpg" />
      {/* Image to display */}
      <meta
        property="og:image"
        itemProp="image"
        content="https://www.srijansrivastava.com/media/preview.jpg"
      />
      <meta
        property="og:image:secure_url"
        itemProp="image"
        content="https://www.srijansrivastava.com/media/preview.jpg"
      />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="600" />
      {/* Image to display for WhatsApp */}
      <meta
        property="og:image:alt"
        itemProp="image"
        content="https://www.srijansrivastava.com/media/ms-icon-256x256.png"
      />
      <meta
        property="og:image:secure_url:alt"
        itemProp="image"
        content="https://www.srijansrivastava.com/media/ms-icon-256x256.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
      {/* Website to visit when clicked in fb or WhatsApp */}
      <meta property="og:url" content="https://www.srijansrivastava.com" />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:domain"
        content="https://www.srijansrivastava.com"
      />
      <meta
        property="twitter:url"
        content="https://www.srijansrivastava.com/"
      />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content="media/preview.jpg" />
      {/* Favicon links */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/media/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/media/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/media/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/media/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/media/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/media/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/media/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/media/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/media/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/media/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/media/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/media/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/media/favicon-16x16.png"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="/media/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
