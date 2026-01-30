interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`py-8 ${className}`}>
      <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 p-8">
        {title && (
          <h2 className="text-3xl font-light text-foreground mb-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default ContentSection;