import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'NexusMatch',
    description: 'AI-powered job & networking platform connecting talent with opportunities',
    tags: ['AI/ML', 'Full-Stack', 'Platform'],
    color: 'from-primary/20 to-secondary/10',
  },
  {
    title: 'DocuMind AI',
    description: 'Intelligent document analysis system with semantic understanding',
    tags: ['NLP', 'Document AI', 'Enterprise'],
    color: 'from-secondary/20 to-primary/10',
  },
  {
    title: 'DebateFlow',
    description: 'Interactive debate & education platform for critical thinking',
    tags: ['EdTech', 'Real-time', 'Social'],
    color: 'from-primary/15 to-accent/15',
  },
  {
    title: 'SatelliteVision',
    description: 'AI-powered satellite imagery analysis for environmental monitoring',
    tags: ['Computer Vision', 'GIS', 'Climate'],
    color: 'from-accent/20 to-primary/10',
  },
  {
    title: 'TherapyConnect',
    description: 'Mental health platform with AI-assisted therapist matching',
    tags: ['HealthTech', 'AI', 'Wellness'],
    color: 'from-secondary/15 to-accent/15',
  },
  {
    title: 'DataForge',
    description: 'Real-time data pipeline and analytics dashboard framework',
    tags: ['Data Engineering', 'Analytics', 'B2B'],
    color: 'from-primary/10 to-secondary/20',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <p className="section-label">Selected Work</p>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl">
            Products That Ship
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of platforms and systems I've built, each solving real problems
            for real users.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="card-premium group cursor-pointer overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl bg-foreground/10 backdrop-blur-sm border border-foreground/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ArrowUpRight className="w-6 h-6 text-foreground/70" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
