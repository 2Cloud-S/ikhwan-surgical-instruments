import { Link } from "react-router-dom";
import { useCategories } from "@/hooks/useSanityContent";
import placeholderImage from "@/assets/surgical-forceps.jpg";

const FiftyFiftySection = () => {
  const { data: categories, isLoading } = useCategories();

  if (isLoading) {
    return (
      <section className="w-full mb-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-card rounded-xl p-4 shadow-sm border border-border/50 animate-pulse">
              <div className="w-full aspect-square mb-3 bg-muted rounded-lg" />
              <div className="h-4 bg-muted rounded w-1/2 mb-2" />
              <div className="h-3 bg-muted rounded w-3/4" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Get the first two categories with images
  const featuredCategories = categories?.filter(cat => cat.image).slice(0, 2) || [];

  if (featuredCategories.length === 0) {
    return null;
  }

  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {featuredCategories.map((category, index) => {
          const categorySlug = category.slug?.current || category.name.toLowerCase().replace(/\s+/g, '-');

          return (
            <div
              key={category.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 hover:shadow-2xl hover:border-border transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Link to={`/category/${categorySlug}`} className="block relative">
                <div className="w-full aspect-square overflow-hidden relative">
                  <img
                    src={category.image || placeholderImage}
                    alt={`${category.name} collection`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 text-white">
                      <span className="text-sm font-medium">Explore {category.name}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>

              <div className="p-6 bg-gradient-to-b from-card to-card/50">
                <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
                  {category.name}
                </h3>
                {category.description && (
                  <p className="text-sm font-light text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FiftyFiftySection;
