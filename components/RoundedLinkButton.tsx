import { Box, Flex, Link } from '@chakra-ui/layout';
import { IconButton } from '@chakra-ui/react';
import { colors } from '../styles/theme';
import ReactGA from 'react-ga';

export const RoundedLinkButton = ({ link, ariaLabel, gaName, children }) => {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <Link href={link} isExternal mx={2}>
      <IconButton
        icon={
          <Flex
            w={4}
            h={4}
            align={'center'}
            justify={'center'}
            rounded={'full'}
            flex="0 0 auto"
            bg={colors.button1}
          >
            <Box marginInlineEnd="-0.5rem"> {children}</Box>
          </Flex>
        }
        size="sm"
        color="textSecondary"
        bgColor="button1"
        isRound={true}
        aria-label={ariaLabel}
        onClick={() => handleClick(gaName)}
      ></IconButton>
    </Link>
  );
};
