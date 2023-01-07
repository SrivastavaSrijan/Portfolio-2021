import { SimpleGrid, Stack } from '@chakra-ui/react';
import { AboutMe } from '../components/AboutMe';
import { AboutWork } from '../components/AboutWork';
import ImageWithSvg from '../components/ImageWithSvg';

export default function About() {
  return (
    <Stack
      as="main"
      spacing={{ base: '10vh', md: '96px' }}
      justifyContent="center"
      alignItems="flex-start"
      px={{ base: '5vw', md: '10vw' }}
      mt={{ base: '5vh', md: '12.5vh' }}
    >
      <AboutWork />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
        <ImageWithSvg
          svgId="150717"
          imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/7Km0fN5XuzcIigFrwAFKMh/4854be1a0a38586142b802d2b5527b7d/IMG20220306211349__1_.jpg"
          imageSize={{ base: '275px', lg: '275px' }}
          delay={0}
        />
        <AboutMe />
      </SimpleGrid>
    </Stack>
  );
}
