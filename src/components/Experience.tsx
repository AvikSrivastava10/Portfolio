const experiences = [
  {
    role: 'AI Engineer & Product Founder',
    company: 'Independent',
    period: '2022 — Present',
    description: 'Building AI-powered platforms from concept to production. Architecting scalable systems serving thousands of users.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Platform Engineering',
    period: '2021 — 2022',
    description: 'Developed production-grade web applications with React, Node.js, and cloud infrastructure. Focus on performance optimization.',
  },
  {
    role: 'ML Research Engineer',
    company: 'AI Research Lab',
    period: '2020 — 2021',
    description: 'Researched and implemented NLP models for document understanding. Published work on semantic analysis.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Tech Startup',
    period: '2019 — 2020',
    description: 'First professional experience building production software. Learned agile practices and collaborative development.',
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-background-deep">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <p className="section-label">Journey</p>
          <h2 className="heading-display text-foreground text-3xl md:text-4xl lg:text-5xl">
            Building Since Day One
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent md:-translate-x-1/2" />

            {/* Experience Items */}
            {experiences.map((exp, index) => (
              <div
                key={exp.role}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background-deep -translate-x-1.5 md:-translate-x-1/2" />

                {/* Content Card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="card-premium p-6 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
