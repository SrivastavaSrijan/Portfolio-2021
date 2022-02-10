import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  ListIcon,
  ListItem,
  List,
  Link,
  Icon,
} from '@chakra-ui/react';

import useMediaQuery from '../hook/useMediaQuery';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import ImageWithSvg from '../components/ImageWithSvg';
import { ReactiveImage } from '../components/ReactiveImage';
import { MoreInfo } from '../components/MoreInfo';
import {
  FaAccessibleIcon,
  FaGasPump,
  FaLink,
  FaUserCheck,
} from 'react-icons/fa';

export default function AboutMe() {
  const isLargerThan800 = useMediaQuery(800);

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <Stack
          spacing={4}
          style={isLargerThan800 ? { gridColumn: 2, gridRow: 1 } : {}}
        >
          <SlideUpWhenVisible>
            <Heading
              fontSize="display"
              lineHeight={'95%'}
              color="button1"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
              About Me
            </Heading>
          </SlideUpWhenVisible>
          <FadeInWhenVisible>
            <Text
              color="textSecondary"
              fontSize="display4"
              whiteSpace="pre-line"
              lineHeight={1.5}
            >
              <br />I finished in the top 10% of my class at&nbsp;
              <MoreInfo
                text="Vellore Institute of Technology,"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/2ivYQNDahjTccL9d6p76Tl/b1e2a291620f3af55ac08791059f0c0a/VIT.webp"
                    alt="VIT Campus"
                  ></ReactiveImage>
                }
                footerText="The beautiful campus in the golden hour"
              ></MoreInfo>
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
                text="Anokha,"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/6JcomFqlW3IMkFBo2FNIuV/3299ab411e4da14878fa41f1b2ef6224/ANO.webp"
                    alt="Srijan with the kids of Vellore"
                  ></ReactiveImage>
                }
                footerText="At Scientastic, a science fair we organized for the kids of Vellore"
              ></MoreInfo>
              and was a part of Toastmasters International, an organization
              aimed at boosting your&nbsp;
              <MoreInfo
                text="public speaking"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4wdJ7AXG4mCjewPJoQNVBj/f21b33e645b3e677a2392035370b51e5/tmi.webp"
                    alt="Srijan on the stage, delivering a speech"
                  ></ReactiveImage>
                }
                footerText="Giving a speech at one of our weekly sessions!"
              ></MoreInfo>{' '}
              and leadership skills.
              <br /> <br />
              My current role at Wipro is as an{' '}
              <MoreInfo
                text="Enterprise Engineering Platforms"
                body={
                  <Text fontSize="display5" color="textSecondary">
                    This term at Wipro is used to define engineers working on
                    large-scale applications for the development, support,
                    maintenance and implementation of a complex project module.
                  </Text>
                }
                footerText="What does this mean?"
              ></MoreInfo>
              Developer. As a team, we’re working with a leading data management
              company for their principal e-discovery platform. Think of it as a{' '}
              <MoreInfo
                text="beefed-up"
                body={
                  <Text fontSize="display5" color="textSecondary">
                    Convoluted form validations, massive state management,
                    routing between protected routes, exponential scale, local
                    and session storage...the application we work on is quite
                    complex!
                  </Text>
                }
                footerText="What does this mean?"
              ></MoreInfo>
              Google search! I’m tasked to architect complex, pixel-perfect
              modules.
              <br />
              <br />
              Our primary focus areas are -
              <List spacing={0} marginTop={2}>
                <ListItem>
                  <ListIcon as={FaAccessibleIcon} color="black" />
                  <MoreInfo
                    text="Accessibility"
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
                        article, 71% of shoppers with disabilities will click
                        away from your website if it is too difficult to use.
                      </Text>
                    }
                    footerText="Why do we care?"
                  ></MoreInfo>
                  - To comply with the Section 508 of the Rehabilitation Act
                </ListItem>
                <ListItem>
                  <ListIcon as={FaUserCheck} color="black" w={4} h={4} />
                  <MoreInfo
                    text="Usability"
                    body={
                      <Text fontSize="display5" color="textSecondary">
                        Since the application is extensive and the user base
                        primarily having no technical background, it is of
                        utmost importance that we design with that in mind.
                      </Text>
                    }
                    footerText="Why do we care?"
                  ></MoreInfo>
                  - To ensure best practices, make the overall experience
                  optimal for all
                </ListItem>
                <ListItem>
                  <ListIcon as={FaGasPump} color="black" />
                  <MoreInfo
                    text="Performance"
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
                        potentially cost it $2.5 million in lost sales every
                        year.
                      </Text>
                    }
                    footerText="Why do we care?"
                  ></MoreInfo>
                  - To scale it exponentially
                </ListItem>
              </List>
              <br />
              We work closely with our clients to ensure that the rollout of new
              features is high quality and on time. To that end, have a{' '}
              <MoreInfo
                text="Quality
                    Assurance team."
                body={
                  <Text fontSize="display5" color="textSecondary">
                    Our QA means business! As an individual developer, I have
                    fixed over 200 functional, accessibility and performance
                    defects across 4 releases.
                  </Text>
                }
                footerText="Why do we care?"
              ></MoreInfo>
              We are also tasked with performing a thorough{' '}
              <MoreInfo
                text="code review"
                body={
                  <Text fontSize="display5" color="textSecondary">
                    Any Pull Request will have 2 Levels of Internal Review and 1
                    Level of client review. Comments are given based on code
                    quality, common bugs caused by JavaScript gotchas, CSS
                    issues, etc.
                  </Text>
                }
                footerText="Why do we care?"
              ></MoreInfo>
              of our peers and providing them feedback at every step.
              <br /> <br />
            </Text>
          </FadeInWhenVisible>
        </Stack>
        <Stack margin="auto" spacing={20}>
          <ImageWithSvg
            svgId="26432"
            imageSize={{ base: '450px', lg: '450px' }}
            imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/3Y7RUoyLJi2xsd0lLUoMDj/95a362afa59299b136cdc77036829537/Srijan_Srivastava_-_Portfolio_Image_2.webp"
          />
          <FadeInWhenVisible>
            <Text
              color="textSecondary"
              fontSize="display4"
              whiteSpace="pre-line"
              lineHeight={1.5}
            >
              I’m an innately curious and passionate person who follows{' '}
              <MoreInfo
                text="Occam's Razor"
                body={
                  <ReactiveImage
                    imageSrc="https://149664534.v2.pressablecdn.com/wp-content/uploads/2017/05/occams-razor-white-300x300.jpg"
                    alt="Campuses of 3 companies"
                  ></ReactiveImage>
                }
                footerText="Among competing hypotheses, the one with the fewest assumptions should be selected."
              ></MoreInfo>
              religiously. I find the enigma in a challenge beautiful. My
              cross-functional skill-set has allowed me to work alongside{' '}
              <MoreInfo
                text=" companies that dominate their fields"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/1CRaHEqS4MkdCFxDa32GfU/1066b1f217810c257d1038f37bb24c1e/MyOffices.webp"
                    alt="Campuses of 3 companies"
                  ></ReactiveImage>
                }
                footerText="From top, those are offices for Wipro, Doctors without Borders, and Jio!"
              ></MoreInfo>{' '}
              in different domains. My professional goal is to work on a
              consumer-facing product that creates lifelong value in the lives
              of its users.
              <br /> <br />
              <Text fontWeight={600}>
                I strongly believe that access to the internet is an
                inalienable, fundamental right and the only way to design is to
                design with inclusivity in mind.
              </Text>
              <br />
              Outside of work, I'm either tweaking for{' '}
              <MoreInfo
                text="the perfect pasta recipe,"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4VNMkrslDUcHIKoYL4zwEr/0fbcb3ee8d586dc2f61a2e34135d2a71/RecentPasta.webp"
                    alt="Pasta"
                  ></ReactiveImage>
                }
                footerText="A recent recipe I tried out and I have to say it came out squisito."
              ></MoreInfo>
              <MoreInfo
                text="obsessing over some music,"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4DQwAxIcXOZIKtHwNj2squ/c88a390b307f1b8616f280d6e103ef83/Concert.webp?"
                    alt="Concert"
                  ></ReactiveImage>
                }
                footerText="Being classically trained till the age of 8, I've always had an inexplicable bond with music!"
              ></MoreInfo>
              or having a{' '}
              <MoreInfo
                text="coffee."
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4NWQ5vZM4SaXvoUCf2hjJc/fb457f80bd2f3edf73e02cbe2e6f9a3d/Coffee.webp"
                    alt="Coffee"
                  ></ReactiveImage>
                }
                footerText="I know my Caturra from my Bourbon and cupping is my favorite hobby."
              ></MoreInfo>
            </Text>
          </FadeInWhenVisible>
        </Stack>
      </SimpleGrid>
    </>
  );
}
