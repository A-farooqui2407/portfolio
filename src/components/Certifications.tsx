const CERTS = [
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Git Version Control Certification',
  'Deloitte Job Simulation Program – Built a full application using Replit',
  'Participant in TCS CodeVita',
];

export function Certifications() {
  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications <span className="accent">&</span> Achievements</h2>
      <div className="certs-list">
        {CERTS.map((cert) => (
          <span key={cert} className="cert-item">{cert}</span>
        ))}
      </div>
    </section>
  );
}
