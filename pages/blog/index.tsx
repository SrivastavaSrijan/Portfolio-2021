import { useState } from 'react';
import { Stack, Heading, Text, Divider, Flex, Box } from '@chakra-ui/react';
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
import { OpenGraphTags } from '../../components/OpenGraphTags';
import { createClient } from 'contentful';

export default function Index({ articles }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => setQuery(e.target.value);
  const isLargerThan1024 = useMediaQuery(1024);

  return (
    <Container>
      <Head>
        <title>Srijan | Blog</title>
        <OpenGraphTags
          pageTitle="Srijan | Blog"
          pageDesc="Musings by Srijan Srivastava where he writes about tech, business and entertainment."
        />
      </Head>

      <Stack
        as="main"
        spacing={{ base: '10vh', md: '96px' }}
        justifyContent="center"
        px={['5vw', '10vw']}
        my={['5vh', '5vh', '12.5vh', '12.5vh']}
      >
        <SlideUpWhenVisible>
          <Stack spacing={5}>
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
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                type="text"
                placeholder="Search articles"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
        </SlideUpWhenVisible>
        <Stack spacing={5}>
          {articles
            .filter((e) =>
              e.fields.title.toLowerCase().includes(query.toLowerCase()),
            )
            .map((article, index) => (
              <FadeInWhenVisible key={index}>
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
                  </Text>
                  <br />{' '}
                  <Text fontSize="sm" textAlign="right">
                    {readingTime(article.fields.body).text}
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

const client = createClient({
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
      articles: data.items,
    },
  };
}
