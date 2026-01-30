import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useProducts } from "@/hooks/useProducts";
import placeholderImage from "@/assets/surgical-forceps.jpg";

const ProductCarousel = () => {
  const { data: products, isLoading } = useProducts();

  // Show first 6 products in carousel
  const carouselProducts = products?.slice(0, 6) || [];

  if (isLoading) {
    return (
      <section className="w-full mb-16 px-6">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-square bg-muted rounded-lg mb-3" />
                <div className="h-4 bg-muted rounded w-1/2 mb-2" />
                <div className="h-4 bg-muted rounded w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (carouselProducts.length === 0) {
    return (
      <section className="w-full mb-16 px-6">
        <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center">
          <p className="text-muted-foreground">No products available yet. Add products in Sanity Studio.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full mb-16 px-6">
      <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-2">Featured Products</h2>
          <p className="text-sm text-muted-foreground">Handpicked instruments for precision and excellence</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {carouselProducts.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-1/2 md:basis-1/3 lg:basis-1/4 pl-2 md:pl-4"
              >
                <Link to={`/product/${product.id}`}>
                  <Card className="border-none shadow-none bg-transparent group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="aspect-square mb-4 overflow-hidden bg-background relative rounded-xl shadow-md group-hover:shadow-xl transition-all duration-500">
                        <img
                          src={product.image || placeholderImage}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0"
                        />
                        <img
                          src={product.altImage || product.image || placeholderImage}
                          alt={`${product.name} alternate view`}
                          className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                        />

                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {product.isNew && (
                          <div className="absolute top-3 left-3 px-3 py-1 bg-foreground text-background text-xs font-semibold tracking-wider rounded-full shadow-lg">
                            NEW
                          </div>
                        )}

                        {/* Quick view button */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <div className="bg-white text-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                            Quick View
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                          {product.category}
                        </p>
                        <h3 className="text-sm font-semibold text-foreground leading-tight group-hover:text-foreground/80 transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-base font-bold text-foreground">
                          {product.priceDisplay}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;