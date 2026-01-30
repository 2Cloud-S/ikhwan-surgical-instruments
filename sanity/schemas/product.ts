export default {
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
      type: 'string',
      options: {
        list: [
          { title: 'Forceps', value: 'Forceps' },
          { title: 'Scissors', value: 'Scissors' },
          { title: 'Clamps', value: 'Clamps' },
          { title: 'Needle Holders', value: 'Needle Holders' },
          { title: 'Retractors', value: 'Retractors' },
          { title: 'Scalpels', value: 'Scalpels' },
          { title: 'Probes', value: 'Probes' },
          { title: 'Rongeurs', value: 'Rongeurs' },
          { title: 'Dilators', value: 'Dilators' },
          { title: 'Curettes', value: 'Curettes' },
          { title: 'Tweezers', value: 'Tweezers' },
        ],
      },
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
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
};
