import { ArrowRight } from 'lucide-react';

export const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-background-deep">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="section-label">Behind the Work</p>
            <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl">
              Shaping Intelligent Products That Make Life Simpler
            </h2>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in building AI-powered systems and full-stack platforms that
              serve real users at scale. From intelligent document analysis to job
              matching algorithms, I architect solutions with clean code, scalable
              infrastructure, and user-centric design.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My work bridges the gap between cutting-edge technology and practical
              applications—turning complex problems into elegant, maintainable systems
              that drive measurable impact.
            </p>

            <button
              onClick={scrollToContact}
              className="btn-accent group mt-4"
            >
              Let's build something meaningful
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '5+', label: 'Live Platforms' },
            { value: '100K+', label: 'Users Served' },
            { value: '10+', label: 'AI Models Deployed' },
            { value: '4+', label: 'Years Building' },
          ].map((stat) => (
            <div key={stat.label} className="text-center space-y-2">
              <p className="text-4xl md:text-5xl font-bold text-gradient">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
