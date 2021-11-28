import { Image, Flex, Square, CircularProgress } from '@chakra-ui/react';

import { useState } from 'react';

/**
 * Component to render a polaroid type box
 * @param {*} imageSrc - Link of image
 * @param {*} alt - a11y text
 * @param {*} text - bottom text
 * @returns
 */
export const ReactiveImage = ({ imageSrc, alt }) => {
  const [isLoaded, setLoaded] = useState(false);

  return (
    <>
      <Flex placeContent="center" placeItems="center" flexFlow="column">
        {!isLoaded && (
          <Square size="300px">
            <CircularProgress
              size="100px"
              isIndeterminate
              color="button1"
              thickness="4px"
            />
          </Square>
        )}
        <Image
          marginTop="1.5"
          onLoad={() => setLoaded(true)}
          display={!isLoaded ? 'none' : 'block'}
          w={{ base: '300px', md: '300px' }}
          src={imageSrc}
          alt={alt}
        ></Image>
      </Flex>
    </>
  );
};
