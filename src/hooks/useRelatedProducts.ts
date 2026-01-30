import { useQuery } from '@tanstack/react-query';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import type { Product } from './useProducts';

// Helper to safely get image URL from Sanity
const getImageUrl = (image: any, width = 800): string => {
  if (!image) return '';
  if (typeof image === 'string') return image;

  try {
    return urlFor(image).width(width).quality(85).auto('format').url();
  } catch (error) {
    console.error('Error transforming image:', error);
    return '';
  }
};

/**
 * Hook to fetch related products for a specific product
 * First checks for manually curated related products,
 * then falls back to category-based recommendations
 */
export const useRelatedProducts = (productId: string, category?: string, limit = 6) => {
  return useQuery({
    queryKey: ['related-products', productId, category],
    queryFn: async () => {
      try {
        // First, try to get manually curated related products
        const manualQuery = `*[_type == "product" && _id == $productId][0] {
          "relatedProducts": relatedProducts[]-> {
            _id,
            name,
            slug,
            "category": category->name,
            price,
            image,
            altImage,
            isNew,
            inStock
          }
        }`;

        const manualResult = await sanityClient.fetch(manualQuery, { productId });

        if (manualResult?.relatedProducts && manualResult.relatedProducts.length > 0) {
          // Return manually curated products
          return manualResult.relatedProducts.slice(0, limit).map((product: any): Product => ({
            id: product._id,
            name: product.name,
            slug: product.slug?.current || product.name.toLowerCase().replace(/\s+/g, '-'),
            category: product.category || 'Uncategorized',
            price: product.price,
            priceDisplay: `$${product.price.toFixed(2)}`,
            image: getImageUrl(product.image, 600),
            altImage: getImageUrl(product.altImage, 600) || getImageUrl(product.image, 600),
            material: '',
            size: '',
            isNew: product.isNew || false,
            inStock: product.inStock ?? true,
          }));
        }

        // Fall back to category-based recommendations
        if (!category) return [];

        const categoryQuery = `*[_type == "product" && category->name == $category && _id != $productId && inStock == true] | order(_createdAt desc) [0...$limit] {
          _id,
          name,
          slug,
          "category": category->name,
          price,
          image,
          altImage,
          isNew,
          inStock
        }`;

        const categoryProducts = await sanityClient.fetch(categoryQuery, {
          category,
          productId,
          limit,
        });

        return categoryProducts.map((product: any): Product => ({
          id: product._id,
          name: product.name,
          slug: product.slug?.current || product.name.toLowerCase().replace(/\s+/g, '-'),
          category: product.category || 'Uncategorized',
          price: product.price,
          priceDisplay: `$${product.price.toFixed(2)}`,
          image: getImageUrl(product.image, 600),
          altImage: getImageUrl(product.altImage, 600) || getImageUrl(product.image, 600),
          material: '',
          size: '',
          isNew: product.isNew || false,
          inStock: product.inStock ?? true,
        }));
      } catch (error) {
        console.error('Error fetching related products:', error);
        return [];
      }
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Hook to fetch products by category (for category-specific carousels)
 */
export const useProductsByCategory = (category: string, limit = 6, excludeProductId?: string) => {
  return useQuery({
    queryKey: ['products-by-category', category, limit, excludeProductId],
    queryFn: async () => {
      try {
        const query = `*[_type == "product" && category->name == $category ${excludeProductId ? '&& _id != $excludeProductId' : ''} && inStock == true] | order(_createdAt desc) [0...$limit] {
          _id,
          name,
          slug,
          "category": category->name,
          price,
          image,
          altImage,
          isNew,
          inStock
        }`;

        const products = await sanityClient.fetch(query, {
          category,
          excludeProductId,
          limit,
        });

        return products.map((product: any): Product => ({
          id: product._id,
          name: product.name,
          slug: product.slug?.current || product.name.toLowerCase().replace(/\s+/g, '-'),
          category: product.category || 'Uncategorized',
          price: product.price,
          priceDisplay: `$${product.price.toFixed(2)}`,
          image: getImageUrl(product.image, 600),
          altImage: getImageUrl(product.altImage, 600) || getImageUrl(product.image, 600),
          material: '',
          size: '',
          isNew: product.isNew || false,
          inStock: product.inStock ?? true,
        }));
      } catch (error) {
        console.error('Error fetching products by category:', error);
        return [];
      }
    },
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
  });
};
