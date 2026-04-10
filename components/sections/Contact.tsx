import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import ContactForm from "./ContactForm";
import { PERSONAL } from "@/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 relative section-tinted section-contact-bg">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Let&apos;s <span className="text-pop italic">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s collaborate and create something amazing
            together.
          </p>
          <div className="accent-line w-24 mx-auto mt-6" />
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-stretch">
          <FadeIn direction="left" className="lg:col-span-2 flex flex-col">
            <div className="mb-6">
              <h3 className="text-2xl font-normal tracking-tight mb-3">Get In Touch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you have a project in mind or just want to chat about technology, I&apos;d
                love to hear from you.
              </p>
            </div>

            <div className="space-y-2 flex-1 flex flex-col justify-center">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="group flex items-center gap-3 p-3.5 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/3 transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-primary/8">
                  <LuMail className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-muted-foreground">Email</p>
                  <p className="text-sm group-hover:text-primary transition-colors truncate">
                    {PERSONAL.email}
                  </p>
                </div>
              </a>

              <a
                href={`sms:+${PERSONAL.phone.replace(/\D/g, "")}`}
                className="group flex items-center gap-3 p-3.5 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/3 transition-all duration-200"
              >
                <div className="p-2 rounded-lg bg-primary/8">
                  <LuPhone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Phone</p>
                  <p className="text-sm group-hover:text-primary transition-colors">
                    {PERSONAL.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl border border-border">
                <div className="p-2 rounded-lg bg-primary/8">
                  <LuMapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Location</p>
                  <p className="text-sm">{PERSONAL.location}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <div className="surface-card p-6 sm:p-8 h-full">
              <h4 className="text-lg font-semibold mb-6 font-sans">Send a Message</h4>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
