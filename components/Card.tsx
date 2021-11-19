import {
  Text,
  Stack,
  Divider,
  ScaleFade,
  Link,
  UnorderedList,
  ListItem,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

import Image from './ChakraNextImage';

import CodeTags from './CodeTags';
import { colors } from '../styles/theme';
import StaggerChild from '../hook/StaggerChild';
import React from 'react';

export default function Cards({
  imageURL,
  title,
  subtitle,
  desc = null,
  githubLink,
  deployLink,
  isFeatured,
  tag,
}) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  let mdxSource = null;
  return (
    <Box
      bg="secondary"
      borderWidth="0px"
      px={{ sm: 2, md: 10 }}
      py={10}
      rounded="lg"
    >
      <Link href={deployLink} isExternal>
        <Image
          width={1250}
          height={600}
          w="auto"
          h="auto"
          src={imageURL}
          alt="project image"
        ></Image>
        <Stack px={4} py={2}>
          <Stack isInline justifyContent="space-between" alignItems="center">
            <Stack
              isInline
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              <Text
                fontFamily="Ubuntu"
                fontSize="display2"
                color="textPrimary"
                p="0 4px 0 16px"
                minHeight="56px"
              >
                {title}
              </Text>
              {githubLink && (
                <Link
                  href={githubLink}
                  fill={colors.textPrimary}
                  onClick={() =>
                    handleClick(`githublink_${title.replace('@', '-at-')}`)
                  }
                  isExternal
                >
                  <FaGithub
                    aria-label="github"
                    size={23}
                    fill={colors.textPrimary}
                  />
                </Link>
              )}
              {deployLink && (
                <Link
                  href={deployLink}
                  fill={colors.textPrimary}
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

          <Stack>
            <CodeTags tags={tag}></CodeTags>
          </Stack>
          {desc ? (
            <>
              <Divider color="textSecondary" />
              <Text color="textSecondary" fontSize="display3">
                <UnorderedList>
                  {desc.split('\n').map((text: string, index: number) => (
                    <ListItem fontSize={['xs', 'xs', 'sm', 'sm']} key={index}>
                      {text}
                    </ListItem>
                  ))}
                </UnorderedList>
              </Text>
            </>
          ) : null}
        </Stack>
      </Link>
    </Box>
  );
}
