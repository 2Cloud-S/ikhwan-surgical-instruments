import { useParams, Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductImageGallery from "../components/product/ProductImageGallery";
import ProductInfo from "../components/product/ProductInfo";
import ProductDescription from "../components/product/ProductDescription";
import RelatedProductsCarousel from "../components/product/RelatedProductsCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useProduct, type Product } from "@/hooks/useProducts";
import { useRelatedProducts, useProductsByCategory } from "@/hooks/useRelatedProducts";

// Component for related products sections
const RelatedProductsSections = ({ product }: { product: Product }) => {
  const { data: relatedProducts, isLoading: relatedLoading } = useRelatedProducts(
    product.id,
    product.category,
    6
  );
  const { data: categoryProducts, isLoading: categoryLoading } = useProductsByCategory(
    product.category,
    6,
    product.id
  );

  return (
    <>
      {/* Related Products */}
      <section className="w-full mt-16 lg:mt-24 px-6">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-sm font-light text-foreground">You might also like</h2>
          </div>
          <RelatedProductsCarousel products={relatedProducts || []} isLoading={relatedLoading} />
        </div>
      </section>

      {/* Category Products */}
      <section className="w-full mt-6 px-6">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-6">
          <div className="mb-4">
            <h2 className="text-sm font-light text-foreground">More {product.category}</h2>
          </div>
          <RelatedProductsCarousel products={categoryProducts || []} isLoading={categoryLoading} />
        </div>
      </section>
    </>
  );
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product, isLoading } = useProduct(productId || '');

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-6 px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card/50 rounded-2xl border border-border/50 shadow-lg p-4 animate-pulse">
              <div className="aspect-square bg-muted rounded-lg" />
            </div>
            <div className="space-y-6 animate-pulse">
              <div className="h-8 bg-muted rounded w-1/2" />
              <div className="h-12 bg-muted rounded" />
              <div className="h-32 bg-muted rounded" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-6 px-6">
          <div className="text-center py-16">
            <h1 className="text-2xl font-light mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/category/all" className="px-6 py-3 bg-foreground text-background rounded-md">
              Browse All Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categorySlug = product.category?.toLowerCase().replace(/\s+/g, '-') || 'all';

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-6">
        <section className="w-full px-6">
          {/* Breadcrumb - Show above image on smaller screens */}
          <div className="lg:hidden mb-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Home</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/category/${categorySlug}`}>{product.category}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{product.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-4 overflow-hidden">
              <ProductImageGallery />
            </div>

            <div className="lg:sticky lg:top-6 lg:h-fit">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <ProductInfo />
                <ProductDescription />
              </div>
            </div>
          </div>
        </section>

        <RelatedProductsSections product={product} />
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
