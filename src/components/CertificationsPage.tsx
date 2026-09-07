import { motion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Award, BookOpen, Search, Sparkles, Layers, X } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import CertificationCard from "@/components/CertificationCard";
import CertificationCardSkeleton from "@/components/CertificationCardSkeleton";
import CertificateModal from "@/components/CertificateModal";
import {
  certificationCategories,
  certificationPlatforms,
  certificationSkills,
  featuredCertification,
  formatIssueDate,
  sortedCertifications,
  type Certification,
} from "@/data/certifications";

const PAGE_TITLE = "Certifications | Arun Kumawat";
const PAGE_DESCRIPTION =
  "Professional certifications earned by Arun Kumawat in Flutter, Mobile Development, AI, Cloud and Modern Software Development.";

const useDocumentMeta = () => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;

    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    let created = false;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
      created = true;
    }
    const previousDescription = meta.content;
    meta.content = PAGE_DESCRIPTION;

    return () => {
      document.title = previousTitle;
      if (created) meta?.remove();
      else if (meta) meta.content = previousDescription;
    };
  }, []);
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const SectionLabel = ({ label }: { label: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="h-px w-12 bg-primary" />
    <span className="text-primary font-body text-sm tracking-widest uppercase">{label}</span>
  </div>
);

const CertificationsPage = () => {
  useDocumentMeta();

  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState<Certification | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 350);
    return () => window.clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortedCertifications.filter((c) => {
      const matchesCategory =
        category === "All" || c.category === category || c.platform === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return [c.title, c.platform, c.issuer, ...c.skills, ...c.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [query, category]);

  const timeline = useMemo(() => {
    const byYear = new Map<string, Certification[]>();
    sortedCertifications.forEach((c) => {
      const year = c.issueDate.slice(0, 4);
      byYear.set(year, [...(byYear.get(year) ?? []), c]);
    });
    return Array.from(byYear.entries()).sort((a, b) => Number(b[0]) - Number(a[0]));
  }, []);

  const stats = [
    {
      icon: Award,
      label: "Total Certifications",
      value: String(sortedCertifications.length),
    },
    {
      icon: BookOpen,
      label: "Learning Platforms",
      value: String(certificationPlatforms.length),
    },
    {
      icon: Layers,
      label: "Skills Covered",
      value: String(certificationSkills.length),
    },
    {
      icon: Sparkles,
      label: "Latest Certification",
      value: sortedCertifications[0]
        ? formatIssueDate(sortedCertifications[0].issueDate)
        : "—",
    },
  ];

  const hasData = sortedCertifications.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <header className="relative pt-24 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-hero)" }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-32 right-0 w-[32rem] h-[32rem] rounded-full pointer-events-none border-glow"
          aria-hidden="true"
        />
        <div className="container relative">
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
          >
            <SectionLabel label="Certifications" />
            <h1 className="font-heading text-4xl md:text-6xl">
              My <span className="italic text-gradient">Certifications</span>
            </h1>
            <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              These certifications represent my continuous learning journey as a software
              developer — from Flutter and mobile architecture to backend, cloud and AI.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Statistics */}
      <Section className="pb-16">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-gradient border border-border rounded-xl p-5 md:p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <stat.icon className="w-5 h-5 text-primary mb-4" aria-hidden="true" />
                <p className="font-heading text-2xl md:text-3xl">{stat.value}</p>
                <p className="text-muted-foreground font-body text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured */}
      {hasData && featuredCertification && (
        <Section className="pb-16">
          <div className="container">
            <SectionLabel label="Featured" />
            <div className="card-gradient border border-border rounded-xl overflow-hidden grid md:grid-cols-2 hover:border-primary/30 transition-colors duration-300">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[20rem] overflow-hidden bg-secondary">
                {featuredCertification.thumbnail ? (
                  <img
                    src={featuredCertification.thumbnail}
                    alt={`${featuredCertification.title} certificate preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Award className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-primary font-body text-xs tracking-widest uppercase">
                  {featuredCertification.issuer} · {formatIssueDate(featuredCertification.issueDate)}
                </span>
                <h2 className="font-heading text-2xl md:text-4xl mt-2">
                  {featuredCertification.title}
                </h2>
                <p className="text-muted-foreground font-body text-sm leading-relaxed mt-4">
                  {featuredCertification.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-6">
                  {featuredCertification.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(featuredCertification)}
                  className="mt-8 self-start inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                  View Certificate
                </button>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Search + filters + grid */}
      <Section className="pb-24">
        <div className="container">
          <SectionLabel label="All Certifications" />

          <div className="relative max-w-xl mb-6">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, platform, skill or tag…"
              aria-label="Search certifications"
              className="w-full bg-secondary/60 border border-border rounded-lg pl-11 pr-10 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-ring/30 transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div
            className="flex flex-wrap gap-2 mb-10"
            role="group"
            aria-label="Filter certifications by category"
          >
            {certificationCategories.map((cat) => {
              const active = cat === category;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  aria-pressed={active}
                  className={`font-body text-sm px-4 py-2 rounded-lg border transition-colors duration-200 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:text-primary hover:border-primary/30"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <CertificationCardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((certification, i) => (
                <CertificationCard
                  key={certification.id}
                  certification={certification}
                  index={i}
                  onOpen={setSelected}
                />
              ))}
            </div>
          ) : (
            <div className="card-gradient border border-border rounded-xl py-20 px-6 text-center">
              <Award className="w-8 h-8 text-muted-foreground mx-auto mb-5" aria-hidden="true" />
              <h3 className="font-heading text-xl">
                {hasData ? "No certifications match your search" : "No certifications yet"}
              </h3>
              <p className="text-muted-foreground font-body text-sm mt-2 max-w-md mx-auto">
                {hasData
                  ? "Try a different keyword or switch back to the All category."
                  : "New certifications will appear here as I complete them."}
              </p>
              {hasData && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                  }}
                  className="mt-6 inline-flex items-center gap-2 border border-border text-foreground font-body text-sm px-5 py-2.5 rounded-lg hover:border-primary/30 hover:text-primary transition-colors"
                >
                  Reset filters
                </button>
              )}
            </div>
          )}
        </div>
      </Section>

      {/* Timeline */}
      {hasData && (
        <Section className="pb-24">
          <div className="container">
            <SectionLabel label="Learning Timeline" />
            <h2 className="font-heading text-3xl md:text-4xl mb-12">
              Grouped by <span className="italic text-gradient">year.</span>
            </h2>

            <ol className="relative border-l border-border pl-6 md:pl-10 space-y-12">
              {timeline.map(([year, items]) => (
                <li key={year} className="relative">
                  <span
                    className="absolute -left-[1.9rem] md:-left-[2.9rem] top-1.5 w-3 h-3 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <h3 className="font-heading text-2xl text-primary">{year}</h3>
                  <div className="mt-4 grid md:grid-cols-2 gap-4">
                    {items.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setSelected(c)}
                        className="text-left card-gradient border border-border rounded-xl p-5 hover:border-primary/30 transition-colors duration-300"
                      >
                        <p className="font-heading text-lg">{c.title}</p>
                        <p className="text-muted-foreground font-body text-xs mt-1">
                          {c.issuer} · {formatIssueDate(c.issueDate)}
                        </p>
                      </button>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {/* Skills gained */}
      {hasData && (
        <Section className="pb-24">
          <div className="container">
            <SectionLabel label="Skills Gained" />
            <h2 className="font-heading text-3xl md:text-4xl mb-8">
              Everything these certifications{" "}
              <span className="italic text-gradient">taught me.</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {certificationSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.6) }}
                  className="bg-secondary text-secondary-foreground border border-border px-3.5 py-1.5 rounded-lg font-body text-sm hover:border-primary/30 hover:text-primary transition-colors duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </Section>
      )}

      <CertificateModal certification={selected} onClose={() => setSelected(null)} />
    </div>
  );
};

export default CertificationsPage;
