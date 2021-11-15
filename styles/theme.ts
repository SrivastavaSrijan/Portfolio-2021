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
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const fluidType = (minFont, maxFont) => {
  const XX = 768 / 100;
  const YY = (100 * (maxFont - minFont)) / (1920 - 768);
  const ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

const colors = {
  background: '#FAF9F9',
  secondary: '#1d201f',
  complement: '#FFA69E',
  displayColor: '#FAF9F9',
  textPrimary: '#FAF9F9',
  textSecondary: '#edf6f9',
  button1: '#BEE3DB',
  button2: '#ffa69e',
  button3: '#ff686b',
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
    color: '#BEE3DB',
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
    display: fluidType(80, 144),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24),
  },
};

const customTheme = extendTheme(overrides);

export default customTheme;
