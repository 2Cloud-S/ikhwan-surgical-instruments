import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { MessageCircle } from "lucide-react";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Contact & Location" 
          subtitle="Visit our manufacturing facility or get in touch with our team"
        />

        <ContentSection title="Our Manufacturing Facility">
          <div className="bg-background rounded-lg p-8 border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-light text-foreground">IKHWAN SURGICAL INSTRUMENTS</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>Sialkot, Pakistan</p>
                  <p>+92 370 9450436</p>
                  <p>ikhwansurgicalinstruments@gmail.com</p>
                  <p>naeemurrahmanbj@gmail.com</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Operating Hours: Mon-Sat: 9AM-6PM PKT
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button variant="outline" className="rounded-none">
                    Get Directions
                  </Button>
                  <Button className="rounded-none">
                    Schedule Visit
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-light text-foreground">Our Capabilities</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {[
                    "Custom Instrument Manufacturing",
                    "OEM & Private Labeling",
                    "Quality Control Testing",
                    "International Shipping",
                    "Bulk Order Processing",
                    "Technical Consultation"
                  ].map((service, serviceIndex) => (
                    <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Why Sialkot?">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sialkot, Pakistan is recognized globally as the premier hub for surgical instrument manufacturing. With over a century of expertise, the city produces approximately 80% of the world's hand-held surgical instruments.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Generational Expertise</h4>
                <p className="text-muted-foreground text-sm">
                  Our craftsmen have inherited skills passed down through generations of master artisans
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Quality Infrastructure</h4>
                <p className="text-muted-foreground text-sm">
                  Modern manufacturing facilities equipped with precision machinery and quality control systems
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Global Standards</h4>
                <p className="text-muted-foreground text-sm">
                  ISO certified facilities producing instruments that meet international medical standards
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Business Inquiries">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Partner With Us</h3>
            <p className="text-muted-foreground mb-6">
              Whether you're a distributor, hospital, or medical supply company, we welcome the opportunity to discuss
              partnership possibilities. We offer competitive pricing, reliable quality, and flexible manufacturing capabilities.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/923709450436?text=Hello%2C%20I%27m%20interested%20in%20business%20partnership%20opportunities', '_blank')}
              className="rounded-none bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact us on WhatsApp
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;