import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { companies } from "@/data/companies";
import Navbar from "@/components/Navbar";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                Experience
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl">
              2.5+ years of <span className="italic text-gradient">shipping.</span>
            </h1>
          </motion.div>

          {/* Zig-zag Timeline */}
          <div className="relative">
            {/* Center timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block" />

            {companies.map((company, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15 }}
                    className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:flex"
                  >
                    <div className="relative">
                      <div className="w-4 h-4 rounded-full bg-primary border-4 border-background" />
                      <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-20" />
                    </div>
                  </motion.div>

                  {/* Connecting line to card */}
                  <div
                    className={`absolute top-1/2 hidden md:block h-px w-[calc(50%-2rem)] bg-gradient-to-r ${
                      isLeft
                        ? "right-1/2 mr-2 from-primary/30 to-primary/5"
                        : "left-1/2 ml-2 from-primary/5 to-primary/30"
                    }`}
                  />

                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${isLeft ? "md:pr-0" : "md:pl-0"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="group card-gradient border border-border rounded-xl p-6 md:p-8 hover:border-primary/40 transition-all duration-300 relative"
                    >
                      <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <div className="relative z-10">
                        {/* Header row with View Details button */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <Briefcase className="w-4 h-4 text-primary" />
                              <span className="text-primary font-body text-xs tracking-widest uppercase font-medium">
                                {company.duration}
                              </span>
                            </div>
                            <h3 className="font-heading text-xl md:text-2xl group-hover:text-primary transition-colors">
                              {company.role}
                            </h3>
                            <p className="text-foreground font-body text-sm mt-1 flex items-center gap-1.5">
                              <MapPin className="w-3 h-3 text-muted-foreground" />
                              {company.name}
                            </p>
                          </div>

                          <Link
                            to={`/company/${company.id}`}
                            className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:gap-2.5 transition-all duration-200 shrink-0 mt-1"
                          >
                            View Details
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>

                        {/* Period */}
                        <div className="flex items-center gap-2 mb-5">
                          <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-muted-foreground font-body text-xs tracking-wide">
                            {company.period}
                          </span>
                        </div>

                        {/* Key responsibilities */}
                        <ul className="space-y-2.5 mb-5">
                          {company.responsibilities.slice(0, 3).map((r, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 + i * 0.15 + j * 0.05 }}
                              className="flex items-start gap-3 text-secondary-foreground font-body text-sm leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                              {r}
                            </motion.li>
                          ))}
                        </ul>

                        {/* Tech stack pills */}
                        <div className="flex flex-wrap gap-1.5">
                          {company.techStack.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
