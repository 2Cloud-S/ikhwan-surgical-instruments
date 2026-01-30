import { Link } from "react-router-dom";
import heroSurgical from "@/assets/hero-surgical.jpg";

const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <Link to="/category/all">
        <div className="group relative bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50 hover:shadow-2xl hover:border-border transition-all duration-500">
          <div className="w-full aspect-[21/9] overflow-hidden relative">
            <img
              src={heroSurgical}
              alt="Premium surgical instruments collection"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                  Precision Craftsmanship
                </h2>
                <p className="text-base md:text-lg text-white/90 font-light mb-6 leading-relaxed">
                  Premium surgical instruments engineered for excellence. Trusted by medical professionals worldwide.
                </p>

                {/* CTA Button */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-foreground rounded-full font-medium text-sm shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                  <span>Explore Collection</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute top-8 right-8 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
              <div className="w-32 h-32 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default LargeHero;