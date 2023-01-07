import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import FadeInWhenVisible from '../hook/FadeInWhenVisible';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import { MoreInfo } from './MoreInfo';
import { ReactiveImage } from './ReactiveImage';

export const AboutMe = () => {
  return (
    <Box>
      <Stack spacing={4}>
        <SlideUpWhenVisible>
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="button1"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            At my core...
          </Heading>
        </SlideUpWhenVisible>
        <FadeInWhenVisible>
          I’m an innately curious and passionate person who follows
          <MoreInfo
            text=" Occam's Razor "
            body={
              <ReactiveImage
                imageSrc="https://149664534.v2.pressablecdn.com/wp-content/uploads/2017/05/occams-razor-white-300x300.jpg"
                alt="Campuses of 3 companies"
              />
            }
            footerText="Among competing hypotheses, the one with the fewest assumptions should be selected."
          />
          religiously. I find the enigma in a challenge beautiful. My
          cross-functional skill-set has allowed me to work alongside
          <MoreInfo
            text=" companies that dominate their fields "
            body={
              <ReactiveImage
                imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/1CRaHEqS4MkdCFxDa32GfU/1066b1f217810c257d1038f37bb24c1e/MyOffices.webp"
                alt="Campuses of 3 companies"
              />
            }
            footerText="From top, those are offices for Wipro, Doctors without Borders, and Jio!"
          />
          in different domains. My professional goal is to work on a
          consumer-facing product that creates lifelong value in the lives of
          its users.
          <br /> <br />
          <Text fontWeight={600}>
            I strongly believe that access to the internet is an inalienable,
            fundamental right and the only way to design is to design with
            inclusivity in mind.
          </Text>
          <br />
          Outside of work, I'm either tweaking for{' '}
          <MoreInfo
            text="the perfect pasta recipe,"
            body={
              <ReactiveImage
                imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4VNMkrslDUcHIKoYL4zwEr/0fbcb3ee8d586dc2f61a2e34135d2a71/RecentPasta.webp"
                alt="Pasta"
              />
            }
            footerText="A recent recipe I tried out and I have to say it came out squisito."
          />
          <MoreInfo
            text=" obsessing over some music, "
            body={
              <ReactiveImage
                imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4DQwAxIcXOZIKtHwNj2squ/c88a390b307f1b8616f280d6e103ef83/Concert.webp?"
                alt="Concert"
              />
            }
            footerText="Being classically trained till the age of 8, I've always had an inexplicable bond with music!"
          />
          or having a{' '}
          <MoreInfo
            text=" coffee."
            body={
              <ReactiveImage
                imageSrc="https://images.ctfassets.net/hq1jrfsbgjdg/4NWQ5vZM4SaXvoUCf2hjJc/fb457f80bd2f3edf73e02cbe2e6f9a3d/Coffee.webp"
                alt="Coffee"
              />
            }
            footerText="I know my Caturra from my Bourbon and cupping is my favorite hobby."
          />
        </FadeInWhenVisible>
      </Stack>
    </Box>
  );
};
