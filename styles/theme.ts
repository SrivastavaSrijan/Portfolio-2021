import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

// Fluid Typography.
// font-size  = calc(ZZ + ((1vw - XX) * YY))
// Where   XX = min_viewport / 100
//         YY = 100 * (max_font_size - min_font_size) / (max_viewport - min_viewport)
//            = 100 * font_size_difference / viewport_difference
//         ZZ = Minimum font-size stated in REM

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fluidType = (minFont, maxFont) => {
  const XX = 768 / 100;
  const YY = (100 * (maxFont - minFont)) / (1920 - 768);
  const ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

export const colors = {
  background: '#FFFFFD',
  secondary: '#FAFAFA',
  complement: '#DB235C',
  displayColor: '#232323',
  textPrimary: '#3a3a3a',
  textSecondary: '#3a3a3a',
  button1: '#EECD6B',
  button2: '#FFFF9B',
  button3: '#E6B422',
  borderColor: 'transparent',
};

const fonts = {
  ...chakraTheme.fonts,
  body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const breakpoints = createBreakpoints({
  base: '0em',
  sm: '30em',
  md: '48em',
  lg: '80em',
  xl: '80em',
});

const Link = {
  baseStyle: {
    color: `${colors.textPrimary}`,
    _hover: { color: '#F6A20E', textDecoration: 'none' },
  },
};

const overrides = {
  ...chakraTheme,
  components: {
    Link,
  },
  config,
  colors,
  fonts,
  breakpoints,
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    hero: fluidType(108, 180),
    display: fluidType(72, 144),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24),
    display4: fluidType(16, 18),
    display5: fluidType(14, 16),
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
