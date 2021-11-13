import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
  Popover,
  Square,
  PopoverTrigger,
  PopoverContent,
  PopoverFooter,
  PopoverBody,
  PopoverArrow,
  CircularProgress,
  CircularProgressLabel,
} from '@chakra-ui/react'

import useMediaQuery from '../hook/useMediaQuery'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

import { useState } from 'react'

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800)
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    })
  }
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
    )
  }

  /**
   * Component to render a polaroid type box
   * @param {*} imageSrc - Link of image
   * @param {*} alt - a11y text
   * @param {*} text - bottom text
   * @returns
   */
  const Polaroid = ({ imageSrc, alt, text }) => {
    const [isLoaded, setLoaded] = useState(false)
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
    )
  }
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              I'm a 2020 pass out of the
              <MoreInfo
                text="Vellore Institute of Technology"
                content={
                  <Polaroid
                    imageSrc="https://i.imgur.com/x5AISLd.jpg"
                    text="The beautiful campus in the golden hour"
                    alt="VIT Campus"
                  ></Polaroid>
                }
              ></MoreInfo>
              , where I majored in
              <MoreInfo
                text="Electronics & Communication"
                content={
                  <Polaroid
                    imageSrc="https://i.imgur.com/AJ36rMh.jpg"
                    text="I think I've seen more breadboards than bread"
                    alt="Circuits we made at uni"
                  ></Polaroid>
                }
              ></MoreInfo>
              Being obsessed with technology from my childhood, I made my first
              blog when I was 12 (please do not look it up 🥺). I've had the
              privilege of working in different domains alongside companies that
              dominate the field. I strive to capitalize on these experiences
              when I work! 💪🏽 In the real world, you'll probably find me writing
              stuff for my blog, finding the perfect pasta recipe, obsessing
              over some music, or having a coffee.
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
                alt=""
              />
              <Image
                src="https://i.imgur.com/xesZKHb.png"
                filter="saturate(1.1)"
                w={{ base: '300px', lg: '350px' }}
                h={{ base: '300px', lg: '350px' }}
                alt="Abdul Rahman"
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
