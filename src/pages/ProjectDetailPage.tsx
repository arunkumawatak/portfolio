import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { getProjectById } from "@/data/projects";
import Navbar from "@/components/Navbar";

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-24">
        <div className="container">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <div className="relative rounded-xl overflow-hidden mb-8">
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-64 md:h-96 object-cover"
                />
              ) : (
                <div className="w-full h-64 md:h-96 bg-secondary flex items-center justify-center">
                  <span className="text-muted-foreground font-body">Project Hero Image</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <span className="text-primary font-body text-sm tracking-widest uppercase">
                  {project.subtitle}
                </span>
                <h1 className="font-heading text-4xl md:text-6xl mt-2">{project.title}</h1>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mb-12"
          >
            <h2 className="font-heading text-2xl mb-4">About the Project</h2>
            <p className="text-secondary-foreground font-body text-base leading-relaxed mb-6">
              {project.solution}
            </p>
          </motion.div>

          {/* Problem / Impact grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl"
          >
            <div className="card-gradient border border-border rounded-xl p-8">
              <h3 className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">Problem</h3>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div className="card-gradient border border-border rounded-xl p-8">
              <h3 className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-3">Impact</h3>
              <p className="text-secondary-foreground font-body text-sm leading-relaxed">{project.impact}</p>
            </div>
          </motion.div>

          {/* Tech stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12 max-w-3xl"
          >
            <h2 className="font-heading text-2xl mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-body text-sm"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* My Role & Contribution */}
          {project.contribution && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="card-gradient border border-border rounded-xl p-8 md:p-10 mb-16 max-w-3xl"
            >
              <h2 className="font-heading text-2xl mb-4">My Role & Contribution</h2>
              <p className="text-secondary-foreground font-body text-base leading-relaxed">
                {project.contribution}
              </p>
            </motion.div>
          )}

          {/* Gallery — Zig-zag layout */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mb-12"
              >
                <h2 className="font-heading text-2xl">Project Gallery</h2>
              </motion.div>

              <div className="space-y-16">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                    className={`flex flex-col gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    <div className="md:w-2/3 relative rounded-xl overflow-hidden group">
                      <img
                        src={img}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    </div>
                    <div className="md:w-1/3 flex items-center">
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            {project.playStore && (
              <a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Play Store
              </a>
            )}
            {project.appStore && (
              <a
                href={project.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                App Store
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
