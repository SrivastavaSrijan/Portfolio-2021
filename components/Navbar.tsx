import React, { useRef } from 'react';
import {
  Button,
  Flex,
  Box,
  Image,
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
  Center,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import useMediaQuery from '../hook/useMediaQuery';
import { AiOutlineMenu } from 'react-icons/ai';

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
          <DrawerHeader
            borderBottomWidth="1px"
            minH={{ base: '196px', md: '256px' }}
            mt={5}
          >
            <Stack>
              <Center>
                <Image
                  src="/media/favicon.webp"
                  w={{ base: '128px', md: '196px' }}
                ></Image>
              </Center>
            </Stack>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing="16px" mt="56px">
              <NextLink href="/" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme="white"
                  fontSize="display2"
                  size="lg"
                >
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme="white"
                  fontSize="display2"
                  size="lg"
                >
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button
                  as="a"
                  variant="ghost"
                  colorScheme="white"
                  fontSize="display2"
                  size="lg"
                >
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
        background="background"
      >
        <NextLink href="/" passHref>
          <Image></Image>
        </NextLink>
        <Icon
          as={AiOutlineMenu}
          w={7}
          h={7}
          onClick={onOpen}
          color="button1"
          cursor="pointer"
        />
      </Flex>
      <NavbarDrawer />
    </Box>
  );
}
