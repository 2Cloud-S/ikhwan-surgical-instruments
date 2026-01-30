import { useQuery } from '@tanstack/react-query';
import { sanityClient, urlFor } from '@/lib/sanity.client';
import type { SanityProduct } from '@/types/sanity';
import type { Product } from '@/data/products';

// GROQ query to fetch all products
const PRODUCTS_QUERY = `*[_type == "product"] | order(name asc) {
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
  specifications,
  inStock
}`;

// Transform Sanity product to app Product format
const transformProduct = (sanityProduct: SanityProduct): Product => {
  return {
    id: parseInt(sanityProduct._id.replace(/\D/g, '')) || Math.random(),
    name: sanityProduct.name,
    category: sanityProduct.category,
    price: sanityProduct.price,
    priceDisplay: `$${sanityProduct.price}`,
    image: sanityProduct.image ? urlFor(sanityProduct.image).width(800).url() : '',
    altImage: sanityProduct.altImage ? urlFor(sanityProduct.altImage).width(800).url() : '',
    material: sanityProduct.material,
    size: sanityProduct.size,
    isNew: sanityProduct.isNew || false,
  };
};

export const useSanityProducts = () => {
  return useQuery({
    queryKey: ['sanity-products'],
    queryFn: async () => {
      const sanityProducts = await sanityClient.fetch<SanityProduct[]>(PRODUCTS_QUERY);
      return sanityProducts.map(transformProduct);
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useSanityProduct = (productId: number) => {
  return useQuery({
    queryKey: ['sanity-product', productId],
    queryFn: async () => {
      const query = `*[_type == "product"][${productId - 1}] {
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
        specifications,
        inStock
      }[0]`;

      const sanityProduct = await sanityClient.fetch<SanityProduct>(query);
      return sanityProduct ? transformProduct(sanityProduct) : null;
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
