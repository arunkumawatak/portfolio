import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Award, Download, ExternalLink, ShieldCheck, X } from "lucide-react";
import { formatIssueDate, type Certification } from "@/data/certifications";

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

const CertificateModal = ({ certification, onClose }: CertificateModalProps) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!certification) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const focusTimer = window.setTimeout(() => {
      panelRef.current
        ?.querySelector<HTMLElement>("button, a[href]")
        ?.focus();
    }, 60);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(focusTimer);
      document.body.style.overflow = overflow;
      previouslyFocused.current?.focus();
    };
  }, [certification, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {certification && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-start md:items-center justify-center overflow-y-auto bg-background/85 backdrop-blur-lg p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="certificate-modal-title"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl card-gradient border border-border rounded-xl overflow-hidden my-auto"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate details"
              className="absolute top-4 right-4 z-10 rounded-md bg-background/70 border border-border p-2 text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              {certification.certificateImage ? (
                <img
                  src={certification.certificateImage}
                  alt={`${certification.title} certificate issued by ${certification.issuer}`}
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

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-primary" />
                <span className="text-primary font-body text-sm tracking-widest uppercase">
                  {certification.issuer}
                </span>
              </div>

              <h2 id="certificate-modal-title" className="font-heading text-2xl md:text-3xl">
                {certification.title}
              </h2>
              <p className="text-muted-foreground font-body text-sm mt-2">
                Issued {formatIssueDate(certification.issueDate)} · {certification.platform}
              </p>

              <p className="text-muted-foreground font-body text-sm leading-relaxed mt-6">
                {certification.description}
              </p>

              <h3 className="font-heading text-lg mt-8 mb-3">Skills learned</h3>
              <div className="flex flex-wrap gap-1.5">
                {certification.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-md font-body text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {certification.credentialId && (
                <p className="text-muted-foreground font-body text-xs mt-6">
                  Credential ID: <span className="surface-text">{certification.credentialId}</span>
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-8">
                {certification.certificateImage && (
                  <a
                    href={certification.certificateUrl ?? certification.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-body text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {certification.certificateImage && (
                  <a
                    href={certification.certificateImage}
                    download
                    className="inline-flex items-center gap-2 border border-border text-foreground font-body text-sm px-5 py-2.5 rounded-lg hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                )}
                {certification.verificationUrl && (
                  <a
                    href={certification.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-body text-sm transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Verify Credential
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default CertificateModal;
