import { Image } from '@chakra-ui/image';
import { Box, Flex } from '@chakra-ui/layout';
import ScrollWithReveal from '../hook/ScrollWithReveal';
import useMediaQuery from '../hook/useMediaQuery';
import { colors } from '../styles/theme';

export default function ImageWithSvg({
  svgId,
  imageSrc,
  imageSize,
  delay = 0,
}) {
  const isLargerThan800 = useMediaQuery(800);
  return (
    <ScrollWithReveal
      delay={delay}
      inputRange={isLargerThan800 ? [0.1, 0.5] : [0, 2]}
      outputRange={isLargerThan800 ? [1, 1.5] : [0.7, 1.25]}
    >
      <Flex alignItems="center" justifyContent="center" position="relative">
        <Box maxW={imageSize} maxH={imageSize}>
          <Image
            src={`https://svgsilh.com/svg/${svgId}-${colors.complement.replace(
              '#',
              '',
            )}.svg`}
            zIndex={0}
            position="absolute"
            top={0}
            right={0}
            w={{ base: '100px', lg: '150px' }}
            alt=""
          />
          <Image
            zIndex={1}
            fit="cover"
            src={imageSrc}
            borderRadius="full"
            boxSize={imageSize}
            alt="Srijan Srivastava"
          />
        </Box>
      </Flex>
    </ScrollWithReveal>
  );
}
