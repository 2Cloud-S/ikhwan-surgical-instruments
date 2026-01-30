import { useQuery } from '@tanstack/react-query';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import type { SanityProduct } from '@/types/sanity';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  priceDisplay: string;
  image: string;
  altImage: string;
  material: string;
  size: string;
  isNew?: boolean;
  description?: string;
  inStock?: boolean;
}

// GROQ query to fetch all products with expanded category reference
const PRODUCTS_QUERY = `*[_type == "product"] | order(name asc) {
  _id,
  name,
  slug,
  "category": category->name,
  "categorySlug": category->slug.current,
  price,
  image,
  altImage,
  material,
  size,
  isNew,
  description,
  specifications,
  inStock
}`;

// Helper to safely get image URL from Sanity
const getImageUrl = (image: any, width = 800): string => {
  if (!image) return '';

  // If it's already a string URL, return it
  if (typeof image === 'string') return image;

  // If it's a Sanity image object, use urlFor
  try {
    return urlFor(image).width(width).quality(85).auto('format').url();
  } catch (error) {
    console.error('Error transforming image:', error);
    return '';
  }
};

// Transform Sanity product to app Product format
const transformProduct = (sanityProduct: SanityProduct): Product => {
  const mainImage = getImageUrl(sanityProduct.image, 800);
  const altImg = getImageUrl(sanityProduct.altImage, 800);

  return {
    id: sanityProduct._id,
    name: sanityProduct.name,
    slug: sanityProduct.slug?.current || sanityProduct.name.toLowerCase().replace(/\s+/g, '-'),
    category: sanityProduct.category,
    price: sanityProduct.price,
    priceDisplay: `$${sanityProduct.price.toFixed(2)}`,
    image: mainImage,
    altImage: altImg || mainImage,
    material: sanityProduct.material,
    size: sanityProduct.size,
    isNew: sanityProduct.isNew || false,
    description: sanityProduct.description,
    inStock: sanityProduct.inStock ?? true,
  };
};

/**
 * Hook to fetch all products from Sanity
 */
export const useProducts = () => {
  return useQuery({
    queryKey: ['sanity-products'],
    queryFn: async () => {
      try {
        const sanityProducts = await sanityClient.fetch<SanityProduct[]>(PRODUCTS_QUERY);
        return sanityProducts.map(transformProduct);
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Failed to load products. Please try again later.');
      }
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
    retryDelay: 1000,
  });
};

/**
 * Hook to fetch a single product by ID or slug from Sanity
 */
export const useProduct = (productId: string) => {
  return useQuery({
    queryKey: ['sanity-product', productId],
    queryFn: async () => {
      try {
        // Try to find by _id first, then by slug
        const query = `*[_type == "product" && (_id == $id || slug.current == $id)][0] {
          _id,
          name,
          slug,
          "category": category->name,
          "categorySlug": category->slug.current,
          price,
          image,
          altImage,
          material,
          size,
          isNew,
          description,
          specifications,
          inStock
        }`;

        const sanityProduct = await sanityClient.fetch<SanityProduct>(query, { id: productId });
        return sanityProduct ? transformProduct(sanityProduct) : null;
      } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Failed to load product details. Please try again later.');
      }
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, // 5 minutes
    retry: 2,
    retryDelay: 1000,
  });
};

/**
 * Hook to fetch products by category
 */
export const useProductsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['sanity-products-category', category],
    queryFn: async () => {
      const query = `*[_type == "product" && category == $category] | order(name asc) {
        _id,
        name,
        slug,
        category,
        price,
        image,
        altImage,
        material,
        size,
        isNew,
        description,
        inStock
      }`;

      const sanityProducts = await sanityClient.fetch<SanityProduct[]>(query, { category });
      return sanityProducts.map(transformProduct);
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
  });
};
