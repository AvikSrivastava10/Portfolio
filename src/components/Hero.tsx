import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsla(24, 62%, 48%, 1.00) 0%, hsla(0, 72%, 43%, 1.00) 35%, hsl(5, 0%, 8%) 70%)',
      }}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Intro Line */}
            <p className="animate-fade-up text-muted-foreground text-lg font-medium">
              Hey, I'm <span className="text-foreground">Avik</span>
            </p>

            {/* Main Headline */}
            <h1 className="animate-fade-up-delay-1 heading-display text-foreground">
              Creative Technologist
              <br />
              <span className="text-gradient">&</span> AI Product Builder
            </h1>

            {/* Supporting Text */}
            <p className="animate-fade-up-delay-2 text-xl text-muted-foreground max-w-xl leading-relaxed">
              Building scalable platforms, intelligent systems, and digital
              products that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Get in touch
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('#projects')}
                className="btn-secondary"
              >
                View projects
              </button>
            </div>
          </div>

          {/* Right Side - Abstract Visual */}
          <div className="animate-fade-up-delay-4 hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Portrait Placeholder with Gradient Border */}
              <div className="w-80 h-96 rounded-3xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-foreground/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="relative z-10 w-64 h-80 rounded-2xl bg-gradient-to-br from-card to-card-hover flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary animate-pulse-glow" />
                    <div className="space-y-2">
                      <div className="w-32 h-3 bg-muted rounded-full mx-auto" />
                      <div className="w-24 h-3 bg-muted/50 rounded-full mx-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 rounded-2xl bg-primary/30 backdrop-blur-sm animate-float border border-primary/20" />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 rounded-xl bg-secondary/30 backdrop-blur-sm animate-float border border-secondary/20" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up-delay-4">
        <button
          onClick={() => scrollToSection('#expertise')}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
