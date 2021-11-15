import { Heading } from '@chakra-ui/layout';
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import dateFormat from 'dateformat';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import NextLink from 'next/link';

export default function LatestArticle({ articles }) {
  return (
    <Stack
      spacing={5}
      w="100%"
      display={articles.length < 2 ? 'none' : 'block'}
    >
      <SlideUpWhenVisible>
        <Flex alignItems="center" justifyContent="space-between">
          <Stack spacing={1}>
            <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily="Ubuntu">
              Check out my musings
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'xl' }}
              color="textSecondary"
              maxW="32rem"
            >
              I've had some sort of a journal for as long as I can remember!
              Some of my articles make the cut and I post them here.
            </Text>
          </Stack>
          <NextLink href="/projects">
            <Link>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                View all articles &rarr;
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {articles.map((article, index) => (
          <SlideUpWhenVisible>
            <Link
              href={'/blog/' + article.fields.slug}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
            >
              <Stack
                direction="column"
                alignItems="flex-start"
                bg="secondary"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                p={5}
                justifyContent="flex-start"
                space={2}
              >
                <Text
                  color="displayColor"
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
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  );
}
