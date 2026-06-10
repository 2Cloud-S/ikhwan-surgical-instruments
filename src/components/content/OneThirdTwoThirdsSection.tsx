import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useSanityContent";
import placeholderImage from "@/assets/surgical-forceps.jpg";

const OneThirdTwoThirdsSection = () => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="w-full mb-10 sm:mb-16 px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 bg-card rounded-xl p-4 shadow-sm border border-border/50 animate-pulse">
            <div className="w-full h-[468px] lg:h-[768px] mb-3 bg-muted rounded-lg" />
            <div className="h-4 bg-muted rounded w-1/2 mb-2" />
            <div className="h-3 bg-muted rounded w-3/4" />
          </div>
          <div className="lg:col-span-2 bg-card rounded-xl p-4 shadow-sm border border-border/50 animate-pulse">
            <div className="w-full h-[468px] lg:h-[768px] mb-3 bg-muted rounded-lg" />
            <div className="h-4 bg-muted rounded w-1/2 mb-2" />
            <div className="h-3 bg-muted rounded w-3/4" />
          </div>
        </div>
      </section>
    );
  }

  // Get categories with images, starting from index 2 (after the FiftyFifty section)
  const featuredCategories = categories?.filter(cat => cat.image).slice(2, 4) || [];

  if (featuredCategories.length === 0) {
    return null;
  }

  // First category takes 1/3, second takes 2/3
  const [firstCategory, secondCategory] = featuredCategories;

  return (
    <section className="w-full mb-10 sm:mb-16 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {firstCategory && (
          <div className="lg:col-span-1 group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl hover:border-border transition-all duration-500">
            <Link to={`/category/${firstCategory.slug?.current || firstCategory.name.toLowerCase().replace(/\s+/g, '-')}`} className="block relative">
              <div className="w-full aspect-[4/5] sm:aspect-square lg:h-[768px] overflow-hidden relative">
                <img
                  src={firstCategory.image || placeholderImage}
                  alt={firstCategory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-medium">Explore {firstCategory.name}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <div className="p-6 bg-gradient-to-b from-card to-card/50">
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {firstCategory.name}
              </h3>
              {firstCategory.description && (
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {firstCategory.description}
                </p>
              )}
            </div>
          </div>
        )}

        {secondCategory && (
          <div className="lg:col-span-2 group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl hover:border-border transition-all duration-500">
            <Link to={`/category/${secondCategory.slug?.current || secondCategory.name.toLowerCase().replace(/\s+/g, '-')}`} className="block relative">
              <div className="w-full aspect-[4/5] sm:aspect-square lg:h-[768px] overflow-hidden relative">
                <img
                  src={secondCategory.image || placeholderImage}
                  alt={secondCategory.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-sm font-medium">Explore {secondCategory.name}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <div className="p-6 bg-gradient-to-b from-card to-card/50">
              <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                {secondCategory.name}
              </h3>
              {secondCategory.description && (
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  {secondCategory.description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;
