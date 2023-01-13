import { Heading } from '@chakra-ui/layout';
import { Box, Flex, Stack, Text, SimpleGrid, Link } from '@chakra-ui/react';
import dateFormat from 'dateformat';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import NextLink from 'next/link';

export default function LatestArticle({ articles }) {
  return (
    <Stack
      spacing={5}
      display={articles.length < 2 ? 'none' : 'block'}
      px={{ base: '5vw', md: '10vw' }}
    >
      <Flex alignItems="center" justifyContent="space-between" color="button1">
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
              Check out my musings
            </Heading>
          </SlideUpWhenVisible>

          <FadeInWhenVisible>
            <Text fontSize="display3" color="textSecondary" position="relative">
              I've had some sort of a journal for as long as I can remember!
              Some of my articles make the cut and I post them here.
            </Text>
            <NextLink href="/blog">
              <Text fontSize="display2">View all articles &rarr;</Text>
            </NextLink>
          </FadeInWhenVisible>
        </Stack>
      </Flex>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {articles.map((article, index) => (
          <FadeInWhenVisible key={index}>
            <NextLink
              href={'/blog/' + article?.fields?.slug || ''}
              passHref
              legacyBehavior
            >
              <Link
                as="div"
                href={'/blog/' + article?.fields?.slug || ''}
                _hover={{ textDecoration: 'none' }}
                _focus={{ outline: 'none' }}
                w="100%"
              >
                <Stack
                  direction="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  spacing={2}
                  bg="secondary"
                  borderWidth="0px"
                  px={5}
                  py={10}
                  rounded="lg"
                >
                  <Text
                    color="textPrimary"
                    fontSize={{ base: 'md', md: 'xl' }}
                    fontWeight="bold"
                    cursor="pointer"
                  >
                    {article.fields.title}
                  </Text>
                  <Text color="textSecondary" fontSize="sm">
                    {dateFormat(Date.parse(article.fields.date), 'mmmm d yyyy')}{' '}
                    <Box as="span" fontSize="xs">
                      &bull;
                    </Box>{' '}
                    2 min read
                  </Text>
                </Stack>
              </Link>
            </NextLink>
          </FadeInWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
