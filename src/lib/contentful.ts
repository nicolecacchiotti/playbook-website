import { createClient } from 'contentful';

if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID) {
  throw new Error('Contentful Space ID is not defined');
}

if (!process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
  throw new Error('Contentful Access Token is not defined');
}

console.log('Space:', process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID, 'Token:', process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN);

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
}); 