"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Phone, Instagram, Send, Loader2, CheckCircle } from "lucide-react";
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
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/ShivamSabbarwal",
    color: "hover:text-gray-400",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.ca/in/shivamsabbarwal",
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://instagram.com/shiv.sabb",
    color: "hover:text-pink-400",
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            Let's <span className="cartoon-text">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Ready to bring your ideas to life? Let's collaborate and create
            something amazing together.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info + Socials */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-black mb-6 cartoon-text">
                  Get In Touch
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate
                  with like-minded individuals. Whether you have a project in
                  mind or just want to chat about technology, feel free to reach
                  out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 15, scale: 1.02, rotate: 1, y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:animate-glow angular-card"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Mail className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:shivam.sabb@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      shivam.sabb@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 15, scale: 1.02, rotate: -1, y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:animate-glow angular-card"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: -360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Phone className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="sms:+15066090423"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      +1 (506) 609-0423
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 15, scale: 1.02, rotate: 1, y: -2 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="group flex items-center space-x-4 p-4 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:animate-glow angular-card"
                >
                  <motion.div
                    className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground text-sm">
                      Ontario, Canada
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={`p-3 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 angular-card hover:cartoon-shadow-lg ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="p-6 sm:p-8 rounded-2xl border border-border bg-card angular-card">
                <h4 className="text-2xl font-black mb-6 cartoon-text">
                  Send a Message
                </h4>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                  >
                    <CheckCircle className="w-14 h-14 text-primary" />
                    <h5 className="text-xl font-bold">Message sent!</h5>
                    <p className="text-muted-foreground">
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
                      className="w-full font-bold hover:animate-glow"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
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
      </div>
    </section>
  );
};

export default Contact;
