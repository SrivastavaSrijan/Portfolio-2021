import React, { useRef } from 'react';
import {
  Button,
  Flex,
  Box,
  Image,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
  Divider,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import styled from '@emotion/styled';
import useMediaQuery from '../hook/useMediaQuery';
import { AiOutlineMenu } from 'react-icons/ai';
import { motion } from 'framer-motion';

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="button1">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" minH="56px">
            <Image src="" w={{ base: '32px', md: '64px' }}></Image>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="56px" mt="56px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="display2">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="display2">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="display2">
                  Blog
                </Button>
              </NextLink>
            </Stack>
            <Divider mt="56px"></Divider>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Box zIndex="99">
      <Flex
        as="nav"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        px="24px"
        py="3"
        background="button1"
      >
        <NextLink href="/" passHref>
          <Image src="" w={{ base: '32px', md: '48px' }}></Image>
        </NextLink>
        <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
      </Flex>
      <NavbarDrawer />
    </Box>
  );
}
