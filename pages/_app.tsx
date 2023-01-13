import { ChakraProvider } from '@chakra-ui/react';
import customTheme, { colors } from '../styles/theme';
import { Global, css } from '@emotion/react';
import { prismDarkTheme } from '../styles/prism';
import PageTransition from '../hook/PageTransition';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import NProgress from 'nprogress';
import '../styles/nprogress.min.css';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${prismDarkTheme};
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colors.background};
          }
          ::-webkit-scrollbar {
            width: 8px;
            background: ${colors.background};
          }

          ::-webkit-scrollbar-thumb {
            background: ${colors.button1};
            border-radius: 8px;
          }
        `}
      />
      {children}
    </>
  );
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on('routeChangeStart', handleRouteStart);
    router.events.on('routeChangeComplete', handleRouteDone);
    router.events.on('routeChangeError', handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off('routeChangeStart', handleRouteStart);
      router.events.off('routeChangeComplete', handleRouteDone);
      router.events.off('routeChangeError', handleRouteDone);
    };
  }, []);
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <GlobalStyle>
        <PageTransition>
          <Component {...pageProps} />
        </PageTransition>
      </GlobalStyle>
    </ChakraProvider>
  );
}
export default MyApp;
