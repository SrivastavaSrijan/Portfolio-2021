import { Stack, Heading, Text, SimpleGrid, Box } from '@chakra-ui/layout';
import NextLink from 'next/link';
import Cards from '../components/Card';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import useMediaQuery from '../hook/useMediaQuery';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';

export default function FeaturedProjects({ projects }) {
  const isLargerThan800 = useMediaQuery(800);

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <Stack
            spacing={5}
            style={!isLargerThan800 ? {} : { gridColumn: '2', gridRow: '1' }}
          >
            <SlideUpWhenVisible>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize="display"
                  lineHeight={'95%'}
                  color="button1"
                  letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
                  position="relative"
                  zIndex={1}
                >
                  I'm very proud of these...
                </Heading>
              </Stack>
            </SlideUpWhenVisible>
            <FadeInWhenVisible>
              <Stack>
                <Text
                  fontSize="display3"
                  color="textSecondary"
                  position="relative"
                >
                  Late nights and coffee runs have helped me outthink and
                  conceptualize new applications. Here are some of my capstones!
                </Text>

                <NextLink href="/projects">
                  <Text fontSize="display2">Explore more &rarr;</Text>
                </NextLink>
              </Stack>
            </FadeInWhenVisible>
          </Stack>

          <FadeInWhenVisible>
            <Box>
              <Cards
                imageURL={projects[0].fields.imageUrl}
                title={projects[0].fields.title}
                subtitle={projects[0].fields.subtitle}
                githubLink={projects[0].fields.githubLink}
                deployLink={projects[0].fields.deployLink}
                tag={projects[0].fields.tags}
              />
            </Box>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Box>
              <Cards
                imageURL={projects[1].fields.imageUrl}
                title={projects[1].fields.title}
                subtitle={projects[1].fields.subtitle}
                githubLink={projects[1].fields.githubLink}
                deployLink={projects[1].fields.deployLink}
                tag={projects[1].fields.tags}
              />
            </Box>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <Box>
              <Cards
                imageURL={projects[2].fields.imageUrl}
                title={projects[2].fields.title}
                subtitle={projects[2].fields.subtitle}
                githubLink={projects[2].fields.githubLink}
                deployLink={projects[2].fields.deployLink}
                tag={projects[2].fields.tags}
              />
            </Box>
          </FadeInWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  );
}
