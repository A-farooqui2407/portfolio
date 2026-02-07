const SKILL_GROUPS: { title: string; items: string[] }[] = [
  { title: 'Languages', items: ['Java', 'Python', 'C++', 'JavaScript'] },
  { title: 'Frontend', items: ['React.js', 'HTML5', 'CSS3'] },
  { title: 'Backend & APIs', items: ['REST APIs', 'Supabase'] },
  { title: 'Databases', items: ['PostgreSQL (Supabase)'] },
  { title: 'Core CS', items: ['Data Structures & Algorithms', 'OOP', 'DBMS'] },
  { title: 'Tools & Platforms', items: ['Git', 'Google Maps API'] },
];

export function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical <span className="accent">skills</span></h2>
      {SKILL_GROUPS.map((group) => (
        <div key={group.title} className="skill-group">
          <p className="skill-group-title">{group.title}</p>
          <div className="skills-grid">
            {group.items.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
