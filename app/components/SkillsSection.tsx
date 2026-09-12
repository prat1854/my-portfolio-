'use client';

import { motion } from "framer-motion";
import { Layout, Server, Database, Cloud, Wrench, Sparkles, Cpu } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: typeof Layout;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Material UI",
      "HTML5 & CSS3",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "JWT & OTP Authentication",
      "PHP",
      "Razorpay Integration",
      "API Architecture",
    ],
  },
  {
    title: "Database & Storage",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB",
      "Aiven Cloud Database",
      "Cloudinary Storage",
      "Database Optimization",
      "Connection Pooling",
    ],
  },
  {
    title: "Cloud & Deployment",
    icon: Cloud,
    skills: [
      "Vercel Deployment",
      "Render Deployment",
      "Aiven Cloud",
      "Environment Variables",
      "Production Debugging",
      "Continuous Delivery",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Git & GitHub",
      "Postman",
      "VS Code",
      "Vite",
      "Webpack",
      "npm / yarn",
    ],
  },
  {
    title: "Engineering Practices",
    icon: Cpu,
    skills: [
      "REST API Integration",
      "Problem Solving",
      "Component Modularity",
      "Performance Tuning",
      "Team Collaboration",
      "Clean Architecture",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="section-kicker">
            <Sparkles size={14} />
            <span>Technical Toolkit</span>
          </p>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-description">
            A comprehensive overview of the technologies, databases, and deployment platforms I use in production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                viewport={{ once: true, margin: "-50px" }}
                className="glass-card glass-card-hover p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--accent-light)] text-[var(--accent)] border border-[var(--accent)]/20">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold text-[var(--text-color)]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg border border-[var(--border)] bg-[var(--surface-raised)] px-2.5 py-1 text-xs font-medium text-[var(--text-muted)] hover:border-[var(--accent)]/40 hover:text-[var(--text-color)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
