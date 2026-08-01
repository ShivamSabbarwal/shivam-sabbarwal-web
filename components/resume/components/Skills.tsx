const Skills = ({ skills }: { skills: Record<string, string[]> }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Skills</h2>
      <ul className="resume-skills">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category}>
            <span className="resume-skills-label">{category}:</span> {items.join(", ")}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
