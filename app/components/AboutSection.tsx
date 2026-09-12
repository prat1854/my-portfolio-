'use client';

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building responsive, component-driven web applications using React.js, Next.js, Redux Toolkit, and Tailwind CSS with strict attention to UX polish.",
  },
  {
    icon: Server,
    title: "Backend & API Systems",
    description: "Architecting RESTful APIs using Node.js and Express.js, implementing secure JWT/OTP authentication, payment gateways, and database design with MySQL & MongoDB.",
  },
  {
    icon: Cloud,
    title: "Cloud & Production Delivery",
    description: "Deploying and managing production environments on Vercel and Render, with cloud database hosting on Aiven and media storage on Cloudinary.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-kicker">
            <Sparkles size={14} />
            <span>About Me</span>
          </p>
          <h2 className="section-title">Product-minded Full Stack Developer</h2>
          <p className="section-description">
            Bridging modern frontend aesthetics with resilient backend infrastructure to ship full-stack web products.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          {/* Main Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 space-y-4"
          >
            <h3 className="text-xl font-bold text-[var(--text-color)]">
              Engineering with quality, scalability, and user empathy.
            </h3>
            
            <p className="text-[var(--text-muted)] leading-relaxed">
              I am a software engineer with an MCA from Madhav Institute of Technology and Science. My focus is creating high-performance, full-stack applications that solve real-world problems with clean, maintainable code.
            </p>

            <p className="text-[var(--text-muted)] leading-relaxed">
              Whether building an e-commerce platform with automated payment workflows and cloud database pooling, or publishing academic research platforms, I take ownership from architecture and API design to UI interactions and production deployment.
            </p>

            <div className="pt-4 border-t border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-3">
                Core Competencies
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js & Next.js",
                  "Redux Toolkit",
                  "Node.js & Express",
                  "MySQL & MongoDB",
                  "RESTful APIs",
                  "Cloud Deployment (Vercel/Render)",
                  "Aiven Cloud DB",
                  "Responsive UI & Tailwind CSS",
                ].map((item) => (
                  <span key={item} className="badge badge-accent">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillars List */}
          <div className="space-y-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card glass-card-hover p-5 sm:p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[var(--text-color)]">
                        {pillar.title}
                      </h4>
                      <p className="mt-1.5 text-sm text-[var(--text-muted)] leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

