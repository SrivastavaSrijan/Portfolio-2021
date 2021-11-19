import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  IconButton,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaEnvelope,
  FaGg,
  FaGithub,
  FaHandSparkles,
  FaJava,
  FaLinkedin,
  FaRocket,
} from 'react-icons/fa';
import useMediaQuery from '../hook/useMediaQuery';
import ReactGA from 'react-ga';
import TextLoop from 'react-text-loop';
import { getHeroText } from '../globalData';
import { colors } from '../styles/theme';
import StaggerChild from '../hook/StaggerChild';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import { RoundedTextIcon } from '../components/RoundedTextIcon';
import { ContactMeButtons } from '../components/ContactMeButtons';

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
      <Stack justifyContent="flex-start" alignItems="flex-start" minH="50vh">
        <FadeInWhenVisible>
          <Box>
            <Text
              color="textPrimary"
              fontSize="display2"
              fontWeight="medium"
              zIndex={1}
              whiteSpace="nowrap"
            >
              Hey there, I'm
            </Text>
          </Box>
        </FadeInWhenVisible>
        <StaggerChild direction="column nowrap">
          <Heading
            fontSize="hero"
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
            mt={5}
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
          <RoundedTextIcon
            icon={<FaRocket fill={colors.textSecondary} />}
            iconBg={'button1'}
            text={'Open to new, exciting opportunities'}
            mt={5}
          />
          <RoundedTextIcon
            icon={<FaHandSparkles fill={colors.textSecondary} />}
            iconBg={'button1'}
            mt={2}
            text={
              'Frontend Developer proficient with Angular, JavaScript and React'
            }
          />
        </StaggerChild>
        <ContactMeButtons />
      </Stack>
    </>
  );
}
