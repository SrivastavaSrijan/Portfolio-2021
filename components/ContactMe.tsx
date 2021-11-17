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
          <Heading fontSize="display" color="button1" textAlign="center">
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
          <Stack isInline spacing={4}>
            <Link
              href="https://www.linkedin.com/in/srijansrivastava35/"
              isExternal
              onClick={() => handleClick('contact_linkedin')}
            >
              <Button
                leftIcon={<FaLinkedin fill={colors.background} />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                bgColor="button1"
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:srijan.srivastava35@gmail.com"
              isExternal
              onClick={() => handleClick('contact_email')}
            >
              <Button
                leftIcon={<FaEnvelope fill={colors.background} />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                bgColor="button1"
              >
                Email
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1q6X_YaarffzIsqgrJY1mxCQKHr4j2nvJ/view?usp=sharing"
              isExternal
              onClick={() => handleClick('contact_resume')}
            >
              <Button
                leftIcon={<FaFileAlt fill={colors.background} />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                bgColor="button1"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  );
}
