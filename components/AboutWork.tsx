import {
  Box,
  Heading,
  Icon,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import {
  FaAccessibleIcon,
  FaGasPump,
  FaLink,
  FaShippingFast,
  FaUserCheck,
} from 'react-icons/fa';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import { MoreInfo } from './MoreInfo';
import { ReactiveImage } from './ReactiveImage';

export const AboutWork = () => {
  return (
    <Box>
      <Stack>
        <SlideUpWhenVisible>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="button1"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Where I've been...
          </Heading>
        </SlideUpWhenVisible>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={12}>
          <FadeInWhenVisible>
            <br />
            Currently, I'm building tech at{' '}
            <MoreInfo
              text=" Proactive For Her "
              body={
                <Text fontSize="display5" color="textSecondary">
                  We're revolutionizing women's healthcare. Founded in 2020 and
                  backed You can read about us{' '}
                  <Link
                    href="https://indianexpress.com/article/lifestyle/health/proactive-for-her-digital-platform-indian-womans-healthcare-health-7632493/"
                    isExternal
                  >
                    here,
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                  <Link
                    href="https://inc42.com/buzz/women-healthtech-startup-proactive-for-her-bags-5-5-mn-to-launch-flagship-clinic/"
                    isExternal
                  >
                    here,
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                  <Link
                    href="https://yourstory.com/herstory/2021/12/iit-harvard-dropout-femtech-health-wellness-startup-proactive-for-her"
                    isExternal
                  >
                    and here.
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                </Text>
              }
              footerText="Who are we?"
            />
            , a non-judgemental, accessible and confidential digital platform
            for women. We're a healthcare startup and our services are available
            <MoreInfo
              text=" online, "
              body={
                <Text fontSize="display5" color="textSecondary">
                  Taking ownership of these massive projects completely changed
                  the way I look at Frontend Development.
                  <br />
                  <br />
                  <Link
                    href="https://proactiveforher.com/health/lab-tests/"
                    isExternal
                  >
                    💉 Lab Tests - Curated medical tests
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="https://proactiveforher.com/health/experts/"
                    isExternal
                  >
                    🩺 Teleconsultation Booking - Talk to an expert gynaec at
                    your convenience.
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                  <br />
                  <br />
                  <Link
                    href="https://proactiveforher.com/health/care-packages/"
                    isExternal
                  >
                    💆🏾‍♀️ Care Packages - Bundles of our services
                    <Icon as={FaLink} boxSize={3} mx="4px" />
                  </Link>
                </Text>
              }
              footerText="Check us out!"
            />
            at-home and
            <MoreInfo
              text=" in-clinic."
              body={<Text fontSize="display5" color="textSecondary"></Text>}
              footerText="Our flagship clinic in Indiranagar, Bengaluru."
            />
            <br />
            <br />
            I've always wanted to make an
            <MoreInfo
              text=" impact with my work "
              body={
                <Text fontSize="display5" color="textSecondary">
                  We have impacted 7000+ women and transacted ₹27,000,00 as of
                  Jan '23. We have an NPS of 4.7/5 and 44% of our users are
                  repeat customers.
                </Text>
              }
              footerText="What impact have we made?"
            />
            and joining Proactive For Her as a Software Development Engineer II
            was a transformative role. In the first month itself, I got to
            architect a{' '}
            <MoreInfo
              text=" massive NextJs project "
              body={
                <Text fontSize="display5" color="textSecondary">
                  Our NextJs repository is strongly typed, robust, clean and
                  allows excellent code reuse.
                </Text>
              }
              footerText="What does our Tech Stack look like?"
            />
            from scratch, set
            <MoreInfo
              text=" coding and linting standards, "
              body={
                <Text fontSize="display5" color="textSecondary">
                  Setting up ESLint and Prettier rules allows us to have a very
                  low margin of error with code quality.
                </Text>
              }
              footerText="Why did we do it the hard way?"
            />
            create boilerplates for different kinds of services and components
            and set up a design library. I also moved our JavaScript first
            developers to
            <MoreInfo
              text=" TypeScript, "
              body={
                <Text fontSize="display5" color="textSecondary">
                  It was a task to get our developers acquainted with
                  TypeScript, but the adoption of it has lead to a significant
                  reduction in runtime errors.
                </Text>
              }
              footerText="What does our Tech Stack look like?"
            />
            which reduced runtime errors and improved development experience
            greatly. <br />
            <br />
            We make intelligent decisions based on our users to ensure that the
            rollout of new features was high quality and on time. I also tasked
            with performing a thorough{' '}
            <MoreInfo
              text=" code review "
              body={
                <Text fontSize="display5" color="textSecondary">
                  Reviewing code and getting feedback on my code is essentially
                  how I learned so many development patterns.
                </Text>
              }
              footerText="Why do we care?"
            />
            of our peers and providing them feedback at every step.
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <br />
            My previous role was at Wipro as an
            <MoreInfo
              text=" Enterprise Engineering Platforms "
              body={
                <Text fontSize="display5" color="textSecondary">
                  This term at Wipro is used to define engineers working on
                  large-scale applications for the development, support,
                  maintenance and implementation of a complex project module.
                </Text>
              }
              footerText="What does this mean?"
            />
            Developer. As a team, we were working with a leading data management
            company for the frontend revamp, modernization and feature addition
            of their principal e-discovery platform. It was an enterprise level
            Angular project with a squeaky clean, thoroughly vetted codebase.
            Think of it as a
            <MoreInfo
              text=" beefed-up "
              body={
                <Text fontSize="display5" color="textSecondary">
                  Convoluted form validations, massive state management, routing
                  between protected routes, exponential scale, local and session
                  storage...the application we worked on was quite complex!
                </Text>
              }
              footerText="What does this mean?"
            />
            Google search! I was tasked to architect complex, pixel-perfect
            modules.
            <br />
            <br />I pride myself on being great at -
            <List spacing={0} marginTop={2}>
              <ListItem>
                <ListIcon as={FaShippingFast} color="black" />
                <MoreInfo
                  text="Extensibility "
                  body={
                    <Text fontSize="display5" color="textSecondary">
                      To me, good code is poetry. I'm inspired by talks like
                    </Text>
                  }
                  footerText="Why do we care?"
                />
                - To allow for any and all use-cases
              </ListItem>
              <ListItem>
                <ListIcon as={FaAccessibleIcon} color="black" />
                <MoreInfo
                  text="Accessibility "
                  body={
                    <Text fontSize="display5" color="textSecondary">
                      According to{' '}
                      <Link
                        href="https://www.levelaccess.com/retailers-take-note-putting-price-tag-lack-digital-accessibility/"
                        isExternal
                      >
                        this
                        <Icon as={FaLink} boxSize={3} mx="4px" />
                      </Link>
                      article, 71% of shoppers with disabilities will click away
                      from your website if it is too difficult to use.
                    </Text>
                  }
                  footerText="Why do we care?"
                />
                - To democratize the internet
              </ListItem>
              <ListItem>
                <ListIcon as={FaUserCheck} color="black" w={4} h={4} />
                <MoreInfo
                  text="Usability "
                  body={
                    <Text fontSize="display5" color="textSecondary">
                      Since the application is extensive and the user base
                      primarily having no technical background, it is of utmost
                      importance that we design with that in mind.
                    </Text>
                  }
                  footerText="Why do we care?"
                />
                - To make applications for the future
              </ListItem>
              <ListItem>
                <ListIcon as={FaGasPump} color="black" />
                <MoreInfo
                  text="Performance "
                  body={
                    <Text fontSize="display5" color="textSecondary">
                      According to{' '}
                      <Link
                        href="https://shjintl.com/why-poor-website-speed-is-costing-companies-millions-of-dollars/"
                        isExternal
                      >
                        this
                        <Icon as={FaLink} boxSize={3} mx="4px" />
                      </Link>
                      article, performance matters; if an e-commerce site is
                      making $100,000 per day, a 1-second page delay could
                      potentially cost it $2.5 million in lost sales every year.
                    </Text>
                  }
                  footerText="Why do we care?"
                />
                - To scale it exponentially
              </ListItem>
            </List>
            <br />
            I finished in the top 10% of my class at&nbsp;
            <MoreInfo
              text="Vellore Institute of Technology, "
              body={
                <ReactiveImage
                  imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/2ivYQNDahjTccL9d6p76Tl/b1e2a291620f3af55ac08791059f0c0a/VIT.webp"
                  alt="VIT Campus"
                />
              }
              footerText="The beautiful campus in the golden hour"
            />
            where I majored in&nbsp;
            <MoreInfo
              text="Electronics & Communication."
              body={
                <ReactiveImage
                  imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/5O4i3w4FYgMcBRN94wp3nH/3358b1026eaf05ab03cced7d57cc1e9d/Breadboard.webp"
                  alt="Circuits we made at uni"
                ></ReactiveImage>
              }
              footerText="I think I've seen more breadboards than bread"
            ></MoreInfo>{' '}
            I was a part of the executive board at a non-profit called&nbsp;
            <MoreInfo
              text="Anokha, "
              body={
                <ReactiveImage
                  imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/6JcomFqlW3IMkFBo2FNIuV/3299ab411e4da14878fa41f1b2ef6224/ANO.webp"
                  alt="Srijan with the kids of Vellore"
                />
              }
              footerText="At Scientastic, a science fair we organized for the kids of Vellore"
            />
            and was a part of Toastmasters International, an organization aimed
            at boosting your
            <MoreInfo
              text=" public speaking "
              body={
                <ReactiveImage
                  imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4wdJ7AXG4mCjewPJoQNVBj/f21b33e645b3e677a2392035370b51e5/tmi.webp"
                  alt="Srijan on the stage, delivering a speech"
                />
              }
              footerText="Giving a speech at one of our weekly sessions!"
            />
            and leadership skills.
          </FadeInWhenVisible>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};
