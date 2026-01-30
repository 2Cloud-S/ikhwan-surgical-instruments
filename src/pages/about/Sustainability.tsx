import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Sustainability" 
          subtitle="Responsible manufacturing practices for a healthier planet and healthcare industry"
        />
        
        <ContentSection title="Our Environmental Commitment">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Responsible Sourcing</h3>
              <p className="text-muted-foreground leading-relaxed">
                We source premium-grade stainless steel and other materials from certified suppliers who adhere to strict environmental and ethical standards. Our supply chain is fully transparent and traceable.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Recycled Materials</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over 70% of our stainless steel comes from recycled sources, significantly reducing the environmental impact of mining while maintaining the highest quality standards required for surgical instruments.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Our Impact Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Carbon neutral manufacturing by 2027</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">95%</div>
                <p className="text-sm text-muted-foreground">Recyclable packaging materials</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Zero</div>
                <p className="text-sm text-muted-foreground">Hazardous waste to landfill</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Sustainable Manufacturing">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in sustainable manufacturing practices that minimize waste while maximizing the lifespan and reliability of our surgical instruments.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Energy Efficiency</h3>
                <p className="text-muted-foreground">
                  Our manufacturing facility utilizes energy-efficient equipment and renewable energy sources to reduce our carbon footprint.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Waste Reduction</h3>
                <p className="text-muted-foreground">
                  Metal scraps and by-products from our manufacturing process are collected and recycled, ensuring minimal waste.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications & Standards">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to quality and sustainability is verified through international certifications and rigorous quality control standards.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">ISO 9001</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">ISO 13485</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">CE Certified</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">FDA Registered</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;