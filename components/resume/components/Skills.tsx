import { RESUME_SKILLS } from "@/constants";

const Skills = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold">SKILLS</h2>
      <ul className="space-y-1 text-sm leading-relaxed">
        {Object.entries(RESUME_SKILLS).map(([category, skills]) => (
          <li key={category} className="text-secondary">
            <span className="font-bold text-primary">{category}:</span> {skills.join(", ")}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
