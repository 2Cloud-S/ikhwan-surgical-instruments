import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

// ============== PRODUCT SCHEMA ==============
const productSchema = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'altImage',
      title: 'Alternative Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'material',
      title: 'Material',
      type: 'string',
      options: {
        list: [
          { title: 'Stainless Steel', value: 'Stainless Steel' },
          { title: 'German Steel', value: 'German Steel' },
          { title: 'Titanium', value: 'Titanium' },
          { title: 'Tungsten Carbide', value: 'Tungsten Carbide' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'Small' },
          { title: 'Medium', value: 'Medium' },
          { title: 'Large', value: 'Large' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isNew',
      title: 'New Product',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'variants',
      title: 'Product Variants',
      type: 'array',
      of: [{ type: 'productVariant' }],
      description: 'Different variations of this product (sizes, materials, etc.)',
    },
    {
      name: 'relatedProducts',
      title: 'Related Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      description: 'Manually curated related products (leave empty for auto-generation)',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'image',
    },
  },
};

// ============== CATEGORY SCHEMA ==============
const categorySchema = {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Category Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'image',
      title: 'Category Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};

// ============== HERO SECTION SCHEMA ==============
const heroSectionSchema = {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'backgroundImage',
    },
  },
};

// ============== ABOUT PAGE SCHEMA ==============
const aboutPageSchema = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      options: {
        list: [
          { title: 'Our Story', value: 'our-story' },
          { title: 'Sustainability', value: 'sustainability' },
          { title: 'Size Guide', value: 'size-guide' },
          { title: 'Customer Care', value: 'customer-care' },
          { title: 'Store Locator', value: 'store-locator' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'text',
              title: 'Text',
              type: 'text',
              rows: 5,
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
              },
              initialValue: 'right',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pageType',
      media: 'heroImage',
    },
  },
};

// ============== HOMEPAGE SECTION SCHEMA ==============
const homepageSectionSchema = {
  name: 'homepageSection',
  title: 'Homepage Section',
  type: 'document',
  fields: [
    {
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'Editorial (Full Width)', value: 'editorial' },
          { title: 'Fifty-Fifty', value: 'fifty-fifty' },
          { title: 'Featured Products', value: 'featured-products' },
          { title: 'Categories Grid', value: 'categories-grid' },
          { title: 'Text Block', value: 'text-block' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 2,
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondImage',
      title: 'Second Image (for Fifty-Fifty)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sectionType',
      media: 'image',
    },
  },
};

// ============== SITE SETTINGS SCHEMA ==============
const siteSettingsSchema = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'twitter', title: 'Twitter', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
      ],
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 2,
    },
    {
      name: 'announcementBar',
      title: 'Announcement Bar',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Text',
          type: 'string',
        },
        {
          name: 'isActive',
          title: 'Show Announcement',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo',
    },
  },
};

// ============== PRICE RANGE SCHEMA ==============
const priceRangeSchema = {
  name: 'priceRange',
  title: 'Price Range',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'minPrice',
      title: 'Minimum Price',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0),
    },
    {
      name: 'maxPrice',
      title: 'Maximum Price',
      type: 'number',
      description: 'Leave empty for "and above"',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'label',
    },
  },
};

// ============== MATERIAL SCHEMA ==============
const materialSchema = {
  name: 'material',
  title: 'Material',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Material Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
};

// ============== PRODUCT VARIANT SCHEMA ==============
const productVariantSchema = {
  name: 'productVariant',
  title: 'Product Variant',
  type: 'object',
  fields: [
    {
      name: 'name',
      title: 'Variant Name',
      type: 'string',
      description: 'E.g., "6 inch" or "Curved"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
      description: 'Unique identifier for this variant',
    },
    {
      name: 'price',
      title: 'Price Override',
      type: 'number',
      description: 'Leave empty to use base product price',
    },
    {
      name: 'material',
      title: 'Material Override',
      type: 'string',
    },
    {
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Variant Image',
      type: 'image',
      description: 'Specific image for this variant',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'stockQuantity',
      title: 'Stock Quantity',
      type: 'number',
      description: 'Available quantity',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'sku',
      media: 'image',
    },
  },
};

// ============== PRODUCT REVIEW SCHEMA ==============
const productReviewSchema = {
  name: 'productReview',
  title: 'Product Review',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'reviewerName',
      title: 'Reviewer Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'reviewerTitle',
      title: 'Reviewer Title/Organization',
      type: 'string',
      description: 'E.g., "Dr. Ahmed K." or "Central Hospital"',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(1).max(5),
      description: '1-5 stars',
    },
    {
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'isVerifiedPurchase',
      title: 'Verified Purchase',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isApproved',
      title: 'Approved',
      type: 'boolean',
      initialValue: true,
      description: 'Only approved reviews will be shown',
    },
    {
      name: 'reviewDate',
      title: 'Review Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      title: 'reviewerName',
      subtitle: 'product.name',
      rating: 'rating',
    },
    prepare(selection: any) {
      const { title, subtitle, rating } = selection;
      return {
        title: `${title} - ${rating}★`,
        subtitle: subtitle,
      };
    },
  },
};

// ============== RELATED PRODUCTS SCHEMA ==============
const relatedProductsSchema = {
  name: 'relatedProducts',
  title: 'Related Products Group',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Group Title',
      type: 'string',
      description: 'E.g., "Frequently Bought Together"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
      validation: (Rule: any) => Rule.min(2).max(6),
    },
    {
      name: 'autoGenerate',
      title: 'Auto-Generate Related Products',
      type: 'boolean',
      description: 'Automatically show products from same category',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};

export default defineConfig({
  name: 'default',
  title: 'Ikhwan Surgical Instruments',

  projectId: import.meta.env.VITE_SANITY_STUDIO_PROJECT_ID || 'nki2834w',
  dataset: import.meta.env.VITE_SANITY_STUDIO_DATASET || 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [
      productSchema,
      categorySchema,
      heroSectionSchema,
      aboutPageSchema,
      homepageSectionSchema,
      siteSettingsSchema,
      priceRangeSchema,
      materialSchema,
      productVariantSchema,
      productReviewSchema,
      relatedProductsSchema,
    ],
  },
});
