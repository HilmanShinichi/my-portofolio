import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight } from "lucide-react";
import { Text, Button } from "../../atoms";

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (section) {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/HilmanShinichi",
      icon: Github,
      label: "GitHub",
      handle: "@HilmanShinichi",
    },
    {
      href: "https://www.linkedin.com/in/hilman-septiana/",
      icon: Linkedin,
      label: "LinkedIn",
      handle: "Hilman Septiana",
    },
    {
      href: "mailto:hilman_septiana@rocketmail.com",
      icon: Mail,
      label: "Email",
      handle: "hilman_septiana@rocketmail.com",
    },
  ];

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 dark:from-slate-900/50 via-indigo-50/30 dark:via-indigo-950/20 to-white dark:to-slate-950" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-300/20 dark:bg-indigo-600/10 rounded-full blur-[120px]" />

      <div
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-3"></p>
          <Text variant="h2" className="mb-4">
            Let's Work Together
          </Text>
          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto text-base sm:text-lg">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          {socialLinks.map(({ href, icon: Icon, label, handle }, idx) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-5 text-center hover:border-indigo-300 dark:hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/5 hover:-translate-y-0.5 transition-all duration-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="w-10 h-10 mx-auto mb-3 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 rounded-xl flex items-center justify-center group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20 transition-colors duration-300">
                <Icon
                  size={20}
                  className="text-indigo-500 dark:text-indigo-400"
                />
              </div>
              <p className="text-sm font-semibold text-slate-800 dark:text-white mb-1">
                {label}
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 truncate">
                {handle}
              </p>
              <ArrowUpRight
                size={14}
                className="mx-auto mt-2 text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors duration-300"
              />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <Button
            variant="primary"
            href="mailto:hilman_septiana@rocketmail.com"
          >
            <Send size={16} className="mr-2" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
