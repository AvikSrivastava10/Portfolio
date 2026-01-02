import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:hello@avik.dev',
    username: 'hello@avik.dev',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/avik',
    username: 'in/avik',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/avik',
    username: '@avik',
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <p className="section-label">Get In Touch</p>
            <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Let's Create Something Exceptional
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities
              to be part of something meaningful.
            </p>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 rounded-full bg-card border border-border/50 hover:border-primary/50 hover:bg-card-hover transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            ))}
          </div>

          {/* Alternative CTA */}
          <div className="pt-8">
            <a
              href="mailto:hello@avik.dev"
              className="btn-accent inline-flex"
            >
              Start a Conversation
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
