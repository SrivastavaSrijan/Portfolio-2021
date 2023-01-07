import React, { useEffect } from 'react';
import { chakra, Flex, Stack, Text } from '@chakra-ui/react';
import Navbar from './Navbar';
import ReactGA from 'react-ga';
import { colors } from '../styles/theme';

/** Root container for the application, contains the Navbar, Body and the footer */
const Container = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar />
      <Flex as="main" justifyContent="center" flexDirection="column">
        {children}
      </Flex>
      <Stack alignItems="center" mt={20} mb={5}>
        <Text textAlign="center" fontSize="xs" color="textPrimary">
          <chakra.span fontWeight={300}>
            You say we're small and not worth the mention;
            <br />
            I'm sure we're taller in another dimension
            <br />
            <br />
          </chakra.span>
          <chakra.span fontWeight={600}>
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
            by Srijan
          </chakra.span>{' '}
        </Text>
      </Stack>
    </>
  );
};

export default Container;
