import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import type { Product } from '@/data/products';

interface WishlistContextType {
  items: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (product: Product) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const WISHLIST_STORAGE_KEY = 'ikhwan-surgical-wishlist';

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Product[]>(() => {
    // Load wishlist from localStorage on initial render
    if (typeof window !== 'undefined') {
      const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
      if (savedWishlist) {
        try {
          return JSON.parse(savedWishlist);
        } catch (error) {
          console.error('Error parsing wishlist from localStorage:', error);
          return [];
        }
      }
    }
    return [];
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
    }
  }, [items]);

  const addToWishlist = (product: Product) => {
    setItems((currentItems) => {
      if (currentItems.some((item) => item.id === product.id)) {
        return currentItems;
      }
      toast.success(`Added ${product.name} to wishlist`);
      return [...currentItems, product];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setItems((currentItems) => {
      const item = currentItems.find((item) => item.id === productId);
      if (item) {
        toast.success(`Removed ${item.name} from wishlist`);
      }
      return currentItems.filter((item) => item.id !== productId);
    });
  };

  const isInWishlist = (productId: number) => {
    return items.some((item) => item.id === productId);
  };

  const toggleWishlist = (product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        items,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
