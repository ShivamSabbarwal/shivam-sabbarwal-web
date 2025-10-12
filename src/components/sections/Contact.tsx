import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin, Phone, Instagram } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Contact = () => {

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/ShivamSabbarwal",
      color: "hover:text-gray-400",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.ca/in/shivamsabbarwal",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/shiv.sabb",
      color: "hover:text-pink-400",
    },
  ];

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
            {/* Contact Information */}
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
              <div className="space-y-6">
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
                    <p className="font-semibold text-lg">Email</p>
                    <a
                      href="mailto:shivam.sabb@gmail.com?subject=Portfolio Inquiry&body=Hi Shivam,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-base"
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
                    <p className="font-semibold text-lg">Phone</p>
                    <a
                      href="sms:+15066090423?body=Hi Shivam,%0D%0A%0D%0AI came across your portfolio and would like to discuss potential opportunities.%0D%0A%0D%0ABest regards,"
                      className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-base"
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
                    <p className="font-semibold text-lg">Location</p>
                    <p className="text-muted-foreground text-base">
                      New Westminster, BC
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h4 className="text-2xl font-black mb-6 cartoon-text">
                  Connect With Me
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Follow my journey and stay updated with my latest projects,
                  insights, and professional updates.
                </p>
              </div>

              {/* Social Links Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5, rotate: 5 }}
                    whileTap={{ scale: 0.95, rotate: -5 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-6 rounded-xl border border-border hover:border-primary/20 hover:bg-primary/5 transition-all duration-300 text-center hover:animate-bounce-slow angular-card hover:cartoon-shadow-lg ${social.color}`}
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <motion.div 
                        className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {social.icon}
                      </motion.div>
                      <span className="font-semibold text-sm">
                        {social.name}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-6 rounded-xl border border-border bg-gradient-to-r from-primary/5 to-accent/5 angular-card hover:animate-glow"
              >
                <div className="mb-3">
                  <h5 className="font-semibold text-lg">
                    Let's Build Something
                  </h5>
                </div>
                <p className="text-muted-foreground text-sm">
                  I'm always looking to work on something exciting! Reach out if
                  you have a fun idea or just want to talk about technology,
                  projects, or anything interesting.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
