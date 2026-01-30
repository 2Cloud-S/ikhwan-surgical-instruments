import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { sanityConfig } from './sanity.config';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Create Sanity client
export const sanityClient = createClient(sanityConfig);

// Image URL builder helper
const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
