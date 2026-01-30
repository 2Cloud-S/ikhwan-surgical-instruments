import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { MessageCircle } from "lucide-react";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Instrument Specifications" 
          subtitle="Comprehensive sizing and specification guide for our surgical instruments"
        />
        
        <ContentSection title="Scissors & Forceps Sizing">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Standard Lengths</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Surgical Scissors</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Small: 4.5" - 5.5" (11.5 - 14 cm)</li>
                    <li>Medium: 5.5" - 6.5" (14 - 16.5 cm)</li>
                    <li>Large: 6.5" - 8" (16.5 - 20 cm)</li>
                    <li>Extra Large: 8" - 10" (20 - 25 cm)</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Forceps & Tweezers</h4>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Micro: 4" - 5" (10 - 12.5 cm)</li>
                    <li>Standard: 5" - 6" (12.5 - 15 cm)</li>
                    <li>Extended: 6" - 8" (15 - 20 cm)</li>
                    <li>Long Reach: 8" - 12" (20 - 30 cm)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">Instrument Type</th>
                    <th className="border border-border p-3 text-left font-light">Small</th>
                    <th className="border border-border p-3 text-left font-light">Medium</th>
                    <th className="border border-border p-3 text-left font-light">Large</th>
                    <th className="border border-border p-3 text-left font-light">Application</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Needle Holders", small: "5\"", medium: "6\"", large: "7\"", application: "Suturing" },
                    { type: "Hemostats", small: "5\"", medium: "6.25\"", large: "8\"", application: "Clamping" },
                    { type: "Retractors", small: "4\"", medium: "6\"", large: "8\"", application: "Tissue retraction" },
                    { type: "Scalpel Handles", small: "#3", medium: "#4", large: "#7", application: "Incisions" },
                    { type: "Dissecting Forceps", small: "4.5\"", medium: "5.5\"", large: "6\"", application: "Tissue handling" },
                    { type: "Bone Rongeurs", small: "6\"", medium: "7\"", large: "9\"", application: "Bone removal" }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3">{item.type}</td>
                      <td className="border border-border p-3">{item.small}</td>
                      <td className="border border-border p-3">{item.medium}</td>
                      <td className="border border-border p-3">{item.large}</td>
                      <td className="border border-border p-3">{item.application}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Material Specifications">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Stainless Steel Grades</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">AISI 420</span>
                  <span className="text-foreground">Standard Surgical Grade</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">AISI 440A</span>
                  <span className="text-foreground">Premium Cutting Instruments</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">German Steel</span>
                  <span className="text-foreground">Premium Collection</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Finish Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Satin Finish</span>
                  <span className="text-foreground">Anti-glare, Standard</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Mirror Polish</span>
                  <span className="text-foreground">High visibility</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Gold Plated</span>
                  <span className="text-foreground">Tungsten Carbide inserts</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Black Coating</span>
                  <span className="text-foreground">Reduced reflection</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Custom Specifications?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              We offer custom instrument manufacturing for specialized surgical requirements.
              Contact our technical team for custom sizing, modifications, or bulk orders.
            </p>
            <Button
              onClick={() => window.open('https://wa.me/923709450436?text=Hello%2C%20I%27m%20interested%20in%20custom%20specifications%20for%20surgical%20instruments', '_blank')}
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

export default SizeGuide;