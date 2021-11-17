import { useState } from 'react';
import {
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Box,
  SlideFade,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import Container from '../../components/Container';
import { FaSearch } from 'react-icons/fa';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import useMediaQuery from '../../hook/useMediaQuery';
import readingTime from 'reading-time';
import dateFormat from 'dateformat';
import SlideUpWhenVisible from '../../hook/SlideUpWhenVisible';
import FadeInWhenVisible from '../../hook/FadeInWhenVisible';
export default function Index({ articles }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => setQuery(e.target.value);
  const isLargerThan1024 = useMediaQuery(1024);

  return (
    <Container enableTransition={true}>
      <Head>
        <title>Srijan Srivastava | Portfolio | Blog</title>
        <meta name="title" content="Srijan Srivastava | Portfolio | Blog" />
        <meta
          name="description"
          content="Musings by Srijan Srivastava where he writes about tech, business and entertainment "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://srijansrivastava.tech/blog" />
        <meta
          property="og:title"
          content="Srijan Srivastava | Portfolio | Blog"
        />
        <meta
          property="og:description"
          content="Musings by Srijan Srivastava where he writes about tech, business and entertainment "
        />
        <meta property="og:image" content="https://i.imgur.com/dWmBCSl.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://srijansrivastava.tech/" />
        <meta
          property="twitter:title"
          content="Srijan Srivastava | Portfolio | Blog"
        />
        <meta
          property="twitter:description"
          content="Musings by Srijan Srivastava where he writes about tech, business and entertainment "
        />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/dWmBCSl.png"
        />
      </Head>

      <Stack
        as="main"
        spacing={10}
        justifyContent="center"
        px={['5vw', '10vw']}
        my={['15vh', '15vh', '22.5vh', '22.5vh']}
      >
        <Stack spacing={5}>
          <SlideUpWhenVisible>
            <Heading
              fontSize="display"
              lineHeight={'95%'}
              color="button1"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
              Blog
            </Heading>
            <Text fontSize="display2" color="textPrimary">
              Musings on tech, business and everything in between.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search articles"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </SlideUpWhenVisible>
        </Stack>
        <Stack spacing={5}>
          {articles
            .filter((e) =>
              e.fields.title.toLowerCase().includes(query.toLowerCase()),
            )
            .map((article) => (
              <FadeInWhenVisible>
                <Stack
                  key={article.fields.date}
                  direction={isLargerThan1024 ? 'row' : 'column'}
                  alignItems="flex-start"
                  justifyContent="flex-start"
                >
                  <Text
                    color="textSecondary"
                    display={isLargerThan1024 ? 'block' : 'none'}
                  >
                    {dateFormat(Date.parse(article.fields.date), 'mmm d yyyy')}
                    <br />{' '}
                    <Text fontSize="sm" textAlign="right">
                      {readingTime(article.fields.body).text}
                    </Text>
                  </Text>
                  <Text
                    color="textSecondary"
                    fontSize="sm"
                    display={isLargerThan1024 ? 'none' : 'block'}
                  >
                    {dateFormat(Date.parse(article.fields.date), 'mmm d yyyy')}{' '}
                    <Box as="span" fontSize="xs">
                      &bull;
                    </Box>{' '}
                    {readingTime(article.fields.body).text}
                  </Text>
                  <Flex flexDirection="column" px={isLargerThan1024 ? 10 : 0}>
                    <Link href={'/blog/' + article.fields.slug}>
                      <a>
                        <Text
                          color="displayColor"
                          fontSize="xl"
                          fontWeight="bold"
                          cursor="pointer"
                        >
                          {article.fields.title}
                        </Text>
                        <Text color="textSecondary">
                          {article.fields.summary}
                        </Text>

                        <Text color="button1" cursor="pointer">
                          Learn more &rarr;
                        </Text>
                      </a>
                    </Link>
                  </Flex>
                </Stack>
              </FadeInWhenVisible>
            ))}
        </Stack>
      </Stack>
    </Container>
  );
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: 'blogPosts',
    limit: 50,
    order: 'sys.createdAt',
  });

  return {
    props: {
      articles: data.items.reverse(),
    },
  };
}
