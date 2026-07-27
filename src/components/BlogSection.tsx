import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getLatestPosts } from "@/data/blogs";

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const latest = getLatestPosts(3);

  return (
    <section ref={ref} className="py-24 border-t border-border" id="blog">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-primary font-body text-sm tracking-widest uppercase">
                Blog
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl">
              Thoughts & <span className="italic text-gradient">learnings.</span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="hidden md:inline-flex items-center gap-2 border border-primary/30 text-primary px-6 py-3 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
            >
              <Link
                to={`/blog/${post.id}`}
                className="group block card-gradient border border-border rounded-xl p-6 h-full hover:border-primary/30 transition-all duration-300"
              >
                <time className="text-muted-foreground font-body text-xs tracking-wider uppercase">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <h3 className="font-heading text-lg mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed line-clamp-2 mb-4">
                  {post.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded font-body text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 md:hidden text-center"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary px-8 py-4 rounded-lg font-body font-medium text-sm tracking-wide hover:bg-primary/10 transition-all duration-200"
          >
            View All Blogs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
