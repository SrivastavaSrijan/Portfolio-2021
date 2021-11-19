import {
  TagLeftIcon,
  Tag,
  TagLabel,
  Stack,
  As,
  Box,
  Flex,
} from '@chakra-ui/react';
import {
  FaReact,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaJava,
  FaAngular,
  FaAndroid,
  FaUikit,
  FaPython,
  FaChartPie,
  FaLaptopCode,
  FaApple,
  FaBookOpen,
  FaMobile,
  FaNodeJs,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
  SiExpress,
  SiFirebase,
  SiLogmein,
  SiNextdotjs,
  SiNumpy,
  SiPostgresql,
  SiRedux,
  SiReduxsaga,
  SiRxdb,
} from 'react-icons/si';
import StaggerChild from '../hook/StaggerChild';

import useMediaQuery from '../hook/useMediaQuery';
export default function CodeTags({ tags }) {
  const getTag = (tag) => {
    switch (tag) {
      case 'React':
        return ['blue', FaReact];
      case 'Javascript':
        return ['yellow', FaJs];
      case 'Sass':
        return ['pink', FaSass];
      case 'Next.js':
        return ['grey', SiNextdotjs];
      case 'React':
        return ['blue', FaReact];
      case 'Angular':
        return ['red', FaAngular];
      case 'AndroidSDK':
        return ['green', FaAndroid];
      case 'UI/UX':
        return ['purple', FaUikit];
      case 'Java':
        return ['red', FaJava];
      case 'JavaFX':
        return ['green', FaJava];
      case 'Python':
        return ['orange', FaPython];
      case 'Numpy':
        return ['blue', SiNumpy];
      case 'Plotly':
        return ['blue', FaChartPie];
      case 'MATLAB':
        return ['red', FaLaptopCode];
      case 'COMSOL Multiphysics':
        return ['blue', FaApple];
      case 'Research Work':
        return ['purple', FaBookOpen];
      case 'PWA':
        return ['green', FaMobile];
      case 'PostgreSQL':
        return ['blue', SiPostgresql];
      case 'NodeJs':
        return ['green', FaNodeJs];
      case 'Redux':
        return ['blue', SiRedux];
      case 'RxJs':
        return ['purple', SiRxdb];
      case 'Firebase':
        return ['red', SiFirebase];
      case 'OAuth':
        return ['orange', SiLogmein];
      case 'ExpressJs':
        return ['yellow', SiExpress];
      case 'Redux-Saga':
        return ['yellow', SiReduxsaga];
      default:
        return ['purple', FaCode];
    }
  };

  const isLargerThan800 = useMediaQuery(800);

  return (
    <Flex>
      <StaggerChild
        direction="row wrap"
        placeContent="center"
        placeItems="center"
        style={{ gap: '8px' }}
      >
        {(tags ?? [])?.map((item) => (
          <Box key={item}>
            <Tag
              colorScheme={getTag(item)[0] as string}
              size={isLargerThan800 ? 'md' : 'sm'}
            >
              <TagLeftIcon as={getTag(item)[1] as As<IconType>}></TagLeftIcon>
              <TagLabel>{item}</TagLabel>
            </Tag>
          </Box>
        ))}
      </StaggerChild>
    </Flex>
  );
}
