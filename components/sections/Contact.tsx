"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  MapPinIcon,
  Call02Icon,
  SentIcon,
  Loading03Icon,
  CheckmarkCircle02Icon,
  GithubIcon,
  Linkedin01Icon,
  InstagramIcon,
} from "@hugeicons/core-free-icons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { sendContactEmail } from "@/app/actions/contact";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/ShivamSabbarwal",
  },
  {
    name: "LinkedIn",
    icon: Linkedin01Icon,
    url: "https://linkedin.com/in/shivamsabbarwal",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/shiv.sabb",
  },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      await sendContactEmail(data);
      setSubmitted(true);
      reset();
      toast.success("Message sent! I'll get back to you soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-secondary/30 relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-normal tracking-tight mb-4">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate
                with like-minded individuals. Whether you have a project in
                mind or just want to chat about technology, feel free to reach
                out.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <a
                href="mailto:shivam.sabb@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/3 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/8">
                  <HugeiconsIcon icon={Mail01Icon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Email</p>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    shivam.sabb@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="sms:+15066090423"
                className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/3 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/8">
                  <HugeiconsIcon icon={Call02Icon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Phone</p>
                  <p className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    +1 (506) 609-0423
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border">
                <div className="p-2.5 rounded-lg bg-primary/8">
                  <HugeiconsIcon icon={MapPinIcon} className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Location</p>
                  <p className="text-muted-foreground text-sm">Ontario, Canada</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="p-2.5 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/3 transition-all duration-300"
                >
                  <HugeiconsIcon icon={social.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card">
              <h4 className="text-xl font-semibold mb-6 font-sans">
                Send a Message
              </h4>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <HugeiconsIcon icon={CheckmarkCircle02Icon} className="w-12 h-12 text-primary" />
                  <h5 className="text-lg font-semibold font-sans">Message sent!</h5>
                  <p className="text-muted-foreground text-sm">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSubmitted(false)}
                    className="mt-2"
                  >
                    Send another
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or just say hi..."
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <HugeiconsIcon icon={Loading03Icon} className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <HugeiconsIcon icon={SentIcon} className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
