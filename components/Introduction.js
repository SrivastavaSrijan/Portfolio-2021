import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'
import TextLoop from 'react-text-loop'
import { getHeroText } from '../globalData'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }
  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/1320872.svg"
              filter="invert(0.1)"
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
            >
              Hey there, I'm
            </Text>
          </Box>
          <Heading
            color="textPrimary"
            fontSize="display"
            lineHeight={'95%'}
            fontSize="display"
            color="button1"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Srijan
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              and I'm
            </Box>{' '}
            <TextLoop adjustingSpeed={100} delay={1700} noWrap={true}>
              {getHeroText().map(({ item, emoji, index }) => {
                return (
                  <Text key={index} color="button1" fontWeight="light">
                    {item}
                    <span role="img" aria-label={item}>
                      {' '}
                      {emoji}
                    </span>
                  </Text>
                )
              })}
            </TextLoop>
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            🚀 Open to new, exciting opportunities
            <br />
            <Stack isInline spacing={1}>
              <Box>🎓</Box>
              <Box>
                Frontend Developer proficient with Angular, JavaScript and React
              </Box>
            </Stack>
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link href="https://github.com/SrivastavaSrijan" isExternal>
              <Button
                leftIcon={<FaGithub color="#BEE3DB" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
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
                leftIcon={<FaLinkedin color="#BEE3DB" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_linkedin')}
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:srijan.srivastava35@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#BEE3DB" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                onClick={() => handleClick('introduction_email')}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
