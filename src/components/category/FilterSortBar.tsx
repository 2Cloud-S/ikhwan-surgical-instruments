import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export interface FilterState {
  categories: string[];
  priceRanges: string[];
  materials: string[];
  sizes: string[];
}

export interface PriceRangeOption {
  label: string;
  minPrice: number;
  maxPrice?: number;
}

export interface FilterOptions {
  categories: string[];
  priceRanges: PriceRangeOption[];
  materials: string[];
  sizes: string[];
}

interface FilterSortBarProps {
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  itemCount: number;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  filterOptions: FilterOptions;
}

const FilterSortBar = ({
  filtersOpen,
  setFiltersOpen,
  itemCount,
  filters,
  onFiltersChange,
  sortBy,
  onSortChange,
  filterOptions
}: FilterSortBarProps) => {
  const { categories, priceRanges, materials, sizes } = filterOptions;

  const toggleFilter = (type: keyof FilterState, value: string) => {
    const currentValues = filters[type];
    const newValues = currentValues.includes(value)
      ? currentValues.filter(v => v !== value)
      : [...currentValues, value];
    onFiltersChange({ ...filters, [type]: newValues });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      priceRanges: [],
      materials: [],
      sizes: [],
    });
  };

  const activeFilterCount = 
    filters.categories.length + 
    filters.priceRanges.length + 
    filters.materials.length + 
    filters.sizes.length;

  return (
    <>
      <section className="w-full px-6 mb-8">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-4">
          <div className="flex justify-between items-center">
            <p className="text-sm font-light text-muted-foreground">
              {itemCount} {itemCount === 1 ? 'item' : 'items'}
            </p>
            
            <div className="flex items-center gap-4">
              <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="font-light hover:bg-transparent relative"
                  >
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge 
                        variant="secondary" 
                        className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                      >
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80 bg-background border-l border-border shadow-xl z-50">
                  <SheetHeader className="mb-6 border-b border-border pb-4">
                    <SheetTitle className="text-lg font-light">Filters</SheetTitle>
                  </SheetHeader>
                  
                  <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-200px)]">
                    {/* Category Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4 text-foreground">Instrument Type</h3>
                      <div className="space-y-3">
                        {categories.map((category) => (
                          <div key={category} className="flex items-center space-x-3">
                            <Checkbox 
                              id={`cat-${category}`} 
                              checked={filters.categories.includes(category)}
                              onCheckedChange={() => toggleFilter('categories', category)}
                              className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                            />
                            <Label 
                              htmlFor={`cat-${category}`} 
                              className="text-sm font-light text-foreground cursor-pointer"
                            >
                              {category}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="border-border" />

                    {/* Price Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4 text-foreground">Price Range</h3>
                      <div className="space-y-3">
                        {priceRanges.map((range) => (
                          <div key={range.label} className="flex items-center space-x-3">
                            <Checkbox 
                              id={`price-${range.label}`} 
                              checked={filters.priceRanges.includes(range.label)}
                              onCheckedChange={() => toggleFilter('priceRanges', range.label)}
                              className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                            />
                            <Label 
                              htmlFor={`price-${range.label}`} 
                              className="text-sm font-light text-foreground cursor-pointer"
                            >
                              {range.label}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="border-border" />

                    {/* Material Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4 text-foreground">Material</h3>
                      <div className="space-y-3">
                        {materials.map((material) => (
                          <div key={material} className="flex items-center space-x-3">
                            <Checkbox 
                              id={`mat-${material}`} 
                              checked={filters.materials.includes(material)}
                              onCheckedChange={() => toggleFilter('materials', material)}
                              className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                            />
                            <Label 
                              htmlFor={`mat-${material}`} 
                              className="text-sm font-light text-foreground cursor-pointer"
                            >
                              {material}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="border-border" />

                    {/* Size Filter */}
                    <div>
                      <h3 className="text-sm font-medium mb-4 text-foreground">Size</h3>
                      <div className="space-y-3">
                        {sizes.map((size) => (
                          <div key={size} className="flex items-center space-x-3">
                            <Checkbox 
                              id={`size-${size}`} 
                              checked={filters.sizes.includes(size)}
                              onCheckedChange={() => toggleFilter('sizes', size)}
                              className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                            />
                            <Label 
                              htmlFor={`size-${size}`} 
                              className="text-sm font-light text-foreground cursor-pointer"
                            >
                              {size}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="border-border" />

                    <div className="flex flex-col gap-2 pt-4">
                      <Button 
                        variant="default" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setFiltersOpen(false)}
                      >
                        View Results ({itemCount})
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="w-full hover:bg-transparent hover:underline font-light"
                        onClick={clearAllFilters}
                      >
                        Clear All Filters
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <Select value={sortBy} onValueChange={onSortChange}>
                <SelectTrigger className="w-auto border-none bg-transparent text-sm font-light shadow-none rounded-none pr-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="shadow-lg border border-border rounded-lg bg-background z-50">
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="name">Name A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterSortBar;
