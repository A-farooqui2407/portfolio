const PROJECTS = [
  {
    title: 'AI Sales Drop Explainer',
    tech: 'React.js · Data visualization · Analytics',
    points: [
      'AI-powered tool that explains why sales dropped and surfaces key drivers behind performance changes',
      'Helps teams quickly understand causes of sales dips and take data-driven action',
      'Clear, explainable insights instead of raw numbers alone',
    ],
  },
  {
    title: 'Smart Parking Space Finder',
    tech: 'React.js · JavaScript · Google Maps API',
    points: [
      'Built a location-based web application to find nearby available parking spaces',
      'Integrated Google Maps API for real-time location tracking and interactive map visualization',
      'Improved user experience through accurate navigation and location-based search',
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tech">{project.tech}</p>
            <div className="project-desc">
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
