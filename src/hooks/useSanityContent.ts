import { useQuery } from '@tanstack/react-query';
import { sanityClient, urlFor } from '@/lib/sanity.client';

// ============== TYPES ==============

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  order: number;
}

export interface HeroSection {
  id: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  isActive: boolean;
}

export interface AboutPage {
  id: string;
  pageType: string;
  title: string;
  heroImage?: string;
  content?: any[];
  sections?: {
    heading?: string;
    text?: string;
    image?: string;
    imagePosition?: 'left' | 'right';
  }[];
}

export interface HomepageSection {
  id: string;
  sectionType: string;
  title?: string;
  subtitle?: string;
  image?: string;
  secondImage?: string;
  buttonText?: string;
  buttonLink?: string;
  order: number;
  isActive: boolean;
}

export interface SiteSettings {
  siteName: string;
  logo?: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  footerText?: string;
  announcementBar?: {
    text?: string;
    isActive?: boolean;
  };
}

export interface PriceRange {
  id: string;
  label: string;
  minPrice: number;
  maxPrice?: number;
  order: number;
}

export interface Material {
  id: string;
  name: string;
  description?: string;
}

// ============== CATEGORIES ==============

export const useCategories = () => {
  return useQuery({
    queryKey: ['sanity-categories'],
    queryFn: async () => {
      const query = `*[_type == "category"] | order(order asc) {
        _id,
        name,
        slug,
        description,
        image,
        order
      }`;

      const categories = await sanityClient.fetch(query);
      return categories.map((cat: any): Category => ({
        id: cat._id,
        name: cat.name,
        slug: cat.slug?.current || cat.name.toLowerCase().replace(/\s+/g, '-'),
        description: cat.description,
        image: cat.image ? urlFor(cat.image).width(600).url() : undefined,
        order: cat.order || 0,
      }));
    },
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

// ============== HERO SECTION ==============

export const useHeroSection = () => {
  return useQuery({
    queryKey: ['sanity-hero'],
    queryFn: async () => {
      const query = `*[_type == "heroSection" && isActive == true][0] {
        _id,
        title,
        subtitle,
        backgroundImage,
        buttonText,
        buttonLink,
        isActive
      }`;

      const hero = await sanityClient.fetch(query);
      if (!hero) return null;

      return {
        id: hero._id,
        title: hero.title,
        subtitle: hero.subtitle,
        backgroundImage: hero.backgroundImage ? urlFor(hero.backgroundImage).width(1920).url() : '',
        buttonText: hero.buttonText,
        buttonLink: hero.buttonLink,
        isActive: hero.isActive,
      } as HeroSection;
    },
    staleTime: 1000 * 60 * 10,
  });
};

// ============== ABOUT PAGES ==============

export const useAboutPage = (pageType: string) => {
  return useQuery({
    queryKey: ['sanity-about', pageType],
    queryFn: async () => {
      const query = `*[_type == "aboutPage" && pageType == $pageType][0] {
        _id,
        pageType,
        title,
        heroImage,
        content,
        sections
      }`;

      const page = await sanityClient.fetch(query, { pageType });
      if (!page) return null;

      return {
        id: page._id,
        pageType: page.pageType,
        title: page.title,
        heroImage: page.heroImage ? urlFor(page.heroImage).width(1200).url() : undefined,
        content: page.content,
        sections: page.sections?.map((section: any) => ({
          heading: section.heading,
          text: section.text,
          image: section.image ? urlFor(section.image).width(800).url() : undefined,
          imagePosition: section.imagePosition || 'right',
        })),
      } as AboutPage;
    },
    enabled: !!pageType,
    staleTime: 1000 * 60 * 10,
  });
};

// ============== HOMEPAGE SECTIONS ==============

export const useHomepageSections = () => {
  return useQuery({
    queryKey: ['sanity-homepage-sections'],
    queryFn: async () => {
      const query = `*[_type == "homepageSection" && isActive == true] | order(order asc) {
        _id,
        sectionType,
        title,
        subtitle,
        image,
        secondImage,
        buttonText,
        buttonLink,
        order,
        isActive
      }`;

      const sections = await sanityClient.fetch(query);
      return sections.map((section: any): HomepageSection => ({
        id: section._id,
        sectionType: section.sectionType,
        title: section.title,
        subtitle: section.subtitle,
        image: section.image ? urlFor(section.image).width(1200).url() : undefined,
        secondImage: section.secondImage ? urlFor(section.secondImage).width(800).url() : undefined,
        buttonText: section.buttonText,
        buttonLink: section.buttonLink,
        order: section.order || 0,
        isActive: section.isActive,
      }));
    },
    staleTime: 1000 * 60 * 10,
  });
};

// ============== SITE SETTINGS ==============

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ['sanity-site-settings'],
    queryFn: async () => {
      const query = `*[_type == "siteSettings"][0] {
        siteName,
        logo,
        tagline,
        contactEmail,
        contactPhone,
        address,
        socialLinks,
        footerText,
        announcementBar
      }`;

      const settings = await sanityClient.fetch(query);
      if (!settings) return null;

      return {
        siteName: settings.siteName,
        logo: settings.logo ? urlFor(settings.logo).width(200).url() : undefined,
        tagline: settings.tagline,
        contactEmail: settings.contactEmail,
        contactPhone: settings.contactPhone,
        address: settings.address,
        socialLinks: settings.socialLinks,
        footerText: settings.footerText,
        announcementBar: settings.announcementBar,
      } as SiteSettings;
    },
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
};

// ============== PRICE RANGES ==============

export const usePriceRanges = () => {
  return useQuery({
    queryKey: ['sanity-price-ranges'],
    queryFn: async () => {
      const query = `*[_type == "priceRange"] | order(order asc) {
        _id,
        label,
        minPrice,
        maxPrice,
        order
      }`;

      const ranges = await sanityClient.fetch(query);
      return ranges.map((range: any): PriceRange => ({
        id: range._id,
        label: range.label,
        minPrice: range.minPrice,
        maxPrice: range.maxPrice,
        order: range.order || 0,
      }));
    },
    staleTime: 1000 * 60 * 30,
  });
};

// ============== MATERIALS ==============

export const useMaterials = () => {
  return useQuery({
    queryKey: ['sanity-materials'],
    queryFn: async () => {
      const query = `*[_type == "material"] | order(name asc) {
        _id,
        name,
        description
      }`;

      const materials = await sanityClient.fetch(query);
      return materials.map((mat: any): Material => ({
        id: mat._id,
        name: mat.name,
        description: mat.description,
      }));
    },
    staleTime: 1000 * 60 * 30,
  });
};
