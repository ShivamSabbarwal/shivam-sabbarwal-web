import { RESUME_SUMMARY } from "@/constants";

const ProfessionalSummary = () => {
  return (
    <section>
      <h2 className="section-header text-lg font-bold tracking-wide">
        PROFESSIONAL SUMMARY
      </h2>
      <p className="text-sm text-secondary">{RESUME_SUMMARY}</p>
    </section>
  );
};

export default ProfessionalSummary;
