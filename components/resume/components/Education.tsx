import Tag from './Tag';
import { RESUME_EDUCATION } from '@/constants';

const Education = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">EDUCATION</h2>
      <div className="education-item space-y-2">
        <div className="flex justify-between items-baseline">
          <h3 className="job-title font-bold tracking-wide uppercase flex items-baseline gap-2 text-sm text-primary">
            {RESUME_EDUCATION.degree}
            <span className="text-sm font-normal normal-case text-secondary">{RESUME_EDUCATION.location}</span>
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <p className="company-name font-medium text-sm text-accent">{RESUME_EDUCATION.school}</p>
          <span className="text-sm text-secondary">&bull;</span>
          <span className="text-sm text-secondary">{RESUME_EDUCATION.graduationDate}</span>
        </div>
        {RESUME_EDUCATION.highlights && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {RESUME_EDUCATION.highlights.map((highlight) => (
              <Tag key={highlight}>{highlight}</Tag>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
