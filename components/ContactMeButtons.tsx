import { Link, Stack } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { colors } from '../styles/theme';
import ReactGA from 'react-ga';
import useMediaQuery from '../hook/useMediaQuery';
import { FaEnvelope, FaFileAlt, FaLinkedin } from 'react-icons/fa';
import StaggerChild from '../hook/StaggerChild';

export const ContactMeButtons = ({ ...rest }) => {
  const isLargerThan800 = useMediaQuery(800);
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };
  return (
    <Stack placeContent="center" placeItems="center" spacing={4}>
      <StaggerChild
        direction="row wrap"
        placeContent="center"
        placeItems="center"
        style={{ gap: '8px' }}
      >
        <Link
          href="https://www.linkedin.com/in/srijansrivastava35/"
          isExternal
          onClick={() => handleClick('contact_linkedin')}
        >
          <Button
            leftIcon={<FaLinkedin fill={colors.textSecondary} />}
            size={isLargerThan800 ? 'md' : 'sm'}
            color="textSecondary"
          >
            LinkedIn
          </Button>
        </Link>
        <Link
          href="mailto:srijan.srivastava35@gmail.com"
          isExternal
          onClick={() => handleClick('contact_email')}
        >
          <Button
            leftIcon={<FaEnvelope fill={colors.textSecondary} />}
            size={isLargerThan800 ? 'md' : 'sm'}
            color="textSecondary"
          >
            Email
          </Button>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1q6X_YaarffzIsqgrJY1mxCQKHr4j2nvJ/view?usp=sharing"
          isExternal
          onClick={() => handleClick('contact_resume')}
        >
          <Button
            leftIcon={<FaFileAlt fill={colors.textSecondary} />}
            size={isLargerThan800 ? 'md' : 'sm'}
            color="textSecondary"
          >
            Resume
          </Button>
        </Link>
      </StaggerChild>
    </Stack>
  );
};
