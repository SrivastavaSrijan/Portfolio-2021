import { Text, Stack, Divider, ScaleFade, Link } from '@chakra-ui/react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'

import CodeTags from './CodeTags'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <Link href={deployLink} isExternal>
        <ScaleFade in={true} transition={{ duration: 1 }}>
          <Image
            width={1250}
            height={600}
            w="auto"
            h="auto"
            src={imageURL}
            transition="0.3s"
            borderRadius="10px 10px 0px 0px"
            alt="project image"
          ></Image>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                    isExternal
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternal
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack isInline>
              <CodeTags tags={tag}></CodeTags>
            </Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
