import type { ResumeRole } from "@/constants";

/* Bold only real outcome figures: percentages and counts written with a "+".
   A looser rule caught version numbers and library names too, so bullets ended
   up with "React 17 to 19" and "D3.js" emphasised for no reason.
   The split pattern is global and the test pattern deliberately is not, since
   `RegExp.test` on a global regex carries `lastIndex` between calls. */
const METRIC_SPLIT = /(\d[\d,]*(?:\+|%))/g;
const IS_METRIC = /^\d[\d,]*(?:\+|%)$/;

function highlightMetrics(text: string) {
  return text
    .split(METRIC_SPLIT)
    .map((part, i) => (IS_METRIC.test(part) ? <strong key={i}>{part}</strong> : part));
}

const Experience = ({ roles }: { roles: ResumeRole[] }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Experience</h2>
      {roles.map((job) => (
        <article key={job.company} className="resume-job">
          <div className="resume-job-head">
            <h3 className="resume-job-title">{job.title}</h3>
            <span className="resume-job-dates">{job.period}</span>
          </div>
          <p className="resume-job-meta">
            <span className="resume-company">{job.company}</span>
            <span className="resume-sep"> | </span>
            <span>{job.location}</span>
          </p>
          {job.skills.length > 0 && (
            <p className="resume-tech">
              <span className="resume-tech-label">Tech</span>
              {job.skills.join(", ")}
            </p>
          )}
          <ul className="resume-bullets">
            {job.achievements.map((achievement) => (
              <li key={achievement}>
                <span className="resume-bullet" aria-hidden="true">
                  ▪
                </span>
                <span>{highlightMetrics(achievement)}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default Experience;
