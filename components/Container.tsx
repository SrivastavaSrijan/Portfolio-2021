import React, { useEffect } from 'react';
import { chakra, Flex, Stack, Text } from '@chakra-ui/react';
import Navbar from './Navbar';
import ReactGA from 'react-ga';
import { colors } from '../styles/theme';

const Container = ({ enableTransition, children }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar enableTransition={enableTransition} />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={20} mb={5}>
        <Text textAlign="center" fontSize="xs">
          <chakra.span fontWeight="semibold" color="textPrimary">
            Made with
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill={colors.button1}
              style={{ display: 'inline-block', margin: '0 5px' }}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            by Srijan.
          </chakra.span>{' '}
        </Text>
      </Stack>
    </>
  );
};

export default Container;
