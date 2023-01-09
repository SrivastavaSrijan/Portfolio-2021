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
          imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/36XDujqnCM6NQkZUg2PEPi/aacb13e5efaff05102e5c262f8d70ca6/Srijan_Srivastava_-_Portfolio_Image_1.webp"
          imageSize={{ base: '255px', lg: '255px' }}
          delay={0}
        />
        <AboutMe />
      </SimpleGrid>
    </Stack>
  );
}
