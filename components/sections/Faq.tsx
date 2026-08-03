import { FAQ_ITEMS } from "@/lib/seo";

/**
 * Quiet post-contact briefing. Not in the nav. Answers stay in the HTML for
 * crawlers; open/closed is presentation only. Copy must match FAQPage JSON-LD.
 */
const Faq = () => {
  return (
    <section id="faq" className="relative py-14 sm:py-16" aria-labelledby="faq-heading">
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8">
        <div className="mb-6 sm:mb-8">
          <p className="eyebrow mb-2">Briefing</p>
          <h2 id="faq-heading" className="text-2xl tracking-tight sm:text-3xl">
            A few common questions
          </h2>
        </div>

        <div className="border-border divide-border divide-y border-y">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="faq-item group">
              <summary className="faq-summary">
                <h3 className="font-heading min-w-0 flex-1 text-[15px] font-semibold tracking-tight sm:text-base">
                  {item.question}
                </h3>
                <span className="faq-chevron" aria-hidden="true" />
              </summary>
              <p className="faq-answer text-muted-foreground text-[14px] leading-relaxed sm:text-[15px]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
