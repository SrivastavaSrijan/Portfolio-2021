import { Text, Stack, Heading, Box } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/layout';
import { FaHandSparkles, FaRocket } from 'react-icons/fa';
import useMediaQuery from '../hook/useMediaQuery';
import ReactGA from 'react-ga';
import TextLoop from 'react-text-loop';
import { getHeroText } from '../globalData';
import { colors } from '../styles/theme';
import StaggerChild from '../hook/StaggerChild';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import { RoundedTextIcon } from '../components/RoundedTextIcon';
import { ContactMeButtons } from '../components/ContactMeButtons';
import ImageWithSvg from '../components/ImageWithSvg';

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={isLargerThan800 ? 10 : 2}
      minH="75vh"
    >
      <Stack justifyContent="flex-start" alignItems="flex-start">
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
        </StaggerChild>

        <StaggerChild direction="column nowrap" delay={0.7}>
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
            mb={5}
            text={
              'Frontend Developer proficient with Angular, JavaScript and React'
            }
          />
        </StaggerChild>
        <ContactMeButtons delay={1} />
      </Stack>
      <ImageWithSvg
        svgId="150717"
        imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/36XDujqnCM6NQkZUg2PEPi/aacb13e5efaff05102e5c262f8d70ca6/Srijan_Srivastava_-_Portfolio_Image_1.webp"
        imageSize={{ base: '550px', lg: '550px' }}
        delay={1.25}
      />
    </SimpleGrid>
  );
}
