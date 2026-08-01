import { RESUME_EDUCATION } from "@/constants";

const Education = () => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Education</h2>
      <div className="resume-job">
        <div className="resume-job-head">
          <h3 className="resume-job-title">{RESUME_EDUCATION.degree}</h3>
          <span className="resume-job-dates">{RESUME_EDUCATION.graduationDate}</span>
        </div>
        <p className="resume-job-meta">
          <span className="resume-company">{RESUME_EDUCATION.school}</span>
          <span className="resume-sep"> | </span>
          <span>{RESUME_EDUCATION.location}</span>
          {RESUME_EDUCATION.highlights?.length ? (
            <>
              <span className="resume-sep"> | </span>
              <span>{RESUME_EDUCATION.highlights.join(", ")}</span>
            </>
          ) : null}
        </p>
      </div>
    </section>
  );
};

export default Education;
