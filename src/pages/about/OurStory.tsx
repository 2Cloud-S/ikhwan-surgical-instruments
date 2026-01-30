import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";
import { useAboutPage } from "@/hooks/useSanityContent";
import surgicalManufacturing from "@/assets/surgical-manufacturing.jpg";

const OurStory = () => {
  const { data: aboutData, isLoading } = useAboutPage('our-story');

  // Default content if Sanity data is not available
  const defaultSections = [
    {
      heading: "Founded on Excellence",
      text: "IKHWAN SURGICAL INSTRUMENTS was established in Sialkot, Pakistan - the world's leading hub for surgical instrument manufacturing. Our founders, united by their passion for precision engineering and medical excellence, established the brand with a commitment to creating instruments that save lives and support healthcare professionals worldwide.",
      image: surgicalManufacturing,
      imagePosition: 'left' as const,
    }
  ];

  const defaultHeritage = [
    {
      title: "Master Craftsmanship",
      content: "Every instrument in our collection is meticulously handcrafted by skilled artisans who have honed their craft over generations. We honor traditional techniques while embracing modern innovation, ensuring each piece meets international standards for quality and precision."
    },
    {
      title: "Quality Assurance",
      content: "We believe in uncompromising quality. Our commitment to ISO-certified manufacturing, premium stainless steel materials, and rigorous testing ensures that every instrument you use delivers reliable performance in critical medical procedures."
    }
  ];

  const defaultValues = [
    { title: "Precision", content: "We pursue perfection in every detail, from the initial design to the final polish and sharpening." },
    { title: "Reliability", content: "Each instrument is built to perform consistently, supporting surgeons in their most demanding procedures." },
    { title: "Innovation", content: "We continuously evolve our designs and techniques to meet the advancing needs of modern medicine." }
  ];

  // Use Sanity data if available, otherwise use defaults
  const title = aboutData?.title || "Our Story";
  const sections = aboutData?.sections || defaultSections;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>

        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          {isLoading ? (
            <div className="py-16 text-center">
              <p className="text-muted-foreground">Loading...</p>
            </div>
          ) : (
            <>
              <PageHeader
                title={title}
                subtitle="A legacy of precision, quality, and excellence in surgical instruments"
              />

              {/* Dynamic sections from Sanity */}
              {sections.map((section, index) => (
                <ContentSection key={index}>
                  <ImageTextBlock
                    image={section.image || surgicalManufacturing}
                    imageAlt={section.heading || "Surgical instrument manufacturing"}
                    title={section.heading || ""}
                    content={section.text || ""}
                    imagePosition={section.imagePosition || "left"}
                  />
                </ContentSection>
              ))}

              {/* Heritage section - can be customized in Sanity later */}
              <ContentSection title="Our Heritage">
                <div className="grid md:grid-cols-2 gap-12">
                  {defaultHeritage.map((item, index) => (
                    <div key={index} className="space-y-6">
                      <h3 className="text-xl font-light text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                    </div>
                  ))}
                </div>
              </ContentSection>

              {/* Values section */}
              <ContentSection title="Our Values">
                <div className="grid md:grid-cols-3 gap-8">
                  {defaultValues.map((value, index) => (
                    <div key={index} className="space-y-4">
                      <h3 className="text-lg font-light text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.content}</p>
                    </div>
                  ))}
                </div>
              </ContentSection>
            </>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default OurStory;
