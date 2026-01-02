export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background-deep border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Avik. Built with purpose.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed by <span className="text-gradient font-medium">Avik</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
