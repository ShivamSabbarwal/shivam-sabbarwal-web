const ProfessionalSummary = ({ summary }: { summary: string }) => {
  return (
    <section className="resume-section">
      <h2 className="resume-section-title">Professional Summary</h2>
      <p className="resume-summary">{summary}</p>
    </section>
  );
};

export default ProfessionalSummary;
