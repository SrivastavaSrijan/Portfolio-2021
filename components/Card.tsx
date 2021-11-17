import {
  Text,
  Stack,
  Divider,
  ScaleFade,
  Link,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import ReactGA from 'react-ga';

import Image from './ChakraNextImage';

import CodeTags from './CodeTags';
import { colors } from '../styles/theme';
import StaggerChild from '../hook/IntroductionTransitions';

export default function Cards({
  imageURL,
  title,
  desc,
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
    <Stack bg="secondary" minH="320px" borderRadius="4">
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
                color="background"
                bgColor="button1"
                p="0 16px"
                minHeight="56px"
              >
                {title}
              </Text>
              {githubLink && (
                <Link
                  href={githubLink}
                  fill={colors.button1}
                  onClick={() =>
                    handleClick(`githublink_${title.replace('@', '-at-')}`)
                  }
                  isExternal
                >
                  <FaGithub
                    aria-label="github"
                    size={23}
                    fill={colors.button1}
                  />
                </Link>
              )}
              {deployLink && (
                <Link
                  href={deployLink}
                  fill={colors.button1}
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
          <Divider color="textSecondary" />
          <Text color="textSecondary" fontSize="display3">
            <UnorderedList>
              {desc.split('\n').map((text: string, index: number) => (
                <ListItem key={index}>{text}</ListItem>
              ))}
            </UnorderedList>
          </Text>
        </Stack>
      </Link>
    </Stack>
  );
}
