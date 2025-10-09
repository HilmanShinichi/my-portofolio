import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
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

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-green-600 to-emerald-700 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-40" />

      <div
        className={`container mx-auto px-6 text-center relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        <Text variant="h2" className="text-white mb-6 contact-title-glow">
          Let's Work Together
        </Text>
        <Text
          variant="body"
          className="text-green-100 mb-8 max-w-2xl mx-auto text-xl"
        >
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </Text>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <Button
            variant="secondary"
            className="bg-black text-green-400 border-green-400 hover:bg-green-400 hover:text-black"
          >
            Get In Touch
          </Button>
        </div>

        <div
          className={`mt-12 flex justify-center gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="https://github.com/HilmanShinichi"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/hilman-septiana/"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:hilman_septiana@rocketmail.com"
            className="hover:scale-110 transition-transform text-green-400 contact-icon"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
