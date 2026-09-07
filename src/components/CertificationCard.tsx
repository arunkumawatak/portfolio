import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { formatIssueDate, type Certification } from "@/data/certifications";

interface CertificationCardProps {
  certification: Certification;
  index: number;
  onOpen: (certification: Certification) => void;
}

const CertificationCard = ({ certification, index, onOpen }: CertificationCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="group card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 flex flex-col"
    >
      <button
        type="button"
        onClick={() => onOpen(certification)}
        aria-label={`Open details for ${certification.title}`}
        className="relative aspect-[16/10] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {certification.thumbnail ? (
          <img
            src={certification.thumbnail}
            alt={`${certification.title} certificate preview`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <Award className="w-8 h-8 text-muted-foreground" aria-hidden="true" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <span className="text-primary font-body text-xs tracking-widest uppercase">
              {certification.issuer}
            </span>
            <h3 className="font-heading text-xl mt-1">{certification.title}</h3>
          </div>
          <span className="text-muted-foreground font-body text-xs shrink-0 pt-1">
            {formatIssueDate(certification.issueDate)}
          </span>
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2 mb-4">
          {certification.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {certification.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
            >
              {skill}
            </span>
          ))}
          {certification.skills.length > 4 && (
            <span className="text-muted-foreground font-body text-xs py-0.5">
              +{certification.skills.length - 4}
            </span>
          )}
        </div>

        {certification.credentialId && (
          <p className="text-muted-foreground font-body text-xs mb-4">
            Credential ID:{" "}
            <span className="surface-text">{certification.credentialId}</span>
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={() => onOpen(certification)}
            className="inline-flex items-center gap-1.5 text-primary font-body text-sm font-medium hover:gap-2.5 transition-all duration-200"
          >
            View Certificate
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          {certification.verificationUrl && (
            <a
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary font-body text-sm transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Verify
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default CertificationCard;
