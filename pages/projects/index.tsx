import { useState } from 'react';
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react';

import Cards from '../../components/Card';
import Container from '../../components/Container';
import Head from 'next/head';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { FaSearch } from 'react-icons/fa';
import SlideUpWhenVisible from '../../hook/SlideUpWhenVisible';
import FadeInWhenVisible from '../../hook/FadeInWhenVisible';
import { OpenGraphTags } from '../../components/OpenGraphTags';
import { createClient } from 'contentful';

export default function Projects({ projects }) {
  const [query, setQuery] = useState('');
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Container>
        <Head>
          <title>Srijan | Projects</title>
          <OpenGraphTags
            pageDesc="Repository of all of Srijan Srivastava's projects and web applications on his portfolio website."
            pageTitle="Srijan | Projects"
          />
        </Head>
        <Stack
          as="main"
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['5vh', '5vh', '12.5vh', '12.5vh']}
        >
          <Stack spacing={5}>
            <SlideUpWhenVisible>
              {' '}
              <Heading
                fontSize="display"
                lineHeight={'95%'}
                color="button1"
                letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
                position="relative"
                zIndex={1}
              >
                Projects
              </Heading>
              <Text fontSize="display2" color="textPrimary">
                Archive of applications I've designed and developed.
              </Text>
              <InputGroup maxW="400px">
                <InputRightElement pointerEvents="none">
                  <FaSearch />
                </InputRightElement>
                <Input
                  type="text"
                  placeholder="Search projects"
                  value={query}
                  onChange={handleChange}
                />
              </InputGroup>
              <Divider />
            </SlideUpWhenVisible>
          </Stack>

          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <FadeInWhenVisible key={project.fields.title}>
                  <Cards
                    imageURL={project.fields.imageUrl}
                    title={project.fields.title}
                    subtitle={project.fields.subtitle}
                    desc={project.fields.description}
                    githubLink={project.fields.githubLink}
                    deployLink={project.fields.deployLink}
                    tag={project.fields.tags}
                  />
                </FadeInWhenVisible>
              ))}
          </SimpleGrid>
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
    content_type: 'projects',
    order: 'sys.createdAt',
  });
  return {
    props: {
      projects: data.items,
    },
  };
}
