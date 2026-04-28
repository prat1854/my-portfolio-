'use client';

import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type SkillCategory = {
  title: string;
  skills: string[];
  icon?: IconType;
};

export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: FaReact,
      skills: [
        "HTML, CSS, JavaScript",
        "React.js, Next.js",
        "Tailwind CSS, Material UI",
        "Responsive Design",
        "Frontend Testing"
      ]
    },
    {
      title: "Backend",
      icon: FaNodeJs,
      skills: [
        "Node.js, Express.js",
        "PHP",
        "RESTful APIs",
        "SQL, MySQL, MongoDB",
        "Authentication & Security",
        "Server-side Rendering"
      ]
    },
    {
      title: "Tools",
      icon: FaGitAlt,
      skills: [
        "Git, GitHub",
        "VS Code",
        "Postman",
        "Webpack, Vite",
        "Stack Overflow",
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Attention to Detail",
        "Time Management",
        "Adaptability"
      ]
    }
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="content-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="section-kicker">Capabilities</p>
          <h2 className="section-title">Skills I use to ship quality products</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="glass-card p-6 transition hover:border-[var(--accent)]"
                >
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--text-color)]">
                    {Icon && <Icon className="text-lg" />}
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--text-muted)] md:text-base">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
