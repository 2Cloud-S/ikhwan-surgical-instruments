import { useQuery } from '@tanstack/react-query';
import { sanityClient } from '@/lib/sanity.client';

export interface ProductReview {
  id: string;
  reviewerName: string;
  reviewerTitle?: string;
  rating: number;
  reviewText: string;
  isVerifiedPurchase: boolean;
  reviewDate: string;
}

/**
 * Hook to fetch reviews for a specific product
 */
export const useProductReviews = (productId: string) => {
  return useQuery({
    queryKey: ['product-reviews', productId],
    queryFn: async () => {
      try {
        const query = `*[_type == "productReview" && product._ref == $productId && isApproved == true] | order(reviewDate desc) {
          _id,
          reviewerName,
          reviewerTitle,
          rating,
          reviewText,
          isVerifiedPurchase,
          reviewDate
        }`;

        const reviews = await sanityClient.fetch(query, { productId });

        return reviews.map((review: any): ProductReview => ({
          id: review._id,
          reviewerName: review.reviewerName,
          reviewerTitle: review.reviewerTitle,
          rating: review.rating,
          reviewText: review.reviewText,
          isVerifiedPurchase: review.isVerifiedPurchase || false,
          reviewDate: review.reviewDate,
        }));
      } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];
      }
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Hook to get average rating for a product
 */
export const useProductRating = (productId: string) => {
  return useQuery({
    queryKey: ['product-rating', productId],
    queryFn: async () => {
      try {
        const query = `*[_type == "productReview" && product._ref == $productId && isApproved == true] {
          rating
        }`;

        const reviews = await sanityClient.fetch(query, { productId });

        if (reviews.length === 0) {
          return { average: 0, count: 0 };
        }

        const sum = reviews.reduce((acc: number, review: any) => acc + review.rating, 0);
        const average = sum / reviews.length;

        return {
          average: Math.round(average * 10) / 10, // Round to 1 decimal
          count: reviews.length,
        };
      } catch (error) {
        console.error('Error fetching rating:', error);
        return { average: 0, count: 0 };
      }
    },
    enabled: !!productId,
    staleTime: 1000 * 60 * 5,
  });
};
