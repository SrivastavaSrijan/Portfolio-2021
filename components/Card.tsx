import React from 'react';
import {
  Text,
  Stack,
  Divider,
  Link,
  UnorderedList,
  ListItem,
  Box,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

import Image from './ChakraNextImage';

import CodeTags from './CodeTags';
import { colors } from '../styles/theme';
import NextLink from 'next/link';

/** Global Project Cards used across the portfolio */
export default function Cards({
  imageURL,
  title,
  subtitle,
  desc = null,
  githubLink,
  deployLink,
  tag,
}) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <Box
      bg="secondary"
      borderWidth="0px"
      px={{ sm: 2, md: 10 }}
      py={10}
      rounded="lg"
    >
      <NextLink href={deployLink || ''} passHref legacyBehavior>
        <Link href={deployLink} isExternal as="div">
          <Image
            width={1250}
            height={300}
            objectFit="contain"
            src={imageURL}
            alt={title}
          />
        </Link>
      </NextLink>
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
                <FaGithub aria-label="github" size={23} />
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
        <Text
          fontSize="display4"
          color="textPrimary"
          fontWeight={400}
          p="0 4px 0 16px"
        >
          {subtitle}
        </Text>
        <Stack>
          <CodeTags tags={tag} />
        </Stack>
        {desc ? (
          <>
            <Divider color="textSecondary" height={6} />
            <UnorderedList>
              {desc.split('\n').map((text: string, index: number) => (
                <ListItem fontSize={['xs', 'xs', 'sm', 'sm']} key={index}>
                  {text}
                </ListItem>
              ))}
            </UnorderedList>
          </>
        ) : null}
      </Stack>
    </Box>
  );
}
