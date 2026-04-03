const PROFESSIONAL_SUMMARY = `Senior Software Engineer with ${new Date().getFullYear() - 2018}+ years of experience in full-stack development, specializing in React, Node.js, TypeScript, and cloud technologies. Proven expertise in building scalable web applications, leading technical teams, and implementing modern development practices. Strong background in frontend development, backend architecture, and DevOps with experience in AWS, Docker, and CI/CD pipelines.`;

const ProfessionalSummary = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">
        PROFESSIONAL SUMMARY
      </h2>
      <p className="text-sm text-secondary">{PROFESSIONAL_SUMMARY}</p>
    </section>
  );
};

export default ProfessionalSummary;
