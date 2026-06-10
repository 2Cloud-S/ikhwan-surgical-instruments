import surgicalCraftsmanship from "@/assets/surgical-craftsmanship.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return (
    <section className="w-full mb-10 sm:mb-16 px-4 sm:px-6">
      <div className="bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm rounded-2xl p-5 sm:p-8 md:p-12 shadow-xl border border-border/50 hover:shadow-2xl transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-16 items-center">
          <div className="space-y-4 sm:space-y-6 max-w-[630px]">
            <div className="inline-block">
              <div className="h-1 w-16 bg-foreground/20 mb-4 rounded-full"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight tracking-tight">
              Precision Crafted for Excellence
            </h2>
            <p className="text-base font-light text-muted-foreground leading-relaxed">
              IKHWAN SURGICAL was born from the meeting of skilled artisans who saw excellence not just in tools, but in saving lives. With generations of expertise in precision manufacturing, our founders believed that surgical instruments could be more than equipment — they could be an extension of the surgeon's skill and care.
            </p>

            <div className="pt-4">
              <Link
                to="/about/our-story"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Read our full story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-border/30">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">30+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">500+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Products</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-foreground mb-1">50+</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wide">Countries</div>
              </div>
            </div>
          </div>

          <div className="order-first md:order-last">
            <div className="relative group">
              <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={surgicalCraftsmanship}
                  alt="Craftsman carefully polishing surgical instruments"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Decorative element */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-32 h-32 bg-foreground/5 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;