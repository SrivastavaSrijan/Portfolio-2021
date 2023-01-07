import Head from 'next/head';
import { Stack } from '@chakra-ui/react';
import Container from '../components/Container';
import Introduction from '../containers/Introduction';
import FeaturedProjects from '../containers/FeaturedProjects';
import LatestArticle from '../containers/LatestArticle';
import About from '../containers/About';
import ContactMe from '../containers/ContactMe';
import { OpenGraphTags } from '../components/OpenGraphTags';
import { createClient } from 'contentful';

export default function Index({ projects, articles }) {
  return (
    <>
      <Head>
        <title>Srijan | Portfolio</title>
        <OpenGraphTags
          pageTitle="Srijan | Portfolio"
          pageDesc="Here, you can check out Srijan Srivastava's projects, learn about his experiences, gauge his skills and know why he is the perfect candidate you’re looking for."
        />
      </Head>
      <Container enableTransition={true}>
        <Stack
          as="main"
          spacing={{ base: '10vh', md: '96px' }}
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '5vh', md: '12.5vh' }}
        >
          <Introduction />
          <FeaturedProjects projects={projects} />
          <About />
          <LatestArticle articles={articles} />
          <ContactMe />
        </Stack>
      </Container>
    </>
  );
}

const client = createClient({
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
