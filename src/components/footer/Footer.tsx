import { Link } from "react-router-dom";
import { useSiteSettings, useCategories } from "@/hooks/useSanityContent";

const Footer = () => {
  const { data: siteSettings } = useSiteSettings();
  const { data: categories } = useCategories();

  // Default values
  const siteName = siteSettings?.siteName || "IKHWAN SURGICAL INSTRUMENTS";
  const tagline = siteSettings?.tagline || "Leaders in the Surgical Industry";
  const address = siteSettings?.address || "Sialkot, Pakistan";
  const contactPhone = siteSettings?.contactPhone || "+923709450436";
  const contactEmail = siteSettings?.contactEmail || "shakirullahzk@gmail.com";
  const footerText = siteSettings?.footerText || `© ${new Date().getFullYear()} ${siteName}. All rights reserved. Website Created by AfnanKhan`;

  // Social links with defaults
  const socialLinks = {
    instagram: siteSettings?.socialLinks?.instagram || "https://www.instagram.com/ikwansurinst313?igsh=ZDYzY2YxMXJyMWk1",
    facebook: siteSettings?.socialLinks?.facebook || "https://www.facebook.com/share/19v8hkipeK/",
    twitter: siteSettings?.socialLinks?.twitter,
    linkedin: siteSettings?.socialLinks?.linkedin,
  };

  // Default categories if not loaded from Sanity
  const defaultCategories = ["Scissors", "Forceps", "Needle Holders", "Retractors", "Clamps"];
  const footerCategories = categories?.slice(0, 5).map(c => c.name) || defaultCategories;

  return (
    <footer className="w-full bg-white text-black pt-8 pb-2 px-6 border-t border-[#e5e5e5] mt-48">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand - Left side */}
          <div>
            <span className="text-sm font-semibold tracking-wide mb-4 block">
              {siteName}
            </span>
            <p className="text-sm font-light text-black/70 leading-relaxed max-w-md mb-6">{tagline}</p>

            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-black/70">
              <div>
                <p className="font-normal text-black mb-1">Visit Us</p>
                <p>{address}</p>
              </div>
              <div>
                <p className="font-normal text-black mb-1 mt-3">Contact</p>
                <p>{contactPhone}</p>
                <p>{contactEmail}</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Products */}
            <div>
              <h4 className="text-sm font-normal mb-4">Products</h4>
              <ul className="space-y-2">
                {footerCategories.map((categoryName) => (
                  <li key={categoryName}>
                    <Link
                      to={`/category/${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-sm font-light text-black/70 hover:text-black transition-colors"
                    >
                      {categoryName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-sm font-normal mb-4">Support</h4>
              <ul className="space-y-2">
                <li><Link to="/about/size-guide" className="text-sm font-light text-black/70 hover:text-black transition-colors">Size Guide</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">Care Instructions</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">Returns</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">Shipping</Link></li>
                <li><Link to="/about/customer-care" className="text-sm font-light text-black/70 hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-normal mb-4">Connect</h4>
              <ul className="space-y-2">
                {socialLinks.instagram && (
                  <li><a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-black/70 hover:text-black transition-colors">Instagram</a></li>
                )}
                {socialLinks.facebook && (
                  <li><a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-black/70 hover:text-black transition-colors">Facebook</a></li>
                )}
                {socialLinks.twitter && (
                  <li><a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-black/70 hover:text-black transition-colors">Twitter</a></li>
                )}
                {socialLinks.linkedin && (
                  <li><a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-light text-black/70 hover:text-black transition-colors">LinkedIn</a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - edge to edge separator */}
      <div className="border-t border-[#e5e5e5] -mx-6 px-6 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-black mb-1 md:mb-0">
            {footerText}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-sm font-light text-black hover:text-black/70 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;