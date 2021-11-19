import {
  Link,
  Button,
  chakra,
  Heading,
  Stack,
  Text,
  SlideFade,
} from '@chakra-ui/react';
import useMediaQuery from '../hook/useMediaQuery';
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import ReactGA from 'react-ga';
import { colors } from '../styles/theme';
import { ContactMeButtons } from '../components/ContactMeButtons';

export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="button1"
            textAlign="center"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Hit me up!
          </Heading>
        </SlideUpWhenVisible>

        <SlideFade in={true}>
          <Text
            fontSize="display2"
            color="textSecondary"
            textAlign="center"
            maxW="32rem"
          >
            If you're looking for a frontend developer with an eye for detail
            and a knack for solving complex use cases, I'm open to new and
            exciting opportunities!
            <br />
            <chakra.span
              color="button1"
              fontSize="display3"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Contact me using the links below.
            </chakra.span>
          </Text>
        </SlideFade>
        <SlideUpWhenVisible>
          <ContactMeButtons />
        </SlideUpWhenVisible>
      </Stack>
    </>
  );
}
