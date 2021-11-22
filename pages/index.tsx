import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import Container from '../components/Container';
import Introduction from '../containers/Introduction';
import FeaturedProjects from '../containers/FeaturedProjects';
import LatestArticle from '../containers/LatestArticle';
import AboutMe from '../containers/AboutMe';
import ContactMe from '../containers/ContactMe';

export default function Index({ projects, articles }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Srijan Srivastava | Portfolio</title>
          <meta charSet="utf-8" />
          <meta content="en" name="Language" />
          <meta
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            name="viewport"
          />
          <meta content="Srijan Srivastava Portfolio" itemProp="name" />
          <meta
            content="Srijan Srivastava | Portfolio"
            prefix="og: http://ogp.me/ns#"
            property="og:title"
          />
          <meta
            content="website"
            prefix="og: http://ogp.me/ns#"
            property="og:type"
          />
          <meta
            name="image"
            content="/media/preview.jpg"
            prefix="og: http://ogp.me/ns#"
            property="og:image"
          />
          <meta
            content="https://srijansriavstava.tech/"
            prefix="og: http://ogp.me/ns#"
            property="og:url"
          />
          <meta
            content="Here, you can check out Srijan Srivastava's projects, learn about his experiences, gauge his skills and know why he is the perfect candidate you’re looking for."
            prefix="og: http://ogp.me/ns#"
            property="og:description"
          />
          <meta
            content="Here, you can check out Srijan Srivastava's projects, learn about his experiences, gauge his skills and know why he is the perfect candidate you’re looking for."
            name="description"
          />
          <meta content="Srijan Srivastava" name="author" />
          <meta
            content="C_DMNVX1KwivGaCplfNfuGWRsqOhDZOdnl5YYfkps68"
            name="google-site-verification"
          />
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
        </Head>

        <Stack
          as="main"
          spacing={{ base: '10vh', md: '96px' }}
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '5vh', md: '12.5vh' }}
        >
          <Introduction />
          <AboutMe />
          <FeaturedProjects projects={projects} />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  );
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  });

  const data2 = await client.getEntries({
    content_type: 'blogPosts',
    limit: 4,
    order: 'sys.createdAt',
  });
  return {
    props: {
      projects: data.items,
      articles: data2.items.reverse(),
    },
  };
}
