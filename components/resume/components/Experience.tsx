import Tag from "./Tag";
import { RESUME_EXPERIENCE } from "@/constants";

/** Bold key metrics (numbers, percentages, counts) so recruiters spot them instantly */
function highlightMetrics(text: string) {
  const parts = text.split(/(\d+[,.]?\d*[+%]?(?:\s*(?:years?|countries|users|components))?)/gi);
  return parts.map((part, i) =>
    /\d/.test(part) ? (
      <strong key={i} className="text-primary font-bold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

const Experience = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold mb-6 tracking-wide">EXPERIENCE</h2>
      <div className="space-y-6">
        {RESUME_EXPERIENCE.map((job) => (
          <div key={job.company} className="space-y-2">
            <div className="job-header">
              <div className="flex items-baseline gap-2">
                <h3 className="job-title font-bold tracking-tight uppercase text-sm text-primary">
                  {job.title}
                </h3>
                <span className="text-sm opacity-40 text-secondary">&bull;</span>
                <span className="text-xs text-secondary">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <p className="company-name font-semibold text-sm tracking-tight text-accent">
                  {job.company}
                </p>
                <span className="text-sm opacity-40 text-secondary">&bull;</span>
                <span className="text-xs text-secondary whitespace-nowrap">{job.period}</span>
              </div>
            </div>
            {job.skills && (
              <div className="flex flex-wrap gap-1">
                {job.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            )}
            <ul className="achievement-list text-sm leading-relaxed text-secondary">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{highlightMetrics(achievement)}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
