import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import FadeIn from "@/components/FadeIn";
import ContactForm from "./ContactForm";
import { PERSONAL } from "@/constants";

const CHANNELS = [
  {
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    icon: LuMail,
  },
  {
    label: "Text",
    value: PERSONAL.phone,
    href: `sms:+${PERSONAL.phone.replace(/\D/g, "")}`,
    icon: LuPhone,
  },
  {
    label: "Based in",
    value: PERSONAL.location,
    href: null,
    icon: LuMapPin,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-tinted relative py-20 sm:py-28">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <FadeIn className="mb-14 text-center">
          <p className="eyebrow mb-3">Get in touch</p>
          <h2 className="text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Say <span className="text-pop italic">Hello</span>
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            I&apos;m open to Engineering Manager and VP of Engineering conversations, and to
            anything else worth building.
          </p>
          <div className="accent-line mx-auto mt-6 w-24" />
        </FadeIn>

        <div className="grid items-stretch gap-6 lg:grid-cols-5">
          <FadeIn direction="left" className="flex flex-col gap-3 lg:col-span-2">
            <div className="panel corner-ticks p-5">
              <div className="mb-3 flex items-center gap-2">
                <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                <p className="hud-label text-primary-strong">Open to work</p>
              </div>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                Recruiters, founders, and fellow engineers: I read everything that lands here, and
                I&apos;ll write back.
              </p>
            </div>

            <ul className="grid flex-1 gap-3 md:grid-cols-3 lg:grid-cols-1">
              {CHANNELS.map(({ label, value, href, icon: Icon }) => {
                const body = (
                  <>
                    <div className="bg-primary/12 text-primary-strong flex h-10 w-10 shrink-0 items-center justify-center rounded-md">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="hud-label">{label}</p>
                      <p className="group-hover:text-primary-strong mt-0.5 truncate text-[15px] font-semibold transition-colors">
                        {value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <li key={label} className="flex-1">
                    {href ? (
                      <a href={href} className="panel group flex h-full items-center gap-3 p-3.5">
                        {body}
                      </a>
                    ) : (
                      <div className="panel flex h-full items-center gap-3 p-3.5">{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            <div className="panel h-full p-6 sm:p-8">
              <h3 className="font-heading mb-1 text-xl tracking-tight">Send me a message</h3>
              <p className="text-muted-foreground mb-6 text-[15px]">
                Tell me what you&apos;re working on and I&apos;ll get back to you.
              </p>
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
