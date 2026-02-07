export function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">Experience</h2>

      <div className="exp-item">
        <div className="exp-header">
          <span className="exp-role">WorkPal – AI-Powered SaaS Productivity Platform</span>
          <span className="exp-meta">React.js · Supabase · AI APIs</span>
        </div>
        <ul className="exp-desc">
          <li>Developed an AI-powered SaaS platform to improve task and workflow productivity</li>
          <li>Built a scalable React.js frontend using reusable and modular components</li>
          <li>Implemented authentication and database management using Supabase</li>
          <li>Integrated AI-based task suggestions improving productivity by approximately 30%</li>
          <li>Added a scheduling drag-and-drop function for tasks and workflows</li>
          <li>Optimized the workflow and performance by 15–25%</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <span className="exp-role">Hand-Made Art Marketplace</span>
          <span className="exp-meta">Sell & buy · 100% human-made</span>
        </div>
        <ul className="exp-desc">
          <li>Built a marketplace for hand-made art: creators sell and buyers purchase authentic human-made work</li>
          <li>Platform emphasizes 100% human-made art—no AI-generated content</li>
          <li>Designed for artisans and buyers who value real, handcrafted pieces</li>
        </ul>
      </div>

      <div className="exp-item">
        <div className="exp-header">
          <span className="exp-role">Freelance Software Developer / Full Stack Developer</span>
          <span className="exp-meta">Remote · 2024 – Present</span>
        </div>
        <ul className="exp-desc">
          <li>Designed and developed end-to-end software solutions for multiple clients</li>
          <li>Worked as a Full Stack Developer handling frontend, backend, and API integrations</li>
          <li>Translated client requirements into scalable and production-ready applications</li>
          <li>Delivered clean, maintainable, and well-documented code</li>
        </ul>
      </div>
    </section>
  );
}
