// Sanity document types

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

export interface SanityProduct {
  _id: string;
  _type: 'product';
  name: string;
  slug: {
    current: string;
  };
  category: string;
  price: number;
  image: SanityImage;
  altImage?: SanityImage;
  material: string;
  size: string;
  isNew?: boolean;
  description?: string;
  specifications?: string[];
  inStock?: boolean;
}

export interface SanityCategory {
  _id: string;
  _type: 'category';
  name: string;
  slug: {
    current: string;
  };
  description?: string;
}

export interface SanityMaterial {
  _id: string;
  _type: 'material';
  name: string;
}

export interface SanitySize {
  _id: string;
  _type: 'size';
  name: string;
}
