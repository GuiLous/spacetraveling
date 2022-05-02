/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as prismic from '@prismicio/client';

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/';
    case 'page':
      return `/${doc.uid}`;
    default:
      return null;
  }
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    ...config,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return client;
}
