import { useState, useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategoryHeader from "../components/category/CategoryHeader";
import FilterSortBar, { FilterState, FilterOptions, PriceRangeOption } from "../components/category/FilterSortBar";
import ProductGrid from "../components/category/ProductGrid";
import { useProducts } from "@/hooks/useProducts";
import { useCategories, usePriceRanges, useMaterials } from "@/hooks/useSanityContent";

// Default sizes - these can be added to Sanity later if needed
const DEFAULT_SIZES = ["Small", "Medium", "Large"];

const Category = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    priceRanges: [],
    materials: [],
    sizes: [],
  });

  // Fetch products and filter options from Sanity
  const { data: products, isLoading: productsLoading } = useProducts();
  const { data: sanityCategories, isLoading: categoriesLoading } = useCategories();
  const { data: sanityPriceRanges, isLoading: priceRangesLoading } = usePriceRanges();
  const { data: sanityMaterials, isLoading: materialsLoading } = useMaterials();

  const searchQuery = searchParams.get('search') || '';
  const isLoading = productsLoading || categoriesLoading || priceRangesLoading || materialsLoading;

  // Build filter options from Sanity data with fallbacks
  const filterOptions: FilterOptions = useMemo(() => {
    // Get categories from Sanity or extract from products
    const categoryNames = sanityCategories?.map(c => c.name) ||
      [...new Set(products?.map(p => p.category) || [])];

    // Get price ranges from Sanity or use defaults
    const priceRangeOptions: PriceRangeOption[] = sanityPriceRanges?.map(r => ({
      label: r.label,
      minPrice: r.minPrice,
      maxPrice: r.maxPrice,
    })) || [
      { label: "Under $50", minPrice: 0, maxPrice: 50 },
      { label: "$50 - $100", minPrice: 50, maxPrice: 100 },
      { label: "$100 - $150", minPrice: 100, maxPrice: 150 },
      { label: "Over $150", minPrice: 150 },
    ];

    // Get materials from Sanity or extract from products
    const materialNames = sanityMaterials?.map(m => m.name) ||
      [...new Set(products?.map(p => p.material).filter(Boolean) || [])];

    return {
      categories: categoryNames,
      priceRanges: priceRangeOptions,
      materials: materialNames,
      sizes: DEFAULT_SIZES,
    };
  }, [sanityCategories, sanityPriceRanges, sanityMaterials, products]);

  const filteredAndSortedProducts = useMemo(() => {
    if (!products) return [];
    let result = [...products];

    // Filter by search query if present
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.material.toLowerCase().includes(query)
      );
    }

    // Filter by URL category if present (and no search query)
    if (!searchQuery && category && category.toLowerCase() !== 'all') {
      const urlCategory = category.toLowerCase();
      result = result.filter(p =>
        p.category.toLowerCase().includes(urlCategory) ||
        urlCategory.includes(p.category.toLowerCase())
      );
    }

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Apply price filter
    if (filters.priceRanges.length > 0) {
      result = result.filter(p => {
        return filters.priceRanges.some(rangeLabel => {
          const range = filterOptions.priceRanges.find(r => r.label === rangeLabel);
          if (!range) return false;
          const maxPrice = range.maxPrice ?? Infinity;
          return p.price >= range.minPrice && p.price < maxPrice;
        });
      });
    }

    // Apply material filter
    if (filters.materials.length > 0) {
      result = result.filter(p => filters.materials.includes(p.material));
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter(p => filters.sizes.includes(p.size));
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        // Featured - keep original order or prioritize new items
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [products, category, searchQuery, filters, sortBy, filterOptions]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <CategoryHeader
          category={category || 'All Products'}
        />

        {searchQuery && (
          <section className="w-full px-6 mb-4">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-4">
              <p className="text-sm text-muted-foreground">
                Search results for "<span className="font-medium text-foreground">{searchQuery}</span>"
              </p>
            </div>
          </section>
        )}

        {isLoading ? (
          <section className="w-full px-6 mb-16">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-12 text-center">
              <p className="text-muted-foreground text-lg">Loading products...</p>
            </div>
          </section>
        ) : (
          <>
            <FilterSortBar
              filtersOpen={filtersOpen}
              setFiltersOpen={setFiltersOpen}
              itemCount={filteredAndSortedProducts.length}
              filters={filters}
              onFiltersChange={setFilters}
              sortBy={sortBy}
              onSortChange={setSortBy}
              filterOptions={filterOptions}
            />

            <ProductGrid products={filteredAndSortedProducts} />
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Category;
