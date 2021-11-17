import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import useMediaQuery from '../hook/useMediaQuery';
import ReactGA from 'react-ga';
import TextLoop from 'react-text-loop';
import { getHeroText } from '../globalData';
import { colors } from '../styles/theme';
import StaggerChild from '../hook/IntroductionTransitions';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <FadeInWhenVisible>
          <Box position="relative">
            <Image
              src={`https://svgsilh.com/svg/27899-${colors.complement.replace(
                '#',
                '',
              )}.svg`}
              filter="contrast(1)"
              w={{ base: '140px', md: '300px' }}
              position="absolute"
              top={{ base: '0', md: '-30' }}
              left={{ base: '-10', md: '-20' }}
              zIndex={0}
              alt=""
            ></Image>
            <Text
              color="displayColor"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
              whiteSpace="nowrap"
            >
              Hey there, I'm
            </Text>
          </Box>
        </FadeInWhenVisible>
        <StaggerChild>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="button1"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Srijan
          </Heading>
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
            mt={2}
          >
            <Box color="displayColor" as="span">
              and I'm
            </Box>{' '}
            <TextLoop adjustingSpeed={100} delay={1700} noWrap={true}>
              {getHeroText().map(({ item, emoji, key, index }) => {
                return (
                  <Text key={key} color="button1" fontWeight="light">
                    {item}
                    <span role="img" aria-label={item}>
                      {' '}
                      {emoji}
                    </span>
                  </Text>
                );
              })}
            </TextLoop>
          </Heading>
          <Text fontSize="display3" color="textSecondary" mt={2}>
            🚀 Open to new, exciting opportunities
            <br />
          </Text>
          <Text fontSize="display3" color="textSecondary">
            <Stack isInline spacing={1}>
              <Box>🎓</Box>
              <Box>
                Frontend Developer proficient with Angular, JavaScript and React
              </Box>
            </Stack>
          </Text>
        </StaggerChild>
        <Stack isInline spacing={4}>
          <StaggerChild>
            <Link href="https://github.com/SrivastavaSrijan" isExternal>
              <Button
                leftIcon={<FaGithub fill={colors.background} />}
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                mx={1}
                bgColor="button1"
                onClick={() => handleClick('introduction_github')}
              >
                Github
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/srijansrivastava35/"
              isExternal
            >
              <Button
                leftIcon={<FaLinkedin fill={colors.background} />}
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                bgColor="button1"
                mx={1}
                onClick={() => handleClick('introduction_linkedin')}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:srijan.srivastava35@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope fill={colors.background} />}
                size={isLargerThan800 ? 'md' : 'sm'}
                color="background"
                bgColor="button1"
                mx={1}
                onClick={() => handleClick('introduction_email')}
              >
                Email
              </Button>
            </Link>
          </StaggerChild>
        </Stack>
      </Stack>
    </>
  );
}
