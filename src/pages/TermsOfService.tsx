import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Linea Jewelry";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-8 mb-8">
            <header className="text-center">
              <h1 className="text-4xl font-light text-foreground mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: January 15, 2024</p>
            </header>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the IKHWAN SURGICAL INSTRUMENTS website and services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Product Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate product information, including descriptions, specifications, and availability. We reserve the right to modify or discontinue products without prior notice.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Orders and Payment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are negotiated on a per-order basis for bulk and OEM orders. We accept bank transfers and other payment methods as discussed during the order process.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Shipping and Delivery</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer worldwide shipping. Delivery dates are estimates and we are not responsible for delays caused by shipping carriers or customs clearance. Risk of loss and title for products pass to you upon delivery to the carrier.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Warranty</h2>
              <p className="text-muted-foreground leading-relaxed">
                All IKHWAN surgical instruments come with a lifetime warranty against manufacturing defects. This warranty covers issues with materials, workmanship, and structural integrity under normal use conditions.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: shakirullahzk@gmail.com</p>
                <p>Phone: +92 370 9450436</p>
                <p>Location: Sialkot, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;