import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";

const stats = [
  { number: "15+", label: "Projects" },
  { number: "6", label: "Live Apps" },
  { number: "6", label: "Industries" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] bg-primary pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-primary pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-5 mb-2"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-primary font-body text-sm tracking-widest uppercase">
              Flutter Product Engineer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-5xl md:text-7xl lg:text-7xl font-bold leading-[0.95] mb-8"
          >
            I build mobile apps that real{" "}
            <span className="text-gradient italic">businesses</span>
            <br />
            rely on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 font-body leading-relaxed"
          >Delivered 15+ projects and shipped 8 production-grade apps across HRMS, legal-tech, fuel systems, and e-commerce — with 6 live on Play Store.</motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Projects
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1gS9CBIqNCk_mJwTg080ulkzv6QFJ0hcH"
              download
              className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <div className="flex items-center gap-4 ml-2">
              <a
                href="https://github.com/arunkumawatak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arun-kumawat-28bb86267"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl md:text-4xl text-gradient font-bold">
                  {stat.number}
                </div>
                <div className="text-muted-foreground text-xs tracking-wider uppercase mt-1 font-body">
                  {stat.label}
                </div>
              </div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
