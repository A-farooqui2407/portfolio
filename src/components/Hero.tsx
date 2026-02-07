import { useState, useEffect } from 'react';

const ROLES = [
  'Full Stack Developer',
  'React.js & Supabase',
  'AI-Powered Systems',
  'Software Engineer Intern',
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentRole = ROLES[roleIndex];

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setCharIndex((c) => c + 1);
          } else {
            setIsDeleting(true);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((r) => (r + 1) % ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRole.length]);

  return (
    <header className="hero">
      <p className="hero-badge">B.Tech CSE · Expected 2028</p>
      <h1 className="hero-title">
        Hi, I'm <span className="highlight">Farooqui Ammad</span>
      </h1>
      <p className="hero-tagline">
        Building AI-powered SaaS and location-based applications. Strong in Data Structures, OOP, and Full Stack with React.js & Supabase.
      </p>
      <p className="hero-typing">
        {currentRole.slice(0, charIndex)}
        <span className="cursor" aria-hidden />
      </p>
      <div className="hero-cta">
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
        <a href="#projects" className="btn btn-secondary">
          View projects
        </a>
      </div>
    </header>
  );
}
