import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  chakra,
  Popover,
  Square,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverBody,
  PopoverArrow,
  CircularProgress,
} from '@chakra-ui/react';

import useMediaQuery from '../hook/useMediaQuery';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import ReactGA from 'react-ga';

import { useState } from 'react';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import ImageWithSvg from '../components/ImageWithSvg';

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800);
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    });
  };
  const MoreInfo = ({ text, content }) => {
    return (
      <>
        {' '}
        {isLargerThan800 ? (
          <Popover trigger="hover" placement="right" isLazy>
            <PopoverTrigger>
              <chakra.span
                onMouseOver={() => handleHover(`about_${text}`)}
                color="button1"
                cursor="help"
              >
                {text}
              </chakra.span>
            </PopoverTrigger>
            <PopoverContent
              bg="secondary"
              padding="0"
              borderColor="blackAlpha.50"
              color="white"
            >
              <PopoverArrow bg="textSecondary" />
              {content}
            </PopoverContent>
          </Popover>
        ) : (
          <Text as="span" color="button1">
            {text}
          </Text>
        )}{' '}
      </>
    );
  };

  /**
   * Component to render a polaroid type box
   * @param {*} imageSrc - Link of image
   * @param {*} alt - a11y text
   * @param {*} text - bottom text
   * @returns
   */
  const Polaroid = ({ imageSrc, alt, text }) => {
    const [isLoaded, setLoaded] = useState(false);
    return (
      <>
        <PopoverBody fontSize="sm" padding="0">
          <Flex placeContent="center" placeItems="center" flexFlow="column">
            {!isLoaded && (
              <Square size="100px">
                <CircularProgress
                  size="25px"
                  isIndeterminate
                  color="button1"
                  thickness="4px"
                />
              </Square>
            )}
            <Image
              marginTop="1.5"
              onLoad={() => setLoaded(true)}
              display={!isLoaded ? 'none' : 'block'}
              w={{ base: '140px', md: '300px' }}
              src={imageSrc}
              alt={alt}
            ></Image>
          </Flex>
        </PopoverBody>
        <PopoverFooter>
          <Text
            textAlign="center"
            padding="1.5"
            color="textSecondary"
            fontSize={{ base: '14px', md: '16px' }}
            whiteSpace="pre-line"
          >
            {text}
          </Text>
        </PopoverFooter>
      </>
    );
  };
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack
          spacing={4}
          style={isLargerThan800 ? { gridColumn: 2, gridRow: 1 } : {}}
        >
          <SlideUpWhenVisible>
            <Heading
              fontSize="display"
              lineHeight={'95%'}
              color="button1"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
              About Me
            </Heading>
          </SlideUpWhenVisible>
          <FadeInWhenVisible>
            <Text
              color="textSecondary"
              fontSize="display3"
              whiteSpace="pre-line"
            >
              Being obsessed with technology from my childhood, I made my first
              website when I was 12 (please do not look it up 🥺). I've had the
              privilege of working in different domains alongside companies that
              dominate the field. I strive to capitalize on these experiences at
              work. In the real world you can always find me tweaking the
              perfect pasta recipe, obsessing over some music, or having a
              coffee. <br />
              <br />I finished at the top 10% of my class at
              <MoreInfo
                text="Vellore Institute of Technology,"
                content={
                  <Polaroid
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/2ivYQNDahjTccL9d6p76Tl/b1e2a291620f3af55ac08791059f0c0a/VIT.webp"
                    text="The beautiful campus in the golden hour"
                    alt="VIT Campus"
                  ></Polaroid>
                }
              ></MoreInfo>
              where I majored in
              <MoreInfo
                text="Electronics & Communication."
                content={
                  <Polaroid
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/5O4i3w4FYgMcBRN94wp3nH/3358b1026eaf05ab03cced7d57cc1e9d/Breadboard.webp"
                    text="I think I've seen more breadboards than bread"
                    alt="Circuits we made at uni"
                  ></Polaroid>
                }
              ></MoreInfo>{' '}
              I was a part of the executive board at a non-profit called
              <MoreInfo
                text="Anokha,"
                content={
                  <Polaroid
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/6JcomFqlW3IMkFBo2FNIuV/3299ab411e4da14878fa41f1b2ef6224/ANO.webp"
                    text="At Scientastic, a science fair we organized for the kids of Vellore"
                    alt="Srijan with the kids of Vellore"
                  ></Polaroid>
                }
              ></MoreInfo>
              and was a part of a Toastmasters International, an organization
              aimed at boosting your public speaking
              <MoreInfo
                text="public speaking"
                content={
                  <Polaroid
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4wdJ7AXG4mCjewPJoQNVBj/f21b33e645b3e677a2392035370b51e5/tmi.webp"
                    text="Giving a speech at one of our weekly sessions!"
                    alt="Srijan on the stage, delivering a speech"
                  ></Polaroid>
                }
              ></MoreInfo>{' '}
              and leadership skills.
              <br /> <br />
              Right now, I'm working at Wipro on an awesome Enterprise
              Application. My role as a Developer is to architect pixel-perfect
              modules which are compliant with Web Content Acessibility
              Guidelines and provide an excellent end-user experience. I'm
              conversant with ES6, Form Validation, RxJs and performance
              optimization.
            </Text>
          </FadeInWhenVisible>
        </Stack>
        <Stack margin="auto">
          <ImageWithSvg
            svgId="26432"
            imageSize={{ base: '450px', lg: '450px' }}
            imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/3Y7RUoyLJi2xsd0lLUoMDj/95a362afa59299b136cdc77036829537/Srijan_Srivastava_-_Portfolio_Image_2.webp"
          />
        </Stack>
      </SimpleGrid>
    </>
  );
}
