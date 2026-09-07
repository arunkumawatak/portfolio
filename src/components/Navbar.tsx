import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/#blog" },
  { label: "Certifications", href: "/certifications" },   
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false);
    if (isHome) {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderLink = (link: { label: string; href: string }, mobile = false) => {
    const className = mobile
      ? "block py-3 text-muted-foreground hover:text-foreground font-body text-sm transition-colors"
      : "text-muted-foreground hover:text-foreground font-body text-sm transition-colors";

    if (link.href.startsWith("/#")) {
      if (isHome) {
        return (
          <a
            key={link.label}
            href={link.href.replace("/", "")}
            onClick={(e) => {
              e.preventDefault();
              handleAnchorClick(link.href);
            }}
            className={className}
          >
            {link.label}
          </a>
        );
      }
      return (
        <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className={className}>
          {link.label}
        </Link>
      );
    }

    return (
      <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)} className={className}>
        {link.label}
      </Link>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : ""
        }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="font-heading text-xl text-foreground">
          Arun<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => renderLink(link))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border px-6 pb-6"
        >
          {navLinks.map((link) => renderLink(link, true))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
