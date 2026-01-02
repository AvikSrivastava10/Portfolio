import { Brain, Code2, Layers, Database, Scaling } from 'lucide-react';

const expertise = [
  { icon: Brain, label: 'AI & Machine Learning' },
  { icon: Code2, label: 'Full-Stack Engineering' },
  { icon: Layers, label: 'Product Architecture' },
  { icon: Database, label: 'System Design' },
  { icon: Scaling, label: 'Platform Scaling' },
];

export const ExpertiseStrip = () => {
  return (
    <section id="expertise" className="py-16 bg-background-deep border-y border-border/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {expertise.map((item, index) => (
            <div
              key={item.label}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
