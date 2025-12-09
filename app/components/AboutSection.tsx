'use client';

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 bg-[var(--background)] dark:bg-[var(--dark-bg)] relative z-10"
    >
      <div className="container mx-auto px-12 md:px-20">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)] mb-2">
            Introduction
          </p>
          <h2 className="text-4xl font-light text-[var(--text-color)]">
            About Me
          </h2>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl rounded-2xl p-8 
          bg-white/5 dark:bg-white/5 
          border border-white/10 
          hover:border-[var(--accent)]/60 
          hover:bg-white/10 
          transition-all duration-300"
        >
          <p className="text-lg leading-relaxed text-[var(--text-color)] opacity-90">
            <span className="font-medium bg-gradient-to-r from-[var(--accent)] to-blue-500 bg-clip-text text-transparent">
              I’m a passionate and creative Frontend Developer
            </span>{" "}
            focused on building clean, modern, and user-friendly interfaces.
            I specialize in crafting visually stunning web experiences that are both
            performant and scalable.

            <br /><br />

            With a strong foundation in{" "}
            <span className="text-[var(--accent)] font-medium">
              React, responsive design, and modern UI animations
            </span>
            , I enjoy turning complex ideas into simple, intuitive designs.
            I constantly explore new tools and frameworks to stay ahead in the
            fast-evolving world of web development.

            <br /><br />

            My goal is to work on impactful real-world products where I can contribute,
            learn continuously, and grow as a full-stack developer.
          </p>

          {/* Quick Highlights */}
          <div className="mt-6 flex flex-wrap gap-2">
            {["React", "Next.js", "Tailwind CSS", "UI/UX", "Responsive Design"].map(
              (item, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full 
                  bg-white/10 border border-white/10 
                  text-[var(--text-color)]/80"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
