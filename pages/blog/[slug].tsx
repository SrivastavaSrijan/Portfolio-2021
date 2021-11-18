import { useEffect, useState } from 'react';
import { Avatar, Text, Heading, Stack } from '@chakra-ui/react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

import { ArticleJsonLd, NextSeo } from 'next-seo';

import mdxPrism from 'mdx-prism';
import dateFormat from 'dateformat';
import readingTime from 'reading-time';

import Image from '../../components/ChakraNextImage';
import Container from '../../components/Container';
import PostContainer from '../../containers/PostContainer';
import MDXComponents from '../../components/MDXComponents';

export default function Post({ metadata, source, views }) {
  return (
    <>
      <NextSeo
        title={'Srijan Srivastava | Portfolio | Blog | ' + metadata.title}
        description={metadata.summary}
        canonical={`https://srijansrivastava.tech/blog/${metadata.slug}`}
        openGraph={{
          url: `https://srijansrivastava.tech/blog/${metadata.slug}`,
          site_name: 'Srijan Srivastava',
          title: metadata.title,
          description: metadata.summary,
          type: 'article',
          article: {
            authors: ['Srijan Srivastava'],
            publishedTime: metadata.date,
            modifiedTime: metadata.date,
            tags: ['Programming', 'Web Development', 'Software Engineering'],
          },
          images: [
            {
              url: metadata.image,
              alt: metadata.title,
            },
          ],
        }}
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://srijansrivastava.tech/blog/${metadata.slug}`,
          },
          { property: 'twitter:title', content: metadata.title },
          { property: 'twitter:description', content: metadata.summary },
          { property: 'twitter:image', content: metadata.image },
        ]}
      />
      <ArticleJsonLd
        url={`https://srijansrivastava.tech/blog/${metadata.slug}`}
        title={metadata.title}
        images={[metadata.image]}
        datePublished={metadata.date}
        dateModified={metadata.date}
        authorName="Srijan Srivastava"
        publisherName="Srijan Srivastava"
        publisherLogo="https://i.imgur.com/CbbuXeI.png"
        description={metadata.summary}
      />
      <Container enableTransition={true}>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Heading
              fontSize="display2"
              lineHeight={'95%'}
              color="button1"
              letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
              position="relative"
              zIndex={1}
            >
              {metadata.title}
            </Heading>
            <Stack
              py={4}
              direction={{ base: 'column', md: 'row' }}
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Stack isInline alignItems="center">
                <Avatar
                  name="Srijan Srivastava"
                  size="xs"
                  src="https://images.ctfassets.net/hq1jrfsbgjdg/5YJl4IH6gvSap977ivgeEu/bc7eef43cbac3941dc388b0299d2b5ed/MeHero.webp?w=200"
                  border="1px solid textPrimary"
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
                  Srijan Srivastava /{' '}
                  {dateFormat(Date.parse(metadata.date), 'mmmm d, yyyy')}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textSecondary">
                  {metadata.readingTime} &bull; {views} views
                </Text>
              </Stack>
            </Stack>
            <Stack
              bg="secondary"
              borderRadius="10px"
              minH="200px"
              border="1px"
              borderColor={{ base: '#333', md: 'borderColor' }}
            >
              <Image
                src={metadata.image}
                objectFit="cover"
                borderRadius="10px"
                width={1366}
                height={892}
                w="auto"
                h="auto"
                mx="auto"
                alt=""
                priority
              ></Image>
            </Stack>
            <PostContainer>
              <MDXRemote {...source} components={MDXComponents} />
            </PostContainer>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'blogPosts',
  });
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
  });

  const article = data.items[0].fields;
  const source = article.body;
  article.readingTime = readingTime(source).text;
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  });

  const views = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${params.slug}`,
  )
    .then((res) => res?.json())
    .then((json) => json?.views)
    .catch((error) => console.log(error));

  return {
    props: {
      metadata: article,
      source: mdxSource,
      views: views ?? 0,
    },
    revalidate: 30,
  };
}
