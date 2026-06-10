import { useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Linea Jewelry";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg p-8 mb-8">
            <header className="text-center">
              <h1 className="text-4xl font-light text-foreground mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: January 15, 2024</p>
            </header>
          </div>

          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At IKHWAN SURGICAL INSTRUMENTS ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, place orders, or interact with our services.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Business Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We may collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
                    <li>Company name, contact person, and business details</li>
                    <li>Email address and phone numbers</li>
                    <li>Shipping and billing addresses</li>
                    <li>Order history and product preferences</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-light text-foreground mb-2">Usage Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We automatically collect certain information about your device and usage patterns to improve our services and user experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Processing and fulfilling your orders</li>
                <li>Providing customer support and responding to inquiries</li>
                <li>Sending product catalogs and updates (with your consent)</li>
                <li>Improving our website functionality and user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
              <h2 className="text-2xl font-light text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Email: ikhwansurgicalinstruments@gmail.com</p>
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

export default PrivacyPolicy;