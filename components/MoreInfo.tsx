import {
  Text,
  chakra,
  Popover,
  PopoverTrigger,
  PopoverFooter,
  PopoverContent,
  PopoverArrow,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Button,
  PopoverBody,
} from '@chakra-ui/react';

import { useDisclosure } from '@chakra-ui/hooks';

import useMediaQuery from '../hook/useMediaQuery';
import ReactGA from 'react-ga';

export const MoreInfo = ({ text, body, footerText }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isLargerThan800 = useMediaQuery(800);
  const handleHover = (event) => {
    ReactGA.event({
      category: 'hover',
      action: event,
    });
  };
  return (
    <>
      {isLargerThan800 ? (
        <Popover trigger="hover" placement="right" isLazy>
          <PopoverTrigger>
            <chakra.span
              onMouseOver={() => handleHover(`about_${text}`)}
              color="button1"
              cursor="help"
            >
              {text}
            </chakra.span>
          </PopoverTrigger>
          <PopoverContent bg="secondary" padding="0" borderColor="button1">
            <PopoverArrow bg="button1" />
            <PopoverBody>{body}</PopoverBody>
            <PopoverFooter bg="button1">
              <Text
                textAlign="center"
                padding="1.5"
                color="textSecondary"
                fontSize="display4"
                whiteSpace="pre-line"
              >
                {footerText}
              </Text>
            </PopoverFooter>
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <Text
            as="span"
            color="button1"
            onClick={onOpen}
            onClickCapture={() => handleHover(`about_${text}`)}
          >
            {text}
          </Text>{' '}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton color="button1" bgColor="black" />
              <ModalBody bg="secondary" padding="0" borderColor="button1">
                {body}
              </ModalBody>
              <ModalFooter bg="button1">
                <Text
                  textAlign="center"
                  padding="1.5"
                  color="textSecondary"
                  fontSize="display4"
                  whiteSpace="pre-line"
                >
                  {footerText}
                </Text>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}{' '}
    </>
  );
};
