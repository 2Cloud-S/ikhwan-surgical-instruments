import { Link } from "react-router-dom";
import { useHeroSection } from "@/hooks/useSanityContent";
import heroSurgical from "@/assets/hero-surgical.jpg";

const HeroSection = () => {
  const { data: heroData } = useHeroSection();

  // Default values
  const defaultHero = {
    title: "Precision Crafted\nSurgical Instruments",
    subtitle: "Engineered for excellence, trusted by professionals worldwide. Each instrument reflects decades of expertise and uncompromising quality.",
    backgroundImage: heroSurgical,
    buttonText: "Explore Collection",
    buttonLink: "/category/scissors",
  };

  // Use Sanity data if available, otherwise use defaults
  const title = heroData?.title || defaultHero.title;
  const subtitle = heroData?.subtitle || defaultHero.subtitle;
  const backgroundImage = heroData?.backgroundImage || defaultHero.backgroundImage;
  const buttonText = heroData?.buttonText || defaultHero.buttonText;
  const buttonLink = heroData?.buttonLink || defaultHero.buttonLink;

  // Split title by newlines for multi-line rendering
  const titleLines = title.split('\n');

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <div className="absolute inset-0 animate-[scale-in_8s_ease-out_forwards]">
        <img
          src={backgroundImage}
          alt="Premium surgical instruments"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.3s_forwards]"
          >
            {titleLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p
            className="text-lg md:text-xl text-foreground/80 font-light opacity-0 animate-[fade-in_0.8s_ease-out_0.5s_forwards]"
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_0.8s_ease-out_1s_forwards]">
        <div className="w-6 h-10 border border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-[bounce_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
