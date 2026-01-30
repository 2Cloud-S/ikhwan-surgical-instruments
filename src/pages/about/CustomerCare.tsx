import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import AboutSidebar from "../../components/about/AboutSidebar";

const CustomerCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Customer Care" 
          subtitle="We're here to help with all your surgical instrument needs"
        />
        
        <ContentSection title="Contact Information">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Phone</h3>
              <p className="text-muted-foreground">+92 370 9450436</p>
              <p className="text-sm text-muted-foreground">Mon-Sat: 9AM-6PM PKT</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">Email</h3>
              <p className="text-muted-foreground">shakirullahzk@gmail.com</p>
              <p className="text-muted-foreground">naeemurrahmanbj@gmail.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-light text-foreground">WhatsApp</h3>
              <Button
                onClick={() => window.open('https://wa.me/923709450436', '_blank')}
                className="rounded-none bg-green-600 hover:bg-green-700"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <p className="text-sm text-muted-foreground">Quick response available</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Frequently Asked Questions">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="shipping" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What are your shipping options and timeframes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer worldwide shipping with multiple options. Standard international shipping takes 7-14 business days. Express shipping (3-5 business days) is available for urgent orders. All orders are carefully packaged and fully insured.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="moq" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What is your minimum order quantity (MOQ)?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our MOQ varies by product type. For standard instruments, we typically require a minimum of 50 pieces per item. For custom orders or OEM manufacturing, please contact us for specific requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="warranty" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What warranty do you offer on instruments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                All IKHWAN surgical instruments come with a lifetime warranty against manufacturing defects. This covers issues with materials, workmanship, and structural integrity under normal use conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customization" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Can you manufacture custom instruments?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we specialize in custom surgical instrument manufacturing. We can produce instruments to your exact specifications, including custom sizes, patterns, and finishes. OEM and private labeling services are also available.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="quality" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                What quality standards do your instruments meet?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Our instruments meet international quality standards including ISO 9001 and ISO 13485 certification. All products are manufactured using premium-grade stainless steel and undergo rigorous quality control testing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sterilization" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline">
                Are your instruments suitable for sterilization?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, all our surgical instruments are designed to withstand standard sterilization methods including autoclave steam sterilization. Proper care and maintenance guidelines are provided with each order.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default CustomerCare;