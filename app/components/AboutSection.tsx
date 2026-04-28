'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title">Product-minded frontend engineer</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-card max-w-4xl p-6 md:p-8"
        >
          <p className="text-[var(--text-muted)] md:text-lg">
            I design and build web interfaces that balance clean UI, engineering quality, and business goals.
            My core strengths are React architecture, responsive systems, and interaction polish that makes products feel premium.
          </p>

          <p className="mt-4 text-[var(--text-muted)] md:text-lg">
            I enjoy converting complex workflows into simple, intuitive experiences and collaborating across design and development to ship production-ready features.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "Tailwind CSS", "Performance", "Accessibility", "Design Systems"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
