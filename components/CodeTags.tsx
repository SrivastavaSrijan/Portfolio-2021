import { TagLeftIcon, Tag, TagLabel, As, Box, Flex } from '@chakra-ui/react';
import {
  FaReact,
  FaJs,
  FaSass,
  FaCode,
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
  FaForumbee,
  FaDatabase,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import {
  SiAiohttp,
  SiContentful,
  SiCss3,
  SiEslint,
  SiExpress,
  SiFirebase,
  SiGoogleanalytics,
  SiLogmein,
  SiNextdotjs,
  SiNumpy,
  SiPostgresql,
  SiPrettier,
  SiRedux,
  SiReduxsaga,
  SiRxdb,
  SiSass,
  SiStyledcomponents,
  SiTypescript,
  SiUnsplash,
} from 'react-icons/si';
import StaggerChild from '../hook/StaggerChild';

import useMediaQuery from '../hook/useMediaQuery';

/** Code Tags used in Cards.tsx */
export default function CodeTags({ tags }) {
  const getTag = (tag: string) => {
    switch (tag.trim()) {
      case 'React':
        return ['blue', FaReact];
      case 'JavaScript':
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
      case 'Node':
        return ['green', FaNodeJs];
      case 'Redux':
        return ['purple', SiRedux];
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
      case 'SCSS':
        return ['pink', SiSass];
      case 'CSSModules':
        return ['blue', SiCss3];
      case 'TypeScript':
        return ['blue', SiTypescript];
      case 'StyledComponents':
        return ['pink', SiStyledcomponents];
      case 'Unsplash':
        return ['black', SiUnsplash];
      case 'ESLint':
        return ['purple', SiEslint];
      case 'Axios':
        return ['white', SiAiohttp];
      case 'Formik':
        return ['yellow', FaForumbee];
      case 'Redux Persist':
      case 'SQLite':
        return ['black', FaDatabase];
      case 'Prettier':
        return ['pink', SiPrettier];
      case 'Contentful CMS':
        return ['pink', SiContentful];
      case 'Google Analytics':
        return ['pink', SiGoogleanalytics];

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
              backgroundColor="transparent"
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
