import { Heading } from '@chakra-ui/layout';
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react';
import dateFormat from 'dateformat';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import NextLink from 'next/link';

export default function LatestArticle({ articles }) {
  return (
    <Stack
      spacing={5}
      display={articles.length < 2 ? 'none' : 'block'}
      w="full"
    >
      <SlideUpWhenVisible>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          color="button1"
        >
          <Stack spacing={1}>
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
            <Stack spacing={1}>
              <Text
                fontSize="display3"
                color="textSecondary"
                position="relative"
              >
                I've had some sort of a journal for as long as I can remember!
                Some of my articles make the cut and I post them here.
              </Text>
            </Stack>
            <NextLink href="/projects">
              <Link>
                <Text fontSize="display2">View all articles &rarr;</Text>
              </Link>
            </NextLink>
          </Stack>
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
                transition="0.3s"
                borderRadius="10px"
                p={5}
                justifyContent="flex-start"
                space={2}
              >
                <Text
                  bgColor="button1"
                  color="background"
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
