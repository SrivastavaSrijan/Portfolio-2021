import { SimpleGrid, Text, Stack, Heading } from '@chakra-ui/react';

import useMediaQuery from '../hook/useMediaQuery';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import ImageWithSvg from '../components/ImageWithSvg';
import { ReactiveImage } from '../components/ReactiveImage';
import { MoreInfo } from '../components/MoreInfo';

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
            >
              Being obsessed with technology from my childhood, I made my first
              website when I was 12! Now, that was a far cry from what this
              portfolio is, but I've always been innately curious. My
              cross-functional skillset has allowed me to work in different
              domains alongside&nbsp;
              <MoreInfo
                text="companies that dominate the field."
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/1CRaHEqS4MkdCFxDa32GfU/1066b1f217810c257d1038f37bb24c1e/MyOffices.webp"
                    alt="Campuses of 3 companies"
                  ></ReactiveImage>
                }
                footerText="From top, those are offices for Wipro, Doctors without Borders, and Jio!"
              ></MoreInfo>
              Outside of work, I'm either tweaking for&nbsp;
              <MoreInfo
                text="the perfect pasta recipe,"
                body={
                  <ReactiveImage
                    imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4VNMkrslDUcHIKoYL4zwEr/0fbcb3ee8d586dc2f61a2e34135d2a71/RecentPasta.webp"
                    alt="Pasta"
                  ></ReactiveImage>
                }
                footerText="A recent recipe I tried out and I have to say it came out squisito"
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
              or having a coffee. <br />
              <br />I finished at the top 10% of my class at&nbsp;
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
              and was a part of a Toastmasters International, an organization
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
              Right now, I'm working at Wipro on an awesome Enterprise
              Application. My role as a Developer is to architect pixel-perfect
              modules which are compliant with Web body Accessibility Guidelines
              and provide an excellent end-user experience. I'm conversant with
              ES6, Form Validation, RxJs and performance optimization. <br />{' '}
              <br />
              <Text fontWeight="600">
                I strongly believe that access to the internet is an
                inalienable, fundamental right and the only way to design is
                design with inclusivity in mind. I love to be challenged by the
                diversity of users, and to that end, I'm actively looking for an
                opportunity that constantly challenges me.
              </Text>
            </Text>
          </FadeInWhenVisible>
        </Stack>
        <Stack margin="auto">
          <ImageWithSvg
            svgId="26432"
            imageSize={{ base: '450px', lg: '450px' }}
            imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/3Y7RUoyLJi2xsd0lLUoMDj/95a362afa59299b136cdc77036829537/Srijan_Srivastava_-_Portfolio_Image_2.webp"
          />
        </Stack>
      </SimpleGrid>
    </>
  );
}
